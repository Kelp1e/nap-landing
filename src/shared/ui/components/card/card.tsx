interface CardProps {
  title: string
  description: string
}

export const Card = (props: CardProps) => {
  const { title, description } = props

  return (
    <article className={"pt-[20rem] px-[25rem] pb-[20rem] border-[1rem] border-black"}>
      <h1 className="text-[30rem] font-monorama">{title}</h1>
      <p className="text-[16rem] font-monorama">{description}</p>
    </article>
  )
}
