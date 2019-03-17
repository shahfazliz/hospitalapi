const ApiRouter = require('express').Router();
const PackageRouter = require('./PackageRouter');

ApiRouter.use('/packages?', PackageRouter);

module.exports = ApiRouter;