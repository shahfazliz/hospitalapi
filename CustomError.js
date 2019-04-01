const HttpStatus = require('http-status-codes');

class CustomError extends Error {
    /**
     * Create a new error object with the code and message specified
     *
     * @param {string} message           Response message
     * @param {number} [code]     HTTP Status Code to respond with
     */
    constructor(message, code) {
        super();
        // noinspection JSUnresolvedFunction
        Error.captureStackTrace(this, CustomError);
        this.message = code + ': ' + message;
        this.code = code || HttpStatus.INTERNAL_SERVER_ERROR;
    }

    /**
     * Handle the error object, by responding with the code and message that were thrown
     *
     * @param err
     * @param res
     */
    static handle(err, res) {
        console.error('Error Code: ', err.code);
        console.error(err.stack);
        if (!(err instanceof CustomError)) {
            err = new CustomError('Something went wrong.');
        }

        res.status(err.code).json({
            msg: err.message
        })
    }
}

module.exports = CustomError;