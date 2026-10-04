import express from 'express';
import { db } from '../config/db.js';
import { serpapiService } from '../services/serpapiService.js';
import { mastraAgent } from '../services/mastraAgent.js';
import { elevenlabsService } from '../services/elevenlabsService.js';

const router = express.Router();

// POST Ask Grandpa RAG query
router.post('/query', async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) return res.status(400).json({ success: false, error: 'Query is required' });

    const result = await mastraAgent.executeAgentWorkflow(query, db, serpapiService, elevenlabsService);
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET Sentry / Mastra agent traces
router.get('/traces', (req, res) => {
  const traces = mastraAgent.getTraces();
  res.json({ success: true, count: traces.length, data: traces });
});

export default router;
