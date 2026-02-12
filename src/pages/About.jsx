import React from 'react';

const About = () => {
    return (
        <div className="about-page container" style={{ padding: 'var(--space-2xl) var(--space-md)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <header style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--space-lg)', lineHeight: 1.1 }}>The Story of Poleconomics</h1>
                    <p style={{ fontSize: '1.4rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Tracing our roots and evolution in the world of politics and economics.
                    </p>
                </header>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-lg)', marginBottom: 'var(--space-3xl)' }}>
                    <div style={{ position: 'relative', height: '300px', borderRadius: 'var(--radius-md)', overflow: 'hidden', color: 'white' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', zIndex: 1 }}></div>
                        <img src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=1000&auto=format&fit=crop" alt="Milestones" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 2 }}>
                            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Milestones of Growth</h3>
                            <p style={{ margin: '5px 0 0', opacity: 0.8 }}>January 15, 2026</p>
                        </div>
                    </div>
                    <div style={{ position: 'relative', height: '300px', borderRadius: 'var(--radius-md)', overflow: 'hidden', color: 'white' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', zIndex: 1 }}></div>
                        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" alt="Founding Principles" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 2 }}>
                            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Founding Principles</h3>
                            <p style={{ margin: '5px 0 0', opacity: 0.8 }}>January 15, 2026</p>
                        </div>
                    </div>
                    <div style={{ position: 'relative', height: '300px', borderRadius: 'var(--radius-md)', overflow: 'hidden', color: 'white' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', zIndex: 1 }}></div>
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" alt="Future Aspirations" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 2 }}>
                            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Future Aspirations</h3>
                            <p style={{ margin: '5px 0 0', opacity: 0.8 }}>January 9, 2026</p>
                        </div>
                    </div>
                </div>

                <section style={{ marginBottom: 'var(--space-3xl)', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>Our Editorial Team</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-xl)' }}>
                        We merely update you on news based on reputable articles and daily news channels.
                    </p>

                    <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2xl)' }}>
                        <div className="team-member">
                            <div style={{ width: '200px', height: '250px', margin: '0 auto var(--space-md)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Irada" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Irada Hasanli</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#444' }}>
                                A motivated first-year Politics student at the University of Warwick with experience in journalism, debate, academic assistance, and administrative work. I advocate for dialogue between states and aim to drive meaningful change through this project.
                            </p>
                        </div>
                        <div className="team-member">
                            <div style={{ width: '200px', height: '250px', margin: '0 auto var(--space-md)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" alt="Atilla" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Atilla Hasanli</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#444' }}>
                                Mainly focused on the economic policy section of this website. As an International Baccalaureate student that is interested in the theory of macroeconomics and global economics, I can assure that I bring a wealth of knowledge and insight to our discussions, helping to bridge the gap between theory and practical application.
                            </p>
                        </div>
                    </div>
                </section>

                <section style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    padding: 'var(--space-2xl)',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center'
                }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: 'var(--space-md)', color: 'white' }}>Commitment to Excellence</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: 'var(--space-lg)', opacity: 0.9, maxWidth: '700px', margin: '0 auto var(--space-lg)' }}>
                        At Poleconomics, we prioritize delivering reliable and up-to-date information that empowers our audience to understand complex political and economic landscapes. Our dedication ensures that you receive the best insights every day.
                    </p>
                    <button style={{
                        backgroundColor: '#e6e6ca',
                        color: 'var(--color-text-main)',
                        border: 'none',
                        padding: '0.75rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        borderRadius: 'var(--radius-sm)'
                    }}>
                        Learn More
                    </button>
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
