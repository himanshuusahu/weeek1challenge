import React from 'react';

export function HeroBanner({ setActiveTab }) {
  return (
    <section style={{
      display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'center',
      padding: '3rem', background: 'linear-gradient(135deg, rgba(23, 31, 48, 0.95), rgba(15, 23, 42, 0.98))',
      borderRadius: '24px', border: '1px solid rgba(217,119,6,0.35)', marginBottom: '2.5rem'
    }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(217,119,6,0.2)', border: '1px solid rgba(217,119,6,0.35)', borderRadius: '99px', color: '#FBBF24', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.25rem' }}>
          <i class="fa-solid fa-sparkles"></i> React + Node.js Fullstack Agent &bull; Google Gemma 2 & ElevenLabs Voice
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.75rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '1rem' }}>
          Preserve Grandpa's Voice & Family Recipes Forever
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '1.05rem', marginBottom: '2rem' }}>
          Turn your loved ones' raw audio notes into an heirloom family recipe book. Powered by Google Gemma 2 Open Weights, ElevenLabs Voice Narration, MongoDB Atlas Vector Search, and SerpApi grounding.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button class="btn-primary" onClick={() => setActiveTab('studio')}>
            <i class="fa-solid fa-microphone"></i> Record Grandpa's Voice
          </button>
          <button class="btn-secondary" onClick={() => setActiveTab('rag')}>
            <i class="fa-solid fa-comments"></i> Ask Grandpa AI
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        {[
          { label: 'Gemma 2', value: 'Open Weights', desc: 'Google Open AI Model' },
          { label: 'ElevenLabs', value: 'Cloned Voice', desc: 'Grandpa Narration' },
          { label: 'Mongo Atlas', value: 'Vector RAG', desc: 'Long-Term Memory' },
          { label: 'SerpApi', value: 'Web Search', desc: 'Substitute Engine' }
        ].map((item, idx) => (
          <div key={idx} style={{ background: 'rgba(15,23,42,0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.25rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '700', color: '#D97706', fontFamily: "'Playfair Display', serif" }}>{item.value}</div>
            <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{item.label}</div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
