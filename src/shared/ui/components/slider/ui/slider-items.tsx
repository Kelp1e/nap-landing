import React from "react"

import { cn } from "~/shared/lib"
import { useSlider } from "../context"

interface SliderItemsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SliderItems = (props: SliderItemsProps) => {
  const { className, children } = props

  const { currentSlide } = useSlider()

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        className="absolute inset-0 flex items-center transition-transform duration-500"
      >
        {React.Children.map(
          children,
          (child) =>
            React.isValidElement(child) &&
            React.cloneElement(child as React.ReactElement, {
              ...child.props,
              className: cn(
                "min-w-full min-h-full max-w-full object-cover max-h-full",
                child.props.className
              ),
            })
        )}
      </div>
    </div>
  )
}
