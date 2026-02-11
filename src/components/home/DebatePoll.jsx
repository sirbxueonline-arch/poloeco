import React, { useState } from 'react';
import { pollData } from '../../data/mockData';

const DebatePoll = () => {
    const [voted, setVoted] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleVote = (optionId) => {
        setSelectedOption(optionId);
        setVoted(true);
    };

    return (
        <div style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: 'var(--space-lg)',
            borderRadius: 'var(--radius-sm)',
            boxShadow: 'var(--shadow-md)'
        }}>
            <div style={{
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: '1rem',
                opacity: 0.8
            }}>
                Debate of the Week
            </div>

            <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>
                {pollData.question}
            </h3>

            {!voted ? (
                <div className="flex flex-col" style={{ gap: '1rem' }}>
                    {pollData.options.map(option => (
                        <button
                            key={option.id}
                            onClick={() => handleVote(option.id)}
                            style={{
                                textAlign: 'left',
                                padding: '1rem',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: 'white',
                                borderRadius: '4px',
                                transition: 'background 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            ) : (
                <div className="results">
                    {pollData.options.map(option => {
                        const isSelected = option.id === selectedOption;
                        return (
                            <div key={option.id} style={{ marginBottom: '1rem' }}>
                                <div className="flex justify-between" style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                    <span>{option.label}</span>
                                    <strong>{isSelected ? option.votes + 1 : option.votes}%</strong>
                                </div>
                                <div style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>
                                    <div style={{
                                        height: '100%',
                                        width: `${isSelected ? option.votes + 1 : option.votes}%`,
                                        backgroundColor: isSelected ? 'var(--color-secondary)' : 'white',
                                        borderRadius: '4px'
                                    }}></div>
                                </div>
                            </div>
                        );
                    })}
                    <p style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.7 }}>
                        Thank you for voting!
                    </p>
                </div>
            )}
        </div>
    );
};

export default DebatePoll;
