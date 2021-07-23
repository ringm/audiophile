import { Category } from "./Category";

export function ProductCategories() {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <div className="w-11/12 max-w-screen-lg flex flex-col md:flex-row items-center justify-center">
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