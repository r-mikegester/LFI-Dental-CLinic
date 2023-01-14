import { getUserToken } from "../auth/user-token"
import backendBaseURL from "./backendBaseURL"
import HttpError from "../helpers/HttpError"
import ParameterError from "../helpers/ParameterError"

export async function getUserProfile(patientUid) {
  if (!patientUid) throw new ParameterError("patientUid")

  const idToken = await getUserToken()
  const link = `${backendBaseURL}/users/${patientUid}`
  const response = await fetch(link, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
  return data.payload
}

export async function listUserProfiles() {
  const idToken = await getUserToken()
  const link = `${backendBaseURL}/users`
  const response = await fetch(link, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
  return data.payload
}

export async function searchUserProfiles(nameFilter) {
  const idToken = await getUserToken()
  const link = `${backendBaseURL}/users/search/by-name/${nameFilter}`
  const response = await fetch(link, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
  return data.payload
}
