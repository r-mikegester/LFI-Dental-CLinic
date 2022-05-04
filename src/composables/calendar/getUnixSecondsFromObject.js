import { DateTime } from "luxon";

export default (day, month, year, hours, minutes) => {
  const dateStringISO = DateTime.fromObject(
    {
      day,
      // Luxon does not use month indexes so make
      // sure to use the correct month numbers.
      month,
      year,
      hours,
      minutes,
    },
    {
      // system supports UTC+8 only
      zone: "Asia/Manila",
    }
  ).toISO();

  return new Date(dateStringISO).getTime() / 1000;
};
