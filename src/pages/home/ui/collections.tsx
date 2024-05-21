import { Slider, SliderItem, SliderItems } from "~/shared/ui"

export const Collections = () => {
  return (
    <div className="mx-[20rem] h-[calc(100vh-40rem)]">
      <Slider>
        {({ prev, next }) => (
          <div className="h-full w-full">
            <div>
              <button onClick={prev}>prev</button>
              <button onClick={next}>next</button>
            </div>
            <SliderItems className="h-full w-full">
              <SliderItem>
                <video
                  src="/scenes/b01.mp4"
                  muted
                  loop
                  autoPlay
                  className="min-w-full min-h-full max-w-full object-cover max-h-full"
                />
              </SliderItem>
              <SliderItem>
                <video
                  src="/scenes/dyor.mp4"
                  muted
                  loop
                  autoPlay
                  className="min-w-full min-h-full max-w-full object-cover max-h-full"
                />
              </SliderItem>
            </SliderItems>
          </div>
        )}
      </Slider>
    </div>
  )
}
