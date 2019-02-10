const mongoose = require("mongoose");
const Model = mongoose.model("Model");

module.exports = {

    index: function(req, res){
        Model.find({},function(err, model) {
            if(err) {
                console.log("Returned an error.");
                res.jason(model);

            }
        })
    },
    showOne: function(req, res){
        Model.findOne({_id: req.params.id}, function(err, model){
        });
    },
    
}