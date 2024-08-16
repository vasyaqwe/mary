"use client"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export function Header() {
   // const pathname = usePathname()
   // const [hasScrolled, setHasScrolled] = useState(false)

   // useEventListener("scroll", (_e) => {
   //    if (typeof window === "undefined") return
   //    setHasScrolled(window.scrollY > 0)
   // })

   return (
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
                           buttonVariants({ size: "sm", variant: "outline" }),
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
   )
}
