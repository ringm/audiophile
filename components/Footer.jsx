import Image from 'next/image';
import Link from 'next/link';

export function Footer({ onCategorySelect }) {
  return (
    <div className="flexy-col-center bg-dark w-full">
      <div className="container flexy-col-center md:flexy-col-start">
        <div className="w-[100px] h-[4px] bg-accent mb-8"></div>
        <div className="mb-4">
          <Image
            src="/assets/shared/logo.svg"
            width={143}
            height={25}
            alt="company logo"
          />
        </div>
        <ul className="mb-8 flexy-col-center md:flexy-row-center">
          <li className="uppercase text-md font-semibold tracking-wider text-white hover:text-accent mt-4 first:mt-0 md:mt-0 md:ml-8 md:first:ml-0 cursor-pointer">
            <Link as="/" href="/">home</Link>
          </li>
          <Link as="/headphones" href="/[category]">
            <li className="uppercase text-md font-semibold tracking-wider text-white hover:text-accent mt-4 first:mt-0 md:mt-0 md:ml-8 md:first:ml-0 cursor-pointer" onClick={() => onCategorySelect("headphones")}>headphones</li>
          </Link>
          <Link as="/speakers" href="/[category]">
            <li className="uppercase text-md font-semibold tracking-wider text-white hover:text-accent mt-4 first:mt-0 md:mt-0 md:ml-8 md:first:ml-0 cursor-pointer" onClick={() => onCategorySelect("speakers")}>speakers</li>
          </Link>
          <Link as="/earphones" href="/[category]">
            <li className="uppercase text-md font-semibold tracking-wider text-white hover:text-accent mt-4 first:mt-0 md:mt-0 md:ml-8 md:first:ml-0 cursor-pointer" onClick={() => onCategorySelect("earphones")}>earphones</li>
          </Link>
        </ul>
        <p className="text-center md:text-left text-darkTer font-light text-md mb-8">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <div className="w-full md:flex md:items-center md:justify-between">
          <p className="text-center font-bold text-darkTer mb-8">Copyright 2021. All Rights Reserved</p>
          <ul className="flexy-row-center md:flexy-row-start mb-8">
            <li className="ml-6 first:ml-0">
              <a href="#">
                <Image
                  src="/assets/shared/icon-facebook.svg"
                  width={24}
                  height={24}
                  alt="facebook-icon"
                />
              </a>
            </li>
            <li className="ml-6 first:ml-0">
              <a href="#">
                <Image
                  src="/assets/shared/icon-twitter.svg"
                  width={24}
                  height={24}
                  alt="twitter-icon"
                />
              </a>
            </li>
            <li className="ml-6 first:ml-0">
              <a href="#">
                <Image
                  src="/assets/shared/icon-instagram.svg"
                  width={24}
                  height={24}
                  alt="instagram-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}