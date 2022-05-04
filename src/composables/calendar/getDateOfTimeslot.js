export default (timeslot) => {
  return new Date(parseInt(timeslot) * 1000).getDate();
};
