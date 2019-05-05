const express = require('express');
const DoctorRouter = express.Router();
const DoctorController = require('../controllers/DoctorController');

DoctorRouter.get('/', DoctorController.GetAll);
DoctorRouter.post('/', DoctorController.Create);
DoctorRouter.get('/:id', DoctorController.GetDoctorById);
DoctorRouter.put('/:id', DoctorController.Update);
DoctorRouter.delete('/:id', DoctorController.Delete);

module.exports = DoctorRouter;
