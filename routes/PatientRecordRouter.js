const express = require('express');
const PatientRecordRouter = express.Router();
const PatientRecordController = require('../controllers/PatientRecordController');

PatientRecordRouter.get('/', PatientRecordController.GetAll);
PatientRecordRouter.post('/', PatientRecordController.Create);
PatientRecordRouter.get('/:id', PatientRecordController.GetPatientById);
PatientRecordRouter.put('/:id', PatientRecordController.Update);
PatientRecordRouter.delete('/:id', PatientRecordController.Delete);

module.exports = PatientRecordRouter;
