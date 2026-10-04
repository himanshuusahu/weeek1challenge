import React, { useState } from 'react';

export function SubmissionModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const markdownText = `# HeritageScribe AI: Fullstack React + Node.js Heirloom Recipe & Story Agent

**Hackathon Theme:** Build for a Friend / Loved One  
**Built For:** Grandpa Joe & Family  
**Core Stack:** React (Vite), Node.js (Express), Google Gemma 2 Open Model, ElevenLabs Voice, MongoDB Atlas Vector Search, Mastra Agent, SerpApi, Sentry  

---

## 💡 Problem & Inspiration
My 82-year-old grandfather Joe has 45+ years of unwritten heirloom recipes stored verbally in voice notes. I built **HeritageScribe AI** to convert his raw voice memos into a structured, printable family recipe book with zero server privacy risk.

---

## 🚀 Partner AI Technologies Integrated

- **Google Gemma 2 (Best Use of Gemma):** Open-weight 9B/27B model for JSON recipe extraction & emotional story reasoning.
- **ElevenLabs (Best Use of ElevenLabs):** Cloned Grandpa Joe's voice for realistic recipe audio narration.
- **MongoDB Atlas (Best Use of MongoDB Atlas):** Vector search store for long-term agent memory RAG over saved voice notes.
- **Mastra Framework (Best Use of Mastra):** Multi-tool durable agent workflow orchestrator.
- **SerpApi (Best Use of SerpApi):** Live web search grounding for rare ingredient substitutes.
- **Sentry Agent Tracing (Best Use of Sentry):** Telemetry dashboard tracking latency metrics, token count, and step traces.
- **Render / DigitalOcean (Best Use of Render / DigitalOcean):** Dockerfile and render.yaml ready for cloud deployment.
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <div style={{ background: '#171F30', border: '1px solid rgba(217,119,6,0.35)', borderRadius: '24px', maxWidth: '900px', width: '100%', maxHeight: '85vh', overflowY: 'auto', padding: '2.5rem', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', cursor: 'pointer', fontSize: '1.1rem' }}>&times;</button>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem' }}><i class="fa-solid fa-file-lines" style={{ color: '#D97706' }}></i> Hackathon Submission Write-up</h2>
          <button onClick={handleCopy} class="btn-primary">
            <i class={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i> {copied ? 'Copied!' : 'Copy Post Markdown'}
          </button>
        </div>

        <pre style={{ background: 'rgba(15,23,42,0.8)', padding: '1.5rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', color: '#E2E8F0', whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.85rem' }}>
          {markdownText}
        </pre>
      </div>
    </div>
  );
}
