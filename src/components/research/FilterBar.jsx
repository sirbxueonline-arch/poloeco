import React from 'react';

const categories = ["All", "Fiscal Policy", "Global Trade", "Macroeconomics", "Digital Assets", "Emerging Markets"];

const FilterBar = ({ activeCategory, onCategoryChange }) => {
    return (
        <div style={{ marginBottom: 'var(--space-lg)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-md)' }}>
            <span style={{ marginRight: 'var(--space-md)', fontWeight: 600, fontSize: '0.9rem' }}>Filter By:</span>
            <div className="flex" style={{ gap: '0.5rem', flexWrap: 'wrap', display: 'inline-flex' }}>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        style={{
                            padding: '0.4rem 1rem',
                            borderRadius: '20px',
                            border: activeCategory === category ? '1px solid var(--color-primary)' : '1px solid #ddd',
                            backgroundColor: activeCategory === category ? 'var(--color-primary)' : 'white',
                            color: activeCategory === category ? 'white' : 'var(--color-text-main)',
                            fontSize: '0.85rem',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterBar;
