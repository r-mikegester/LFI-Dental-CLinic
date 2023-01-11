import getUserToken from "../../auth/getUserToken"
import backendBaseURL from "../../api/backendBaseURL"
import HttpError from "../../helpers/HttpError"
import ParameterError from "../../helpers/ParameterError"

export default async (patientUid, dataUrl) => {
  const idToken = await getUserToken()

  if (!patientUid) throw new ParameterError("patientUid")
  if (!dataUrl) throw new ParameterError("dataUrl")

  const link = `${backendBaseURL}/users/${patientUid}/signatures/patient`
  const response = await fetch(link, {
    method: "PATCH",
    body: JSON.stringify({
      dataUrl,
    }),
    headers: {
      Authorization: `Bearer ${idToken}`,
      "Content-Type": "application/json",
    },
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
  return data.payload
}
