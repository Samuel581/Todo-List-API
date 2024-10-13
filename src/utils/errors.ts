export class NotFoundError extends Error{
    constructor(message: string) {
        super(message);
        this.name = "NotFoundError";
    }
}

export class InvalidCredentialsError extends Error{
    constructor(message: string){
        super(message);
        this.name = "InvalidCredentialsError";
    }
}