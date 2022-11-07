import getMonthIndex from "./getMonthIndex"

export default (monthName, year) => {
  const month = getMonthIndex(monthName)
  return new Date(year, month + 1, 1)
}
