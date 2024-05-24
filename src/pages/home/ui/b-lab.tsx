import { BORDERLESS_ART_LINK } from "~/shared/lib"
import {
  Button,
  Scene,
  Text,
  Tooltip,
  TooltipPanel,
  TooltipTrigger,
} from "~/shared/ui"

export const BLab = () => {
  return (
    <Scene
      id="b-lab"
      src={"/scenes/orange.webm"}
      className="mx-[20rem] h-[calc(100vh-40rem)] scroll-mt-[20rem]"
    >
      <div className="flex h-full w-full items-end justify-end px-[20rem] pb-[60rem]">
        <div className="flex flex-col items-end gap-[45rem]">
          <span className="text-[60rem]">b.lab</span>
          <span className="max-w-[380rem] text-end text-[20rem]">
            b0rder1ess .1ab is dedicated to developing innovative solutions for
            the Web3 market:
          </span>
          <div className="flex items-center gap-[8rem]">
            <Button variant="filled">NAP</Button>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="filled" disabled>
                  ASI
                </Button>
              </TooltipTrigger>
              <TooltipPanel>coming soon</TooltipPanel>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="filled" disabled>
                  SOC
                </Button>
              </TooltipTrigger>
              <TooltipPanel>coming soon</TooltipPanel>
            </Tooltip>
          </div>
          <Text as="a" href={BORDERLESS_ART_LINK} target="_blank">
            get in touch
          </Text>
        </div>
      </div>
    </Scene>
  )
}
