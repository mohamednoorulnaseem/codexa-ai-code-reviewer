import { useState } from "react";
import axios from "axios";
import "./App.css";

import CodeEditor from "./components/CodeEditor";
import IssueList from "./components/IssueList";
import CodexaLogo from "./assets/codexa-logo.svg";

type Issue = {
  line: number;
  severity: string;
  category: string;
  description: string;
  suggestion: string;
};

type ReviewResult = {
  issues: Issue[];
  summary: string;
  score: number;
};

function App() {
  const [code, setCode] = useState("def add(a,b): return a+b");
  const [language, setLanguage] = useState("python");
  const [filename, setFilename] = useState("example.py");

  const [result, setResult] = useState<ReviewResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleReview = async () => {
    if (!code.trim()) {
      setError("Please enter some code to review.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const response = await axios.post<ReviewResult>(
        "http://127.0.0.1:8000/api/review",
        {
          filename,
          language,
          code,
        }
      );
      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError("⚠️ Cannot reach backend. Is FastAPI running?");
    } finally {
      setLoading(false);
    }
  };

  const issueCount = result?.issues?.length ?? 0;

  return (
    <div className="app-shell">
      {/* =============== SIDEBAR =============== */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">
            <img src={CodexaLogo} alt="Codexa Logo" className="logo-img" />
          </div>
          <div className="logo-text">
            <span>Codexa</span>
            <small>AI Code Reviewer</small>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button className="nav-item active">🧪 Review</button>
          <button className="nav-item disabled">📊 History</button>
          <button className="nav-item disabled">⚙️ Settings</button>
        </nav>

        <div className="sidebar-footer">
          <span className="status-dot" /> Backend:{" "}
          <span className="status-text">local</span>
        </div>
      </aside>

      {/* =============== MAIN =============== */}
      <div className="main-area">
        {/* Top Bar */}
        <header className="topbar">
          <div className="topbar-left">
            <h1>AI Review Workspace</h1>
            <p>
              Paste your code, choose a language, and let Codexa analyze it.
            </p>
          </div>

          <div className="topbar-right">
            <input
              className="input-pill"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              placeholder="Filename (example.py)"
            />

            <select
              className="input-pill"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>

            <button
              className="primary-btn"
              onClick={handleReview}
              disabled={loading}
            >
              {loading ? "⏳ Reviewing..." : "🚀 Run Review"}
            </button>
          </div>
        </header>

        {/* Grid Content */}
        <main className="content-grid">
          {/* Editor */}
          <section className="pane pane-editor">
            <div className="pane-header">
              <span className="pane-title">Source Code</span>
              <span className="pane-subtitle">
                Language: <strong>{language}</strong>
              </span>
            </div>
            <CodeEditor code={code} language={language} onChange={setCode} />
          </section>

          {/* Results Section */}
          <section className="pane pane-result">
            {error && <div className="alert error">{error}</div>}

            {/* Score Summary */}
            <div className="cards-row">
              <div className="card metric-card">
                <span className="metric-label">Score</span>
                <span className="metric-value">
                  {result ? `${result.score}/100` : "--"}
                </span>
                <span className="metric-hint">
                  Higher is better (readability & quality)
                </span>
              </div>

              <div className="card metric-card">
                <span className="metric-label">Issues</span>
                <span className="metric-value">{issueCount}</span>
                <span className="metric-hint">
                  Grouped by severity & category
                </span>
              </div>
            </div>

            {/* Summary */}
            <div className="card summary-card">
              <div className="summary-header">
                <span className="summary-title">AI Summary</span>
                <span className="summary-tag">
                  {result ? "Latest review" : "Pending"}
                </span>
              </div>
              <p className="summary-body">
                {result?.summary || "Run a review to get an AI summary here."}
              </p>
            </div>

            {/* Issue List */}
            <div className="card issues-card">
              <div className="issues-header">
                <span className="issues-title">Issue Breakdown</span>
                <span className="issues-tag">
                  {issueCount === 0
                    ? "No issues"
                    : `${issueCount} issue${issueCount > 1 ? "s" : ""}`}
                </span>
              </div>
              <IssueList issues={result?.issues || []} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
