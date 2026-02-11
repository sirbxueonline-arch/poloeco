import React from 'react';
import { systemsArticles } from '../../data/mockData';

const Systems = () => {
    return (
        <section style={{ padding: 'var(--space-2xl) 0', backgroundColor: 'var(--color-primary)', color: 'white' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)', color: 'white' }}>Understanding Political/Economic Systems</h2>
                    <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>Your guide to navigating political frameworks.</p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)' }}>
                    {systemsArticles.map(article => (
                        <div key={article.id} style={{ position: 'relative', height: '300px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', cursor: 'pointer' }} className="system-card">
                            <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: 'var(--space-lg)',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                            }}>
                                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>{article.title}</h3>
                                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{article.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        @media (max-width: 900px) {
          .grid { grid-template-columns: 1fr !important; }
        }
        .system-card:hover img { transform: scale(1.05); }
      `}</style>
        </section>
    );
};

export default Systems;
