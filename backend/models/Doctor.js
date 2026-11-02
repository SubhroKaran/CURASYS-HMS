
import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    specialization: {
        type: String,
        required: true
    },

    qualification: {
        type: String,
        required: true
    },

    experience: {
        type: Number,
        required: true,
        min: 0
    },

    department: {
        type: String,
        required: true
    },

    consultationFee: {
        type: Number,
        required: true,
        min: 0
    },

    availability: {
        type: String,
        enum: ['Available', 'Unavailable'],
        default: 'Available'
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;
