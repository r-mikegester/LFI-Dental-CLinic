export default async () => {
  const link = "http://localhost:5000/messages";
  const response = await fetch(link);
  const data = await response.json();
  return data.payload;
};
