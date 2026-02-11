import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', inflation: 4.0 },
    { name: 'Feb', inflation: 3.8 },
    { name: 'Mar', inflation: 3.5 },
    { name: 'Apr', inflation: 3.2 },
    { name: 'May', inflation: 3.4 },
    { name: 'Jun', inflation: 3.1 },
    { name: 'Jul', inflation: 3.0 },
];

const MarketData = () => {
    return (
        <div style={{ backgroundColor: 'white', padding: 'var(--space-lg)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', marginBottom: 'var(--space-lg)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Global Inflation Trend (G7)</span>
                <span style={{ fontSize: '0.8rem', color: '#888', fontWeight: 400 }}>Year-on-Year %</span>
            </h3>

            <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} domain={[2, 5]} />
                        <Tooltip />
                        <Area type="monotone" dataKey="inflation" stroke="var(--color-primary)" fill="var(--color-accent)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="flex justify-between" style={{ marginTop: 'var(--space-md)', fontSize: '0.8rem', color: '#666' }}>
                <span><strong>Latest:</strong> 3.0% (July)</span>
                <span>Source: OECD Data</span>
            </div>
        </div>
    );
};

export default MarketData;
