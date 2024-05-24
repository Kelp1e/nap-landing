import { B01_COINGECKO, BO1_COINMARKETCAP } from "~/shared/lib"
import {
  Button,
  Card,
  Scene,
  Text,
  Tooltip,
  TooltipPanel,
  TooltipTrigger,
} from "~/shared/ui"
import { CardProps } from "~/shared/ui/components/card"

const cards: CardProps[] = [
  {
    title: "NFT Collection Creation",
    description:
      "Expertise in designing and developing unique NFT collections that stand out in the digital realm.",
  },
  {
    title: "Marketing Strategies",
    description:
      "Cutting-edge marketing solutions tailored to maximise the visibility and appeal of crypto projects.",
  },
  {
    title: "Advanced Tokenomics",
    description:
      "Implementing robust token economic models to ensure the sustainability and growth of NFT ventures.",
  },
]

export const BStudio = () => {
  return (
    <Scene
      id="b-studio"
      src="/scenes/violet.webm"
      className="mx-[20rem] h-[calc(100vh-40rem)] scroll-mt-[20rem]"
    >
      <div className="max-container mx-auto flex h-full items-end pb-[55rem]">
        <div className="flex w-full items-end justify-between gap-[30rem]">
          <div className="hidden w-[450rem] grid-cols-1 grid-rows-3 gap-[5rem] lg:grid">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <div className="flex w-full flex-col items-end gap-[34rem] lg:w-auto">
            <span className="text-end text-[60rem]">b.studi0</span>
            <span className="max-w-[500rem] text-end text-[20rem]">
              The b0rder1ess .studi0 is set to offer comprehensive, turnkey
              solutions for NFT/DeFi projects, aiming to transform the digital
              asset landscape.
            </span>
            <div className="flex items-center justify-end flex-wrap gap-[8rem]">
              <Button variant="filled">b0rder1ess.nft</Button>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="filled" disabled>
                    DYOR
                  </Button>
                </TooltipTrigger>
                <TooltipPanel>coming soon</TooltipPanel>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="filled" disabled>
                    generic
                  </Button>
                </TooltipTrigger>
                <TooltipPanel>coming soon</TooltipPanel>
              </Tooltip>
            </div>
            <div className="flex flex-wrap gap-y-[10rem] justify-end gap-[40rem] text-[20rem]">
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
