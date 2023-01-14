export function getCurrentTime(data) {
  let unixTimestamp = data.dt;
  let date = new Date(unixTimestamp * 1000);
  let hours = () => {
    let initial = date.getHours();
    if (initial === 0) {
      return 12;
    } else return initial;
  };
  let minutes = date.getMinutes();
  return `${hours()}:${minutes} ${hours() > 12 ? "PM" : "AM"}`;
}
