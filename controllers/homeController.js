(function (homeController) {

    var data = require("../data");

    homeController.init = function (app) {
        app.get("/", function (req, res) {
            data.getNoteCategories(function(err,results) {
                console.log(results);
                res.render("index", { title: "nabco",error:err,categories: results });    
            });
        });
    }
})(module.exports);