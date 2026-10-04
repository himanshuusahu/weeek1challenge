import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import recipesRouter from './routes/recipes.js';
import voiceRouter from './routes/voice.js';
import ragRouter from './routes/rag.js';

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../frontend/dist');

app.use(cors());
app.use(express.json());

// Serve static React build files
app.use(express.static(distPath));

// API Routes
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

// SPA fallback to index.html
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api') || req.path === '/health') return next();
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[HeritageScribe Backend] Server listening on port ${PORT}`);
});
