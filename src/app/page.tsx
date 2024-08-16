"use client"

import { buttonVariants } from "@/components/ui/button"
import { useIsClient } from "@/hooks/use-is-client"
import { cn } from "@/lib/utils"
import about from "@@/public/about.jpg"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
   const { innerWidth, isClient } = useIsClient()

   return (
      <>
         <section className="grid place-items-center pt-32 pb-16 md:pt-56 md:pb-36">
            <div className="flex flex-col items-center gap-7 px-5 text-center">
               <h1 className="font-bold text-4xl leading-normal md:max-w-[1000px] md:text-[3.5rem]">
                  {"Салон краси Mary - найкращий у Нетішині."
                     .split(" ")
                     .map((word, index, arr) => (
                        <motion.span
                           className="inline-block"
                           key={word}
                           initial={{
                              opacity: 0,
                              filter: "blur(16px)",
                              y: 8 + 1 * (index + 2),
                           }}
                           animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                           transition={{
                              delay: 0.04 * (index + 12),
                              type: "spring",
                              bounce: 0,
                              duration: 0.7 + 0.1 * (index + 4),
                           }}
                        >
                           {index === 2 && (
                              <motion.span
                                 initial={{
                                    opacity: 0,
                                    filter: "blur(16px)",
                                    y: 8 + 1 * (index + 2),
                                 }}
                                 animate={{
                                    opacity: 1,
                                    filter: "blur(0px)",
                                    y: 0,
                                 }}
                                 transition={{
                                    delay: 0.04 * (index + 12),
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.7 + 0.1 * (index + 4),
                                 }}
                              >
                                 <Image
                                    alt=""
                                    src={"/nails.jpg"}
                                    width={200}
                                    height={150}
                                    className="-mt-4 mx-1 inline-block h-[72px] max-w-[140px] rounded-xl object-cover ring-4 ring-muted transition-all duration-100 max-md:hidden hover:ring-2"
                                 />
                              </motion.span>
                           )}
                           <span> {word}&#160;</span>
                           {index === arr.length - 1 && (
                              <motion.span
                                 initial={{
                                    opacity: 0,
                                    filter: "blur(16px)",
                                    y: 8 + 1 * (index + 2),
                                 }}
                                 animate={{
                                    opacity: 1,
                                    filter: "blur(0px)",
                                    y: 0,
                                 }}
                                 transition={{
                                    delay: 0.04 * (index + 12),
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.7 + 0.1 * (index + 4),
                                 }}
                              >
                                 <Image
                                    alt=""
                                    src={"/netishyn.jpg"}
                                    width={200}
                                    height={150}
                                    className="-mt-4 inline-block h-[72px] max-w-[140px] rounded-xl object-cover ring-4 ring-muted transition-all duration-100 max-md:hidden hover:ring-2"
                                 />
                              </motion.span>
                           )}
                        </motion.span>
                     ))}
               </h1>
               <motion.p
                  className="mx-auto max-w-[40ch] text-lg"
                  initial={{ filter: "blur(12px)", opacity: 0, y: 24 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                     type: "spring",
                     bounce: 0,
                     duration: 1.8,
                     delay: 1,
                  }}
               >
                  Ми піклуємось про кожну деталь вашого вигляду, поки ви сидите
                  у комфорті.{" "}
               </motion.p>

               <motion.div
                  initial={{ filter: "blur(12x)", opacity: 0, y: 16 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                     type: "spring",
                     bounce: 0,
                     duration: 1.4,
                     delay: 1.2,
                  }}
               >
                  <a
                     href="tel:+38050555555"
                     className={cn("mt-3", buttonVariants({ size: "lg" }))}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                     >
                        <path
                           d="M9.1585 5.71223L8.75584 4.80625C8.49256 4.21388 8.36092 3.91768 8.16405 3.69101C7.91732 3.40694 7.59571 3.19794 7.23592 3.08785C6.94883 3 6.6247 3 5.97645 3C5.02815 3 4.554 3 4.15597 3.18229C3.68711 3.39702 3.26368 3.86328 3.09497 4.3506C2.95175 4.76429 2.99278 5.18943 3.07482 6.0397C3.94815 15.0902 8.91006 20.0521 17.9605 20.9254C18.8108 21.0075 19.236 21.0485 19.6496 20.9053C20.137 20.7366 20.6032 20.3131 20.818 19.8443C21.0002 19.4462 21.0002 18.9721 21.0002 18.0238C21.0002 17.3755 21.0002 17.0514 20.9124 16.7643C20.8023 16.4045 20.5933 16.0829 20.3092 15.8362C20.0826 15.6393 19.7864 15.5077 19.194 15.2444L18.288 14.8417C17.6465 14.5566 17.3257 14.4141 16.9998 14.3831C16.6878 14.3534 16.3733 14.3972 16.0813 14.5109C15.7762 14.6297 15.5066 14.8544 14.9672 15.3038C14.4304 15.7512 14.162 15.9749 13.834 16.0947C13.5432 16.2009 13.1588 16.2403 12.8526 16.1951C12.5071 16.1442 12.2426 16.0029 11.7135 15.7201C10.0675 14.8405 9.15977 13.9328 8.28011 12.2867C7.99738 11.7577 7.85602 11.4931 7.80511 11.1477C7.75998 10.8414 7.79932 10.457 7.90554 10.1663C8.02536 9.83828 8.24905 9.56986 8.69643 9.033C9.14586 8.49368 9.37058 8.22402 9.48939 7.91891C9.60309 7.62694 9.64686 7.3124 9.61719 7.00048C9.58618 6.67452 9.44362 6.35376 9.1585 5.71223Z"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                        />
                     </svg>
                     Зателефонувати
                  </a>
               </motion.div>
            </div>
         </section>
         <div className="min-h-[50vh]">
            {isClient && (
               <motion.section
                  initial={{
                     y: innerWidth > 768 ? "50%" : 0,
                     opacity: innerWidth > 768 ? 1 : 0,
                     filter: innerWidth > 768 ? "blur(0px)" : "blur(12px)",
                  }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{
                     type: "spring",
                     bounce: 0.2,
                     duration: 1.5,
                     delay: 1.3,
                  }}
                  className="container py-12"
               >
                  <video
                     autoPlay
                     muted
                     loop
                     src={"/video.mp4"}
                     className="mx-auto max-h-[90svh] rounded-2xl md:rounded-3xl"
                  />
               </motion.section>
            )}
         </div>
         <section
            id="where"
            className="container py-16 md:py-24"
         >
            <h2 className="font-semibold text-4xl"> Місце знаходження</h2>
            <div className="">
               <iframe
                  style={{
                     outline: "none",
                  }}
                  title="Google Maps"
                  className="iframe focus:!border-none mt-6 h-[600px] max-h-[80svh] w-full rounded-2xl border-4"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDDWGJyScDSalVnzq3wgfF-tNzJpBdl_UE&q=ChIJ8XybXAD_LkcRmUPpx2Zec4s&center=50.331332,26.6486596&zoom=18&language=uk"
               />
            </div>
         </section>
      </>
   )
}

function _About() {
   return (
      <section className="bg-foreground py-12 text-background md:py-16">
         <div className="container">
            <h2 className="mb-6 font-medium text-4xl">Про нас</h2>
            <div className="grid gap-12 lg:grid-cols-[60%_1fr]">
               <Image
                  src={about}
                  alt="Ми"
                  className="rounded-xl"
               />
               <div className="self-end">
                  <p className="mb-4 font-medium text-3xl">
                     Lorem ipsum dolor sit.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Aspernatur.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}
