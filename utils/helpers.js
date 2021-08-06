export function getDevice(w) {
  if (w < 768) {
    return 'mobile'
  } else if (w >= 768 && w < 960) {
    return 'tablet'
  } else {
    return 'desktop'
  }
}

export function formatMoney(money) {
  var str = money.toString();
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formFields = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zip: "",
  city: "",
  country: "",
  paymentMethod: "e-Money",
  emoneyNumber: "",
  emoneyPIN: ""
}