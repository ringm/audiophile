import useDimensions from "react-cool-dimensions";
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
    <div ref={observe} className="flexy-col-center mb-28">
      <div className="relative container flexy-col-center lg:flexy-row-center">
        <div className="relative h-320px w-full lg:h-600px lg:w-1/2 lg:ml-20">
          <Image
            className="rounded"
            src={`/assets/shared/${device}/image-best-gear.jpg`}
            layout="fill"
            objectFit="cover"
            alt="best gear"
          />
        </div>
        <div className="w-full flexy-col-center lg:w-1/2 lg:flexy-col-start lg:order-first">
          <h2 className="uppercase text-3xl md:text-4xl font-bold text-center lg:text-left max-w-md my-8">Bringing you the <span className="text-accent">best</span> audio gear</h2>
          <p className="mt-0 text-center lg:text-left text-darkTer font-light text-md max-w-lg">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
      </div>
    </div>
  )
}