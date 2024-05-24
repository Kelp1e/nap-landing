import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionClasses,
} from "@headlessui/react"

import { BORDERLESS_ART_LINK, DOCS_LINK } from "~/shared/lib"
import { BurgerIcon, CancelIcon } from "~/shared/ui"


const transition: TransitionClasses = {
  enter: "transition ease-out duration-200",
  enterFrom: "opacity-0 translate-y-[20rem]",
  enterTo: "opacity-100 translate-y-0",
  leave: "transition ease-in duration-150",
  leaveFrom: "opacity-100 translate-y-0",
  leaveTo: "opacity-0 translate-y-[20rem]",
}

export const BurgerMenu = () => {
  return (
    <Menu as={"div"} className="relative">
      <MenuButton className="relative flex items-center justify-center pt-[5rem] outline-none">
        {({ open }) =>
          open ? (
            <CancelIcon className="w-[36rem] text-white" />
          ) : (
            <BurgerIcon className="w-[36rem] text-white" />
          )
        }
      </MenuButton>
      <Transition {...transition}>
        <MenuItems className="absolute right-0 top-[50rem] z-[1] flex flex-col items-end gap-[10rem] border-[1rem] border-white/50 bg-black p-[20rem] outline-none backdrop-blur-md">
          <MenuItem>
            <a href={"#b-01"}>b.01</a>
          </MenuItem>
          <MenuItem>
            <a href={"#b-lab"}>b.lab</a>
          </MenuItem>
          <MenuItem>
            <a href={"#b-studio"}>b.studio</a>
          </MenuItem>
          <MenuItem>
            <a href={DOCS_LINK} target="_blank">
              docs
            </a>
          </MenuItem>
          <MenuItem>
            <a href={BORDERLESS_ART_LINK} target="_blank">
              game
            </a>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
