import type React from "react";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/src/components/contexts/theme-provider";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
         <ThemeProvider>
          { children }
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
