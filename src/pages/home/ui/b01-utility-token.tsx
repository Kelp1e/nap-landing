import { B01_COINGECKO, BO1_COINMARKETCAP } from "~/shared/lib"
import { Card, Scene, Text } from "~/shared/ui"
import { CardProps } from "~/shared/ui/components/card"

const cards: CardProps[] = [
  {
    title: "Liquidity aggregation",
    description:
      "NFT<>DeFi liquidity accross various networks will generate and distribute NAP swap fees to assure b01 liquidity and value",
  },
  {
    title: "Liquidity aggregation",
    description:
      "NFT<>DeFi liquidity accross various networks will generate and distribute NAP swap fees to assure b01 liquidity and value",
  },
  {
    title: "Assurance",
    description: "Determine the base cost of b0rder1ess.nft through NAP.",
  },
]

export const B01UtilityToken = () => {
  return (
    <Scene
      id="b-01"
      src="/scenes/nap.webm"
      className="mx-[20rem] h-[calc(100vh-40rem)] scroll-mt-[20rem]"
    >
      <div className="max-container mx-auto hidden h-full items-end pb-[55rem] lg:flex">
        <div className="flex w-full items-end justify-between gap-[30rem]">
          <div className="grid w-[450rem] grid-cols-1 grid-rows-3 gap-[5rem]">
            {cards.map((card) => (
              <Card title={card.title} description={card.description} />
            ))}
          </div>
          <div className="flex flex-col items-end gap-[34rem]">
            <span className="text-end text-[60rem]">b.01 Utility Token</span>
            <span className="max-w-[500rem] text-end text-[20rem]">
              The b01 token is the native utility token within the b0rder1ess
              ecosystem, enabling users to access and engage with a wide range
              of features, services, and opportunities the platform provides
            </span>
            <div className="flex items-center gap-[40rem] text-[20rem]">
              <Text as="a" href={BO1_COINMARKETCAP} target="_blank">
                coinmarketcap
              </Text>
              <Text as="a" href={B01_COINGECKO} target="_blank">
                coingecko
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Scene>
  )
}
