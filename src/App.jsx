import { useState } from 'react';

const features = [
  { emoji: '🔄', label: 'CI/CD pipelines' },
  { emoji: '🧪', label: 'Automated testing' },
  { emoji: '📦', label: 'Release management' },
  { emoji: '⚙️', label: 'Repository automation' },
];

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container">
      <h1>Hello World! 🚀</h1>
      <p className="subtitle">
        This React app was built with <strong>Vite</strong> and deployed to{' '}
        <strong>AWS S3</strong> via <strong>GitHub Actions</strong>.
      </p>

      <div className="info-card">
        <h2>What Are GitHub Actions?</h2>
        <p>
          GitHub Actions automate your software development workflows right in
          your repository.
        </p>

        <button
          className="toggle-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Hide' : 'Show'} Features
        </button>

        {expanded && (
          <ul>
            {features.map((f) => (
              <li key={f.label}>
                <span className="emoji">{f.emoji}</span> {f.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <footer>
        <p>Built for the GitHub Actions Lunch &amp; Learn</p>
      </footer>
    </div>
  );
}

export default App;
