const express = require('express');
const PatientRouter = express.Router();
const PatientController = require('../controllers/PatientController');

PatientRouter.get('/', PatientController.GetAllPatients);
PatientRouter.post('/', PatientController.Create);
PatientRouter.put('/:id', PatientController.Update);
PatientRouter.delete('/:id', PatientController.Delete);

module.exports = PatientRouter;
