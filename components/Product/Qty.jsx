export function Qty({ qty, onAdd, onSub }) {
  return (
    <div className="flex items-center justify-around bg-lightSec p-2 w-full max-w-[130px] mr-4">
      <button className="text-darkTer font-semibold cursor-pointer" onClick={() => onSub(qty)}>-</button>
      <span className="my-0 mx-4 font-md font-semibold">{qty}</span>
      <button className="text-darkTer font-semibold cursor-pointer" onClick={() => onAdd(qty)}>+</button>
    </div>
  )
}