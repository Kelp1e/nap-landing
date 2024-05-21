import React from "react"

interface SliderItem {
  children?: React.ReactNode
}

export const SliderItem = (props: SliderItem) => {
  const { children } = props

  return (
    React.isValidElement(children) &&
    React.cloneElement(children as React.ReactElement, {
      ...children.props,
      className: children.props.className,
    })
  )
}
