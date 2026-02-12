import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

const newsSources = [
    { name: "BBC News", url: "https://www.bbc.com/news", color: "#bb1919" },
    { name: "Al Jazeera", url: "https://www.aljazeera.com/", color: "#fa9e1b" },
    { name: "Fox News", url: "https://www.foxnews.com/", color: "#003366" },
    { name: "Euronews", url: "https://www.euronews.com/", color: "#004eb4" }
];

const ExternalNews = () => {
    return (
        <div style={{
            backgroundColor: '#f8f9fa',
            padding: 'var(--space-lg)',
            borderRadius: 'var(--radius-md)',
            marginBottom: 'var(--space-xl)',
            border: '1px solid var(--color-border)'
        }}>
            <div className="flex items-center gap-sm" style={{ marginBottom: 'var(--space-md)' }}>
                <Globe size={24} color="var(--color-primary)" />
                <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Global News Sources</h2>
            </div>
            <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-muted)' }}>
                Access reliable reporting from major international networks.
            </p>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
                {newsSources.map((source) => (
                    <a
                        key={source.name}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 'var(--space-md)',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-sm)',
                            borderLeft: `4px solid ${source.color}`,
                            boxShadow: 'var(--shadow-sm)',
                            textDecoration: 'none',
                            color: 'var(--color-text-main)',
                            fontWeight: 600,
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <span>{source.name}</span>
                        <ExternalLink size={16} color="var(--color-text-muted)" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ExternalNews;
