import { Category } from "./Category";

export function ProductCategories({ styles }) {
  return (
    <div className={`flexy-col-center mt-24 ${styles}`}>
      <div className="container flex flexy-col-center md:flexy-row-center">
        <Category
          category={"headphones"}
          pic={"/assets/shared/desktop/image-headphones.png"}
        />
        <Category
          category={"speakers"}
          pic={"/assets/shared/desktop/image-speakers.png"}
        />
        <Category
          category={"earphones"}
          pic={"/assets/shared/desktop/image-earphones.png"}
        />
      </div>
    </div>
  )
}