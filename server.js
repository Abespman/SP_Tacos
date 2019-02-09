const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(__dirname + "/publc/dist/public"));

mongoose.connect("mongodb://localhost/ SP_Tacos");

require("./server/config/mongoose.js");
require("./server/models/model.js");
require("./server/config/routes.js")(app);
app.all("*", (req, res, next) =>{
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function() {
    console.log("Listening on port 8000.");
});


