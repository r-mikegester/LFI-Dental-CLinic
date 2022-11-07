export default (timeslot) => {
  const fullTime = new Date(timeslot * 1000)
    .toLocaleString("en-us", {
      timeZone: "Asia/Manila",
    })
    .split(",")[1]

  const hours = fullTime.split(":")[0]
  const minutes = fullTime.split(":")[1]
  const ampm = fullTime.split(" ")[2]
  return `${hours}:${minutes} ${ampm}`
}
