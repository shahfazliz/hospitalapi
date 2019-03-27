let Package = require('../models/Package');

class PackageController{
    static async GetAll(req, res){
        try {
            await Package.GetAll(function(err, packages) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Packages listing',
                    data: packages
                });
            });

        } catch (err) {
            res.status(err.code || 500).json({
                msg: err.message
            });
        }
    }

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
            res.status(err.code || 500).json({
                msg: err.message
            });
        }
    }

    static async Create(req, res){
        try {
            await Package.Create(req.body, function(err, packages) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'New package created!',
                    data: packages
                });
            });
        } catch (err) {
            res.status(err.code || 500).json({
                msg: err.message
            });
        }
    }

    static async Update(req, res){
        try{
            await Package.Update(req.params.id, new Package(req.body), function(err, packages) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Package updated!',
                    data: packages
                });
            });
        } catch (err) {
            res.status(err.code || 500).json({
                msg: err.message
            });
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
            res.status(err.code || 500).json({
                msg: err.message
            });
        }
    }
}
module.exports = PackageController;
