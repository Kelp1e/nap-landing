import { cn } from "~/shared/lib"

interface SceneProps {
  id?: string
  src: string
  className?: string
  children?: React.ReactNode
}

export const Scene = (props: SceneProps) => {
  const {id, src, className, children } = props

  return (
    <div id={id} className={cn("relative", className)}>
      <div className="corner h-full overflow-hidden">
        <video
          src={src}
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0">{children}</div>
    </div>
  )
}
