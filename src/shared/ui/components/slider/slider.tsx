import React from "react"

import { SliderContext } from "./context.ts"

interface SliderProps {
  className?: string
  children?: (props: {
    currentSlide: number
    to: (slideIndex: number | "prev" | "next") => void
  }) => React.ReactNode
}

export const Slider = (props: SliderProps) => {
  const { children } = props

  const [currentSlide, setCurrentSlide] = React.useState<number>(0)

  const to = (indexOrDirection: number | "prev" | "next") => {
    if (indexOrDirection !== "prev" && indexOrDirection !== "next") {
      setCurrentSlide(indexOrDirection)
    } else if (indexOrDirection === "prev") {
      setCurrentSlide((prev) =>
        prev === 0 ? React.Children.count(children) - 1 : prev - 1
      )
    } else if (indexOrDirection === "next") {
      setCurrentSlide((prev) =>
        prev + 1 === React.Children.count(children) ? 0 : prev + 1
      )
    }
  }

  return (
    <SliderContext.Provider value={{ currentSlide }}>
      {children?.({ currentSlide, to })}
    </SliderContext.Provider>
  )
}
