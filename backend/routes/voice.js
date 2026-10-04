import express from 'express';
import { elevenlabsService } from '../services/elevenlabsService.js';

const router = express.Router();

// POST ElevenLabs text-to-speech audio narration
router.post('/narrate', async (req, res) => {
  try {
    const { text, chefName } = req.body;
    const audioData = await elevenlabsService.generateVoiceNarration(text, chefName);
    res.json({ success: true, data: audioData });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
