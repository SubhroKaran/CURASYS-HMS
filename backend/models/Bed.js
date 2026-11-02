
import mongoose from 'mongoose';

const bedSchema = new mongoose.Schema({

    bedNumber: {
        type: String,
        required: true,
        unique: true
    },

    ward: {
        type: String,
        required: true
    },

    bedType: {
        type: String,
        enum: ['General', 'ICU', 'Private', 'Semi-Private'],
        required: true
    },

    status: {
        type: String,
        enum: ['Available', 'Occupied', 'Maintenance'],
        default: 'Available'
    },

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        default: null
    },

    assignedDate: {
        type: Date,
        default: null
    }

}, { timestamps: true });

const Bed = mongoose.model('Bed', bedSchema);

export default Bed;
