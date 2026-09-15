import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Poppins, Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  weight: ["400", "500", "600"],
});

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
      <body
        className={`${poppins.variable} ${inter.variable} ${jetbrains.variable}`}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}