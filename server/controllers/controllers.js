const mongoose = require("mongoose");
const User = mongoose.model("User");
const Product = mongoose.model("Product");
const bcrypt = require("bcryptjs");


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
    details: function(req, res){
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
                if(err){
                    console.log(err);
                    res.jason(err);
                }
            });
        });
    },
    register: function(req, res) {
        bcrypt.hash(req.body.password, 8, function(err, hash) {
            if (err) {
                console.log('error', err);
                res.json(err);
            } else {
                req.body.password = hash;
                var newUser = new User(req.body);
                newUser.save(function(err) {
                    if(err) {
                        console.log('validation errors', err);
                    } else {
                        console.log('registered a new user!');
                        req.session.userId = newUser._id;
                        res.json(newUser);
                    }
                })
            }
        })
    },
    login: function(req, res) {
        User.findOne({email: req.body.email}, function(err, foundUser) {
            if(foundUser) {
                bcrypt.compare(req.body.password, foundUser.password, function(err, result) {
                    if (err) {
                        console.log("passwords didn't match");
                        res.json({error: 'Invalid Login'});
                    } else {
                       console.log('passwords match');
                       req.session.userId = foundUser._id;
                       res.json({message: "logged in!"});
                    }
                })
            }
        })
    },
    delete: function(req, res) {
        console.log('Hit delete');
        Product.remove({_id: req.params.id}, function(err, product) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log("Deleted the ");
                res.json(restaurant);
            }
        })
    },
    new: function(req, res){
        console.log("hit create");
        var newProduct = new Product(req.body);
        newProduct.save(function(err){
            if(err){
                console.log("returned and error");
                res.json(err);
            }else{
                console.log("created a product");
                res.jason(newItem);
            }
        })
    }

}