import { RouterProvider } from "atomic-router-react"

import { Pages } from "~/pages"

import { router } from "~/shared/routing.ts"

export const App = () => {
  return (
    <RouterProvider router={router}>
      <Pages />
    </RouterProvider>
  )
}
