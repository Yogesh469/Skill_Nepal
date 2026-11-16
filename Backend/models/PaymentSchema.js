
import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    plan: {
        type: String,
        enum: ["Pro", "Premium"],
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    pidx: {
        type: String,
        unique: true,
        sparse: true
    },

    transactionId: { // if the two user order the same plan with same amount of the money at the same date the system will not be able to differentiate between the two transactions. So we need to add a unique transactionId for each transaction.
        type: String,
        default: null
    },
    purchaseOrderId: {
        type: String,
        required: true,
        unique: true
    },

    billingCycle: {
        type: String,
        enum: ["Monthly", "Yearly"],
        required: true
    },

    status: {
        type: String,
        enum: ["Pending", "Completed", "Failed", "Cancelled"],
        default: "Pending"
    }

}, { timestamps: true });

const Payment = mongoose.model("Payment", PaymentSchema);

export default Payment;
