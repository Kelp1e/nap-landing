import { Base } from "~/layouts/base"

import { Home } from "./home.tsx"
import { currentRoute } from "./model.ts"


export const HomePage = {
  view: Home,
  route: currentRoute,
  layout: Base,
}

export * as homeModel from "./model.ts"
