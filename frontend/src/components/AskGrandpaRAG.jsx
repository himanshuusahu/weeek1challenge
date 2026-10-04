import React, { useState } from 'react';

export function AskGrandpaRAG() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hello kiddo! Ask me anything about Grandpa Joe's, Grandma Clara's, or Uncle Bob's recipes (e.g. 'Why put butter in marinara?' or 'What substitute can I use for cardamom?')."
    }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!query.trim()) return;
    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch('/api/rag/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMsg })
      });
      const data = await res.json();
      if (data.success) {
        setMessages(prev => [
          ...prev,
          {
            sender: 'ai',
            text: data.data.answer,
            source: data.data.source,
            trace: data.data.trace
          }
        ]);
      }
    } catch (e) {
      setMessages(prev => [...prev, { sender: 'ai', text: "Grandpa says: Always use high quality San Marzano tomatoes, paper-thin sliced garlic, and plenty of love!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ background: '#171F30', border: '1px solid rgba(217,119,6,0.35)', borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '650px' }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '0.5rem' }}>
        <i class="fa-solid fa-comments" style={{ color: '#D97706' }}></i> Ask Grandpa's AI Assistant (Atlas RAG & Mastra Agent)
      </h2>
      <p style={{ color: '#94A3B8', marginBottom: '1.5rem' }}>
        Uses MongoDB Atlas Vector Search, SerpApi live web search, and Mastra Agent workflows.
      </p>

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem', paddingRight: '0.5rem' }}>
        {messages.map((m, idx) => (
          <div
            key={idx}
            style={{
              maxWidth: '80%', padding: '1.25rem', borderRadius: '14px', fontSize: '0.95rem',
              alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
              background: m.sender === 'user' ? '#D97706' : 'rgba(15,23,42,0.8)',
              color: m.sender === 'user' ? '#FFF' : '#F8FAFC',
              border: m.sender === 'user' ? 'none' : '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div>{m.text}</div>
            {m.source && (
              <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#FBBF24' }}>
                <i class="fa-solid fa-quote-left"></i> Source: {m.source.title} ({m.source.chef}, {m.source.year})
              </div>
            )}
            {m.trace && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#10B981', display: 'flex', gap: '0.75rem' }}>
                <span><i class="fa-solid fa-bolt"></i> Latency: {m.trace.totalLatencyMs}ms</span>
                <span><i class="fa-solid fa-layer-group"></i> Tools: MongoDB Atlas + SerpApi + Gemma 2</span>
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div style={{ alignSelf: 'flex-start', background: 'rgba(15,23,42,0.8)', padding: '1rem', borderRadius: '14px', color: '#94A3B8' }}>
            <i class="fa-solid fa-spinner fa-spin"></i> Executing Mastra Agent workflow & MongoDB Atlas Vector Search...
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask Grandpa a question (e.g. 'Substitute for cardamom' or 'Why butter in sauce?')..."
          style={{ flex: 1, padding: '0.85rem 1.25rem', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', color: '#FFF', outline: 'none' }}
        />
        <button onClick={handleSend} class="btn-primary"><i class="fa-solid fa-paper-plane"></i> Ask</button>
      </div>
    </section>
  );
}
