import React from 'react';

export function Navbar({ activeTab, setActiveTab, toggleTheme, isParchment, openSubmissionModal }) {
  return (
    <header class="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div class="brand-icon"><i class="fa-solid fa-book-journal-whills"></i></div>
        <div>
          <div class="brand-title">HeritageScribe AI</div>
        </div>
        <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: 'rgba(217,119,6,0.2)', color: '#FBBF24', borderRadius: '99px', border: '1px solid rgba(217,119,6,0.4)', fontWeight: '600' }}>
          <i class="fa-solid fa-heart"></i> Build for a Friend
        </span>
      </div>

      <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', padding: '0.3rem', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.1)' }}>
          {[
            { id: 'recipes', label: 'Family Cookbook', icon: 'fa-utensils' },
            { id: 'studio', label: 'Voice Studio', icon: 'fa-microphone-lines' },
            { id: 'rag', label: 'Ask Grandpa AI', icon: 'fa-comments' },
            { id: 'traces', label: 'Agent Traces', icon: 'fa-chart-network' },
            { id: 'partners', label: 'Partner AI Hub', icon: 'fa-microchip' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.5rem 1.25rem', border: 'none', borderRadius: '99px', cursor: 'pointer',
                background: activeTab === tab.id ? '#D97706' : 'transparent',
                color: activeTab === tab.id ? '#FFF' : '#94A3B8', fontWeight: '500', fontSize: '0.85rem'
              }}
            >
              <i class={`fa-solid ${tab.icon}`} style={{ marginRight: '0.4rem' }}></i> {tab.label}
            </button>
          ))}
        </div>

        <button class="btn-secondary" onClick={toggleTheme} style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
          <i class={`fa-solid ${isParchment ? 'fa-moon' : 'fa-sun'}`}></i> {isParchment ? 'Dark Mode' : 'Parchment'}
        </button>

        <button class="btn-primary" onClick={openSubmissionModal} style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', background: 'linear-gradient(135deg, #059669, #047857)' }}>
          <i class="fa-solid fa-file-lines"></i> Submission Write-up
        </button>
      </nav>
    </header>
  );
}
