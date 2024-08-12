import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-primary" })

export const metadata: Metadata = {
   title: "Beauty Studio Mary",
   description: "Beauty Studio Mary",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html
         lang="en"
         className={cn("font-primary antialiased", inter.variable)}
      >
         <body className="bg-background text-base text-foreground">
            {children}
         </body>
      </html>
   )
}
