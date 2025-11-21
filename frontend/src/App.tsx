import { useState } from "react";
import axios from "axios";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import IssueList from "./components/IssueList";

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
    } catch (err: any) {
      console.error(err);
      setError(
        "Failed to connect to backend. Make sure it is running on 127.0.0.1:8000."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-root">
      <header className="app-header">
        <div>
          <h1>Codexa – AI Code Reviewer</h1>
          <p>Paste your code, run AI review, and see issues instantly.</p>
        </div>
        <div className="badge-row">
          <span className="badge">FastAPI</span>
          <span className="badge">React + TS</span>
          <span className="badge">OpenAI</span>
        </div>
      </header>

      <main className="app-main">
        {/* Left side: Editor + controls */}
        <section className="panel panel-left">
          <div className="controls-row">
            <input
              className="input"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              placeholder="Filename (example.py)"
            />
            <select
              className="select"
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
              className="button"
              onClick={handleReview}
              disabled={loading}
            >
              {loading ? "Reviewing..." : "🚀 Review Code"}
            </button>
          </div>

          <CodeEditor code={code} language={language} onChange={setCode} />
        </section>

        {/* Right side: Summary + issues */}
        <section className="panel panel-right">
          {error && <div className="alert error">{error}</div>}

          <div className="summary-card">
            <div className="summary-header">
              <span className="summary-label">Overall Score</span>
              <span className="summary-score">
                {result ? `${result.score}/100` : "--"}
              </span>
            </div>
            <p className="summary-text">
              {result?.summary || "Run a review to see summary here."}
            </p>
          </div>

          <div className="issues-section">
            <div className="issues-header">
              <h2>Issues</h2>
              <span className="issues-count">
                {result?.issues?.length ?? 0} found
              </span>
            </div>
            <IssueList issues={result?.issues || []} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
