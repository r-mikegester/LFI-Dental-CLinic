export default (timeslot) => {
  const result = new Date(parseInt(timeslot) * 1000).toLocaleString("en-us", {
    day: "numeric",
    timeZone: "Asia/Manila",
  });

  return parseInt(result);
};
