'use strict';
module.exports = function(app) {
    let packageController = require('../controllers/PackageController');

    // todoList Routes
    app.route('/packages')
        .get(packageController.GetAllPackages);
};