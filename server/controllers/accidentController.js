const OpenAI = require('openai');
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const path = require('path');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const messages = [];
const handleAccident = async (req, res) => {
  try {

    const imagePath = req.file ? path.join(__dirname, '../', req.file.path) : null;
    const { firstQuestion, question } = req.body;
    console.log('firstQuestion,question', firstQuestion, question);

    let imageAnalysis = '';

    if (imagePath) {
      imageAnalysis = "This is where you'd put the analysis of the image.";
    }

    let prompt = '';
    if (imageAnalysis && question) {
      prompt = `An accident has occurred. The image analysis says: ${imageAnalysis}. 
                The user has also asked: "${question}". Please provide recommendations for the next steps.`;
    } else if (imageAnalysis) {
      prompt = `An accident has occurred. The image analysis says: ${imageAnalysis}. 
                Please provide recommendations for the next steps and any first aid guidance.`;
    }
    else if (firstQuestion) {

      prompt += `An accident has been reported involving a victim with the following details:
      - Age: ${firstQuestion.age}
      - Gender: ${firstQuestion.gender}
      - Incident Time: ${firstQuestion.incidentTime}
      - Description: ${firstQuestion.incidentDesc}
      - Symptoms: ${firstQuestion.symptoms.join(', ')}

      Based on the provided information, please provide recommendations for the next steps, first aid, and any safety measures.\n`;

    }
    else if (question) {
      prompt = `You are a first aid assistant. A user has asked: "${question}". 
                Please provide guidance for accident response and safety measures.`;
    } else {
      return res.status(400).json({ message: 'Please provide either an image or a question.' });
    }



    const userMessage = { role: "user", content: prompt };
    messages.push(userMessage);


    const chatResponse = await openai.chat.completions.create({
      // model: 'gpt-4o',
      messages: messages,
      model: 'gpt-3.5-turbo',
      max_tokens: 150,
    });

    const aiMessage = chatResponse.choices[0].message;
    messages.push(aiMessage);

    // const responseText = chatResponse.choices[0];     
console.log('aiMessage',aiMessage);

    res.status(200).json({
      message: 'Accident analysis result',
      response: aiMessage,
    });

    if (imagePath) {
      fs.unlinkSync(imagePath);
    }
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ message: 'Error processing the request', error: error.message });
  }
};

module.exports = { handleAccident };





