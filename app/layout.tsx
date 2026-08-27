import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

export const metadata = {
  title: "Career Tech | Full Stack, UI/UX & AI Courses",
  description:
    "Learn Full Stack Development, UI/UX Design and AI-powered technologies through practical, career-focused training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}