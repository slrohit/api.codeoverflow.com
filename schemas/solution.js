const customTypes = require('./customTypes');
module.exports = {
    "properties": {
        "cppSolution": customTypes.nonEmptyString,
        "javaSolution": customTypes.nonEmptyString,
        "pythonSolution": customTypes.nonEmptyString,
        "questionId": {
        	type:"integer"
        }
    },
    "required": [
    	"questionId"
    ],
    "type": "object"
}