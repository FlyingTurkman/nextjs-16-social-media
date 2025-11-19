import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";













export function H2({className, ...props}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 
    className={cn("scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}
    {...props}
    />
  )
}