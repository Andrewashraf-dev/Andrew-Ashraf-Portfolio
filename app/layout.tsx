import { Analytics } from "@vercel/analytics/next"
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Ashraf - Software Engineer",
  description: "This is my portfolio",
  icons: {
    icon: "/favicon.ico",  // Correct path to favicon
  },
  manifest: "/site.webmanifest",  // Link to your web manifest
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
         <Analytics />
        <Footer />
      </body>
    </html>
  );
}
