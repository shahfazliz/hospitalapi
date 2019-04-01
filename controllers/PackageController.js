let Package = require('../models/Package');
const CustomError = require('../CustomError');

class PackageController{
    /**
     * Get all packages
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async GetAll(req, res){
        try {
            await Package.GetAll(req.query,function(err, packages) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Packages listing',
                    data: packages
                });
            });

        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    /**
     * Get a single package
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async GetPackageById(req, res){
        try {
            await Package.GetPackageById(req.params.id, function(err, packages){
                if (err)
                    res.send(err);
                res.json({
                    message: 'Package details',
                    data: packages
                });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async Create(req, res){
        try {
            await Package.Create(req.body, function(err, packages) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'New package created!',
                    data: packages.insertId
                });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    /**
     * Edit an existing package
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async Update(req, res){
        try{
            await Package.Update(req.params.id, req.body, function(err, packages) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Package updated!',
                    data: packages
                });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async Delete(req, res){
        try{
            await Package.Remove( req.params.id, function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Package successfully deleted' });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }
}
module.exports = PackageController;
