import getUserToken from "../auth/getUserToken";
import backendBaseURL from "./backendBaseURL";
import HttpError from "../helpers/HttpError";

export default async (slotSeconds) => {
  const idToken = await getUserToken();

  const link = `${backendBaseURL}/timeslots/appointments/${slotSeconds}`;
  const response = await fetch(link, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
  const data = await response.json();

  if (!response.ok) throw new HttpError(response.status, data.message);
};
