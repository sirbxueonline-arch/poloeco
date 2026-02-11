import React from 'react';
import { ExternalLink } from 'lucide-react';
import { resources } from '../../data/mockData';

const EssentialResources = () => {
    return (
        <section style={{ padding: 'var(--space-2xl) 0', borderTop: '1px solid var(--color-border)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>Essential Resources</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Linking you to valuable external information.</p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-xl)' }}>
                    {resources.map(resource => (
                        <div key={resource.id} className="resource-item" style={{ display: 'flex', gap: 'var(--space-md)' }}>
                            <img src={resource.image} alt={resource.title} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', flexShrink: 0 }} />
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                                    <a href={resource.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        {resource.title} <ExternalLink size={14} />
                                    </a>
                                </h4>
                                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.4 }}>
                                    {resource.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        @media (max-width: 900px) {
          .resource-item { flex-direction: column; }
          .resource-item img { width: 100%; height: 150px; }
        }
      `}</style>
        </section>
    );
};

export default EssentialResources;
