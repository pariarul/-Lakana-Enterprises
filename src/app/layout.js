import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Lakana Enterprises | ISO 9001:2015 Certified MSME | Skill Development & Exports",
  description: "Lakana Enterprises is a premium ISO 9001:2015 certified MSME organization in India specializing in Skill Development and International Exports of Textiles, Spices, and Food Products.",
  keywords: "Lakana Enterprises, Skill Development India, MSME Export, ISO 9001:2015, Textile Export India, Indian Spices Export, Hospitality Training Chennai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-primary`}>
        {children}
      </body>
    </html>
  );
}
