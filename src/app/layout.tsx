import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhavyachandaka.dev"),
  title: "Bhavya Chandaka | Java Developer",
  description:
    "Java Developer and Computer Science graduate with skills in Java, Spring Boot, Servlets, JDBC, SQL, MySQL, HTML and CSS. Actively seeking entry-level software engineering roles.",
  keywords: [
    "Bhavya Chandaka",
    "Java Developer",
    "Software Engineer",
    "Spring Boot",
    "Java Fresher",
    "Servlets",
    "JDBC",
    "MySQL",
    "Full Stack Java",
    "Hyderabad",
    "JSPIDERS",
  ],
  authors: [{ name: "Bhavya Chandaka" }],
  creator: "Bhavya Chandaka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhavyachandaka.dev",
    title: "Bhavya Chandaka | Java Developer",
    description:
      "Java Developer and Computer Science graduate with skills in Java, Spring Boot, Servlets, JDBC, SQL, MySQL, HTML and CSS.",
    siteName: "Bhavya Chandaka Portfolio",
    images: [
      {
        url: "/bhavya-chandaka.jpg",
        width: 800,
        height: 1067,
        alt: "Bhavya Chandaka - Java Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
