import useDimensions from "react-cool-dimensions";
import { getDevice } from "@/root/utils/helpers.js";
import { FeaturedProductOne, FeaturedProductTwo, FeaturedProductThree } from "./Products";

export function FeaturedProducts() {

  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  const device = getDevice(width);

  return (
    <div ref={observe} className="flex flex-col items-center justify-center my-24">
      <div className="w-11/12 max-w-screen-lg flex flex-col items-center justify-center">
        <FeaturedProductOne
          pic={`/assets/home/${device}/image-speaker-zx9.png`}
          picW={172}
          picH={207}
          title={"zx9 speaker"}
          txt={"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."}
        />
        <FeaturedProductTwo
          pic={`/assets/home/${device}/image-speaker-zx7.jpg`}
          title={"zx7 speaker"}
        />
        <FeaturedProductThree
          pic={`/assets/home/${device}/image-earphones-yx1.jpg`}
          title={"yx1 earphones"}
        />
      </div>
    </div>
  )
}