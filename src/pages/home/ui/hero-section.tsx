import { DiscordIcon, MediumIcon, TwitterIcon, YouTubeIcon } from "~/shared/ui"

export const HeroSection = () => {
  return (
    <div className="max-container mx-auto flex h-full items-end justify-end pb-[55rem]">
      <div className="flex flex-col items-end gap-[40rem]">
        <div className="flex flex-col items-end gap-[40rem]">
          <span className="text-[60rem]">b0rder1ess</span>
          <span className="max-w-[600rem] text-end text-[20rem]">
            community-driven ecosystem aiming to expand Web3 beyond existing
            boundaries. We offer a range of technological solutions and curated
            NFT collections with a focus on enhancing the stability and
            functionality of NFTs.
          </span>
        </div>
        <div className="flex items-center gap-[24rem]">
          <a href="#" target="_blank">
            <TwitterIcon className="w-[28rem] text-white" />
          </a>
          <a href="#" target="_blank">
            <DiscordIcon className="w-[28rem] text-white" />
          </a>
          <a href="#" target="_blank">
            <YouTubeIcon className="w-[28rem] text-white" />
          </a>
          <a href="#" target="_blank">
            <MediumIcon className="w-[28rem] text-white" />
          </a>
        </div>
      </div>
    </div>
  )
}
