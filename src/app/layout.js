import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppChat from "@/components/WhatsAppChat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.lakanaenterprises.com"),

  title: {
    default:
      "Lakana Enterprises Skill Development & Exports",
    template: "%s | Lakana Enterprises",
  },

  description:
    "Lakana Enterprises is an ISO 9001:2015 certified MSME in India specializing in skill development, hospitality training, and international exports of textiles, spices, and food products.",

  keywords: [
    "Lakana Enterprises",
    "ISO 9001:2015 MSME",
    "Skill Development India",
    "Hospitality Training Chennai",
    "Textile Export India",
    "Spices Export India",
    "Food Products Export",
    "MSME Export Company",
  ],

  authors: [{ name: "Lakana Enterprises" }],
  creator: "Lakana Enterprises",
  publisher: "Lakana Enterprises",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.lakanaenterprises.com",
  },

  openGraph: {
    title:
      "Lakana Enterprises Skill Development & Exports",
    description:
      "Premium MSME organization providing skill development, hospitality training, and global exports of textiles, spices, and food products.",
    url: "https://www.lakanaenterprises.com",
    siteName: "Lakana Enterprises",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Lakana Enterprises",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lakana Enterprises | ISO 9001:2015 MSME",
    description:
      "ISO certified MSME specializing in skill development & international exports.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-primary bg-background`}
      >
       
        {children}
         <WhatsAppChat />
      </body>
    </html>
  );
}
