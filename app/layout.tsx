import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Suspense } from "react";
import Navbar from "@/components/Navbar"; // Import the Navbar component
import { ContactModalProvider } from "@/components/ContactModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ethereal Dimension",
  description: "Transforming the Built Environment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ContactModalProvider>
          <Suspense fallback={null}>
            <ScrollProgress />
            <Navbar /> {/* Add the Navbar component here */}
          </Suspense>
          {children}
        </ContactModalProvider>
      </body>
    </html>
  );
}