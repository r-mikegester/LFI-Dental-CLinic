import HttpError from "../helpers/HttpError";
import ParameterError from "../helpers/ParameterError";
import backendBaseURL from "./backendBaseURL";

export default async (message) => {
  const { senderName, subject, body } = message;

  if (!senderName) throw new ParameterError(senderName);
  if (!subject) throw new ParameterError(subject);
  if (!body) throw new ParameterError(body);

  const link = `${backendBaseURL}/messages`;
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
