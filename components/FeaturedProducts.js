import useDimensions from "react-cool-dimensions";
import { getDevice  } from "../helpers.js";
import FeaturedProductOne from "./FeaturedProductOne";
import FeaturedProductTwo from "./FeaturedProductTwo";
import FeaturedProductThree from "./FeaturedProductThree";
import s from './FeaturedProducts.module.scss';

export default function FeaturedProducts() {
  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  const device = getDevice(width);

  return (
    <div ref={observe} className={s.wrapper}>
      <div className={s.container}>
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