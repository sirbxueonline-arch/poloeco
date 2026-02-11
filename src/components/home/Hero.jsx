import React from 'react';
import { ArrowRight } from 'lucide-react';
import { featuredStory } from '../../data/mockData';

const Hero = () => {
    return (
        <section style={{ padding: 'var(--space-lg) 0', borderBottom: '1px solid var(--color-border)' }}>
            <div className="container grid" style={{ gridTemplateColumns: '1.5fr 1fr', gap: 'var(--space-xl)', alignItems: 'center' }}>

                {/* Content Side */}
                <div style={{ paddingRight: 'var(--space-lg)' }}>
                    <span style={{
                        color: 'var(--color-secondary)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                        letterSpacing: '1px',
                        display: 'block',
                        marginBottom: 'var(--space-sm)'
                    }}>
                        Feature Story
                    </span>
                    <h1 style={{ fontSize: '2.5rem', lineHeight: 1.2, marginBottom: 'var(--space-md)' }}>
                        {featuredStory.title}
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)' }}>
                        {featuredStory.summary}
                    </p>
                    <div className="flex items-center gap-md">
                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            borderRadius: 'var(--radius-sm)',
                            fontWeight: 600
                        }}>
                            Read Analysis <ArrowRight size={18} />
                        </button>
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                            By <strong>{featuredStory.author}</strong> | {featuredStory.date}
                        </span>
                    </div>
                </div>

                {/* Image Side */}
                <div style={{ position: 'relative' }}>
                    <img
                        src={featuredStory.image}
                        alt={featuredStory.title}
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: 'var(--radius-sm)',
                            boxShadow: 'var(--shadow-md)'
                        }}
                    />
                </div>

            </div>

            {/* Mobile styles override via media query helper in JS just for this inline example or use class. 
          Ideally, we use the grid class responsive behavior. 
          Current class 'grid' in index.css doesn't define columns, 'grid-cols-3' does.
          Here we used inline gridTemplateColumns. We need to make it responsive.
      */}
            <style>{`
        @media (max-width: 900px) {
          .container.grid {
            grid-template-columns: 1fr !important;
          }
          .container.grid > div:first-child {
            padding-right: 0 !important;
            order: 2;
          }
           .container.grid > div:last-child {
            order: 1;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
