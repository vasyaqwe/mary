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
         <div className="min-h-[40vh] md:min-h-[50vh]">
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
         <section className=" pt-6 pb-16 md:pt-12 md:pb-24">
            <h2 className="container font-semibold text-4xl md:text-5xl">
               Робимо усе:
            </h2>
            <div className="mt-9 border-border/50 border-y">
               <ol className="container flex justify-center divide-border/50 max-md:flex-col md:divide-x max-md:divide-y md:px-0">
                  <li className="px-10 py-8 font-semibold text-xl md:px-20 md:py-20">
                     <span className="mr-2 inline-block">01.</span> Волосся{" "}
                     <span className="text-3xl">💇‍♀️</span>{" "}
                  </li>
                  <li className="px-10 py-8 font-semibold text-xl md:px-20 md:py-20">
                     <span className="mr-2 inline-block">02.</span> Брови{" "}
                     <span className="text-3xl">🖌️</span>{" "}
                  </li>
                  <li className="px-10 py-8 font-semibold text-xl md:px-20 md:py-20">
                     <span className="mr-2 inline-block">03.</span> Нігті{" "}
                     <span className="text-3xl">💅🏻</span>{" "}
                  </li>
                  <li className="px-10 py-8 font-semibold text-xl md:px-20 md:py-20">
                     <span className="mr-2 inline-block">04.</span> Обличчя{" "}
                     <span className="text-3xl">😊</span>{" "}
                  </li>
               </ol>
            </div>
            <p className="mt-10 flex items-center justify-center gap-1 text-center font-medium text-lg">
               Приклади робіт знизу
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  fill={"transparent"}
               >
                  <path
                     d="M12 20L12 4"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
                  <path
                     d="M17 15C17 15 13.3175 20 11.9999 20C10.6823 20 6.99997 15 6.99997 15"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </p>
         </section>
         <section className=" pt-6 pb-16 md:pt-12 md:pb-24">
            <h2 className="container font-semibold text-4xl md:text-5xl">
               Галерея робіт
            </h2>
            <div className="mt-9 border-border/50 border-y">
               <ol className="container flex justify-center divide-border/50 max-md:flex-col md:divide-x max-md:divide-y md:px-0">
                  <li className="px-10 py-8 font-semibold text-xl md:px-20 md:py-20">
                     <span className="mr-2 inline-block">01.</span> Волосся{" "}
                     <span className="text-3xl">💇‍♀️</span>{" "}
                  </li>
                  <li className="px-10 py-8 font-semibold text-xl md:px-20 md:py-20">
                     <span className="mr-2 inline-block">02.</span> Брови{" "}
                     <span className="text-3xl">🖌️</span>{" "}
                  </li>
                  <li className="px-10 py-8 font-semibold text-xl md:px-20 md:py-20">
                     <span className="mr-2 inline-block">03.</span> Нігті{" "}
                     <span className="text-3xl">💅🏻</span>{" "}
                  </li>
                  <li className="px-10 py-8 font-semibold text-xl md:px-20 md:py-20">
                     <span className="mr-2 inline-block">04.</span> Обличчя{" "}
                     <span className="text-3xl">😊</span>{" "}
                  </li>
               </ol>
            </div>
         </section>
         <section
            id="where"
            className="container pt-6 pb-16 md:pt-12 md:pb-24"
         >
            <h2 className="font-semibold text-4xl md:text-5xl">
               {" "}
               Місце знаходження
            </h2>
            <div className="mt-9 flex justify-between gap-6 rounded-2xl border border-border/70 bg-white p-7 shadow-sm max-md:flex-col md:py-14">
               <p className="text-lg">
                  <span className="mb-4 block font-semibold text-3xl md:text-4xl">
                     Місто Нетішин,
                  </span>{" "}
                  проспект Героїв України 6✨
               </p>
               <div>
                  <p>👀 Чекаємо на вас</p>
                  <a
                     href="tel:+38050555555"
                     className={cn("mt-3", buttonVariants({ size: "lg" }))}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        fill={"transparent"}
                     >
                        <path
                           d="M10.2892 21.9614H9.39111C6.14261 21.9614 4.51836 21.9614 3.50918 20.9363C2.5 19.9111 2.5 18.2612 2.5 14.9614V9.96139C2.5 6.66156 2.5 5.01165 3.50918 3.98653C4.51836 2.9614 6.14261 2.9614 9.39111 2.9614H12.3444C15.5929 2.9614 17.4907 3.01658 18.5 4.04171C19.5092 5.06683 19.5 6.66156 19.5 9.96139V11.1478"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                        <path
                           d="M15.9453 2V4M10.9453 2V4M5.94531 2V4"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                        <path
                           d="M7 15H11M7 10H15"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                        />
                        <path
                           opacity="0.93"
                           d="M20.7598 14.8785C19.8544 13.8641 19.3112 13.9245 18.7076 14.1056C18.2851 14.166 16.8365 15.8568 16.2329 16.3952C15.2419 17.3743 14.2464 18.3823 14.1807 18.5138C13.9931 18.8188 13.8186 19.3592 13.7341 19.963C13.5771 20.8688 13.3507 21.8885 13.6375 21.9759C13.9242 22.0632 14.7239 21.8954 15.6293 21.7625C16.2329 21.6538 16.6554 21.533 16.9572 21.3519C17.3797 21.0983 18.1644 20.2046 19.5164 18.8761C20.3644 17.9833 21.1823 17.3664 21.4238 16.7626C21.6652 15.8568 21.3031 15.3737 20.7598 14.8785Z"
                           stroke="currentColor"
                           strokeWidth="1.5"
                        />
                     </svg>
                     Записатися
                  </a>
               </div>
            </div>
            <svg
               className="mx-auto my-6 w-full max-w-[300px] opacity-70 md:my-10"
               width="507"
               height="37"
               viewBox="0 0 507 37"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  className="fill-foreground/70"
                  d="M473.656 37C459.107 37 441.214 20.8022 440.456 20.1188C432.289 11.9657 424.023 4.71749 411.869 4.71749C398.545 4.71749 382.893 19.902 382.733 20.0529L381.377 21.3206C372.749 29.3842 364.599 37 350.083 37C335.534 37 317.641 20.8022 316.883 20.1188C308.717 11.9657 300.451 4.71749 288.297 4.71749C274.973 4.71749 259.321 19.902 259.161 20.0529L257.882 21.2075C248.029 30.0298 240.252 37 226.516 37C211.962 37 194.069 20.8022 193.317 20.1188C185.145 11.9657 176.879 4.71749 164.731 4.71749C151.407 4.71749 135.754 19.902 135.595 20.0529L134.228 21.33C125.605 29.3889 117.455 36.9953 102.944 36.9953C88.3904 36.9953 70.4972 20.7975 69.7448 20.1141C61.5725 11.961 53.307 4.71278 41.1585 4.71278C29.0649 4.71278 10.8309 15.8973 5.17407 25.0778C4.47108 26.2277 2.80698 26.666 1.46142 26.0628C0.121348 25.4501 -0.389417 24.0268 0.319063 22.8769C6.93154 12.1506 27.0273 0 41.1585 0C55.6246 0 65.2248 8.37931 73.8254 16.9613C78.4387 21.1698 92.8335 32.2825 102.944 32.2825C115.044 32.2825 121.722 26.0428 130.18 18.1442L131.509 16.9047C132.168 16.2591 148.941 0.00471019 164.731 0.00471019C179.197 0.00471019 188.797 8.38402 197.398 16.966C202.011 21.1745 216.406 32.2872 226.516 32.2872C237.907 32.2872 244.278 26.5848 253.916 17.951L255.119 16.8717C255.74 16.2591 272.513 0.00471019 288.302 0.00471019C302.774 0.00471019 312.38 8.38402 320.969 16.966C325.583 21.1698 339.978 32.2825 350.089 32.2825C362.193 32.2825 368.877 26.0381 377.34 18.1301L378.658 16.9C379.317 16.2544 396.09 0 411.875 0C426.346 0 435.953 8.37931 444.542 16.9613C449.156 21.1651 463.55 32.2778 473.661 32.2778C485.261 32.2778 496.069 26.9147 501.869 18.2809C502.627 17.1498 504.302 16.7586 505.625 17.4137C506.938 18.0641 507.388 19.5062 506.636 20.6325C499.842 30.732 487.21 37 473.656 37Z"
               />
            </svg>

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
