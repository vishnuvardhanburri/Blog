import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vishnu Vardhan Burri | Software Developer & Full-Stack Engineer",
  description:
    "Top 3% Worldwide (Toptal) | Software Developer | Founder & Lead Developer – Xavira Tech Labs | Full-Stack Engineer | Vulnerability Management & Cybersecurity Specialist",
  keywords: [
    "Software Developer",
    "Full-Stack Developer",
    "Cybersecurity",
    "Toptal",
    "React",
    "Node.js",
    "Python",
    "Azure",
    "Vulnerability Management",
  ],
  authors: [{ name: "Vishnu Vardhan Burri" }],
  creator: "Vishnu Vardhan Burri",
  metadataBase: new URL("https://vishnuvardhanburri.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vishnuvardhanburri.com",
    title: "Vishnu Vardhan Burri | Software Developer & Full-Stack Engineer",
    description: "Top 3% Worldwide (Toptal) | Founder & Lead Developer – Xavira Tech Labs",
    siteName: "Vishnu Vardhan Burri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishnu Vardhan Burri | Software Developer & Full-Stack Engineer",
    description: "Top 3% Worldwide (Toptal) | Founder & Lead Developer – Xavira Tech Labs",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/profile_placeholder.png" },
    ],
    apple: "/profile_placeholder.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
