import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

export const metadata: Metadata = {
  title: "CodeCraft — Learn to Code, Beautifully",
  description: "Premium interactive coding education platform. Learn HTML, CSS, JavaScript, and PHP with beautiful animations and gamified lessons.",
  keywords: ["coding", "education", "HTML", "CSS", "JavaScript", "PHP", "learn programming"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
