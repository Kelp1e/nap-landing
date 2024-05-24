import { cn } from "~/shared/lib"

export interface CardProps {
  variant?: "glass" | "solid"
  title: string
  description: string
  disabled?: boolean
}

export const Card = (props: CardProps) => {
  const { variant = "glass", title, description, disabled } = props

  return (
    <article
      className={cn(
        "corner relative overflow-hidden px-[25rem] pb-[25rem] pt-[20rem]",
        {
          "border-[1rem] border-white/30 bg-white/10 backdrop-blur-[20rem]":
            variant === "glass",
          "bg-white/10 p-[20rem] pt-[15rem]": variant === "solid",
        }
      )}
    >
      <div
        className={cn("flex flex-col gap-[16rem]", {
          "flex-row items-center gap-[20rem]": disabled,
          "h-full justify-between": variant === "solid" && !disabled,
        })}
      >
        <h1 className="text-[30rem] leading-none">{title}</h1>
        <p
          className={cn("text-[16rem]", {
            "text-white": variant === "glass",
            "text-white/50": variant === "solid",
          })}
        >
          {description}
        </p>
      </div>
      {variant === "glass" && (
        <div className="absolute bottom-[13rem] right-[-10rem] w-[40rem] -rotate-45 border-t-[1rem] border-t-white/30" />
      )}
    </article>
  )
}
