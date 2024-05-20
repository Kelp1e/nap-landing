import React from "react"

import { Link } from "atomic-router-react"

import { routes } from "~/shared/routing.ts"


export const Base = (props: { children?: React.ReactNode }) => {
  const { children } = props

  return (
    <div>
      <header className="max-container mx-auto flex items-center justify-between pt-[25rem] leading-none">
        <Link to={routes.home} className="text-[24rem]">
          b0rder1ess
        </Link>
        <ol className="flex items-center gap-[40rem] text-[20rem]">
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
          <button>[ launch app ]</button>
        </ol>
      </header>
      <div>{children}</div>
    </div>
  )
}
