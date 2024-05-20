import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"

import { BurgerIcon, CancelIcon } from "~/shared/ui"

export const BurgerMenu = () => {
  return (
    <Menu as={"div"} className="relative inline-block">
      <MenuButton className="outline-none">
        {({ open }) =>
          open ? (
            <CancelIcon className="w-[36rem] text-white" />
          ) : (
            <BurgerIcon className="w-[36rem] text-white" />
          )
        }
      </MenuButton>
      <MenuItems className="absolute right-0 top-[40rem] z-[1] flex flex-col items-end gap-[10rem] border-[1rem] border-white/30 bg-black p-[20rem] outline-none backdrop-blur-md">
        <MenuItem>
          <a href="#">b.01</a>
        </MenuItem>
        <MenuItem>
          <a href="#">b.lab</a>
        </MenuItem>
        <MenuItem>
          <a href="#">b.studio</a>
        </MenuItem>
        <MenuItem>
          <a href="#">docs</a>
        </MenuItem>
        <MenuItem>
          <a href="#">game</a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
