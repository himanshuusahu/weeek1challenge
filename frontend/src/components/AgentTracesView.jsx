import React, { useEffect, useState } from 'react';

export function AgentTracesView() {
  const [traces, setTraces] = useState([]);

  useEffect(() => {
    fetch('/api/rag/traces')
      .then(res => res.json())
      .then(data => {
        if (data.success) setTraces(data.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section style={{ background: '#171F30', border: '1px solid rgba(217,119,6,0.35)', borderRadius: '24px', padding: '2.5rem' }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '0.5rem' }}>
        <i class="fa-solid fa-chart-network" style={{ color: '#EF4444' }}></i> Sentry & Mastra Agent Tracing Dashboard
      </h2>
      <p style={{ color: '#94A3B8', marginBottom: '2rem' }}>
        Real-time telemetry showing latency breakdown, token usage, tool executions, and cost estimation ($0.00 for Open Weights).
      </p>

      {traces.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#94A3B8' }}>
          <i class="fa-solid fa-square-poll-vertical" style={{ fontSize: '3rem', color: '#D97706', marginBottom: '1rem' }}></i>
          <h3>No Agent Traces Captured Yet</h3>
          <p>Go to "Ask Grandpa AI" tab and ask a question to generate live agent execution traces!</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {traces.map((tr, idx) => (
            <div key={idx} style={{ background: 'rgba(15,23,42,0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
                <div>
                  <span style={{ fontWeight: '700', fontSize: '1.1rem', color: '#FFF' }}>Trace ID: {tr.traceId}</span>
                  <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Query: "{tr.userQuery}"</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#10B981', fontWeight: '700' }}>{tr.totalLatencyMs} ms</div>
                  <div style={{ fontSize: '0.75rem', color: '#FBBF24' }}>Cost: {tr.sentryTelemetry.estimatedCost}</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                {tr.steps.map((st, stepIdx) => (
                  <div key={stepIdx} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem' }}>
                    <div style={{ fontWeight: '600', color: '#D97706' }}>{st.tool}</div>
                    <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Latency: {st.latencyMs}ms | Status: {st.status}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
