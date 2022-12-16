import { DateTime } from "luxon"

export default () => {
  const isoDateStrSixMonthsFromNow = DateTime.now().plus({ months: 6 }).toISO()
  return new Date(isoDateStrSixMonthsFromNow)
}
