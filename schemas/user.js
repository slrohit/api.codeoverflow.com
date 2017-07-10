/**
 * Created by salonasinha on 27/05/17.
 */
const customTypes = require('./customTypes');
module.exports = {
    "properties": {
        "userName": customTypes.nonEmptyString,
        "email": customTypes.emailType,
        "phoneNo": customTypes.phoneType,
        "password": customTypes.passwordType
    },
    "required": [
        "userName",
        "email",
        "password"
    ],
    "type": "object"
}