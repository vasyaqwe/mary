import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { cn } from "@/lib/utils"

const manrope = Manrope({ subsets: ["latin"], variable: "--font-primary" })

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
         className={cn(
            "scroll-smooth font-primary antialiased",
            manrope.variable,
         )}
      >
         <body className="bg-background pb-16 text-base text-foreground">
            <Header />
            <main>{children}</main>
         </body>
      </html>
   )
}
