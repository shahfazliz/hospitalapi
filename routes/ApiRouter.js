const ApiRouter = require('express').Router();
const PackageRouter = require('./PackageRouter');
const PatientRouter = require('./PatientRouter');
const PatientRecordRouter = require('./PatientRecordRouter');
const AppointmentRouter = require('./AppointmentRouter');

ApiRouter.use('/packages?', PackageRouter);
ApiRouter.use('/patients?', PatientRouter);
ApiRouter.use('/patient_records?', PatientRecordRouter);
ApiRouter.use('/appointments?', AppointmentRouter);

module.exports = ApiRouter;