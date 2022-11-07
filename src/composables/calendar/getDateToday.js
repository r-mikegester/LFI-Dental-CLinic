import { DateTime } from "luxon"

export default () => {
  const date = new Date()
  const isoDateStr = DateTime.fromObject({
    year: parseInt(
      date.toLocaleString("en-us", {
        timeZone: "Asia/Manila",
        year: "numeric",
      })
    ),
    month: parseInt(
      date.toLocaleString("en-us", {
        timeZone: "Asia/Manila",
        month: "numeric",
      })
    ),
    day: parseInt(
      date.toLocaleString("en-us", {
        timeZone: "Asia/Manila",
        day: "numeric",
      })
    ),
  }).toISO()

  return new Date(isoDateStr)
}
