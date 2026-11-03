
import express from 'express';

import {
    addPatient,
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient
} from '../controllers/patientController.js';

const router = express.Router();

// Add a new patient
router.post('/', addPatient);

// Get all patients
router.get('/', getAllPatients);

// Get a single patient
router.get('/:id', getPatientById);

// Update patient details
router.put('/:id', updatePatient);

// Delete a patient
router.delete('/:id', deletePatient);

export default router;
