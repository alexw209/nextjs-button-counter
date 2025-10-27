'use client';
import {useState} from 'react';
import "./counterStyles.css";

export default function Counter({initialCount = 0, initialStep = 1}) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);
  const canSubtract = count >= step;

  return (
    <div className="counter-container">
      <div className="counter-card">
        
        <h1 className="counter-title">Counter</h1>

        {/* The big number display */}
        <div className="counter-display" aria-live="polite">
          {count}
        </div>

        </div>
      </div>
  );
}