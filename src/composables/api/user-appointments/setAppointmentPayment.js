import getUserToken from "../../auth/getUserToken"
import backendBaseURL from "../../api/backendBaseURL"
import HttpError from "../../helpers/HttpError"
import ParameterError from "../../helpers/ParameterError"

export default async (patientUid, slotSeconds, price, amountPaid, status) => {
  const idToken = await getUserToken()

  if (!patientUid) throw new ParameterError("patientUid")
  if (!slotSeconds) throw new ParameterError("slotSeconds")
  if (!isFinite(price) || isNaN(price)) throw new ParameterError("price")
  if (!isFinite(amountPaid) || isNaN(amountPaid))
    throw new ParameterError("amountPaid")
  if (status === undefined) throw new ParameterError("status")

  const link = `${backendBaseURL}/users/${patientUid}/appointments/${slotSeconds}/payment`
  const response = await fetch(link, {
    method: "POST",
    body: JSON.stringify({
      price,
      amountPaid,
      status,
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
