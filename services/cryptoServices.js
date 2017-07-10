/**
 * Created by salonasinha on 28/05/17.
 */
var crypto = require('crypto')
/**
 * User Schema
 */

module.exports = {
    /**
     * Make salt
     *
     * @return {String}
     * @api public
     */

    makeSalt: function () {
        return  crypto.randomBytes(32).toString('base64').substr(0,8);
    },

    /**
     * Encrypt password
     *
     * @param {String} password
     * @return {String}
     * @api public
     */

    encryptPassword: function (password,salt) {
        
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    }
};
