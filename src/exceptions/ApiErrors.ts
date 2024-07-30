export class ApiErrors extends Error {
  public status: number;
  public errors?: any[];

  constructor(status: number, message: string, errors?: any[]) {
    super(message);
    this.status = status;
    this.errors = errors;

    //   Saving stack trace for errors
    if (Error.captureStackTrace) {
      // Error.captureStackTrace(this, this.constructor); // auto insert by ws
      Error.captureStackTrace(this, ApiErrors); // Google
    }
  }

  static BadRequest(message: string = 'Bad request', errors: any[] = []): ApiErrors {
    return new ApiErrors(400, message, errors);
  }

  static Unauthorized(message: string = 'Unauthorized'): ApiErrors {
    return new ApiErrors(401, message);
  }

  static Forbidden(message: string = 'Forbidden'): ApiErrors {
    return new ApiErrors(403, message);
  }

  static NotFound(message: string = 'Not found'): ApiErrors {
    return new ApiErrors(404, message);
  }

  static Conflict(message: string = 'Conflict', errors: any[] = []): ApiErrors {
    return new ApiErrors(409, message, errors);
  }

  static UnprocessableEntity(message = 'Unprocessable Entity', errors: any[] = []): ApiErrors {
    return new ApiErrors(422, message, errors);
  }

  static InternalServerError(message = 'Internal Server Error'): ApiErrors {
    return new ApiErrors(500, message, []);
  }
}
