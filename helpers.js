export function getDevice(w) {
  if(w < 768) {
    return 'mobile'
  } else if( w >=768 && w < 960) {
    return 'tablet'
  } else {
    return 'desktop'
  }
}