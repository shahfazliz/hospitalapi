let Appointment = require('../models/Appointment');

class AppointmentController{
    static async GetAllAppointments(req, res){
        try {
            await Appointment.GetAllAppointments(function(err, appointments) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Appointments listing',
                    data: appointments
                });
            });

        } catch (err) {
            res.status(err.code || 500).json({
                msg: err.message
            });
        }
    }

    static async GetAppointmentById(req, res){
        try {
            await Appointment.GetAppointmentById(req.params.id, function(err, appointment){
                if (err)
                    res.send(err);
                res.json({
                    message: 'Appointment details',
                    data: appointment
                });
            });
        } catch (err) {
            res.status(err.code || 500).json({
                msg: err.message
            });
        }
    }

    static async Create(req, res){
        try {
            await Appointment.Create(req.body, function(err, appointments) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'New Appointment created!',
                    data: appointments
                });
            });
        } catch (err) {
            res.status(err.code || 500).json({
                msg: err.message
            });
        }
    }

    static async Update(req, res){
        try{
            await Appointment.Update(req.params.id, new Appointment(req.body), function(err, appointments) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Appointment updated!',
                    data: appointments
                });
            });
        } catch (err) {
            res.status(err.code || 500).json({
                msg: err.message
            });
        }
    }

    static async Delete(req, res){
        try{
            await Appointment.Remove(req.params.id, function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Appointment successfully deleted' });
            });
        } catch (err) {
            res.status(err.code || 500).json({
                msg: err.message
            });
        }
    }
}
module.exports = AppointmentController;
