const express = require('express');
const AppointmentRouter = express.Router();
const AppointmentController = require('../controllers/AppointmentController');

AppointmentRouter.get('/', AppointmentController.GetAll);
AppointmentRouter.post('/', AppointmentController.Create);
AppointmentRouter.get('/:id', AppointmentController.GetAppointmentById);
AppointmentRouter.put('/:id', AppointmentController.Update);
AppointmentRouter.delete('/:id', AppointmentController.Delete);
AppointmentRouter.get('/doctor/:id/:startDateTime/:endDateTime', AppointmentController.GetAppointmentByDoctorId);
AppointmentRouter.get('/patient/:id/:startDateTime/:endDateTime', AppointmentController.GetAppointmentByPatientId);

module.exports = AppointmentRouter;
