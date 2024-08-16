import { type VariantProps, cva } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
   `inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium
   ring-offset-background focus-visible:outline-none gap-1.5 
   focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 
   disabled:pointer-events-none disabled:opacity-80 border shadow-sm transition-all`,
   {
      variants: {
         variant: {
            default: `bg-primary/90 hover:bg-primary text-background border-primary`,
            outline: `bg-background hover:border-border border-border/70 backdrop-blur-md hover:bg-border/10 `,
         },
         size: {
            default: "h-11 px-4",
            sm: "h-10 px-3 text-sm",
            lg: "h-12 gap-2 rounded-2xl px-4 px-6",
            icon: "size-8 gap-0",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "default",
      },
   },
)

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, ...props }, ref) => {
      return (
         <button
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
         />
      )
   },
)
Button.displayName = "Button"

export { Button, buttonVariants }
