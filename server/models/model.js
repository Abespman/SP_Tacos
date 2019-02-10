const mongoose = require ("mongose");
const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];


var UserSchema = new mongoose.Schema({
    first_Name : {type: String},
    last_name : {type: String},
    email: {type: String},
    password: {type: String},
    address: {type: String}, 
    unit: {type: String},
    city: {type: String},
    state: {type: String, required: true, enum: statesArray},
    zip: {type: Number},
    phone_Number: {type: Number},
    }, {timestamps: true})

var ProductSchema = new mongoose.Schema({
    title: {type: String},
    price: {type: Number},
    description: {type: String},
    image: {type: String},
    }, {timestamps: true})

mongoose.model("User", UserSchema);
mongoose.model("Product", ProductSchema);
