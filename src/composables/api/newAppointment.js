import getUserToken from "../auth/getUserToken";
import backendBaseURL from "../api/backendBaseURL";
import HttpError from "../helpers/HttpError";

export default async (slotSeconds, service) => {
  const idToken = await getUserToken();

  const link = `${backendBaseURL}/timeslots/appointments`;
  const response = await fetch(link, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({
      slotSeconds,
      service,
    }),
  });
  const data = await response.json();

  if (!response.ok) throw new HttpError(response.status, data.message);
};