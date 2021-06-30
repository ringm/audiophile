import utilStyles from '../styles/utils.module.scss';
import Image from 'next/image';
import Button from './Button';

export default function ProductCategory({ pic, category }) {
  return (
    <div className={utilStyles.centerX}>
      <Image
        src={pic}
        width={104}
        height={104}
        alt={category}
      />
      <h3 className={`${utilStyles.headingXxs} ${utilStyles.textCenter}`}>{category}</h3>
      <Button type={"three"} text={"shop"} />
    </div>
  )
}