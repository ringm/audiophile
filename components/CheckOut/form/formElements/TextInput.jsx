export function TextInput({ id, label, value, colSpan = "" }) {
  return (
    <div className={`flexy-col-start ${colSpan}`}>
      <label className="font-bold text-sm mb-2 capitalize" for={id}>{label}</label>
      <input className="w-full rounded font-medium border-lightTer text-darkTer p-4 focus:text-black focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent" type="text" id={id} value={value} />
    </div>
  )
}