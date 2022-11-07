import { DateTime } from "luxon"

export default (year, month, date) => {
  const isoDateStr = DateTime.fromObject(
    {
      year,
      month,
      day: date,
    },
    {
      timezone: "Asia/Manila",
    }
  ).toISO()
  return new Date(isoDateStr)
}
