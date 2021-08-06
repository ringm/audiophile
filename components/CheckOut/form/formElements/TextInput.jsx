export function TextInput({ id, label, colSpan = "", register, errors, required, pattern, message }) {

  return (
    <div className={`relative flexy-col-start ${colSpan}`}>
      <div className="flexy-row-start mb-2">
        <label className="font-bold text-sm capitalize mr-2" htmlFor={id}>{label}</label>
        {errors[id] && errors[id].type === "required" && <p className="text-red-600 text-sm font-medium">This field is required</p>}
        {errors[id]?.ref?.id === "phone" && errors[id].type === "pattern" && <p className="text-red-600 text-sm font-medium">Invalid phone number</p>}
        {errors[id]?.ref?.id === "email" && errors[id].type === "pattern" && <p className="text-red-600 text-sm font-medium">Invalid email address</p>}
      </div>
      <input className="w-full rounded font-medium border-lightTer text-darkTer p-4 focus:text-black focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent" type="text" id={id} {...register(id, { required, pattern })} defaultValue="" />
    </div>
  )
}