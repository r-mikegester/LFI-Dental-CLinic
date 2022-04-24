import backendBaseURL from "./backendBaseURL";

export default async () => {
  const link = `${backendBaseURL}/messages`;
  const response = await fetch(link);
  const data = await response.json();
  return data.payload;
};
