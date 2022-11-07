export default (timeslot) => {
  return new Date(timeslot * 1000).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Manila",
  })
}
