
import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },

    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },

    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    },

    symptoms: {
        type: String,
        required: true
    },

    diagnosis: {
        type: String,
        required: true
    },

    treatment: {
        type: String,
        required: true
    },

    notes: {
        type: String
    },

    recordDate: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true });

const MedicalRecord = mongoose.model(
    'MedicalRecord',
    medicalRecordSchema
);

export default MedicalRecord;
