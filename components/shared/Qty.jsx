export function Qty() {
  return (
    <div className="flex items-center justify-around bg-lightSec p-2 w-full max-w-[130px] mr-4">
      <button className="text-darkTer font-semibold cursor-pointer">-</button>
      <span className="my-0 mx-4 font-md font-semibold">1</span>
      <button className="text-darkTer font-semibold cursor-pointer">+</button>
    </div>
  )
}