
import Patient from '../models/Patient.js';

// 1. ADD NEW PATIENT
export const addPatient = async (req, res) => {
    try {
        const {
            name,
            age,
            gender,
            phone,
            bloodGroup,
            address
        } = req.body;

        const newPatient = await Patient.create({
            name,
            age,
            gender,
            phone,
            bloodGroup,
            address
        });

        res.status(201).json({
            message: 'Patient added successfully',
            patient: newPatient
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error adding patient',
            error: error.message
        });
    }
};


// 2. GET ALL PATIENTS
export const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();

        res.status(200).json({
            count: patients.length,
            patients
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error fetching patients',
            error: error.message
        });
    }
};


// 3. GET SINGLE PATIENT
export const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);

        if (!patient) {
            return res.status(404).json({
                message: 'Patient not found'
            });
        }

        res.status(200).json(patient);

    } catch (error) {
        res.status(500).json({
            message: 'Error fetching patient',
            error: error.message
        });
    }
};


// 4. UPDATE PATIENT
export const updatePatient = async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedPatient) {
            return res.status(404).json({
                message: 'Patient not found'
            });
        }

        res.status(200).json({
            message: 'Patient updated successfully',
            patient: updatedPatient
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error updating patient',
            error: error.message
        });
    }
};


// 5. DELETE PATIENT
export const deletePatient = async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(
            req.params.id
        );

        if (!deletedPatient) {
            return res.status(404).json({
                message: 'Patient not found'
            });
        }

        res.status(200).json({
            message: 'Patient deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error deleting patient',
            error: error.message
        });
    }
};
