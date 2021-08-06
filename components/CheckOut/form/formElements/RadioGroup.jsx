import { useState } from "react";

export function RadioGroup({ id, label, options, colSpan = "" }) {

  const [selected, setSelected] = useState(0);

  return (
    <div className={`flexy-col-start md:flex-row md:items-start ${colSpan}`}>
      <p className="font-bold text-sm mb-2 capitalize md:w-1/2">{label}</p>
      <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
        {options.map((option, idx) => {
          return (
            <label
              key={idx}
              className="flexy-row-start border border-lightTer rounded p-4 cursor-pointer"
              onClick={() => setSelected(idx)}>
              <span className="mr-3 flexy-row-start">
                <input className="opacity-0 w-0 h-0" type="radio" id={option} name="paymemt" value={option} />
                <span className={`block w-5 h-5 rounded-full border-4 border-white ring-1 ring-lightTer ${selected === idx ? "bg-accent" : ""}`}></span>
              </span>
              <span className={`font-medium leading-none transform -translate-y-px select-none ${selected === idx ? "text-black" : "text-darkTer"}`}>{option}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}