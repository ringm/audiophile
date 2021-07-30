export function NumberInput({ id, label, value }) {
  return (
    <div className="flexy-col-start">
      <label className="font-bold text-sm mb-2 capitalize" for={id}>{label}</label>
      <input className="w-full rounded font-medium border-lightTer text-darkTer p-4 focus:text-black focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent" type="number" id={id} name={label} min="0" max="999999999999" value={value} />
    </div>
  )
}