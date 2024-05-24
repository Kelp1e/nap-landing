import { BORDERLESS_ART_LINK } from "~/shared/lib"
import { Card, Text } from "~/shared/ui"
import { CardProps } from "~/shared/ui/components/card"

const cards: CardProps[] = [
  {
    title: "Guaranteed NFT Liquidity",
    description:
      "NFT value’s backed by DeFi liquidity, keeping your investment SAFU.",
  },
  {
    title: "NFT Instant Sellback",
    description: "Quick and easy sellback options for your convenience.",
  },
  {
    title: "Early Access to a New Market",
    description:
      "Get exclusive entry into an emerging new market at the intersection of NFT and DeFi!",
  },
  {
    title: "No “Rug Pulls”",
    description:
      "Enjoy complete peace of mind with our commitment to transparency and reliability.",
  },
]

const secondCards: CardProps[] = [
  {
    title: "ASI",
    description: "coming soon",
  },
  {
    title: "SOC",
    description: "TBA",
  },
]

export const Nap = () => {
  return (
    <div className="mx-[20rem] flex flex-col gap-[20rem]">
      <div className="relative h-[calc(100vh-40rem)]">
        <img
          src="/nap-bg.png"
          alt="nap-bg"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0">
          <div className="flex h-full items-center">
            <div className="flex h-full items-end">
              <div className="flex flex-col gap-[35rem] p-[20rem]">
                <span className="max-w-[580rem] text-[60rem]">
                  Native Assurance Protocol (NAP) dAPP
                </span>
                <span className="max-w-[475rem] text-[20rem]">
                  NAP makes it easier to combine DeFi perks with NFTs by setting
                  up a side market NAP (live), ASI (coming soon), SOC (TBA).
                </span>
                <Text as="a" href={BORDERLESS_ART_LINK} target="_blank">
                  launch app
                </Text>
              </div>
            </div>
            <div className="mx-auto flex h-full">
              <img
                src="/phones.png"
                alt="phones"
                className="w-[620rem] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[calc(100vh-40rem)] flex-col justify-between">
        <div className="flex w-full flex-col">
          <div className="flex w-full justify-end">
            <div className="grid w-full max-w-[660rem] grid-cols-2 gap-[5rem]">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  variant="solid"
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[5rem]">
          {secondCards.map((card, index) => (
            <Card
              key={index}
              variant="solid"
              title={card.title}
              description={card.description}
              disabled
            />
          ))}
        </div>
      </div>
    </div>
  )
}
