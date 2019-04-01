let sql = require('./../db.js');

class PackagesClass {
    static async GetAll(req, res) {
        let package_sql = "SELECT * FROM packages";
        const existingParams = ["name", "description"].filter(field => req[field]);
        if (existingParams.length) {
            package_sql += " WHERE ";
            package_sql += existingParams.map(field => `${field} = ?`).join(" AND ");
        }
        return await sql.query(package_sql, existingParams.map(field => req[field]), res);
    }

    static async GetPackageById(id, result){
        return await sql.query("SELECT * FROM packages WHERE id = ? ", id, result);
    }

    static async Create(newPackage, result){
        return await sql.query("INSERT INTO packages SET ?", newPackage, result);
    }

    static async Update(id, packages, result){
        return await sql.query("UPDATE packages SET ? WHERE id = ?", [packages, id], result);
    }

    static async Remove(id, result){
        return await sql.query("DELETE FROM packages WHERE id = ?", [id], result);
    }
}

module.exports= PackagesClass;