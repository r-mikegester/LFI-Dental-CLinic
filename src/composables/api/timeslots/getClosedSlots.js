import HttpError from "../../helpers/HttpError"
import backendBaseURL from "../backendBaseURL"

export default async (year, month) => {
  const link = `${backendBaseURL}/timeslots/closed/${year}/${month}`
  const response = await fetch(link)
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
  return data.payload
}
