import HttpError from "../helpers/HttpError";

export default async (messageUid) => {
  const link = `http://localhost:5000/messages/${messageUid}/delete`;
  const response = await fetch(link);
  const data = await response.json();

  if (!response.ok) throw new HttpError(response.status, data.message);
};
