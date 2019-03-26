let sql = require('./../db.js');

//Task object constructor
let Patient = function(patient){
    this.name = patient.name;
    this.ic = patient.ic;
    this.email = patient.email;
    this.contact = patient.contact;
};

Patient.GetAllPatients = function (result) {
    sql.query("SELECT * from patients", function (err, res) {
        if(err) {
            console.error(err);
        }
        else{
            result(null, res);
        }
    });
};

Patient.Create = function (req, result) {
    sql.query("INSERT INTO patients set ?", req, function (err, res) {
        if(err) {
            console.error(err);
        }
        else{
            result(null, res.insertId);
        }
    });
};

Patient.Update = function(id, req, result){
    sql.query("UPDATE patients SET ? WHERE id = ?", [req, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

Patient.Remove = function(id, result){
    sql.query("DELETE FROM patients WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Patient;