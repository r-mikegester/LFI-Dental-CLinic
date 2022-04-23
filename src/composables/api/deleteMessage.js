export default async (messageUid) => {
  const link = `http://localhost:5000/messages/${messageUid}/delete`;
  const response = await fetch(link);
  await response.json();
};
