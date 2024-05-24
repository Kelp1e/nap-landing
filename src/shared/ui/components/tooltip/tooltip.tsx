import React from "react"

import {
  arrow,
  autoUpdate,
  flip,
  offset as floatingOffset,
  FloatingPortal,
  OffsetOptions,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
  useTransitionStyles,
} from "@floating-ui/react"

interface TooltipOptions {
  initialOpen?: boolean
  placement?: Placement
  open?: boolean
  onOpenChange?: (open: boolean) => void
  offset?: OffsetOptions
}

export const useTooltip = (props: TooltipOptions = {}) => {
  const {
    initialOpen = false,
    placement = "top-end",
    open: controlledOpen,
    onOpenChange: setControlledOpen,
    offset = () => ({ mainAxis: -5, alignmentAxis: -15 }),
  } = props

  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen)

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const arrowRef = React.useRef<HTMLDivElement | null>(null)

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      floatingOffset(offset),
      flip({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "start",
        padding: 5,
      }),
      shift({ padding: 5 }),
      arrow({ element: arrowRef }),
    ],
  })

  const context = data.context

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null,
  })
  const focus = useFocus(context, {
    enabled: controlledOpen == null,
  })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: "tooltip" })

  const interactions = useInteractions([hover, focus, dismiss, role])

  return React.useMemo(
    () => ({
      open,
      setOpen,
      arrowRef,
      ...interactions,
      ...data,
    }),
    [open, setOpen, arrowRef, interactions, data]
  )
}

type ContextType = ReturnType<typeof useTooltip> | null

const TooltipContext = React.createContext<ContextType>(null)

export const useTooltipContext = () => {
  const context = React.useContext(TooltipContext)

  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />")
  }

  return context
}

export const Tooltip = (
  props: TooltipOptions & { children: React.ReactNode }
) => {
  const { children, ...options } = props

  const tooltip = useTooltip(options)

  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  )
}

export const TooltipTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & { asChild?: boolean }
>(({ children, asChild = false, ...props }, propRef) => {
  const context = useTooltipContext()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenRef = (children as any).ref
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        "data-state": context.open ? "open" : "closed",
      })
    )
  }

  return (
    <div
      ref={ref}
      // The user can style the trigger based on the state
      data-state={context.open ? "open" : "closed"}
      className="relative z-0 w-fit"
      {...context.getReferenceProps(props)}
    >
      {children}
    </div>
  )
})

export const TooltipPanel = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ style, ...props }, propRef) => {
  const context = useTooltipContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])

  const { isMounted, styles: transitionStyles } = useTransitionStyles(
    context.context
  )

  if (!isMounted) return null

  const { transform, ...floatingStyles } = context.floatingStyles

  return (
    <FloatingPortal>
      <div
        ref={ref}
        style={{
          ...floatingStyles,
          transform,
          ...style,
          ...transitionStyles,
        }}
        {...context.getFloatingProps(props)}
        className="rounded-[2rem] bg-white px-[6rem] pb-[6rem] pt-[4rem] text-[10rem] text-black"
      >
        {props.children}
      </div>
    </FloatingPortal>
  )
})
