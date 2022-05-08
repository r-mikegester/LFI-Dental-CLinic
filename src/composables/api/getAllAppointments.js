import HttpError from "../helpers/HttpError";
import ParameterError from "../helpers/ParameterError";
import backendBaseURL from "./backendBaseURL";

export default async (year, month) => {
  if (!year) throw new ParameterError("year");
  if (!month) throw new ParameterError("month");

  const link = `${backendBaseURL}/appointments/${year}/${month}`;
  const response = await fetch(link);
  const data = await response.json();

  if (!response.ok) throw new HttpError(response.status, data.message);
  return data.payload;
};
