import { cn } from "@/ui/components/utils"
import { type VariantProps, cva } from "class-variance-authority"
import * as React from "react"

const buttonVariants = cva(
   `inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium
   ring-offset-background focus-visible:outline-none gap-1.5 
   focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 
   disabled:pointer-events-none disabled:opacity-80 border shadow-sm transition-all active:scale-95`,
   {
      variants: {
         variant: {
            default: `bg-primary hover:bg-primary/90 active:bg-primary text-background border-primary`,
            secondary: `bg-border/40 hover:bg-border/60 border-transparent`,
            outline: `bg-border/40 hover:bg-border/60 border-border/40`,
         },
         size: {
            default: "h-11 px-4",
            sm: "h-10 px-3 text-sm",
            lg: "h-12 gap-2 rounded-2xl px-4 px-6 text-lg",
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
