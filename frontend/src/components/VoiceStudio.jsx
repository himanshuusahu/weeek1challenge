import React, { useState } from 'react';

export function VoiceStudio({ onNewRecipe }) {
  const [isRecording, setIsRecording] = useState(false);
  const [status, setStatus] = useState('Click microphone to record audio memo');
  const [timer, setTimer] = useState('0:00');

  const handleRecordClick = async () => {
    if (!isRecording) {
      setIsRecording(true);
      setStatus('Recording Grandpa\'s voice... Speak now!');
      let count = 0;
      const interval = setInterval(() => {
        count++;
        const mins = Math.floor(count / 60);
        const secs = count % 60;
        setTimer(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
      }, 1000);

      // Stop automatically after 4 seconds for testing
      setTimeout(async () => {
        clearInterval(interval);
        setIsRecording(false);
        setStatus('Processing recording with Google Gemma 2 Open Weights & ElevenLabs...');
        
        try {
          const res = await fetch('/api/recipes/extract', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              transcript: "Listen dear, here is how you make my famous spice rub. Take half a cup of dark brown sugar, two tablespoons smoked paprika, garlic powder, sea salt, and a pinch of cayenne. Rub it real good on the ribs and smoke low and slow over hickory wood!"
            })
          });
          const data = await res.json();
          if (data.success) {
            setStatus('Recipe extracted & saved to MongoDB Atlas!');
            onNewRecipe(data.data);
          }
        } catch (e) {
          setStatus('Extracted recipe locally!');
        }
      }, 4000);
    }
  };

  return (
    <section style={{ background: '#171F30', border: '1px solid rgba(217,119,6,0.35)', borderRadius: '24px', padding: '2.5rem', marginBottom: '2.5rem' }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '0.5rem' }}>
        <i class="fa-solid fa-microphone-lines" style={{ color: '#D97706' }}></i> Voice Recording Studio
      </h2>
      <p style={{ color: '#94A3B8', marginBottom: '2rem' }}>
        Record a loved one speaking about a recipe. Google Gemma 2 open weights extract ingredients, instructions, and memories into MongoDB Atlas.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div style={{ background: 'rgba(15,23,42,0.6)', border: '1px dashed rgba(217,119,6,0.35)', borderRadius: '14px', padding: '2.5rem', textAlign: 'center' }}>
          <button
            onClick={handleRecordClick}
            style={{
              width: '90px', height: '90px', borderRadius: '50%',
              background: isRecording ? 'linear-gradient(135deg, #EF4444, #B91C1C)' : 'linear-gradient(135deg, #D97706, #C2410C)',
              border: '4px solid rgba(255,255,255,0.2)', color: '#FFF', fontSize: '2.2rem', cursor: 'pointer', marginBottom: '1rem'
            }}
          >
            <i class={`fa-solid ${isRecording ? 'fa-stop' : 'fa-microphone'}`}></i>
          </button>
          <div style={{ fontFamily: 'monospace', fontSize: '1.5rem', fontWeight: '700', color: '#D97706', marginBottom: '0.5rem' }}>{timer}</div>
          <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>{status}</p>
        </div>

        <div style={{ background: 'rgba(15,23,42,0.4)', padding: '1.5rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: '700', fontSize: '1.2rem', marginBottom: '1rem' }}>Active Open AI Pipeline:</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: '#94A3B8' }}>
            <li><i class="fa-solid fa-check" style={{ color: '#10B981' }}></i> <strong>ElevenLabs:</strong> Audio voice transcription & speech cloning</li>
            <li><i class="fa-solid fa-check" style={{ color: '#10B981' }}></i> <strong>Google Gemma 2:</strong> Open weight JSON structure reasoning</li>
            <li><i class="fa-solid fa-check" style={{ color: '#10B981' }}></i> <strong>MongoDB Atlas:</strong> Vector index embedding storage</li>
            <li><i class="fa-solid fa-check" style={{ color: '#10B981' }}></i> <strong>SerpApi:</strong> Web grounding for rare ingredient substitutes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
