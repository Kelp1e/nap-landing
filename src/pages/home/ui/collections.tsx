import { BORDERLESS_ART_LINK, cn, DYOR_LINK, TWITTER_LINK } from "~/shared/lib"
import { Slider, SliderItem, SliderItems } from "~/shared/ui"

const title: Record<number, string> = {
  0: "b0rder1ess.nft collection",
  1: "dyor",
  2: "generic",
}

const description: Record<number, string> = {
  0: "The ecosystem's NFT collection, known as the b0rder1ess.nft, plays a pivotal role by allowing NFT holders to experience our technologies  first-hand and own the b01 initial liquidity.",
  1: "Dream Your Olives Retiral, an innovative blend of traditional RWB (Real World Business) and the dynamic worlds of NFT and DeFi.",
  2: "Generic Description",
}

const link: Record<number, string> = {
  0: BORDERLESS_ART_LINK,
  1: DYOR_LINK,
  2: TWITTER_LINK,
}

export const Collections = () => {
  return (
    <div className="mx-[20rem] h-[calc(100vh-40rem)]">
      <Slider>
        {({ to, currentSlide }) => (
          <div className="relative h-full w-full">
            <div className="absolute inset-0 z-[1]">
              <div className="hidden h-full items-center justify-between lg:flex">
                <div className="flex h-full items-end px-[20rem] py-[60rem]">
                  <div className="flex flex-col gap-[35rem]">
                    <span className="relative w-full max-w-[580rem] text-[60rem] leading-none">
                      {title[currentSlide]}
                    </span>
                    <span className="w-full max-w-[475rem] text-[20rem]">
                      {description[currentSlide]}
                    </span>
                    <a
                      href={link[currentSlide]}
                      target="_blank"
                      className="flex items-center gap-[10rem] text-[20rem]"
                    >
                      <span>[</span>
                      learn more
                      <span>]</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-[16rem] pr-[80rem] text-[32rem]">
                  <button
                    onClick={() => to(0)}
                    className={cn("text-white/50 transition-colors", {
                      "text-white": currentSlide === 0,
                    })}
                  >
                    b0rder1ess.nft
                  </button>
                  <button
                    onClick={() => to(1)}
                    className={cn("text-white/50 transition-colors", {
                      "text-white": currentSlide === 1,
                    })}
                  >
                    dyor
                  </button>
                  <button disabled className="text-white/50">
                    generic
                  </button>
                </div>
              </div>
            </div>
            <SliderItems className="h-full w-full">
              <SliderItem>
                <video
                  src="/scenes/b01.mp4"
                  muted
                  loop
                  autoPlay
                  className="max-h-full min-h-full min-w-full max-w-full object-cover"
                />
              </SliderItem>
              <SliderItem>
                <video
                  src="/scenes/dyor.mp4"
                  muted
                  loop
                  autoPlay
                  className="max-h-full min-h-full min-w-full max-w-full object-cover"
                />
              </SliderItem>
            </SliderItems>
          </div>
        )}
      </Slider>
    </div>
  )
}
