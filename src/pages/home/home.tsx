import { B01UtilityToken, HeroSection } from "~/pages/home/ui"

export const Home = () => {
  return (
    <>
      <div className="h-[calc(100vh-50rem)]">
        <HeroSection />
      </div>
      <div className="h-[100vh]">
        <B01UtilityToken />
      </div>
    </>
  )
}
