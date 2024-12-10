interface EnvConfig {
  GEMINI_API_KEY: string;
}

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!GEMINI_API_KEY || GEMINI_API_KEY.trim() === '') {
  throw new Error(
    'VITE_GEMINI_API_KEY is missing. Please add it to your .env file:\n' +
    '1. Create a .env file in the project root\n' +
    '2. Add your Gemini API key: VITE_GEMINI_API_KEY=your_api_key_here\n' +
    '3. Restart the development server'
  );
}

export const env: EnvConfig = {
  GEMINI_API_KEY: GEMINI_API_KEY
};