import backendBaseURL from "../api/backendBaseURL";
import HttpError from "../helpers/HttpError";
import ParameterError from "../helpers/ParameterError";

export default async (email, password, fullName) => {
  if (!email) throw new ParameterError("email");
  if (!password) throw new ParameterError("password");
  if (!fullName) throw new ParameterError("fullName");

  const link = `${backendBaseURL}/auth/register`;
  const response = await fetch(link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      fullName,
    }),
  });
  const data = await response.json();

  if (!response.ok) throw new HttpError(response.status, data.message);
};
