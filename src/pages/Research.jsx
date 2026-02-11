import React, { useState } from 'react';
import FilterBar from '../components/research/FilterBar';
import ResearchGrid from '../components/research/ResearchGrid';
import { researchPapers } from '../data/mockData';

const Research = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPapers = activeCategory === "All"
        ? researchPapers
        : researchPapers.filter(paper => paper.tags.includes(activeCategory));

    return (
        <div className="research-page container" style={{ padding: 'var(--space-xl) var(--space-md)' }}>
            <header style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>Insights & Studies</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Deep dives into the mechanisms driving global markets and policy.
                    Objective data, rigorous analysis.
                </p>
            </header>

            <FilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

            <ResearchGrid papers={filteredPapers} />
        </div>
    );
};

export default Research;
