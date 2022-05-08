import getUserToken from "../auth/getUserToken";
import backendBaseURL from "./backendBaseURL";
import HttpError from "../helpers/HttpError";
import ParameterError from "../helpers/ParameterError";

export default async (patientUid) => {
  if (!patientUid) throw new ParameterError("patientUid");

  const idToken = await getUserToken();
  const link = `${backendBaseURL}/users/${patientUid}`;
  const response = await fetch(link, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
  const data = await response.json();

  if (!response.ok) throw new HttpError(response.status, data.message);
  return data.payload;
};
