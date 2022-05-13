export default class FirestoreError extends Error {
  constructor(taskName, errorMessage) {
    const message = `Error while ${taskName}: ${errorMessage}`;
    super(message);
  }
}
