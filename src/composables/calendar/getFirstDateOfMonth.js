import getMonthIndex from "./getMonthIndex";
import ParameterError from "../helpers/ParameterError";

export default (monthName, year) => {
  if (!monthName) throw new ParameterError(monthName);
  if (!year) throw new ParameterError(year);

  const month = getMonthIndex(monthName);
  return new Date(year, month, 1);
};
