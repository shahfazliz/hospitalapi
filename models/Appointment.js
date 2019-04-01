let sql = require('./../db.js');

class AppointmentClass {
    static async GetAll(result) {
        return await sql.query("Select * from appointments", result);
    }

    static async GetAppointmentById(id, result){
        return await sql.query("SELECT * from appointments where id = ? ", id, result);
    }

    static async Create(newAppointment, result){
        return await sql.query("INSERT INTO appointments set ?", newAppointment, result);
    }

    static async Update(id, patient, result){
        return await sql.query("UPDATE appointments SET ? WHERE id = ?", [patient, id], result);
    }

    static async Remove(id, result){
        return await sql.query("DELETE FROM appointments WHERE id = ?", [id], result);
    }
}

module.exports= AppointmentClass;