let Doctor = require('../models/Doctor');
const CustomError = require('../CustomError');

class DoctorController{
    static async GetAll(req, res){
        try {
            await Doctor.GetAll(function(err, doctors) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Doctors listing',
                    data: doctors
                });
            });

        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async GetDoctorById(req, res){
        try {
            await Doctor.GetDoctorById(req.params.id, function(err, doctor){
                if (err)
                    res.send(err);
                res.json({
                    message: 'Package details',
                    data: doctor
                });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async Create(req, res){
        try {
            await Doctor.Create(req.body, function(err, doctors) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'New Doctor created!',
                    data: doctors
                });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async Update(req, res){
        try{
            await Doctor.Update(req.params.id, new Doctor(req.body), function(err, doctors) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Doctor updated!',
                    data: doctors
                });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async Delete(req, res){
        try{
            await Doctor.Remove(req.params.id, function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Doctor successfully deleted' });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }
}
module.exports = DoctorController;
