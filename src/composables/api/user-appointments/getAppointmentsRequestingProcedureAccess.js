import getUserToken from "../../auth/getUserToken"
import backendBaseURL from "../../api/backendBaseURL"
import HttpError from "../../helpers/HttpError"

export default async () => {
  const idToken = await getUserToken()

  const link = `${backendBaseURL}/appointments/requesting-procedure-access`
  const response = await fetch(link, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
  return data.payload
}
