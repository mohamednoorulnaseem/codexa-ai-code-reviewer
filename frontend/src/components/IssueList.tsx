type Issue = {
  line: number;
  severity: string;
  category: string;
  description: string;
  suggestion: string;
};

interface IssueListProps {
  issues: Issue[];
}

const severityClass: Record<string, string> = {
  critical: "issue-card critical",
  high: "issue-card high",
  medium: "issue-card medium",
  low: "issue-card low",
};

export default function IssueList({ issues }: IssueListProps) {
  if (!issues || issues.length === 0) {
    return <p className="no-issues">✅ No issues detected.</p>;
  }

  return (
    <div className="issues-list">
      {issues.map((issue, idx) => (
        <div
          key={idx}
          className={severityClass[issue.severity] || "issue-card low"}
        >
          <div className="issue-header">
            <span className="issue-line">Line {issue.line}</span>
            <span className="issue-meta">
              {issue.category} • {issue.severity}
            </span>
          </div>
          <p className="issue-description">{issue.description}</p>
          <p className="issue-suggestion">
            <strong>Suggestion:</strong> {issue.suggestion}
          </p>
        </div>
      ))}
    </div>
  );
}
