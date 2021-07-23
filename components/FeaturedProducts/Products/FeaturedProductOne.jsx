import s from './FeaturedProductOne.module.scss';
import Image from 'next/image';
import { Button } from '@/root/components/shared/Button';

export function FeaturedProductOne({ pic, title, txt, picW, picH }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center rounded bg-accent h-600px md:h-720px lg:h-520px px-8 w-full overflow-hidden relative mb-8">
      <div className={s.circle_small}></div>
      <div className={s.circle_med}></div>
      <div className={s.circle_large}></div>
      <div className="flex flex-col items-center justify-center w-1/2 md:w-5/12 lg:7/12 transform lg:translate-y-20">
        <Image
          src={pic}
          width={410}
          height={493}
          alt={title}
        />
      </div>
      <div className="flex flex-col items-center justify-center lg:items-start w-full lg:w-5/12 lg:ml-12">
        <h2 className="text-white text-4xl md:text-5xl font-semibold uppercase text-center lg:text-left relative z-1 my-6">{title}</h2>
        <p className="text-center lg:text-left text-lightSec font-light mb-8 max-w-prose">{txt}</p>
        <Button text={"see product"} type={"four"} />
      </div>
    </div>
  )
}