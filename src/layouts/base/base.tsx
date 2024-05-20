import React from "react"

import { Link } from "atomic-router-react"

import {
  DISCORD_LINK,
  MEDIUM_LINK,
  TWITTER_LINK,
  YOUTUBE_LINK,
} from "~/shared/lib"
import { routes } from "~/shared/routing.ts"
import {
  BurgerMenu,
  Button,
  DiscordIcon,
  MediumIcon,
  TwitterIcon,
  YouTubeIcon,
} from "~/shared/ui"


export const Base = (props: { children?: React.ReactNode }) => {
  const { children } = props

  return (
    <>
      <header className="max-container mx-auto flex items-center justify-between pt-[25rem] leading-none">
        <Link to={routes.home} className="text-[24rem]">
          b0rder1ess
        </Link>
        <div className="md:hidden">
          <BurgerMenu />
        </div>
        <ol className="hidden items-center gap-[40rem] text-[20rem] md:flex">
          <li>
            <a href="#">b.01</a>
          </li>
          <li>
            <a href="#">b.lab</a>
          </li>
          <li>
            <a href="#">b.studio</a>
          </li>
          <li>
            <a href="#">docs</a>
          </li>
          <li>
            <a href="#">game</a>
          </li>
          <Button>launch app</Button>
        </ol>
      </header>
      {children}
      <footer>
        <div className="max-container mx-auto flex flex-col gap-[20rem] py-[20rem] sm:gap-[60rem] sm:pt-[75rem]">
          <div className="flex flex-col justify-between gap-[20rem] sm:flex-row">
            <span className="text-[36rem]">b0rder1ess</span>
            <div className="flex flex-col gap-[12rem] text-[20rem] sm:flex-row sm:gap-[150rem]">
              <ol className="flex flex-col gap-[12rem]">
                <li>
                  <a href="#">b.01 token</a>
                </li>
                <li>
                  <a href="#">b.lab</a>
                </li>
                <li>
                  <a href="#">.NAP</a>
                </li>
                <li>
                  <a href="#">b.studi0</a>
                </li>
              </ol>
              <ol className="flex flex-col gap-[12rem]">
                <li>
                  <a href="#">docs</a>
                </li>
                <li>
                  <a href="#">bug report</a>
                </li>
                <li>
                  <a href="#">contacts</a>
                </li>
              </ol>
            </div>
          </div>
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
        <div className="border-t-[1rem] border-t-white/30 py-[20rem]">
          <div className="max-container mx-auto">
            <div className="flex flex-col justify-between gap-[35rem] sm:flex-row">
              <div className="flex flex-col gap-[10rem] md:flex-row md:gap-[40rem]">
                <span>
                  collabs:{" "}
                  <a
                    href="mailto:partnership@borderless.art"
                    className="underline"
                  >
                    partnership@borderless.art
                  </a>
                </span>
                <span>
                  media:{" "}
                  <a href="mailto:press@borderless.art" className="underline">
                    press@borderless.art
                  </a>
                </span>
              </div>
              <span>2024 © b0rder1ess</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
