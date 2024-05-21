import {
  B01UtilityToken,
  BLab,
  BStudio,
  Collections,
  HeroSection,
  Nap,
} from "~/pages/home/ui"

export const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-[20rem]">
        <HeroSection />
        <B01UtilityToken />
        <BLab />
        <Nap />
        <BStudio />
        <Collections />
      </div>
    </>
  )
}
