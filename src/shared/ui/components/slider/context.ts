import React, { useContext } from "react"

interface SliderContextProps {
  currentSlide: number
}

export const SliderContext = React.createContext<SliderContextProps | null>(
  null
)

export const useSlider = () => {
  const context = useContext(SliderContext)

  if (!context) {
    throw new Error("useSlider must be used inside a SliderContext")
  }

  return context
}
