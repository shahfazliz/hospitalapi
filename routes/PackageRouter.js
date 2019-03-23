const express = require('express');
const PackageRouter = express.Router();
const PackageController = require('../controllers/PackageController');

PackageRouter.get('/', PackageController.GetAllPackages);
PackageRouter.post('/', PackageController.Create);
PackageRouter.get('/:id', PackageController.GetPackageById);
PackageRouter.put('/:id', PackageController.Update);
PackageRouter.delete('/:id', PackageController.Delete);

module.exports = PackageRouter;
