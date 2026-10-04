import React, { useState } from 'react';

export function RecipeModal({ recipe, onClose }) {
  const [scale, setScale] = useState(1);
  const [isNarrating, setIsNarrating] = useState(false);
  const [elevenAudio, setElevenAudio] = useState(null);

  if (!recipe) return null;

  const handleElevenLabsNarration = async () => {
    setIsNarrating(true);
    try {
      const res = await fetch('/api/voice/narrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: recipe.transcript, chefName: recipe.chef })
      });
      const data = await res.json();
      if (data.success) {
        setElevenAudio(data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsNarrating(false);
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <div style={{ background: '#171F30', border: '1px solid rgba(217,119,6,0.35)', borderRadius: '24px', maxWidth: '900px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '2.5rem', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', cursor: 'pointer', fontSize: '1.1rem' }}>&times;</button>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <span style={{ padding: '0.3rem 0.75rem', background: 'rgba(217,119,6,0.2)', color: '#FBBF24', borderRadius: '99px', fontSize: '0.8rem', fontWeight: '600' }}>
              {recipe.chef}'s Heirloom ({recipe.year})
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>{recipe.title}</h2>
            <p style={{ color: '#D97706', fontWeight: '600', marginBottom: '1rem' }}><i class="fa-solid fa-location-dot"></i> {recipe.origin}</p>

            <div style={{ background: 'rgba(15,23,42,0.7)', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#94A3B8' }}><i class="fa-solid fa-microphone-lines"></i> ElevenLabs AI Voice Narration</span>
                <button onClick={handleElevenLabsNarration} disabled={isNarrating} style={{ padding: '0.4rem 0.85rem', background: '#D97706', color: '#FFF', border: 'none', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer' }}>
                  {isNarrating ? 'Synthesizing...' : `Play in ${recipe.chef}'s Voice`}
                </button>
              </div>
              {elevenAudio && (
                <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#10B981' }}>
                  <i class="fa-solid fa-circle-check"></i> ElevenLabs Voice Active ({elevenAudio.voiceId})
                  <audio controls src={elevenAudio.audioUrl} style={{ width: '100%', marginTop: '0.5rem' }} />
                </div>
              )}
            </div>

            <p style={{ fontStyle: 'italic', background: 'rgba(217,119,6,0.1)', padding: '1rem', borderLeft: '3px solid #D97706', borderRadius: '4px' }}>
              "{recipe.transcript}"
            </p>
          </div>

          <div>
            <img src={recipe.image} alt={recipe.title} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '14px', border: '1px solid rgba(217,119,6,0.35)' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }}>
          <div style={{ background: 'rgba(15,23,42,0.6)', padding: '1.5rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontWeight: '700' }}><i class="fa-solid fa-users"></i> Servings:</span>
              <button onClick={() => scale > 0.5 && setScale(scale - 0.5)} style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', fontWeight: '700', cursor: 'pointer' }}>-</button>
              <span style={{ fontWeight: '700', color: '#D97706' }}>{Math.round(recipe.servings * scale * 10) / 10}</span>
              <button onClick={() => setScale(scale + 0.5)} style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', fontWeight: '700', cursor: 'pointer' }}>+</button>
            </div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', marginBottom: '1rem' }}>Extracted Ingredients</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <input type="checkbox" style={{ accentColor: '#D97706', width: '18px', height: '18px' }} />
                  <span><strong>{Math.round(ing.amount * scale * 100) / 100} {ing.unit}</strong> - {ing.item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', marginBottom: '1rem' }}>Step-by-Step Instructions</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {recipe.instructions.map((inst, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: 'rgba(15,23,42,0.5)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#D97706', color: '#FFF', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {inst.step}
                  </div>
                  <div style={{ fontSize: '0.95rem' }}>{inst.text}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <button onClick={() => window.print()} class="btn-primary"><i class="fa-solid fa-print"></i> Print Recipe Card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
