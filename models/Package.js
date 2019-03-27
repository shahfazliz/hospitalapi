let sql = require('./../db.js');

class PackagesClass {
    static async GetAll(result) {
        return await sql.query("Select * from packages", result);
    }

    static async GetPackageById(id, result){
        return await sql.query("SELECT * from packages where id = ? ", id, result);
    }

    static async Create(newPackage, result){
        return await sql.query("INSERT INTO packages set ?", newPackage, result);
    }

    static async Update(id, packages, result){
        return await sql.query("UPDATE packages SET ? WHERE id = ?", [packages, id], result);
    }

    static async Remove(id, result){
        return await sql.query("DELETE FROM packages WHERE id = ?", [id], result);
    }
}

module.exports= PackagesClass;