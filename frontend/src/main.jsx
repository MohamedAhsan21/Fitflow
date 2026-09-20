import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">FITFLOW</p>
        <h1>Smarter fitness planning for real life.</h1>
        <p className="subtitle">
          Personalized workouts, clear progress tracking, and AI-powered coaching in one place.
        </p>
        <div className="cta-row">
          <button>Start plan</button>
          <button className="secondary">View dashboard</button>
        </div>
      </section>

      <section className="cards">
        <article>
          <h2>AI Coach</h2>
          <p>Custom workout recommendations based on your goals and recovery.</p>
        </article>
        <article>
          <h2>Progress</h2>
          <p>Track workouts, macros, and momentum with visual summaries.</p>
        </article>
        <article>
          <h2>Community</h2>
          <p>Stay motivated with accountability, challenges, and shared progress.</p>
        </article>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
