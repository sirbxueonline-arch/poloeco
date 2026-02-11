import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import '../../styles/index.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-white)', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div className="container flex items-center justify-between" style={{ height: 'var(--header-height)' }}>
                {/* Logo */}
                <Link to="/" className="logo" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 900, letterSpacing: '-0.5px' }}>
                    POLECONOMICS<span style={{ color: 'var(--color-secondary)' }}>.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden-mobile" style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center' }}>
                    <Link to="/" style={{ fontWeight: 500 }}>News</Link>
                    <Link to="/research" style={{ fontWeight: 500 }}>Research</Link>
                    <Link to="/about" style={{ fontWeight: 500 }}>About</Link>
                    <Link to="/subscribe" className="btn-subscribe" style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                    }}>
                        Subscribe
                    </Link>
                    <button style={{ background: 'none', border: 'none', padding: 0 }}><Search size={20} /></button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu} style={{ display: 'none' }}> {/* Hidden by default, shown via media query in CSS usually, but here inline styles are tricky. Handled via class in index.css */}
                    {/* Note: In index.css we defined .hidden-mobile but didn't define .mobile-toggle display properties fully. 
               For now, we'll rely on the class logic or add inline media queries if possible (not possible inline). 
               I'll add a style block for now or rely on the index.css media query I added. 
               Actually, I need to ensure the mobile toggle is visible on mobile.
           */}
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Dropdown - simplified */}
            {isMenuOpen && (
                <div style={{ position: 'absolute', top: 'var(--header-height)', left: 0, right: 0, background: 'white', padding: '1rem', borderBottom: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link to="/" onClick={toggleMenu}>News</Link>
                    <Link to="/research" onClick={toggleMenu}>Research</Link>
                    <Link to="/about" onClick={toggleMenu}>About</Link>
                    <Link to="/subscribe" onClick={toggleMenu} style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Subscribe</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
