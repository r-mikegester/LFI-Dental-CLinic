import { DateTime } from "luxon"

export default (slotSeconds) => {
  const date = new Date(slotSeconds * 1000)
  const month = date.toLocaleString("en-us", {
    timeZone: "Asia/Manila",
    month: "numeric",
  })
  const day = date.toLocaleString("en-us", {
    timeZone: "Asia/Manila",
    day: "numeric",
  })
  const year = date.toLocaleString("en-us", {
    timeZone: "Asia/Manila",
    year: "numeric",
  })

  const isoDateStr = DateTime.fromObject({
    year: parseInt(year),
    month: parseInt(month),
    day: parseInt(day),
  })
    .minus({ days: 2 })
    .toISO()

  return new Date(isoDateStr)
}
