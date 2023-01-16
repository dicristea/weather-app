export function getCurrentTime(time) {
  let date = new Date(time * 1000);
  let minutes = date.getMinutes();
  let getHour = () => {
    let hour = date.getHours();
    if (hour === 0) {
      return 12;
    } else if (hour > 12) {
      return hour - 12;
    } else return hour;
  };
  let period = () => {
    return date.getHours() > 12 ? "PM" : "AM";
  };
  return `${getHour()}:${minutes < 10 ? `0${minutes}` : minutes} ${period()}`;
}
