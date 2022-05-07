import backendBaseURL from "./backendBaseURL";

export default async (year, month) => {
  const link = `${backendBaseURL}/timeslots/unavailable/${year}/${month}`;
  const response = await fetch(link);
  const data = await response.json();
  return data.payload;
};
