import { Inngest } from "inngest"; 
import { serve } from "inngest/next";

export const inngest = new Inngest({
  id: "gulak", // Unique app ID
  name: "gulak",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});