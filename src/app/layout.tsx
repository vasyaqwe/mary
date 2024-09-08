import "../styles/app.css"
import { buttonVariants } from "@/ui/components/button"
import { cn } from "@/ui/components/utils"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

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
            "scroll-pt-8 scroll-smooth font-primary antialiased",
            manrope.variable,
         )}
      >
         <body className="bg-background text-base text-foreground">
            <header
               className={cn(
                  "absolute flex w-full items-center py-3 transition-shadow",
                  // hasScrolled && "shadow-foreground/[0.08] shadow-sm",
               )}
            >
               <div className="container flex items-center">
                  <Link
                     href={"/"}
                     className="flex items-center gap-2 font-bold text-[1.2rem]"
                  >
                     <Image
                        src="/logo.png"
                        alt="Mary"
                        className="max-w-[75px] md:max-w-[100px]"
                        width={300}
                        height={300}
                     />
                  </Link>
                  <nav className="ml-auto">
                     <ul className="flex w-full items-center gap-4">
                        {/* <li className="font-medium opacity-80">🟢 Працюємо зараз</li> */}
                        <li>
                           <a
                              href="#where"
                              className={cn(
                                 buttonVariants({
                                    size: "sm",
                                    variant: "outline",
                                 }),
                                 "px-5",
                              )}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                                 width={20}
                                 height={20}
                                 fill={"transparent"}
                              >
                                 <path
                                    d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                 />
                                 <path
                                    d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                 />
                              </svg>
                              Де?
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </header>
            <main>{children}</main>
            <footer className="mt-9 bg-foreground py-12 text-background lg:mt-16 lg:py-16">
               <div className="container flex items-center gap-10 max-lg:flex-col lg:justify-between">
                  <div className="flex items-center gap-4 max-lg:flex-col max-lg:text-center">
                     <Link
                        href={"/"}
                        className="flex items-center gap-2 font-bold text-[1.2rem]"
                     >
                        <Image
                           src="/logo.png"
                           alt="Mary"
                           className="max-w-[100px]"
                           width={300}
                           height={300}
                        />
                     </Link>
                     <div>
                        <p className="mb-4 opacity-75">
                           м.Нетішин, проспект Героїв України 6✨
                        </p>
                        <p className="opacity-75">
                           Послуги за попереднім записом 🦋
                        </p>
                     </div>
                  </div>
                  <div className="flex flex-col max-lg:items-center">
                     <a
                        href="https://www.instagram.com/beautystudi0_mary/"
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                           buttonVariants({ variant: "secondary" }),
                           "-mt-1 mb-4 w-fit text-lg",
                        )}
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           width={24}
                           height={24}
                           fill={"transparent"}
                        >
                           <path
                              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                           />
                           <path
                              d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                           />
                           <path
                              d="M17.5078 6.5L17.4988 6.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                        Інстаграм
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           width={24}
                           height={24}
                           fill={"transparent"}
                           className="-ml-1"
                        >
                           <path
                              d="M16.5 7.5L6 18"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                           />
                           <path
                              d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     </a>
                     <p className="opacity-75 max-lg:text-sm">
                        © {new Date().getFullYear()} Beauty Studio Mary. Всі
                        права захищені.
                     </p>
                  </div>
               </div>
            </footer>
         </body>
      </html>
   )
}
