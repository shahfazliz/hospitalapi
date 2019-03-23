const ApiRouter = require('express').Router();
const PackageRouter = require('./PackageRouter');
const PatientRouter = require('./PatientRouter');

ApiRouter.use('/packages?', PackageRouter);
ApiRouter.use('/patients?', PatientRouter);

module.exports = ApiRouter;