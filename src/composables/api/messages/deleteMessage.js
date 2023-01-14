import HttpError from "../../helpers/HttpError"
import backendBaseURL from "../backendBaseURL"

export default async (messageUid) => {
  const link = `${backendBaseURL}/messages/${messageUid}/delete`
  const response = await fetch(link, {
    method: "DELETE",
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
}
