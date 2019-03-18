let sql = require('./../db.js');

//Task object constructor
let Packages = function(packages){
    this.package_name = packages.package_name;
    this.package_description = packages.package_description;
};

Packages.GetAllPackages = function (result) {
    sql.query("Select * from packages", function (err, res) {

        if(err) {
            console.error(err);
        }
        else{
            result(null, res);
        }
    });
};

Packages.Create = function (req, result) {
    sql.query("INSERT INTO packages set ?", req, function (err, res) {

        if(err) {
            console.error(err);
        }
        else{
            result(null, res.insertId);
        }
    });
};

module.exports= Packages;