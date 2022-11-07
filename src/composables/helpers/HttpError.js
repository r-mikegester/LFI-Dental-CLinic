export default class HttpError extends Error {
  constructor(httpErrorCode, httpErrorMessage) {
    const message = `Got status code ${httpErrorCode}: ${httpErrorMessage}`
    super(message)
    this.httpErrorCode = httpErrorCode
    this.httpErrorMessage = httpErrorMessage
  }
}
