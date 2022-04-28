import ParameterError from "../helpers/ParameterError";
import getMonthIndex from "./getMonthIndex";

export default (monthName, year) => {
  if (!monthName) throw new ParameterError(monthName);
  if (!year) throw new ParameterError(year);
  if (monthName < 0) throw new ParameterError(monthName, "Negative value");
  if (year < 0) throw new ParameterError(year, "Negative value");

  const month = getMonthIndex(monthName);

  // Explanation:
  // Here, we explicitly want to access the dates of the current month,
  // so don't mess with the month parameter.
  //
  // Days of the week also start with zero (Sunday), but we ignore
  // that because we want to get the number of blank days before the
  // first date.
  return new Date(year, month, 1).getDay();
};
