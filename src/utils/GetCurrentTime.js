export function getCurrentTime(data) {
  let unixTimestamp = data.dt;
  let date = new Date(unixTimestamp - data.timezone * 60 * 1000);
  //   let time = date.toLocaleTimeString();
  return `${date}`;
}
