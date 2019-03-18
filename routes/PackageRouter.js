const express = require('express');
const PackageRouter = express.Router();
const PackageController = require('../controllers/PackageController');

/**
 * Endpoint: /api/packages/
 * Fetch all packages
 */
PackageRouter.get('/', PackageController.GetAllPackages);

/**
 * Endpoint: /api/jobs/create
 * Create new job
 */
PackageRouter.post('/create', PackageController.Create);

module.exports = PackageRouter;
