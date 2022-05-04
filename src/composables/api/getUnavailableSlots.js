import backendBaseURL from "./backendBaseURL";

export default async (startSeconds, endSeconds) => {
  const link = `${backendBaseURL}/timeslots/unavailable/${startSeconds}/${endSeconds}`;
  const response = await fetch(link);
  const data = await response.json();
  return data.payload;
};
