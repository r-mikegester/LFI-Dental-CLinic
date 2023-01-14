import { getUserToken } from "../../auth/user-token"
import { HttpError, ParameterError } from "../../helpers/errors"
import backendBaseURL from "../../api/backendBaseURL"

export async function getDeciduousChart(patientUid) {
  const idToken = await getUserToken()

  if (!patientUid) throw new ParameterError("patientUid")

  const link = `${backendBaseURL}/users/${patientUid}/charts/deciduous-chart`
  const response = await fetch(link, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
  return data.payload
}

export async function saveDeciduousChart(patientUid, dataUrl) {
  const idToken = await getUserToken()

  if (!patientUid) throw new ParameterError("patientUid")
  if (!dataUrl) throw new ParameterError("dataUrl")

  const link = `${backendBaseURL}/users/${patientUid}/charts/deciduous-chart`
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
