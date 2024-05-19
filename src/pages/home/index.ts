import { Home } from "./home.tsx"
import { currentRoute } from "./model.ts"

export const HomePage = {
  view: Home,
  route: currentRoute,
}

export * as homeModel from "./model.ts"
