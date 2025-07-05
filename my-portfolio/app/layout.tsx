import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thanuja Wickramasinghe - Software Engineer & Full-Stack Developer",
  description: "Portfolio of Thanuja Wickramasinghe - Software Engineer, Full-Stack Developer, DevOps Engineer, and Machine Learning Enthusiast based in Kandy, Sri Lanka.",
  keywords: ["Thanuja Wickramasinghe", "Software Engineer", "Full-Stack Developer", "React", "Node.js", "DevOps", "Machine Learning", "Portfolio"],
  authors: [{ name: "Thanuja Wickramasinghe" }],
  creator: "Thanuja Wickramasinghe",
  openGraph: {
    title: "Thanuja Wickramasinghe - Software Engineer & Full-Stack Developer",
    description: "Portfolio of Thanuja Wickramasinghe - Software Engineer, Full-Stack Developer, DevOps Engineer, and Machine Learning Enthusiast.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanuja Wickramasinghe - Software Engineer & Full-Stack Developer",
    description: "Portfolio of Thanuja Wickramasinghe - Software Engineer, Full-Stack Developer, DevOps Engineer, and Machine Learning Enthusiast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
