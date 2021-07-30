export function RadioGroup({ label, options, colSpan = "" }) {
  return (
    <div className={`flexy-col-start md:flex-row md:items-start ${colSpan}`}>
      <p className="font-bold text-sm mb-2 capitalize md:w-1/2">{label}</p>
      <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
        {options.map(option => {
          return (
            <label className="flexy-row-start border border-lightTer rounded p-4">
              <span className="mr-3 flexy-row-start">
                <input className="opacity-0 w-0 h-0" type="radio" id={option} name="paymemt" value={option} />
                <span className="block w-5 h-5 rounded-full border-4 border-white bg-accent ring-1 ring-lightTer"></span>
              </span>
              <span className="font-medium leading-none transform -translate-y-px">{option}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}