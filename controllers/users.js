const router = require('express').Router();
const models = require('../models');
const Ajv = require('ajv');
const jsonValidator = new Ajv();
const userService = require('../services/userServices');
const cryptoService = require('../services/cryptoServices');
const userModel = models["Users"];
const _ = require('lodash');

router.get('/', function(req,res){

});
router.get('/:id', function(req,res){
	
});

router.get('/username/:uname',validateUname)

router.post('/create',createUser);

router.post('/auth',authenticate)

function validateUname(req,res) {
    const uname = req.params.uname;
    userService.alreadyExistsUname(uname)
        .then(function (result) {
            res
                .status(200)
                .json({'isValid': result})
        })
        .catch(function (err) {
            console.error("error in checking validity of uname " + err)
            res
                .status(500)
                .json({
                    message: "Internal server error!",
                    code: 500
                });
        })
}
function createUser(req,res) {
    const userSchema = require('../schemas/user');
    var valid = jsonValidator.validate(userSchema, req.body);
    if(valid){
        var user = _.cloneDeep(req.body);
        user.salt = cryptoService.makeSalt();
        user.password = cryptoService.encryptPassword(req.body.password,user.salt);
        userModel
            .create(user)
            .then( function() {
                res
                    .status(201)
                    .json({
                        message:"user created",
                        code:201
                    });
            })
            .catch(function (err) {
                console.log(err)
                var message = "Internal server error";
                if(err.errors){
                    if( errors[0].type &&  errors[0].type == 'unique violation' ){
                        message = errors[0].path + " already exist"
                    }
                }
                res
                    .status(500)
                    .json({
                        message:message,
                        error:err.errors ? err.errors:'something went wrong',
                        code:500
                    })
            })
    }else{
        console.log(jsonValidator.errors);
        res
            .status(400)
            .json({
                message:"Invaid json",
                error:jsonValidator.errors,
                code:400
            });
    }
}

function authenticate(req,res) {

    var params = _.cloneDeep(req.body);
    console.log("params",params)
    if( _.isUndefined(params.userName) || _.isUndefined(params.password) ){
        res
            .status(400)
            .json({
                message:"Invalid user parameters fields cant be empty",
                code:400
            });
    }
    userModel
        .find(
            {
                where: {
                    userName: params.userName
                },
                raw: true
            }
        )
        .then( function (user) {
            if(!_.isEmpty(user)){
                console.log(user);
                console.log(cryptoService.encryptPassword(params.password,user.salt));
                if(cryptoService.encryptPassword(params.password,user.salt) === user.password){
                    res
                        .status(200)
                        .json({
                            "status":"ok"
                        });
                }else{
                    res
                        .status(401)
                        .json({"status":"bad","message":"Wrong password"});
                }
            }else{
                res
                    .status(401)
                    .json({"status":"bad","message":"Invalid userName"});
            }
        })
        .catch( function (err) {
            console.log(err)
            res
                .status(500)
                .json({
                    message:"Internal server error!",
                    code:500
                });
        });
}

module.exports = router;