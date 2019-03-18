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

exports.Create = function(req, res) {
    let new_package = new Package(req.body);

    //handles null error
    if(!new_package.package_name){
        res.status(400).send({ error:true, message: 'Please provide package name' });
    }
    else{
        Package.Create(new_package, function(err, packages) {
            if (err)
                res.send(err);
            res.json({
                message: 'New package created!',
                data: packages
            });
        });
    }
};
