import { TextInput, FieldSet, RadioGroup } from "./formElements";

export function CheckOutForm({ register, handleSubmit, errors, onOrderConfirmed }) {

  return (
    <div className="mt-6 lg:mt-0 lg:w-full lg:mr-16">
      <h2 className="text-2xl uppercase font-bold mb-4">Checkout</h2 >
      <form onSubmit={handleSubmit(() => onOrderConfirmed(true))}>
        <FieldSet legend="billing details" gridCols="grid-cols-1 md:grid-cols-2">
          <TextInput
            id="name"
            label="name"
            register={register}
            required
            errors={errors} />
          <TextInput
            id="email"
            label="email address"
            register={register}
            required
            pattern={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            errors={errors} />
          <TextInput
            id="phone"
            label="phone Number"
            register={register}
            required
            pattern={/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/}
            errors={errors} />
        </FieldSet>
        <FieldSet legend="shipping info" gridCols="grid-cols-1 md:grid-cols-2">
          <TextInput id="address" label="your address" colSpan="md:col-span-2" register={register} required errors={errors} />
          <TextInput id="zip" label="zip code" register={register} required errors={errors} />
          <TextInput id="city" label="city" register={register} required errors={errors} />
          <TextInput id="country" label="country" register={register} required errors={errors} />
        </FieldSet>
        <FieldSet legend="payment details" gridCols="grid-cols-1 md:grid-cols-2">
          <RadioGroup id="paymentMethod" label="payment method" options={['e-Money', 'Cash on Delivery']} colSpan="md:col-span-2" />
          <TextInput id="emoneyNumber" label="e-Money Number" register={register} errors={errors} />
          <TextInput id="emoneyPIN" label="e-Money Pin" register={register} errors={errors} />
        </FieldSet>
        <input type="submit" id="submit-form" className="hidden" />
      </form>
    </div >
  )
}