export default class ParameterError extends Error {
  constructor(parameter, errorMessage = "") {
    const parameterName = Object.keys({ parameter })[0];
    const message = errorMessage
      ? `Invalid parameter ${parameterName}: ${errorMessage}`
      : `Invalid or missing parameter ${parameterName}`;
    super(message);
  }
}
