let sql = require('./../db.js');

class AppointmentClass {
    static async GetAll(result) {
        return await sql.query("SELECT * from appointments", result);
    }

    static async GetAppointmentById(id, result){
        return await sql.query("SELECT * from appointments where id = ? ", id, result);
    }
    
    static async GetAppointmentByDoctorId(id, startDateTime, endDateTime, result){
        return await sql.query(`
            SELECT a.doctor_id, d.name AS doctor_name, a.patient_id, p.name AS patient_name, date_time, description 
            FROM appointments a
            INNER JOIN patients p ON p.id = a.patient_id
            INNER JOIN doctors d ON d.id = a.doctor_id
            WHERE doctor_id = ? 
            AND date_time >= ?
            AND date_time <= ?`, [id, startDateTime, endDateTime], result);
    }
    
    static async GetAppointmentPatientId(id, startDateTime, endDateTime, result){
        return await sql.query(`
            SELECT * from appointments 
            WHERE patient_id = ? 
            AND date_time >= ?
            AND date_time <= ?`, [id, startDateTime, endDateTime], result);
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