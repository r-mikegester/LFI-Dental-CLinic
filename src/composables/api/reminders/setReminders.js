import getUserToken from "../../auth/getUserToken"
import backendBaseURL from "../../api/backendBaseURL"
import HttpError from "../../helpers/HttpError"
import ParameterError from "../../helpers/ParameterError"

export default async (message) => {
  const idToken = await getUserToken()

  if (!message) throw new ParameterError("message")

  const link = `${backendBaseURL}/reminders`
  const response = await fetch(link, {
    method: "POST",
    body: JSON.stringify({
      message,
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
