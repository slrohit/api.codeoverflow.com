const customTypes = require('./customTypes');
module.exports = {
    "properties": {
        "description": customTypes.nonEmptyString,
        "example": customTypes.nonEmptyString,
        "html": customTypes.nonEmptyString,
        "note": customTypes.nonEmptyString,
        "title": customTypes.nonEmptyString
    },
    "required": [
        "html",
        "description",
        "title",
        "example"
    ],
    "type": "object"
}