import ParameterError from "../helpers/ParameterError"
import getMonthIndex from "./getMonthIndex"

export default (monthName, year) => {
  if (!monthName) throw new ParameterError(monthName)
  if (!year) throw new ParameterError(year)
  if (monthName < 0) throw new ParameterError(monthName, "Negative value")
  if (year < 0) throw new ParameterError(year, "Negative value")

  const month = getMonthIndex(monthName)

  // Explanation:
  // Months in the Date object are zero-based, meaning January is 0,
  // February is 1, March is 2, and so on.
  //
  // However, if we pass zero to the date parameter in the constructor,
  // it will give us the last day of the previous month. Hence, we pass
  // pass the index of the next month, then pass 0 to get the last
  // day of our current month.
  return new Date(year, month + 1, 0).getDate()
}
