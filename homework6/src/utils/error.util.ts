export abstract class ErrorLogin extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, ErrorLogin.prototype);
    }

    abstract serializeErrors(): {
        message: string;
        field?: string;
    };
}

export class ErrorUnauthorize extends ErrorLogin {
    statusCode = 401;
    constructor() {
        super('');

        Object.setPrototypeOf(this, ErrorUnauthorize.prototype);
    }

    serializeErrors() {
        return {
            message: 'Unauthorize Error',
        };
    }
}

export class ErrorToken extends ErrorLogin {
    statusCode = 403;
    constructor() {
        super('');

        Object.setPrototypeOf(this, ErrorToken.prototype);
    }

    serializeErrors() {
        return {
            message: 'Error with token',
        };
    }
}