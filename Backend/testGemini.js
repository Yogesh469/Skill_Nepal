
import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const testGemini = async () => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: "Explain what a career roadmap is in two sentences."
        });

        console.log("Gemini API is working!");
        console.log("AI Response:");
        console.log(response.text);

    } catch (error) {
        console.log("Gemini API Error:", error.message);
    }
};

testGemini();
