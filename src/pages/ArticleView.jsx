import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { researchPapers, featuredStory, secondaryStory, voicesArticles } from '../data/mockData';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';

const ArticleView = () => {
    const { id } = useParams();

    // Combine all potential data sources
    const allContent = [
        ...researchPapers,
        ...voicesArticles,
        featuredStory,
        secondaryStory
    ];

    // Simple lookup (converting id to string for comparison)
    const article = allContent.find(item => item.id.toString() === id);

    if (!article) {
        return (
            <div className="container" style={{ padding: 'var(--space-2xl) 0', textAlign: 'center' }}>
                <h2>Article not found</h2>
                <Link to="/" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Return Home</Link>
            </div>
        );
    }

    return (
        <div className="article-page container" style={{ padding: 'var(--space-xl) var(--space-md)', maxWidth: '800px' }}>
            <Link to="/research" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)', textDecoration: 'none' }}>
                <ArrowLeft size={16} /> Back to Research
            </Link>

            <header style={{ marginBottom: 'var(--space-xl)' }}>
                <span style={{ color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>
                    {article.category || article.tags?.[0] || 'Article'}
                </span>
                <h1 style={{ fontSize: '2.5rem', marginTop: 'var(--space-sm)', marginBottom: 'var(--space-md)', lineHeight: 1.2 }}>
                    {article.title}
                </h1>

                <div className="flex items-center justify-between" style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-md)' }}>
                    <div className="flex items-center gap-md">
                        <div className="flex items-center gap-xs" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                            <User size={16} />
                            <span style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-xs" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                            <Calendar size={16} />
                            <span>{article.date}</span>
                        </div>
                    </div>
                    {article.readTime && (
                        <div className="flex items-center gap-xs" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                            <Clock size={16} />
                            <span>{article.readTime}</span>
                        </div>
                    )}
                </div>
            </header>

            {article.image && (
                <div style={{ marginBottom: 'var(--space-xl)' }}>
                    <img src={article.image} alt={article.title} style={{ width: '100%', borderRadius: 'var(--radius-md)', maxHeight: '500px', objectFit: 'cover' }} />
                    {article.imageCaption && <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.5rem', fontStyle: 'italic' }}>{article.imageCaption}</p>}
                </div>
            )}

            <div className="article-content" style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--color-text-main)' }}>
                {/* Render full text if available, otherwise summary */}
                {article.fullText ? (
                    article.fullText.split('\n\n').map((paragraph, index) => (
                        <p key={index} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
                    ))
                ) : (
                    <p>{article.summary}</p>
                )}
            </div>

            {article.id === 'ee-irada' && (
                <div style={{ marginTop: 'var(--space-xl)', padding: 'var(--space-lg)', backgroundColor: '#f8f9fa', borderRadius: 'var(--radius-md)' }}>
                    <h3>Research Document</h3>
                    <p>This article is based on the Extended Essay by Irada Hasanli.</p>
                </div>
            )}
        </div>
    );
};

export default ArticleView;
