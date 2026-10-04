import express from 'express';
import cors from 'cors';
import recipesRouter from './routes/recipes.js';
import voiceRouter from './routes/voice.js';
import ragRouter from './routes/rag.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/recipes', recipesRouter);
app.use('/api/voice', voiceRouter);
app.use('/api/rag', ragRouter);

// Health check endpoint for Render / DigitalOcean
app.get('/health', (req, res) => {
  res.json({
    status: 'online',
    app: 'HeritageScribe AI Fullstack API',
    engine: 'Google Gemma 2 Open Weights',
    partners: ['ElevenLabs', 'MongoDB Atlas Vector Search', 'Mastra Agent', 'SerpApi', 'Sentry']
  });
});

app.listen(PORT, () => {
  console.log(`[HeritageScribe Backend] Server listening on http://localhost:${PORT}`);
});
