const controllers = require("./../controllers/controllers.js");

module.exports = function(app){
    app.get("/", controllers.index);
}   