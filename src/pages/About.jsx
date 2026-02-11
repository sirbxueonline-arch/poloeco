import React from 'react';

const About = () => {
    return (
        <div className="about-page container" style={{ padding: 'var(--space-xl) var(--space-md)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: 'var(--space-lg)', textAlign: 'center' }}>About Poleconomics</h1>

                <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: 'var(--space-xl)', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                    "Linking daily political shifts with long-term economic trends."
                </p>

                <section style={{ marginBottom: 'var(--space-2xl)' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>Our Mission</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: 'var(--space-md)' }}>
                        In an era of noise and fragmented information, **Poleconomics** stands as a beacon of clarity. We are dedicated to dissecting the complex interplay between government policy and market dynamics.
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: 'var(--space-md)' }}>
                        We believe that to understand the economy, one must understand the political levers that move it. Conversely, political decisions cannot be evaluated without a rigorous analysis of their economic consequences.
                    </p>
                    <p style={{ fontSize: '1.1rem' }}>
                        Our goal is simple: to provide professionals, investors, and students with the **objective, high-level intelligence** they need to navigate a rapidly changing world.
                    </p>
                </section>

                <section style={{ marginBottom: 'var(--space-2xl)' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>Editorial Standards</h2>
                    <ul style={{ paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        <li><strong>Objectivity:</strong> We follow the data, not the narrative.</li>
                        <li><strong>Depth:</strong> We prioritize comprehensive analysis over clickbait.</li>
                        <li><strong>Clarity:</strong> We make complex economic concepts accessible.</li>
                    </ul>
                </section>

                <section>
                    <h2 style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>Leadership</h2>
                    <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
                        <div className="team-member">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Dr. Elena Rostova</h3>
                            <p style={{ fontStyle: 'italic', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Editor-in-Chief</p>
                            <p>Former macro strategist with over 15 years of experience in G7 fiscal policy analysis.</p>
                        </div>
                        <div className="team-member">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>James K. Thorton</h3>
                            <p style={{ fontStyle: 'italic', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Head of Research</p>
                            <p>Specializes in emerging markets and global trade dynamics. Author of "The New Silk Road."</p>
                        </div>
                    </div>
                </section>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
};

export default About;
