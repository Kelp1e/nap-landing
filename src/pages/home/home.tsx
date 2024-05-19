import { useUnit } from "effector-react"

import { homeModel } from "~/pages/home"

import { UserIcon } from "~/shared/ui"

export const Home = () => {
  const [increment, decrement, counter] = useUnit([
    homeModel.incremented,
    homeModel.decremented,
    homeModel.$counter,
  ])

  return (
    <div>
      <UserIcon className="w-[16rem]" />
      <h1>Count: {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
