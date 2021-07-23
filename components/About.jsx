import useDimensions from "react-cool-dimensions";
import s from './About.module.scss';
import Image from 'next/image';
import { getDevice } from "@/root/utils/helpers";

export default function About() {

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
        <div className={s.imgContainer}>
          <Image
            className={s.img}
            src={`/assets/shared/${device}/image-best-gear.jpg`}
            layout="fill"
            objectFit="cover"
            alt="best gear"
          />
        </div>
        <div className={s.dataContainer}>
          <h2 className={s.title}>Bringing you the <span className={s.accent}>best</span> audio gear</h2>
          <p className={s.text}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
      </div>
    </div>
  )
}