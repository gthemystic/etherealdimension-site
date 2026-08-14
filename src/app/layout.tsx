import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethereal Dimension — Intelligence for the Built World",
  description:
    "We deploy computer vision, AR, and spatial intelligence into cities and infrastructure — live systems for compliance, safety, and understanding of physical space.",
  metadataBase: new URL("https://etherealdimension.io"),
  openGraph: {
    title: "Ethereal Dimension — Intelligence for the Built World",
    description:
      "Frontier AI for the built environment: computer vision, AR, and spatial intelligence deployed in cities and infrastructure.",
    url: "https://etherealdimension.io",
    siteName: "Ethereal Dimension",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
