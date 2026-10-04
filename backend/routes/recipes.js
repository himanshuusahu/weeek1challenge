import express from 'express';
import { db } from '../config/db.js';
import { gemmaService } from '../services/gemmaService.js';

const router = express.Router();

// GET all recipes
router.get('/', async (req, res) => {
  const recipes = await db.getRecipes();
  res.json({ success: true, count: recipes.length, data: recipes });
});

// POST process new voice transcript with Gemma 2
router.post('/extract', async (req, res) => {
  try {
    const { transcript } = req.body;
    if (!transcript) {
      return res.status(400).json({ success: false, error: 'Transcript is required' });
    }

    const recipe = await gemmaService.processAudioTranscript(transcript);
    await db.addRecipe(recipe);

    res.json({ success: true, data: recipe });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
