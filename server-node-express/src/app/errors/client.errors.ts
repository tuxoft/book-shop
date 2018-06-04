export class ClientError extends Error {
}

export class ArrayNotSupportedClientError extends ClientError {
  constructor() {
    super('Array not supported');
  }
}
