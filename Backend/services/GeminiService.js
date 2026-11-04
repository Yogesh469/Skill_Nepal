
import { GoogleGenAI } from "@google/genai";

// Generate personalized career roadmap
export const generateCareerRoadmap = async (userData) => {

    // Initialize Gemini after environment variables are loaded
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        throw new Error("GEMINI_API_KEY is missing from .env");
    }

    const ai = new GoogleGenAI({
        apiKey: apiKey
    });

    const {
        education,
        skills,
        targetCareer,
        experienceLevel,
        dailyStudyHours
    } = userData;

    const prompt = `
        You are an experienced career guidance AI.

        Generate a personalized career roadmap using these details:

        Education: ${education}
        Current Skills: ${skills}
        Target Career: ${targetCareer}
        Experience Level: ${experienceLevel}
        Daily Study Hours: ${dailyStudyHours}

        Create a practical roadmap that includes:

        1. Career overview
        2. Skills the user needs to learn
        3. Step-by-step learning phases
        4. Projects to build during learning
        5. Recommended tools and technologies
        6. Estimated learning duration
        7. Final career preparation tips

        Keep the roadmap beginner-friendly, realistic,
        structured, and easy to follow.
    `;

    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: prompt
    });

    return response.text;
};
