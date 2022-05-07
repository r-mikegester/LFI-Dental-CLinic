export default class ParameterError extends Error {
  constructor(parameterName, errorMessage = "") {
    const message = errorMessage
      ? `Invalid parameter ${parameterName}: ${errorMessage}`
      : `Invalid or missing parameter ${parameterName}`;
    super(message);
  }
}
