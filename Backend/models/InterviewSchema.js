
import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({

    questionIndex: {
        type: Number,
        required: true
    },

    question: {
        type: String,
        required: true
    },

    answer: {
        type: String,
        required: true
    },

    score: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },

    feedback: {
        type: String,
        default: ""
    }

});

// Main interview schema
const InterviewSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    jobRole: {
        type: String,
        required: true
    },

    difficulty: {
        type: String,
        required: true
    },

    questions: {
        type: [String],
        required: true
    },

    provider: {
        type: String,
        required: true
    },

    answers: {
        type: [AnswerSchema],
        default: []
    },

    totalScore: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },

    overallFeedback: {
        type: String,
        default: ""
    },

    strengths: {
        type: [String],
        default: []
    },

    areasToImprove: {
        type: [String],
        default: []
    },

    status: {
        type: String,
        enum: ["In Progress", "Completed"],
        default: "In Progress"
    }

}, { timestamps: true });

const Interview = mongoose.model("Interview", InterviewSchema);

export default Interview;
