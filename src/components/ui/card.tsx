import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

interface TerminalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  branch?: string;
}

const TerminalCard = React.forwardRef<HTMLDivElement, TerminalCardProps>(
  ({ className, title, branch = "main", children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-[#44474b] bg-[#141317] text-[#e6e1e7] overflow-hidden shadow-sm transition-colors duration-150",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-[#44474b] bg-[#1c1b1f] px-3.5 py-2 select-none">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" />
        </div>
        {title && (
          <div className="font-mono text-xs text-[#c4c6cb] tracking-wide flex items-center gap-1">
            <span>{title}</span>
            {branch && <span className="text-neutral-500">({branch})</span>}
          </div>
        )}
        <div className="w-8" />
      </div>
      <div className="p-5 font-mono text-xs sm:text-sm">{children}</div>
    </div>
  )
)
TerminalCard.displayName = "TerminalCard"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, TerminalCard }
export default Card

