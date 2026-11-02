
import mongoose from 'mongoose';

const billingSchema = new mongoose.Schema({

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },

    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    },

    consultationFee: {
        type: Number,
        default: 0,
        min: 0
    },

    roomCharges: {
        type: Number,
        default: 0,
        min: 0
    },

    medicineCharges: {
        type: Number,
        default: 0,
        min: 0
    },

    otherCharges: {
        type: Number,
        default: 0,
        min: 0
    },

    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },

    paymentMethod: {
        type: String,
        enum: ['Cash', 'Card', 'UPI', 'Insurance'],
        default: 'Cash'
    },

    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Partially Paid'],
        default: 'Pending'
    },

    paidAmount: {
        type: Number,
        default: 0,
        min: 0
    },

    billDate: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true });

const Billing = mongoose.model('Billing', billingSchema);

export default Billing;
