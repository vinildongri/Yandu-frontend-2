import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yandu | Freelancing Platform for Web, App & Digital Services",
  description:
    "Yandu is a freelancing marketplace offering Web & App Development, API & Backend Systems, Video Editing, Logo Design, UI/UX Design and more.",
  keywords:
    "Yandu freelancing, Web development services, App development India, API backend systems, Video editing services, Logo design services"
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
        </ThemeProvider>
      </body>
    </html>
  );
}
