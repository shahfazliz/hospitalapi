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

Patient.GetPatientById = function (id, result) {
    sql.query("SELECT * from patients where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Patient.Create = function (newPatient, result) {
    sql.query("INSERT INTO patients set ?", newPatient, function (err, res) {
        if(err) {
            console.error(err);
        }
        else{
            result(null, res.insertId);
        }
    });
};

Patient.Update = function(id, patient, result){
    sql.query("UPDATE patients SET ? WHERE id = ?", [patient, id], function (err, res) {
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