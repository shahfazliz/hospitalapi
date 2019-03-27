let sql = require('./../db.js');

class PatientClass {
    static async GetAll(result) {
        return await sql.query("Select * from patients", result);
    }

    static async GetPatientById(id, result){
        return await sql.query("SELECT * from patients where id = ? ", id, result);
    }

    static async Create(newPatient, result){
        return await sql.query("INSERT INTO patients set ?", newPatient, result);
    }

    static async Update(id, patient, result){
        return await sql.query("UPDATE patients SET ? WHERE id = ?", [patient, id], result);
    }

    static async Remove(id, result){
        return await sql.query("DELETE FROM patients WHERE id = ?", [id], result);
    }
}

module.exports= PatientClass;