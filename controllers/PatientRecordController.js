let PatientRecord = require('../models/PatientRecord');
const CustomError = require('../CustomError');

class PatientRecordController{
    static async GetAll(req, res){
        try {
            await PatientRecord.GetAll(function(err, patients) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Patient Records listing',
                    data: patients
                });
            });

        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async GetPatientById(req, res){
        try {
            await PatientRecord.GetPatientRecordById(req.params.id, function(err, patient){
                if (err)
                    res.send(err);
                res.json({
                    message: 'Patient Record details',
                    data: patient
                });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async Create(req, res){
        try {
            await PatientRecord.Create(req.body, function(err, patients) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'New Patient Record created!',
                    data: patients
                });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async Update(req, res){
        try{
            await PatientRecord.Update(req.params.id, new PatientRecord(req.body), function(err, patients) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Patient Record updated!',
                    data: patients
                });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }

    static async Delete(req, res){
        try{
            await PatientRecord.Remove(req.params.id, function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Patient Record successfully deleted' });
            });
        } catch (err) {
            CustomError.handle(err, res);
        }
    }
}
module.exports = PatientRecordController;
