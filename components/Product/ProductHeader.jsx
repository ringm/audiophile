import { useState } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router';
import { Qty } from './Qty';
import { formatMoney } from "@/root/utils/helpers";

export function ProductHeader({ device, product, onAddToCart }) {

  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [currentProduct, setCurrentProduct] = useState("");

  if (currentProduct !== router.query.product) {
    setQty(1);
    setAdded(false);
    setCurrentProduct(router.query.product);
  }

  function handleAdd(num) {
    num++;
    setQty(num);
    if (added) {
      setAdded(false)
    }
  }

  function handleSub(num) {
    num--;
    if (added) {
      setAdded(false)
    }
    return num < 1 ? null : setQty(num);
  }

  return (
    <div className="flexy-col-center mb-12 mt-8 md:flexy-row-center md:my-24 lg:my-16">
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[560px] mb-5 md:w-1/2 md:mb-0">
        <Image
          src={product.image[device]}
          layout="fill"
          objectFit="cover"
          alt={product.name}
        />
      </div>
      <div className="flexy-col-start md:w-1/2 md:ml-6">
        {product.new && <p className="uppercase text-md font-normal text-accent tracking-superWidest mb-4">new product</p>}
        <h2 className="mt-0 text-3xl lg:text-4xl uppercase font-bold max-w-md mb-4 lg:mb-8">{product.name}</h2>
        <p className="mt-0 text-darkTer font-light text-md max-w-lg lg:max-w-md mb-4 lg:mb-8">{product.description}</p>
        <p className="font-bold text-lg tracking-wider mb-4 lg:mb-8">${formatMoney(product.price)}</p>
        <div className="w-full flex justify-between lg:justify-start">
          <Qty className="mr-4" qty={qty} onAdd={handleAdd} onSub={handleSub} />
          <span
            className={`btn btn-accent ${added ? "added" : ""}`}
            onClick={() => {
              onAddToCart(product.id, qty)
              setAdded(true)
            }}
          >{added ? "added to cart!" : "add to cart"}</span>
        </div>
      </div>
    </div>
  )
}