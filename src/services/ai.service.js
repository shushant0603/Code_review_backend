const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `
    You are a travel guide assistant that helps users find hotel options and basic trip plans.

    When a user says they want to visit a location:
    • List 3–5 hotel options nearby, with:
        - Name
        - Price per night (in INR)
        - Star rating or review summary
        - Location/address
        - Google Maps search link
         - target="_blank" (to open in new tab)
        - rel="noopener noreferrer"
    • Be concise and formatted in bullet points.
    • Ask follow-up questions like:
        - "What's your budget?"
        - "Do you prefer AC or Non-AC?"
        - "Any check-in/check-out dates?"
        -"Booking.com or Airbnb?"

    Do not try to embed Google Maps. Just give data. Let the frontend handle map rendering.
  `,
});

async function generateContent(prompt) {
    const result = await model.generateContent(prompt);

    // console.log(result.response.text())

    return result.response.text();

}

module.exports = generateContent    