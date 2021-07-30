export function ProductFeatures({ product }) {
  return (
    <div className="w-full mt-12 md:mt-0">
      <h2 className="mt-0 text-xl md:text-2xl font-semibold tracking-wider mb-4">FEATURES</h2>
      <p className="text-md font-light text-darkTer">{product.features}</p>
    </div>
  )
}