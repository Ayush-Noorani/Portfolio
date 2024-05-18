import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Noorani",
  description:
    "Software engineer with 3 years of experience and over a 1 year of industrial experience, I have a strong background in full-stack development. My expertise includes working with ReactJS, TypeScript, Python, Docker, microservices, Kafka, and Node.js. I have a passion for developing scalable and high-performance web applications, and enjoy taking on new challenges to expand my skill set. I have a proven track record of delivering quality software projects on time and within budget, and am always striving to improve my abilities. If you're looking for a talented software engineer who can bring your ideas to life, let's connect!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
