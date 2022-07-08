import getUserToken from "../auth/getUserToken";
import backendBaseURL from "../api/backendBaseURL";
import HttpError from "../helpers/HttpError";
import ParameterError from "../helpers/ParameterError";

export default async (
  patientUid,
  personalInformation,
  medicalHistory,
  dentalHistory
) => {
  const idToken = await getUserToken();

  if (!patientUid) throw new ParameterError("patientUid");
  if (!personalInformation) throw new ParameterError("personalInformation");
  if (!medicalHistory) throw new ParameterError("medicalHistory");
  if (!dentalHistory) throw new ParameterError("dentalHistory");

  const link = `${backendBaseURL}/users/${patientUid}/charts/medical-chart`;
  const response = await fetch(link, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({
      personalInformation,
      medicalHistory,
      dentalHistory,
    }),
  });
  const data = await response.json();

  if (!response.ok) throw new HttpError(response.status, data.message);
  return data.payload;
};
