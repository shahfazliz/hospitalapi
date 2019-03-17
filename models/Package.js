let sql = require('./../db.js');

//Task object constructor
let Packages = function(packages){
    this.package_name = packages.package_name;
};

Packages.GetAllPackages = function GetAllPackages(result) {
    sql.query("Select * from packages", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Packages : ', res);
            result(null, res);
        }
    });
};

module.exports= Packages;