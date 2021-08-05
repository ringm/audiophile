import { TextInput, FieldSet, PhoneInput, EmailInput, RadioGroup } from "./formElements";

export function CheckOutForm() {
  return (
    <div className="mt-6 lg:mt-0 lg:w-full lg:mr-16">
      <h2 className="text-2xl uppercase font-bold mb-4">Checkout</h2 >
      <form>
        <FieldSet legend="billing details" gridCols="grid-cols-1 md:grid-cols-2">
          <TextInput id="name" label="name" value="Alexei Ward" />
          <EmailInput id="email" label="email address" value="alexei@ward.com" />
          <PhoneInput id="phone" label="phone Number" value="1 202-555-0136" />
        </FieldSet>
        <FieldSet legend="shipping info" gridCols="grid-cols-1 md:grid-cols-2">
          <TextInput id="address" label="your address" value="1137 Williams Avenue" colSpan="md:col-span-2" />
          <TextInput id="zip" label="zip code" value="10001" />
          <TextInput id="city" label="city" value="New York" />
          <TextInput id="country" label="country" value="United States" />
        </FieldSet>
        <FieldSet legend="payment details" gridCols="grid-cols-1 md:grid-cols-2">
          <RadioGroup label="payment method" options={['e-Money', 'Cash on Delivery']} colSpan="md:col-span-2" />
          <TextInput label="e-Money Number" id="emoneyNumber" value="2345987" />
          <TextInput label="e-Money Pin" id="emoneyPIN" value="6891" />
        </FieldSet>
      </form>
    </div >
  )
}