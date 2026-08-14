import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Lazy-init Resend only when API key exists (avoids build failure when key is missing)
function getResend() {
  const key = process.env.RESEND_API_KEY;
  return key ? new Resend(key) : null;
}

// Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Create submission record
    const submission = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };
    
    console.log('Processing contact submission:', submission.id);
    
    const results = {
      email: { success: false, error: null as string | null },
      database: { success: false, error: null as string | null }
    };
    
    // 1. Try to send emails via Resend (both notification and confirmation)
    const resend = getResend();
    if (resend) {
      try {
        // Send notification email to info@etherealdimension.io
        const { data: notificationData, error: notificationError } = await resend.emails.send({
          from: 'Contact Form <noreply@etherealdimension.io>',
          to: 'info@etherealdimension.io',
          subject: `Contact Form: ${submission.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>ID:</strong> ${submission.id}</p>
            <p><strong>Name:</strong> ${submission.name}</p>
            <p><strong>Email:</strong> ${submission.email}</p>
            <p><strong>Timestamp:</strong> ${submission.timestamp}</p>
            <p><strong>Message:</strong></p>
            <p>${submission.message.replace(/\n/g, '<br />')}</p>
          `,
          replyTo: submission.email,
        });
        
        // Send confirmation email to the user
        const { data: confirmationData, error: confirmationError } = await resend.emails.send({
          from: 'Ethereal Dimension <noreply@etherealdimension.io>',
          to: submission.email,
          subject: 'Message Received - Thank You for Contacting Ethereal Dimension',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #00d4ff; margin-bottom: 20px;">Thank You for Your Message!</h2>
              
              <p>Dear ${submission.name},</p>
              
              <p>We've received your message and want to thank you for reaching out to Ethereal Dimension. Your inquiry is important to us, and we'll get back to you as soon as possible.</p>
              
              <div style="background: #f8f9fa; border-left: 4px solid #00d4ff; padding: 15px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">Your Message Summary:</h3>
                <p><strong>Reference ID:</strong> ${submission.id}</p>
                <p><strong>Submitted:</strong> ${new Date(submission.timestamp).toLocaleString()}</p>
                <p><strong>Message:</strong></p>
                <p style="background: white; padding: 10px; border-radius: 4px;">${submission.message.replace(/\n/g, '<br />')}</p>
              </div>
              
              <p>Our team typically responds within 24-48 hours during business days. For urgent matters, please don't hesitate to reach out directly.</p>
              
              <p>Thank you for your interest in our AI solutions and frontier technology.</p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 14px;">
                  Best regards,<br>
                  <strong>The Ethereal Dimension Team</strong><br>
                  Transcending reality through artificial intelligence
                </p>
              </div>
            </div>
          `,
        });
        
        // Check results
        if (notificationError || confirmationError) {
          console.error('Email errors:', { notificationError, confirmationError });
          const errors = [];
          if (notificationError) errors.push(`Notification: ${notificationError.message}`);
          if (confirmationError) errors.push(`Confirmation: ${confirmationError.message}`);
          results.email.error = errors.join(', ');
          
          // Partial success if only one failed
          if (!notificationError || !confirmationError) {
            results.email.success = true;
          }
        } else {
          console.log('Both emails sent successfully:', { 
            notification: notificationData?.id, 
            confirmation: confirmationData?.id 
          });
          results.email.success = true;
        }
      } catch (emailError) {
        console.error('Email error:', emailError);
        results.email.error = emailError instanceof Error ? emailError.message : 'Email error';
      }
    } else {
      results.email.error = 'RESEND_API_KEY not configured';
    }
    
    // 2. Try to save to Supabase
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('contact_submissions')
          .insert([{
            id: submission.id,
            name: submission.name,
            email: submission.email,
            message: submission.message,
            created_at: submission.timestamp
          }]);
        
        if (error) {
          console.error('Supabase error:', error);
          results.database.error = error.message;
        } else {
          console.log('Saved to Supabase successfully');
          results.database.success = true;
        }
      } catch (dbError) {
        console.error('Database error:', dbError);
        results.database.error = dbError instanceof Error ? dbError.message : 'Database error';
      }
    } else {
      results.database.error = 'Supabase not configured';
    }
    
    // Log the full results
    console.log('Submission results:', results);
    
    // Return success if at least one method worked
    const hasSuccess = results.email.success || results.database.success;
    
    if (hasSuccess) {
      return NextResponse.json({ 
        success: true, 
        message: 'Message received successfully!',
        id: submission.id,
        timestamp: submission.timestamp,
        details: results
      });
    } else {
      return NextResponse.json({ 
        error: 'Failed to process submission',
        details: results
      }, { status: 500 });
    }
    
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ 
      error: 'Server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// Add a GET endpoint to view submissions (for testing)
export async function GET() {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);
      
      if (error) {
        console.error('Supabase query error:', error);
        return NextResponse.json({ 
          message: 'Contact form submission API',
          error: 'Database query failed',
          supabase_configured: true
        });
      }
      
      return NextResponse.json({ 
        message: 'Contact form submission API',
        submissions: data?.length || 0,
        latest: data || [],
        supabase_configured: true
      });
    } else {
      return NextResponse.json({ 
        message: 'Contact form submission API',
        supabase_configured: false,
        note: 'Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables'
      });
    }
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      message: 'Contact form submission API',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
