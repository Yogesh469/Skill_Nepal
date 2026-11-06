import { generateCareerRoadmap } from "../services/GeminiService.js";
import Roadmap from "../models/RoadmapSchema.js";


// Generate and Save Roadmap

export const generateRoadmap = async (req, res) => {

    try {

        const {
            education,
            skills,
            targetCareer,
            experienceLevel,
            dailyStudyHours
        } = req.body;


        // Validate Fields

        if (
            !education ||
            !skills ||
            !targetCareer ||
            !experienceLevel ||
            !dailyStudyHours
        ) {

            return res.status(400).json({
                success: false,
                message: "Please provide all required fields"
            });

        }


        // Generate Roadmap Using Gemini

        const roadmapText = await generateCareerRoadmap({
            education,
            skills,
            targetCareer,
            experienceLevel,
            dailyStudyHours
        });


        // Save Roadmap in MongoDB

        const savedRoadmap = await Roadmap.create({

            userId: req.user.id,

            education,
            skills,
            targetCareer,
            experienceLevel,
            dailyStudyHours,

            roadmap: roadmapText

        });


        res.status(200).json({

            success: true,

            message: "Roadmap generated and saved successfully!",

            roadmap: savedRoadmap.roadmap,

            roadmapId: savedRoadmap._id

        });


    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Failed to generate roadmap"

        });

    }

};



// Get Logged-in User's Roadmaps

export const getMyRoadmaps = async (req, res) => {

    try {

        const roadmaps = await Roadmap.find({

            userId: req.user.id

        }).sort({ createdAt: -1 });


        res.status(200).json({

            success: true,

            roadmaps

        });


    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Unable to fetch your roadmaps"

        });

    }

};



export const deleteRoadmap = async (req, res) => {

    try {

        const { id } = req.params;

        const roadmap = await Roadmap.findOneAndDelete({
            _id: id,
            userId: req.user.id
        });

        if (!roadmap) {
            return res.status(404).json({
                success: false,
                message: "Roadmap not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Roadmap deleted successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Unable to delete roadmap"
        });

    }

};
