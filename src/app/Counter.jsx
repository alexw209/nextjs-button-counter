'use client';
import {useState} from 'react';
import "./counterStyles.css"

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

        <div className="counter-controls">
          
          {/* Add and Subtract buttons */}
          <div className="counter-button-group">
            <button 
              className="counter-btn-primary"
              onClick={() => setCount(count + step)}
            >
              Increment (+{step})
            </button>
            
            <button 
              className="counter-btn-danger"
              onClick={() => setCount(count - step)}
              disabled={!canSubtract}
            >
              Decrement (-{step})
            </button>
          </div>

          {/* Reset button */}
          <button 
            className="counter-btn-secondary"
            onClick={() => setCount(initialCount)}
          >
            Reset
          </button>

          {/* Change the step amount */}
          <div className="counter-step-container">
            <label htmlFor="step-input" className="counter-step-label">
              Step Value:
            </label>
            <input
              id="step-input"
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value) || 1)}
              className="counter-step-input"
              min="1"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}