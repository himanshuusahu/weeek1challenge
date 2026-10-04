import React, { useState } from 'react';

export function RecipeGrid({ recipes, onOpenRecipe }) {
  const [search, setSearch] = useState('');

  const filtered = recipes.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.chef.toLowerCase().includes(search.toLowerCase()) ||
    r.transcript.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.75rem' }}>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: '700' }}>The Family Heirloom Cookbook</h2>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>Fullstack React + Node.js backend with Google Gemma 2 & ElevenLabs Voice</p>
        </div>
        <div style={{ fontSize: '0.85rem', color: '#D97706', fontWeight: '600' }}>
          Backend Engine: <span style={{ color: '#10B981' }}>Node.js Express + Gemma 2</span>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by recipe, ingredient (San Marzano, cardamom), or chef..."
          style={{ width: '100%', padding: '0.85rem 1.25rem', background: 'rgba(23,31,48,0.85)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', color: '#FFF', fontSize: '0.95rem', outline: 'none' }}
        />
      </div>

      <div class="recipe-grid">
        {filtered.map(r => (
          <div key={r.id} class="recipe-card">
            <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
              <img src={r.image} alt={r.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.3rem 0.75rem', background: 'rgba(11,15,25,0.85)', color: '#D97706', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '600', border: '1px solid rgba(217,119,6,0.35)' }}>
                <i class="fa-solid fa-microphone"></i> {r.chef} ({r.year})
              </span>
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: '0.85rem', color: '#D97706', fontWeight: '600', marginBottom: '0.5rem' }}>
                <i class="fa-solid fa-location-dot"></i> {r.origin}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.75rem' }}>{r.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '1.25rem' }}>"{r.transcript.slice(0, 100)}..."</p>
              
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}><i class="fa-solid fa-utensils"></i> {r.servings} Servings</span>
                <button onClick={() => onOpenRecipe(r)} style={{ padding: '0.5rem 1rem', background: 'rgba(217,119,6,0.15)', color: '#D97706', border: '1px solid rgba(217,119,6,0.35)', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
                  Open Recipe <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
