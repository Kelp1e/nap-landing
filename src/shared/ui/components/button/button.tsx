import React from "react"

import { cn } from "~/shared/lib"
import { Text } from "~/shared/ui"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "brackets" | "filled"
}

export const Button = (props: ButtonProps) => {
  const { variant = "brackets", className, children, ...rest } = props

  if (variant === "brackets") {
    return (
      <Text as={"button"} className={className} {...rest}>
        {children}
      </Text>
    )
  }

  if (variant === "filled") {
    return (
      <button
        className={cn(
          "rounded-[4rem] disabled:bg-white disabled:text-black border-[1rem] px-[20rem] pb-[7rem] pt-[4rem] leading-none",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    )
  }
}
