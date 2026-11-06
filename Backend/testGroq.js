
import "dotenv/config";
import Groq from "groq-sdk";

const testGroq = async () => {
    try {
        const groq = new Groq({
            apiKey: process.env.GROQ_API_KEY
        });

        const response = await groq.chat.completions.create({
            model: "openai/gpt-oss-120b",
            messages: [
                {
                    role: "user",
                    content: "Explain React in 3 simple sentences."
                }
            ]
        });

        console.log("Groq API is working!");
        console.log(response.choices[0].message.content);

    } catch (error) {
        console.log("Groq API test failed:");
        console.log(error.message);
    }
};

testGroq();
