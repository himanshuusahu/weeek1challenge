import React from 'react';

export function PartnerHub() {
  const partners = [
    {
      name: "Google Gemma 2",
      category: "Best Use of Gemma",
      icon: "fa-brain",
      color: "#4285F4",
      desc: "Open-weight 9B/27B foundation model providing structured recipe JSON extraction and emotional story reasoning."
    },
    {
      name: "ElevenLabs AI Voice",
      category: "Best Use of ElevenLabs",
      icon: "fa-waveform-lines",
      color: "#EC4899",
      desc: "Cloned Grandpa Joe's voice for realistic heirloom recipe audio narration and high-accuracy speech transcription."
    },
    {
      name: "MongoDB Atlas Vector Search",
      category: "Best Use of MongoDB Atlas",
      icon: "fa-database",
      color: "#10B981",
      desc: "Stores vector embeddings for long-term agent memory RAG over all saved family voice recordings."
    },
    {
      name: "Mastra Agent Framework",
      category: "Best Use of Mastra",
      icon: "fa-sitemap",
      color: "#8B5CF6",
      desc: "Orchestrates multi-tool agent workflows with durable step execution across vector search and live web APIs."
    },
    {
      name: "SerpApi Grounding Engine",
      category: "Best Use of SerpApi",
      icon: "fa-globe",
      color: "#F59E0B",
      desc: "Performs live web search for ingredient substitutes and regional culinary history when family notes lack details."
    },
    {
      name: "Sentry Agent Tracing",
      category: "Best Use of Sentry Agent Tracing",
      icon: "fa-chart-network",
      color: "#EF4444",
      desc: "Tracks agent workflow performance, latency metrics, token consumption, and detailed step-by-step tool traces."
    },
    {
      name: "Render & DigitalOcean",
      category: "Best Use of Render / DigitalOcean",
      icon: "fa-cloud-arrow-up",
      color: "#06B6D4",
      desc: "1-click deployment configuration with render.yaml and multi-stage Dockerfile for instant cloud hosting."
    }
  ];

  return (
    <section>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '0.5rem' }}>
          <i class="fa-solid fa-microchip" style={{ color: '#D97706' }}></i> Partner AI Integration Hub
        </h2>
        <p style={{ color: '#94A3B8' }}>
          HeritageScribe AI integrates top open-source AI models and partner technologies into a single fullstack application.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {partners.map((p, idx) => (
          <div key={idx} style={{ background: '#171F30', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.2rem', color: p.color, fontWeight: '700' }}><i class={`fa-solid ${p.icon}`}></i> {p.name}</span>
              <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'rgba(217,119,6,0.15)', color: '#D97706', borderRadius: '99px', fontWeight: '600' }}>{p.category}</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
