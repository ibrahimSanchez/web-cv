import type React from "react";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import "./globals.css";
import { FloatingScrollToTop } from "@/components/floating-scroll-to-top";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
         <ThemeProvider>
          <Navbar />
          {children}
          <FloatingScrollToTop 
            threshold={200}
            position="bottom-right"
          />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
