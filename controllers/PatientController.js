let Patient = require('../models/Patient');

class PatientController{
    static async GetAllPatients(req, res){
        try {
            await Patient.GetAllPatients(function(err, patients) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Patients listing',
                    data: patients
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
            await Patient.Create(req.body, function(err, patients) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'New Patient created!',
                    data: patients
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
            await Patient.Update(req.params.id, new Package(req.body), function(err, patients) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Patient updated!',
                    data: patients
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
            await Patient.Remove( req.params.id, function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Patient successfully deleted' });
            });
        } catch (err) {
            res.status(err.code || 500).json({
                msg: err.message
            });
        }
    }
}
module.exports = PatientController;
