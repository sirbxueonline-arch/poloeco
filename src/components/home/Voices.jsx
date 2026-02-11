import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { voicesArticles } from '../../data/mockData';

const Voices = () => {
    return (
        <section style={{ padding: 'var(--space-2xl) 0', backgroundColor: '#f4f6f8' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>Voices from the Field</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Insights from industry experts and thought leaders.</p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)' }}>
                    {voicesArticles.map(article => (
                        <div key={article.id} style={{ backgroundColor: 'white', borderRadius: 'var(--radius-sm)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
                            <img src={article.image} alt={article.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: 'var(--space-lg)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-sm)' }}>{article.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: 'var(--space-md)', lineHeight: 1.6 }}>
                                    {article.summary}
                                </p>
                                <div className="flex items-center justify-between" style={{ marginTop: 'auto' }}>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontWeight: 600 }}>{article.author}</span>
                                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                                        Read More <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Voices;
