
import mongoose from 'mongoose';
const patientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    bloodGroup: {
        type: String
    },

    address: {
        type: String
    }

}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
