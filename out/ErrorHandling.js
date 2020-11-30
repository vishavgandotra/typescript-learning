export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Validation Error";
    }
}
