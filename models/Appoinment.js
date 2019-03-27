let sql = require('./../db.js');

//Task object constructor
let Appointments = function(appointments){
    this.name = appointments.name;
    this.description = appointments.description;
};

Appointments.GetAllAppointments = function (result) {
    sql.query("Select * from appointments", function (err, res) {
        if(err) {
            console.error(err);
        }
        else{
            result(null, res);
        }
    });
};

Appointments.GetAppointmentById = function (id, result) {
    sql.query("SELECT * from appointments where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Appointments.Create = function (req, result) {
    sql.query("INSERT INTO appointments set ?", req, function (err, res) {
        if(err) {
            console.error(err);
        }
        else{
            result(null, res.insertId);
        }
    });
};
Appointments.Update = function(id, req, result){
    sql.query("UPDATE appointments SET ? WHERE id = ?", [req, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

Appointments.Remove = function(id, result){
    sql.query("DELETE FROM appointments WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Appointments;