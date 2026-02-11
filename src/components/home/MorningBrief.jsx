import React from 'react';
import { Coffee, ArrowRight } from 'lucide-react';

const MorningBrief = () => {
    return (
        <div style={{
            backgroundColor: '#f8f9fa',
            borderLeft: '4px solid var(--color-primary)',
            padding: 'var(--space-lg)',
            marginBottom: 'var(--space-xl)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="flex items-center gap-sm" style={{ marginBottom: 'var(--space-md)' }}>
                    <Coffee size={24} color="var(--color-secondary)" />
                    <h3 style={{ margin: 0, fontSize: '1.5rem' }}>The Morning Brief</h3>
                </div>

                <p style={{ fontSize: '1.1rem', maxWidth: '800px', marginBottom: 'var(--space-md)' }}>
                    <strong>Good morning.</strong> US Treasury yields have hit a significantly high level, rattling global equity markets. Meanwhile, the Eurozone faces a deepening manufacturing contraction.
                    Here's what you need to know in 5 minutes.
                </p>

                <ul style={{ paddingLeft: '1.5rem', marginBottom: 'var(--space-lg)' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Bond Rout:</strong> 10-year Treasury yield breaches 5%, highest since 2007.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>ECB Stance:</strong> Lagarde signals rates will stay restrictive despite weak growth data.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Oil Jitters:</strong> Brent crude stabilizes near $90/bbl on Middle East tensions.</li>
                </ul>

                <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'transparent',
                    color: 'var(--color-primary)',
                    border: '2px solid var(--color-primary)',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 600,
                    cursor: 'pointer'
                }}>
                    Read Full Briefing <ArrowRight size={16} />
                </button>
            </div>

            {/* Decorative background element */}
            <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '150px',
                height: '150px',
                backgroundColor: '#e6e6e6',
                borderRadius: '50%',
                opacity: 0.2,
                zIndex: 1
            }}></div>
        </div>
    );
};

export default MorningBrief;
