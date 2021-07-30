export function FieldSet({ children, legend, gridCols = "grid-cols-1" }) {
  return (
    <fieldset className="mt-8 first:mt-0">
      <legend className="uppercase font-medium text-accent tracking-wider mb-4">{legend}</legend>
      <div className={`grid gap-4 ${gridCols}`}>
        {children}
      </div>
    </fieldset>
  )
}