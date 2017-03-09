(function(data) {

var seedData = require("./seeData");
data.getNoteCategories = function(next) {
    next(null,seedData.initials);
}
})(module.exports);