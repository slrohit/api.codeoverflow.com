/**
 * Created by salonasinha on 27/05/17.
 */
const models = require('../models');
const userModel = models["Users"];
const Promise = require('bluebird');
const _ = require('lodash');

exports.alreadyExistsUname = function(uname) {
    return new Promise(function(resolve,reject) {
        return userModel.find({
            where: {
                userName: uname
            },
            raw: true
        }).then(function (result) {
        		console.log(result)
            return resolve(_.isEmpty(result)?true:false);
        })
    })
}