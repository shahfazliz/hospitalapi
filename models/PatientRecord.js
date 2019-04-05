let sql = require('./../db.js');

class PatientRecordClass {
    static async GetAll(result) {
        return await sql.query(
            `SELECT pr.created_at, p.name AS patient, d.name AS doctor, pr.diagnosis, pr.treatment
            FROM patient_records pr
            INNER JOIN patients p on p.id = pr.patient_id
            INNER JOIN doctors d on d.id = pr.doctor_id
            ORDER BY pr.created_at DESC`, result);
    }

    static async GetPatientById(id, result){
        return await sql.query("SELECT * from patient_records where patient_id = ? ", id, result);
    }

    static async Create(newPatientRecord, result){
        return await sql.query("INSERT INTO patient_records set ?", newPatientRecord, result);
    }

    static async Update(id, patientRecord, result){
        return await sql.query("UPDATE patient_records SET ? WHERE id = ?", [patientRecord, id], result);
    }

    static async Remove(id, result){
        return await sql.query("DELETE FROM patient_records WHERE id = ?", [id], result);
    }
}

module.exports= PatientRecordClass;