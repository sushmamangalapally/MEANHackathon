var mongoose = require("mongoose");
var Dress = mongoose.model("Dress");

module.exports = {

    create: function(req, res){
		console.log('fourth: create function Dress controller /server/controllers/dresses.js');		
		Dress.create(req.body, function(err, dress){
			console.log("sending json back to dress factory check browser console")				
			if(err){
				// console.log(err);
				res.json({error: true, errors: err});
			} else {
				res.json(dress);
			}
		})
		},
	
		getthedress: function(req, res){
			console.log("from dresses.js from controller")
			console.log(req.body.thatdress)
			console.log(req.body.dressId)
			Dress.findOne({_id: req.body.dressId}, function(err, dress){
				console.log("found the dress", dress)
				
				dress.update({renton: req.body.thatdress.renton, rentto: req.body.thatdress.rentto}, function(err, thatdress){
					console.log("updating the dress")
					if(err){
						// console.log(err);
						res.json({error: true, errors: err});
					} else {
						res.json(thatdress);
					}
				})
			})
		},

		getSingleDress: function(req, res){
			console.log("from dresses.js from controller")
			console.log(req.body.dressId)
			Dress.findOne({_id: req.body.dressId}, function(err, thisdress){
				console.log("found the dress")
				// dress.update({renton: req.body.rentfrom, rentto: req.body.rentto}, function(err, thatdress){
				// 	console.log("updating the dress")
					if(err){
						// console.log(err);
						res.json({error: true, errors: err});
					} else {
						console.log(thisdress)
						res.json(thisdress);
					}
				})

		},

		getallthedresses: function(req, res){
			Dress.find({}, function(err, allthedresses){
				if(err){
				// console.log(err);
				res.json({error: true, errors: err});
			} else {
				console.log("in controller dresses.js")
				res.json(allthedresses);
			}
			})
		}
}    
