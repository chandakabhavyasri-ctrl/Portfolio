import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhavyachandaka.vercel.app"),
  title: "Bhavya Chandaka | Java Developer & Software Engineer",
  description:
    "Portfolio of Bhavya Chandaka - Computer Science graduate and Java Developer with skills in Core Java, Spring Boot, Servlets, JDBC, SQL, MySQL, and web development.",
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
    url: "https://bhavyachandaka.vercel.app",
    title: "Bhavya Chandaka | Java Developer & Software Engineer",
    description:
      "Portfolio of Bhavya Chandaka - Computer Science graduate and Java Developer with skills in Core Java, Spring Boot, Servlets, JDBC, SQL, MySQL, and web development.",
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
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
