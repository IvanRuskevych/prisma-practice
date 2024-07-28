export class ApiExceptions extends Error {
  public status: number;
  public errors?: any[];

  constructor(status: number, message: string, errors?: any[]) {
    super(message);
    this.status = status;
    this.errors = errors;

    //   Saving stack trace for errors
    if (Error.captureStackTrace) {
      // Error.captureStackTrace(this, this.constructor); // auto insert by ws
      Error.captureStackTrace(this, ApiExceptions); // Google
    }
  }

  static BadRequest(message: string = 'Bad request', errors: any[] = []): ApiExceptions {
    return new ApiExceptions(400, message, errors);
  }

  static Unauthorized(message: string = 'Unauthorized'): ApiExceptions {
    return new ApiExceptions(401, message);
  }

  static Forbidden(message: string = 'Forbidden'): ApiExceptions {
    return new ApiExceptions(403, message);
  }

  static NotFound(message: string = 'Not found'): ApiExceptions {
    return new ApiExceptions(404, message);
  }

  static Conflict(message: string = 'Conflict', errors: any[] = []): ApiExceptions {
    return new ApiExceptions(409, message, errors);
  }

  static UnprocessableEntity(message = 'Unprocessable Entity', errors: any[] = []): ApiExceptions {
    return new ApiExceptions(422, message, errors);
  }

  static InternalServerError(message = 'Internal Server Error'): ApiExceptions {
    return new ApiExceptions(500, message, []);
  }
}
