let sql = require('./../db.js');

//Task object constructor
let Packages = function(packages){
    this.name = packages.name;
    this.description = packages.description;
};

Packages.GetAll = function (result) {
    sql.query("Select * from packages", function (err, res) {
        if(err) {
            console.error(err);
        }
        else{
            result(null, res);
        }
    });
};

Packages.GetPackageById = function (id, result) {
    sql.query("SELECT * from packages where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Packages.Create = function (newPackage, result) {
    sql.query("INSERT INTO packages set ?", newPackage, function (err, res) {
        if(err) {
            console.error(err);
        }
        else{
            result(null, res.insertId);
        }
    });
};
Packages.Update = function(id, packages, result){
    sql.query("UPDATE packages SET ? WHERE id = ?", [packages, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

Packages.Remove = function(id, result){
    sql.query("DELETE FROM packages WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Packages;