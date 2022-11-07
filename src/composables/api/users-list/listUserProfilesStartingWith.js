import getUserToken from "../../auth/getUserToken"
import backendBaseURL from "../backendBaseURL"
import HttpError from "../../helpers/HttpError"

export default async (startAt) => {
  const idToken = await getUserToken()
  const link = `${backendBaseURL}/users?startWith=${startAt}`
  const response = await fetch(link, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
  return data.payload
}
