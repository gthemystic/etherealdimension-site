# Ethereal Dimension Website

## Email Setup

This website uses [Resend](https://resend.com) for sending emails from the contact form. To set up email functionality:

1. Create an account on [Resend](https://resend.com)
2. Generate an API key from the Resend dashboard
3. Create a `.env.local` file in the project root with the following content:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```
4. Replace `your_resend_api_key_here` with your actual API key
5. Restart the development server if it's running

In production, make sure to set the `RESEND_API_KEY` environment variable in your hosting platform.

### Email Configuration

The email sending is configured in `app/api/send-email/route.ts`. You can modify the following settings:

- `from`: The sender email address (must be a verified domain in Resend)
- `to`: The recipient email address where you want to receive contact form submissions
- Email template: The HTML content of the email

For production use, you should:
1. Verify your domain in Resend
2. Update the `from` address to use your verified domain
3. Set the `to` address to your preferred email for receiving inquiries
