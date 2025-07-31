"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function sendMessage(message) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Gemini API key not configured");
    }

    // For the chat model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Create a chat session
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: "You are a helpful healthcare assistant for MediMitra, a doctor appointment platform. Provide concise, helpful responses about healthcare, appointments, and the platform. Keep responses under 100 words and be friendly but professional.",
        },
        {
          role: "model",
          parts: "I understand. I'm here to help with healthcare questions and MediMitra platform assistance. I'll provide concise, friendly, and professional responses.",
        },
      ],
      generationConfig: {
        maxOutputTokens: 150,
        temperature: 0.7,
      },
    });

    // Send the message and get response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return { success: true, message: text };
  } catch (error) {
    console.error("Chat error:", error);
    return { 
      success: false, 
      message: "I'm sorry, I'm having trouble responding right now. Please try again later." 
    };
  }
} 