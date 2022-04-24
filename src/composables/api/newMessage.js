import HttpError from "../helpers/HttpError";
import ParameterError from "../helpers/ParameterError";

export default async (message) => {
  const { senderName, subject, body } = message;

  if (!senderName) throw new ParameterError(senderName);
  if (!subject) throw new ParameterError(subject);
  if (!body) throw new ParameterError(body);

  const link = `http://localhost:5000/messages`;
  const response = await fetch(link, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  const data = await response.json();

  if (!response.ok) throw new HttpError(response.status, data.message);
};
