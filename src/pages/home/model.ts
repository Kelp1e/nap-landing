import { createEvent, createStore, sample } from "effector"

import { routes } from "~/shared/routing.ts"

export const currentRoute = routes.home

export const incremented = createEvent<void>()
export const decremented = createEvent<void>()

export const $counter = createStore<number>(0)

sample({
  clock: incremented,
  source: $counter,
  fn: (counter) => counter + 1,
  target: $counter,
})

sample({
  clock: decremented,
  source: $counter,
  fn: (counter) => counter - 1,
  target: $counter,
})
