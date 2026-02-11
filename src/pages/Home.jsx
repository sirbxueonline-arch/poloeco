import React from 'react';
import Hero from '../components/home/Hero';
import NewsEngine from '../components/home/NewsEngine';
import MorningBrief from '../components/home/MorningBrief';
import DebatePoll from '../components/home/DebatePoll';
import MarketData from '../components/home/MarketData';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            <div className="container" style={{ padding: 'var(--space-xl) var(--space-md)' }}>
                <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: 'var(--space-xl)' }}>

                    {/* Main Content Column */}
                    <div className="main-feed">
                        <MorningBrief />

                        <h2 style={{ borderBottom: '2px solid var(--color-black)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                            Recent Analysis
                        </h2>
                        {/* Placeholder for a list of recent articles */}
                        <div className="article-list">
                            {[1, 2, 3].map(i => (
                                <div key={i} style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '200px', height: '120px', backgroundColor: '#eee', borderRadius: '4px', flexShrink: 0 }}></div>
                                    <div>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>Fiscal Policy</span>
                                        <h3 style={{ fontSize: '1.2rem', margin: '0.25rem 0' }}>The Debt Ceiling Debate: Structural Implications for 2025</h3>
                                        <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>
                                            Analysis of the recent congressional standoff and its long-term effects on bond markets.
                                        </p>
                                        <span style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.5rem', display: 'block' }}>3 hours ago</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <aside className="sidebar">
                        <NewsEngine />
                        <div style={{ height: 'var(--space-lg)' }}></div>
                        <MarketData />
                        <div style={{ height: 'var(--space-lg)' }}></div>
                        <DebatePoll />
                    </aside>

                </div>
            </div>

            {/* Responsive adjustments */}
            <style>{`
        @media (max-width: 900px) {
          .home-page .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
};

export default Home;
