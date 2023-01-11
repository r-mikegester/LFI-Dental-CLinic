import { getAuth } from "firebase/auth"
import backendBaseURL from "../api/backendBaseURL"
import getUserToken from "../auth/getUserToken"
import HttpError from "../helpers/HttpError"
import ParameterError from "../helpers/ParameterError"

const auth = getAuth()
export default async (fullName) => {
  if (!fullName) throw new ParameterError("ParameterError")

  const idToken = await getUserToken()
  const link = `${backendBaseURL}/auth/user/name`
  const response = await fetch(link, {
    method: "POST",
    body: JSON.stringify({
      fullName,
    }),
    headers: {
      Authorization: `Bearer ${idToken}`,
      "Content-Type": "application/json",
    },
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
  else {
    await auth.currentUser.reload()
    return data.payload
  }
}
