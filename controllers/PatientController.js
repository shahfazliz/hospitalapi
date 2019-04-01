let Patient = require('../models/Patient');
const CustomError = require('../CustomError');

class PatientController{
    static async GetAll(req, res){
        try {
            await Patient.GetAll(function(err, patients) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Patients listing',
                    data: patients
                });
            });

        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async GetPatientById(req, res){
        try {
            await Patient.GetPatientById(req.params.id, function(err, patient){
                if (err)
                    res.send(err);
                res.json({
                    message: 'Package details',
                    data: patient
                });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async Create(req, res){
        try {
            await Patient.Create(req.body, function(err, patients) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'New Patient created!',
                    data: patients
                });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async Update(req, res){
        try{
            await Patient.Update(req.params.id, new Patient(req.body), function(err, patients) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Patient updated!',
                    data: patients
                });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async Delete(req, res){
        try{
            await Patient.Remove(req.params.id, function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Patient successfully deleted' });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }
}
module.exports = PatientController;
