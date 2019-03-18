const express = require('express');
const PackageRouter = express.Router();
const PackageController = require('../controllers/PackageController');

/**
 * Endpoint: /api/packages/
 * Fetch all packages
 */
PackageRouter.get('/', PackageController.GetAllPackages);

module.exports = PackageRouter;
