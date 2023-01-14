export default function conversion(isMetric, kelvin) {
  if (!isMetric) {
    return Math.round(((kelvin - 273.15) * 9) / 5 + 32) + "°F";
  } else {
    return Math.round(kelvin - 273.15) + "°C";
  }
}
