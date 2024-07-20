const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/chatbot', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.CHATBOT_API_KEY}`,
            method: 'post',
            data: { contents: [{ parts: [{ text: userMessage }] }] },
        });

        const botResponse = response.data.candidates[0].content.parts[0].text || "Error generating response";
        res.json({ response: botResponse });
    } catch (error) {
        res.status(500).json({ response: "Failed to fetch response. Please try again later." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
