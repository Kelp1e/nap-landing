import { cn } from "~/shared/lib"

interface CardProps {
  title: string
  description: string
  disabled?: boolean
}

export const Card = (props: CardProps) => {
  const { title, description, disabled } = props

  return (
    <article className="corner border-[1rem] border-white/30 bg-black bg-white/10 px-[25rem] pb-[25rem] pt-[20rem] backdrop-blur-[20rem]">
      <div
        className={cn("flex flex-col gap-[16rem]", {
          "flex-row items-center gap-[20rem]": disabled,
        })}
      >
        <h1 className="text-[30rem]">{title}</h1>
        <p className="text-[16rem]">{description}</p>
      </div>
    </article>
  )
}
