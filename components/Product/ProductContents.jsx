export function ProductContents({ product }) {
  return (
    <div className="w-full md:flex md:items-start md:justify-start lg:flexy-col-start lg:w-1/2 lg:ml-20 mt-12 lg:mt-0">
      <h2 className="mt-0 text-xl md:text-2xl font-semibold tracking-wide md:w-1/2 lg:w-auto">IN THE BOX</h2>
      <ul className="flexy-col-start md:mt-0">
        {product.includes.map(content => {
          return (
            <li key={content.item} className="flexy-row-center text-lg odd:my-4">
              <p className="text-accent font-semibold mr-2">{content.quantity}x</p>
              <p className="text-darkTer">{content.item}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}