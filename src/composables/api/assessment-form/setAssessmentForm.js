import getUserToken from "../../auth/getUserToken"
import backendBaseURL from "../../api/backendBaseURL"
import HttpError from "../../helpers/HttpError"
import ParameterError from "../../helpers/ParameterError"

export default async (patientUid, assessmentForm) => {
  const idToken = await getUserToken()

  if (!patientUid) throw new ParameterError("patientUid")
  if (!assessmentForm) throw new ParameterError("assessmentForm")

  const link = `${backendBaseURL}/users/${patientUid}/forms/assessment`
  const response = await fetch(link, {
    method: "PATCH",
    body: JSON.stringify({
      dataUrl: assessmentForm,
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
