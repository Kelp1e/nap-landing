import {
  DISCORD_LINK,
  MEDIUM_LINK,
  TWITTER_LINK,
  YOUTUBE_LINK,
} from "~/shared/lib"
import { DiscordIcon, MediumIcon, TwitterIcon, YouTubeIcon } from "~/shared/ui"

export const HeroSection = () => {
  return (
    <div className="relative h-[calc(100vh-45rem)]">
      <video
        src="/scenes/green-aura.webm"
        autoPlay
        muted
        loop
        className="h-full w-full object-cover"
      />

      <div className="max-container mx-auto absolute inset-0 flex items-end justify-end pb-[55rem]">
        <div className="flex flex-col items-end gap-[35rem]">
          <span className="text-[60rem]">b0rder1ess</span>
          <span className="max-w-[600rem] text-end text-[20rem]">
            community-driven ecosystem aiming to expand Web3 beyond existing
            boundaries. We offer a range of technological solutions and curated
            NFT collections with a focus on enhancing the stability and
            functionality of NFTs.
          </span>
          <div className="flex items-center gap-[24rem]">
            <a href={TWITTER_LINK} target="_blank">
              <TwitterIcon className="w-[28rem] text-white" />
            </a>
            <a href={DISCORD_LINK} target="_blank">
              <DiscordIcon className="w-[28rem] text-white" />
            </a>
            <a href={YOUTUBE_LINK} target="_blank">
              <YouTubeIcon className="w-[28rem] text-white" />
            </a>
            <a href={MEDIUM_LINK} target="_blank">
              <MediumIcon className="w-[28rem] text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
