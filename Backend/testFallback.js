import "dotenv/config";
import { generateCareerRoadmap } from "./services/GeminiService.js";

// Temporarily disable Gemini for this test only
process.env.GEMINI_API_KEY = "";

const testFallback = async () => {
    try {
        const roadmap = await generateCareerRoadmap({
            education: "BCA",
            skills: "HTML, CSS, JavaScript, React",
            targetCareer: "Frontend Developer",
            experienceLevel: "Beginner",
            dailyStudyHours: 3
        });

        console.log("Fallback test successful!");
        console.log(roadmap);

    } catch (error) {
        console.log("Fallback test failed:", error.message);
    }
};

testFallback();