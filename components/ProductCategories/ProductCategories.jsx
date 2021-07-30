import { Category } from "./Category";

export function ProductCategories({ styles, onCategorySelect }) {
  return (
    <div className={`flexy-col-center mt-24 ${styles}`}>
      <div className="container flex flexy-col-center md:flexy-row-center">
        <Category
          category={"headphones"}
          pic={"/assets/shared/desktop/image-headphones.png"}
          onCategorySelect={onCategorySelect}
        />
        <Category
          category={"speakers"}
          pic={"/assets/shared/desktop/image-speakers.png"}
          onCategorySelect={onCategorySelect}
        />
        <Category
          category={"earphones"}
          pic={"/assets/shared/desktop/image-earphones.png"}
          onCategorySelect={onCategorySelect}
        />
      </div>
    </div>
  )
}