let Package = require('../models/Package');

exports.GetAllPackages = function(req, res) {
    Package.GetAllPackages(function(err, packages) {
        if (err)
            res.send(err);
        res.json({
            message: 'Packages listing',
            data: packages
        });
    });
};
