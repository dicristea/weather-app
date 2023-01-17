export function getCurrentDate(time, short) {
  let newDate = new Date(time * 1000);
  let date = newDate.getDate();
  let day = newDate.getDay() + 1;
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  let getDay = () => {
    switch (day) {
      case 1:
        day = "Sun";
        break;
      case 2:
        day = "Mon";
        break;
      case 3:
        day = "Tue";
        break;
      case 4:
        day = "Wed";
        break;
      case 5:
        day = "Thur";
        break;
      case 6:
        day = "Fri";
        break;
      case 7:
        day = "Sat";
        break;
      default:
        day = 0;
    }
  };
  // switch example incoming!
  let getMonth = () => {
    if (!short) {
      switch (month) {
        case 1:
          month = "Jan";
          break;
        case 2:
          month = "Feb";
          break;
        case 3:
          month = "Mar";
          break;
        case 4:
          month = "Apr";
          break;
        case 5:
          month = " May";
          break;
        case 6:
          month = "Jun";
          break;
        case 7:
          month = "Jul";
          break;
        case 8:
          month = "Aug";
          break;
        case 9:
          month = "Sep";
          break;
        case 10:
          month = "Oct";
          break;
        case 11:
          month = "Nov";
          break;
        case 12:
          month = "Dec";
          break;
        default:
          month = 0;
      }
    } else return month;
  };

  getDay();
  getMonth();

  if (short) {
    return `${day}. ${date + 1}`;
  } else return `${date} ${month}, ${year}`;
}
