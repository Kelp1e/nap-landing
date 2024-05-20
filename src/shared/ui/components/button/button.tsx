import React from "react"

import { cn } from "~/shared/lib"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "brackets" | "filled"
}

export const Button = (props: ButtonProps) => {
  const { variant = "brackets", className, children, ...rest } = props

  if (variant === "brackets") {
    return (
      <button
        className={cn("flex items-center gap-[10rem] text-[20rem]", className)}
        {...rest}
      >
        <span>[</span>
        {children}
        <span>]</span>
      </button>
    )
  }

  if (variant === "filled") {
    return (
      <button
        className={cn(
          "rounded-[4rem] border-[1rem] px-[20rem] pb-[7rem] pt-[4rem] leading-none",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    )
  }
}
