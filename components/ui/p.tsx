import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";








export function P({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6 whitespace-pre-line text-justify', className)}
    {...props}
    />
  )
}
