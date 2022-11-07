import HttpError from "../helpers/HttpError"
import backendBaseURL from "./backendBaseURL"

export async function toggleMessageArchiveStatus(messageUid) {
  const link = `${backendBaseURL}/messages/${messageUid}`
  const response = await fetch(link, {
    method: "PATCH",
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
}
