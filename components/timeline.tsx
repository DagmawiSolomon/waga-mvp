"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const Timeline = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("relative", className)} {...props} />,
)
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { index?: number; isInView?: boolean }
>(({ className, index = 0, isInView = false, ...props }, ref) => {
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={cn(
        "group relative pb-12 transition-all duration-500",
        isEven ? "sm:pr-[calc(50%+2rem)]" : "sm:pl-[calc(50%+2rem)]",
        isInView ? "opacity-100" : "opacity-40",
        className,
      )}
      {...props}
    />
  )
})
TimelineItem.displayName = "TimelineItem"

const TimelineHeader = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { index?: number; isInView?: boolean }
>(({ className, index = 0, isInView = false, ...props }, ref) => {
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={cn(
        "mb-1 flex flex-col mx-5 sm:mx-0",
        isEven ? "items-start sm:items-end" : "items-start",
        "before:absolute before:top-0 before:left-2 sm:before:left-1/2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:w-0.5 group-last:before:hidden",
        "after:absolute after:left-2 sm:after:left-1/2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-primary-foreground/95 after:bg-foreground after:transition-all after:duration-500",
        isInView && "after:scale-125 after:bg-primary",
        className,
      )}
      {...props}
    />
  )
})
TimelineHeader.displayName = "TimelineHeader"

const TimelineTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { index?: number }>(
  ({ className, children, index = 0, ...props }, ref) => (
    <div ref={ref} className={cn("text-lg sm:text-xl font-bold text-primary mt-3", className)} {...props}>
      {children}
    </div>
  ),
)
TimelineTitle.displayName = "TimelineTitle"

const TimelineTime = ({ className, variant = "default", ...props }: React.ComponentProps<typeof Badge>) => {
  return (
    <Badge
      className={cn(
        "h-fit w-fit text-xs font-semibold uppercase flex items-center justify-center px-4 py-2",
        className,
      )}
      variant={variant}
      {...props}
    >
      {props.children}
    </Badge>
  )
}
TimelineTime.displayName = "TimelineTime"

const TimelineDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { index?: number }>(
  ({ className, children, index = 0, ...props }, ref) => {
    const isEven = index % 2 === 0

    return (
      <div
        ref={ref}
        className={cn(
          "text-muted-foreground text-sm sm:text-base sm:max-w-[70%] pt-1 pl-0",
          isEven ? "sm:text-right" : "sm:text-left",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
TimelineDescription.displayName = "TimelineDescription"

export { Timeline, TimelineItem, TimelineHeader, TimelineTime, TimelineTitle, TimelineDescription }
