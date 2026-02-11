import React from 'react';
import { FileText, Clock, User } from 'lucide-react';

const ResearchGrid = ({ papers }) => {
    if (papers.length === 0) {
        return <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>No papers found in this category.</div>;
    }

    return (
        <div className="grid grid-cols-3" style={{ gap: 'var(--space-lg)' }}>
            {papers.map(paper => (
                <div key={paper.id} style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: 'var(--space-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer'
                }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    <div className="flex justify-between items-start" style={{ marginBottom: 'var(--space-sm)' }}>
                        <span style={{
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                            color: 'var(--color-secondary)',
                            fontWeight: 700,
                            letterSpacing: '0.5px'
                        }}>
                            {paper.tags[0]}
                        </span>
                        <FileText size={18} color="var(--color-text-muted)" />
                    </div>

                    <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-sm)', flex: 1 }}>
                        {paper.title}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: 'var(--space-md)', lineHeight: 1.5 }}>
                        {paper.summary}
                    </p>

                    <div style={{ borderTop: '1px solid #eee', paddingTop: 'var(--space-md)', marginTop: 'auto' }}>
                        <div className="flex items-center gap-xs" style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.3rem' }}>
                            <User size={14} /> {paper.author}
                        </div>
                        <div className="flex items-center justify-between" style={{ fontSize: '0.8rem', color: '#888' }}>
                            <span>{paper.date}</span>
                            <span className="flex items-center gap-xs"><Clock size={14} /> {paper.readTime}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResearchGrid;
