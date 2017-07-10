module.exports = {
    "nonEmptyString": {
        "type": "string",
        "minLength": 1
    },
    "emailType": {
        "type": "string",
        "format": "email"
    },
    "phoneType": {
        "type": "string",
        "pattern": "^[0-9()\\-\\.\\s]+$"
    },
    "passwordType": {
        //Minimum 8 characters at least 1 Alphabet and 1 Number
        "type": "string",
        "minLength": 5/*,
        "pattern": "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"*/
    }
}