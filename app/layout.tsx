import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";


// 1. ADD THIS IMPORT: Bring in your new Providers component
// (Adjust the path if you placed Providers.tsx inside the components folder)
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yandu.in'),
  title: "Yandu | Premium Freelance Agency for Web, App & Digital Services",
  description:
    "Yandu is an elite freelancing agency providing vetted talent for Web & App Development, API Systems, Video Editing, and UI/UX Design. Hire expert freelancers today.",
  keywords: [
    "Yandu",
    "freelance agency",
    "hire developers India",
    "MERN stack freelancers",
    "web development services",
    "app development agency",
    "API backend systems",
    "digital services"
  ],
  openGraph: {
    title: "Yandu | Premium Freelance Agency",
    description: "Hire expert, vetted freelancers for your next digital project.",
    url: "https://yandu.in",
    siteName: "Yandu",
    images: [
      {
        url: "/og-image.jpg", // Make sure to place an open-graph-image.jpg in your public folder!
        width: 1200,
        height: 630,
        alt: "Yandu Freelancing Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yandu | Premium Freelance Agency",
    description: "Hire expert, vetted freelancers for your next digital project.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          {/* 2. WRAP YOUR APP IN PROVIDERS */}
          <Providers>

            <Toaster
              position="top-center"
              toastOptions={{
                duration: 2500,
                style: {
                  background: "#111",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "14px 16px",
                },
              }}
            />

            <Header />
            {children}
            <Footer />

          </Providers>
          {/* END WRAPPER */}

        </ThemeProvider>
      </body>
    </html>
  );
}