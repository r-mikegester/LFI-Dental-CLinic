import HttpError from "../helpers/HttpError"
import ParameterError from "../helpers/ParameterError"
import backendBaseURL from "./backendBaseURL"

export async function addClosedSlot(slotSeconds) {
  if (!slotSeconds) throw new ParameterError(slotSeconds)

  const link = `${backendBaseURL}/timeslots/closed`
  const response = await fetch(link, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      slotSeconds,
    }),
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
}

export async function deleteClosedSlot(slotSeconds) {
  if (!slotSeconds) throw new ParameterError(slotSeconds)

  const link = `${backendBaseURL}/timeslots/closed/${slotSeconds}`
  const response = await fetch(link, {
    method: "DELETE",
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
}

export async function getClosedSlots(year, month) {
  const link = `${backendBaseURL}/timeslots/closed/${year}/${month}`
  const response = await fetch(link)
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
  return data.payload
}

export async function getUnavailableSlots(year, month) {
  const link = `${backendBaseURL}/timeslots/unavailable/${year}/${month}`
  const response = await fetch(link)
  const data = await response.json()
  return data.payload
}
