import { Button } from "~/shared/ui"

export const Nap = () => {
  return (
    <div className="max-container mx-auto h-full flex items-end">
      <div className="flex flex-col gap-[35rem]">
        <span className="max-w-[580rem] text-[60rem]">
          Native Assurance Protocol (NAP) dAPP
        </span>
        <span className="max-w-[475rem]">
          NAP makes it easier to combine DeFi perks with NFTs by setting up a
          side market NAP (live), ASI (coming soon), SOC (TBA).
        </span>
        <Button>launch app</Button>
      </div>
    </div>
  )
}
