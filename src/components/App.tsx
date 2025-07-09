import React, { useEffect, useRef } from 'react';
import { applyRainbowEffect } from './utils/rainbow';
import './App.css';

const App: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (textRef.current) {
            applyRainbowEffect(textRef.current);
        }
    }, []);

    return (
        <div ref={textRef} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Welcome to BrickBox.ai</h1>
            <p>Use AI to power up the robotics!</p>
            <img src='/welcome.webp' alt="Welcome" style={{ height: '300px' }} />
        </div>
    );
};

export default App;