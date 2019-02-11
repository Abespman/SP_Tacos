const mongoose = require("mongoose");
const Model = mongoose.model("User");
const Model = mongoose.model("Product");


module.exports = {

    index: function(req, res){
        Product.find({},function(err, model) {
            if(err) {
                console.log("Returned an error.");
                res.json({message: "Error"}, err);
            }else{
                console.log("Sucess");
                res.json(model);
            }
        })
    },
    showOne: function(req, res){
        Product.findOne({_id: req.params.id}, function(err, model){
        });
    },
    delete: function(req, res){
        Product.remove({_id: req.params.id}, function(err, model){
        })
    },
    update: function(req, res){
        Product.findOne({_id: req.params.id}, function(err, model){
            product.title = req.body.title,
            product.price = req.body.price,
            product.description = req.body.description,
            product.image = req.body.image,
            product.save(function(err){
            });
        });
    },
}