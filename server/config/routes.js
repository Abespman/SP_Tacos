const controllers = require("./../controllers/controllers.js");

module.exports = function(app){
    app.get("/shop", controllers.index);
    app.post("/api/login", controllers.login);
    app.post("/api/register", controllers.register);
    app.get("/api/details/:id", controllers.details);
    app.delete("/api/delete/:id", controllers.delete);
    app.put("/api/update", controllers.update);
    app.post("/api/new", controllers.new);
    
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'));
    })
}