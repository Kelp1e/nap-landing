import React from "react"

import { SliderContext } from "./context.ts"

interface SliderProps {
  className?: string
  children?: (props: {
    currentSlide: number
    prev: () => void
    next: () => void
  }) => React.ReactNode
}

export const Slider = (props: SliderProps) => {
  const { children } = props

  const [currentSlide, setCurrentSlide] = React.useState<number>(0)

  const prev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? React.Children.count(children) - 1 : prev - 1
    )
  }

  const next = () => {
    setCurrentSlide((prev) =>
      prev + 1 === React.Children.count(children) ? 0 : prev + 1
    )
  }
  return (
    <SliderContext.Provider value={{ currentSlide, prev, next }}>
      {children?.({ currentSlide, prev, next })}
    </SliderContext.Provider>
  )
}
