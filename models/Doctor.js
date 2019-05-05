let sql = require('./../db.js');

class DoctorClass {
    static async GetAll(result) {
        return await sql.query("Select * from doctors", result);
    }

    static async GetDoctorById(id, result){
        return await sql.query("SELECT * from doctors where id = ? ", id, result);
    }

    static async Create(newDoctor, result){
        return await sql.query("INSERT INTO doctors set ?", newDoctor, result);
    }

    static async Update(id, doctor, result){
        return await sql.query("UPDATE doctors SET ? WHERE id = ?", [doctor, id], result);
    }

    static async Remove(id, result){
        return await sql.query("DELETE FROM doctors WHERE id = ?", [id], result);
    }
}

module.exports= DoctorClass;