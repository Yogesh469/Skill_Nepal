import mongoose from "mongoose";

const RoadmapSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    education: {
        type: String,
        required: true
    },

    skills: {
        type: String,
        required: true
    },

    targetCareer: {
        type: String,
        required: true
    },

    experienceLevel: {
        type: String,
        required: true
    },

    dailyStudyHours: {
        type: Number,
        required: true
    },

    roadmap: {
        type: String,
        required: true
    }

}, { timestamps: true });


const Roadmap = mongoose.model("Roadmap", RoadmapSchema);

export default Roadmap;