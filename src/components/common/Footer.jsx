import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f0f0f0', borderTop: '1px solid var(--color-border)', padding: 'var(--space-xl) 0', marginTop: 'var(--space-2xl)' }}>
            <div className="container grid grid-cols-3 gap-lg">
                {/* Column 1: Brand & About */}
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-md)' }}>POLECONOMICS.</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                        Linking daily political shifts with long-term economic trends.
                        Objective, analytical, and educational.
                    </p>
                    <div style={{ fontSize: '0.8rem', color: '#888' }}>
                        © {new Date().getFullYear()} Poleconomics. All rights reserved.
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="flex flex-col gap-md">
                    <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Explore</h4>
                    <Link to="/" style={{ fontSize: '0.9rem' }}>Daily Briefings</Link>
                    <Link to="/research" style={{ fontSize: '0.9rem' }}>Deep Dives & Studies</Link>
                    <Link to="/about" style={{ fontSize: '0.9rem' }}>About Us</Link>
                    <Link to="/contact" style={{ fontSize: '0.9rem' }}>Contact</Link>
                </div>

                {/* Column 3: Subscribe */}
                <div>
                    <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Daily Briefing</h4>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Get the "Morning Brief" delivered to your inbox. 5 minutes, every day.
                    </p>
                    <form style={{ display: 'flex', gap: '0.5rem' }} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            style={{
                                flex: 1,
                                padding: '0.5rem',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontFamily: 'var(--font-sans)'
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                backgroundColor: 'var(--color-primary)',
                                color: 'white',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: '4px',
                                fontWeight: 600
                            }}
                        >
                            Join
                        </button>
                    </form>
                    <div style={{ marginTop: '2rem', borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
                        <span style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase' }}>Supported By</span>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', opacity: 0.6 }}>
                            {/* Placeholders for rental car sponsors if needed, or just generic "Partners" */}
                            <div style={{ background: '#ddd', height: '30px', width: '80px' }}></div>
                            <div style={{ background: '#ddd', height: '30px', width: '80px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
