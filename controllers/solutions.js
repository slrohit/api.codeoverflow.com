const router = require('express').Router();
const Ajv = require('ajv');
const models = require('../models');

// models
const questionModel = models['Questions'];
const solutionModel = models['Solutions'];

// jsonValidator
const jsonValidator = new Ajv();


// all routes
router.post('/create', createSolution);
router.get('/:id', getSolution);



function createSolution(req, res){
	const solutionSchema = require('../schemas/solution');
	var valid = jsonValidator.validate(solutionSchema, req.body)
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
		solutionModel
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
	if( isNaN(req.params.id) ){
		res
			.status(400)
			.json({
				message:"Invalid query parameters id must be an integers",
				code:400
			});
	}
	var solutionPromise;
	if( req.query.include == 'question' ){
		solutionPromise = solutionModel
												.findById(solutionId,{
													include : questionModel
												});
	}else{
		solutionPromise = solutionModel
												.findById(solutionId);
	}
	solutionPromise
		.then( function(solution) {
			res
				.status(200)
				.json(solution.dataValues);
		})
		.catch( function (){
			res
				.status(500)
				.json({
					message:"Internal server error",
					error:err,
					code:500
				})
		})
}
module.exports = router;