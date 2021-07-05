import s from './ProductCategories.module.scss';
import ProductCategory from "./ProductCategory";

export default function ProductCategories() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <ProductCategory
          category={"headphones"}
          pic={"/assets/shared/desktop/image-headphones.png"}
        />
        <ProductCategory
            category={"speakers"}
            pic={"/assets/shared/desktop/image-speakers.png"}
        />
        <ProductCategory
            category={"earphones"}
            pic={"/assets/shared/desktop/image-earphones.png"}
        />
      </div>
    </div>
  )
}