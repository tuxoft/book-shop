export class SecurityError extends Error {
}

export class UnauthorizedAccessSecurityError extends SecurityError {
  constructor() {
    super('Unauthorized access');
  }
}
