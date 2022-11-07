import getUserToken from "../../auth/getUserToken"
import backendBaseURL from "../backendBaseURL"
import HttpError from "../../helpers/HttpError"
import ParameterError from "../../helpers/ParameterError"

export default async (patientUid, slotSeconds) => {
  if (!patientUid) throw new ParameterError("patientUid")
  if (!slotSeconds) throw new ParameterError("slotSeconds")

  const idToken = await getUserToken()
  const link = `${backendBaseURL}/users/${patientUid}/appointments/${slotSeconds}/attended`
  const response = await fetch(link, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
  return data.payload
}
