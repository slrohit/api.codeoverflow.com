const router = require('express').Router();
const Ajv = require('ajv');
const models = require('../models');
var Sequelize = require("sequelize");

// models
const questionModel = models['Questions'];
const solutionModel = models['Solutions'];

// jsonValidator
const jsonValidator = new Ajv();


// all routes
router.get('/', getAllQuestions);
router.get('/all', getAllQuestions);
router.get('/:id', getQuestion);
router.post('/create', createQuestion);
router.get('/solution/:id', getSolution);
router.get('/suggest/:query', getQuestionSuggestions);



function getAllQuestions(req,res){
	if( isNaN(req.query.offset) || isNaN(req.query.limit) ){
		res
			.status(400)
			.json({
				message:"Invalid query parameters both limit and offset must be integers",
				code:"400"
			});
	}
	questionModel
				.findAndCountAll({
					offset: parseInt(req.query.offset),
					limit: parseInt(req.query.limit),
					raw:true
				})
				.then(function ( Questions ) {
					res
						.status(200)
						.json(Questions);
				})
				.catch(function ( err ) {
					res
						.status(500)
						.json({
							message:"Internal server error!",
							code:500
						});
				});
}

function getQuestion(req,res){
	if( isNaN(req.params.id) ){
		res
			.status(400)
			.json({
				message:"Invalid query parameters id must be an integers",
				code:400
			});
	}
	var questionId = parseInt(req.params.id);
	questionModel
				.findById(questionId)
				.then( function (question) {
					res
						.status(200)
						.json(question.dataValues);
				})
				.catch( function () {
					res
						.status(500)
						.json({
							message:"Internal server error!",
							code:500
						});
				});
}

function createQuestion(req, res){
	const questionSchema = require('../schemas/question');
	var valid = jsonValidator.validate(questionSchema, req.body)
	if (!valid) {
		console.log(jsonValidator.errors);
		res
			.status(400)
			.json({
				message:"Invaid json",
				error:jsonValidator.errors,
				code:400
			});
	}else{
		questionModel
			.create(req.body)
			.then( function(ques) {
				res
					.status(201)
					.json({
						message:"question created",
						code:201
					});
			})
			.catch ( function (err){
				res
					.status(500)
					.json({
						message:"Internal server error",
						error:err,
						code:500
					})
			});
	}
}

function getSolution(req, res){
	const solutionId = parseInt(req.params.id);
	solutionModel
		.findById(solutionId)
		.then( function(solution) {
			res
				.status(200)
				.json(solution.dataValues);
		})
}

function getQuestionSuggestions(req, res){
	const searchTerm = req.params.query;
	questionModel
		.findAll({
			where: {
				$or: [
			    	Sequelize.where(Sequelize.fn('lower',Sequelize.col('title')),
			      {
			        $like: '%'+searchTerm +'%'
			      })
			      ,
			      Sequelize.where(Sequelize.fn('lower',Sequelize.col('description')),
			      {
			        $like: '%'+searchTerm +'%'
			      })
				]
			},
			raw:true,
			limit: 5
		})
		.then(function ( Questions ) {
			res
				.status(200)
				.json(Questions);
		})
		.catch(function ( err ) {
			res
				.status(500)
				.json({
					message:"Internal server error!",
					code:500
				});
		});
}

module.exports = router;