import mongoose from "mongoose"

const ResumeAnalschema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    fileName: {
        type: String,
        required: true
    },

    score: {
        type: Number,
        required: true
    },

    summary: {
        type: String,
        required: true
    },

    strengths: {
        type: [String],
        default: []
    },

    weaknesses: {
        type: [String],
        default: []
    },

    suggestions: {
        type: [String],
        default: []
    }

}, { timestamps: true })

const Resume = mongoose.model("Resume", ResumeAnalschema)

export default Resume