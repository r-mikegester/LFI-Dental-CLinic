import HttpError from "../helpers/HttpError"
import ParameterError from "../helpers/ParameterError"
import backendBaseURL from "./backendBaseURL"

export default async (slotSeconds) => {
  if (!slotSeconds) throw new ParameterError(slotSeconds)

  const link = `${backendBaseURL}/timeslots/closed/${slotSeconds}`
  const response = await fetch(link, {
    method: "DELETE",
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
}
