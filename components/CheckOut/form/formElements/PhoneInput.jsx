export function PhoneInput({ id, label, value }) {
  return (
    <div className="flexy-col-start">
      <label className="font-bold text-sm mb-2 capitalize" for={id}>{label}</label>
      <input className="w-full rounded font-medium border-lightTer text-darkTer p-4 focus:text-black focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id={id} value={value} />
    </div>
  )
}