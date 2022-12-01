import getUserToken from "../../auth/getUserToken"
import backendBaseURL from "../backendBaseURL"
import HttpError from "../../helpers/HttpError"
import ParameterError from "../../helpers/ParameterError"

export default async (patientUid) => {
  const idToken = await getUserToken()

  if (!patientUid) throw new ParameterError("patientUid")

  const link = `${backendBaseURL}/users/${patientUid}/archived`
  const response = await fetch(link, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
  return data.payload
}