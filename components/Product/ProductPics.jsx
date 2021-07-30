import Image from 'next/image';

export function ProductPics({ pics }) {
  return (
    <div className="flexy-col-center w-full">
      <div className="container">
        <div className={s.pic_container_one}>
          <Image />
        </div>
        <div className={s.pic_container_two}>
          <Image />
        </div>
        <div className={s.pic_container_three}>
          <Image />
        </div>
      </div>
    </div>
  )
}