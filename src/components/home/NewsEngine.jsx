import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { newsItems } from '../../data/mockData';

const NewsEngine = () => {
    return (
        <div style={{ backgroundColor: 'white', padding: 'var(--space-lg)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 'var(--space-md)', paddingBottom: 'var(--space-sm)', borderBottom: '2px solid var(--color-secondary)' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Latest Intelligence
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', fontWeight: 700, animation: 'pulse 2s infinite' }}>&#9679; LIVE</span>
            </div>

            <div className="news-feed flex flex-col" style={{ gap: 'var(--space-md)' }}>
                {newsItems.map((item) => (
                    <div key={item.id} className="news-item" style={{ borderBottom: '1px solid #eee', paddingBottom: 'var(--space-sm)' }}>
                        <div className="flex items-center justify-between" style={{ marginBottom: '0.25rem' }}>
                            <span style={{
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                color: 'white',
                                backgroundColor: 'var(--color-text-muted)',
                                padding: '2px 6px',
                                borderRadius: '2px'
                            }}>
                                {item.category}
                            </span>
                            <div className="flex items-center gap-xs" style={{ fontSize: '0.75rem', color: '#888' }}>
                                <Clock size={12} /> {item.time}
                            </div>
                        </div>
                        <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 600, margin: '0 0 0.5rem 0' }}>
                            <Link to={`/research/${item.id}`} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>{item.title}</Link>
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: '#555', margin: 0, lineHeight: 1.4 }}>
                            {item.summary}
                        </p>
                    </div>
                ))}
            </div>

            <button style={{
                width: '100%',
                marginTop: 'var(--space-md)',
                padding: '0.75rem',
                backgroundColor: '#f9f9f9',
                border: '1px solid #eee',
                color: 'var(--color-primary)',
                fontWeight: 600,
                fontSize: '0.9rem'
            }}>
                View All News
            </button>

            <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default NewsEngine;
