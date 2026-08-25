import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

export const metadata = {
  title: {
    default: "Career Tech | Full Stack, UI/UX & AI Courses",
    template: "%s | Career Tech",
  },

  description:
    "Learn Full Stack Development, UI/UX Design and AI-powered technologies through practical, career-focused training.",

  keywords: [
    "Full Stack Development Course",
    "UI UX Design Course",
    "React Course",
    "Next.js Course",
    "AI Courses",
    "Web Development Course",
    "Career Tech",
    "Tech Training",
  ],

  openGraph: {
    title: "Career Tech | Learn Skills. Build Your Career.",
    description:
      "Practical, career-focused training in Full Stack Development, UI/UX Design and AI.",
    type: "website",
  },
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

        {children}

        <Footer />
      </body>
    </html>
  );
}