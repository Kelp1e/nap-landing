interface CardProps {
  title: string
  description: string
}

export const Card = (props: CardProps) => {
  const { title, description } = props

  return (
    <article
      // style={{
      //   clipPath:
      //     "polygon(100% 0, 100% calc(100% - 25rem), calc(100% - 25rem) 100%, 0 100%, 0 0)",
      // }}
      className="border-[1rem] border-white/30 bg-black px-[25rem] pb-[25rem] pt-[20rem]"
    >
      <div className="flex flex-col gap-[16rem]">
        <h1 className="text-[30rem]">{title}</h1>
        <p className="text-[16rem]">{description}</p>
      </div>
    </article>
  )
}
