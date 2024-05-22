import React from "react"

import { cn } from "~/shared/lib"


type TextOwnProps<TElement extends React.ElementType = React.ElementType> = {
  as?: TElement
}

type TextProps<TElement extends React.ElementType> = TextOwnProps<TElement> &
  Omit<React.ComponentProps<TElement>, keyof TextOwnProps>

export const Text = <TElement extends React.ElementType>(
  props: TextProps<TElement>
) => {
  const { as = "span", className, children, ...rest } = props

  const Tag = as

  return (
    <Tag
      {...rest}
      className={cn("flex items-center gap-[10rem] text-[20rem]", className)}
    >
      <span>[</span>
      {children}
      <span>]</span>
    </Tag>
  )
}
