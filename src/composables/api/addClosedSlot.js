import HttpError from "../helpers/HttpError";
import ParameterError from "../helpers/ParameterError";
import backendBaseURL from "./backendBaseURL";

export default async (slotSeconds) => {
  if (!slotSeconds) throw new ParameterError(slotSeconds);

  const link = `${backendBaseURL}/schedules/closed`;
  const response = await fetch(link, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      slotSeconds,
    }),
  });
  const data = await response.json();

  if (!response.ok) throw new HttpError(response.status, data.message);
};
