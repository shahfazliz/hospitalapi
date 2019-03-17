let Package = require('../models/Package');

exports.GetAllPackages = function(req, res) {
    Package.GetAllPackages(function(err, packages) {
        console.log('controller');
        if (err)
            res.send(err);
        console.log('res', packages);
        res.send(packages);
    });
};
