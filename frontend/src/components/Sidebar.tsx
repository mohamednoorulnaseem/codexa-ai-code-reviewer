// src/components/Sidebar.tsx
import React from "react";
import CodexaLogo from "../assets/codexa-logo.svg";
import "./Sidebar.css"; // optional if you want separate CSS

type SidebarProps = {
  activeTab: "review" | "history" | "settings";
  onChangeTab: (tab: "review" | "history" | "settings") => void;
};

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onChangeTab }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo-block">
        <div className="sidebar-logo-circle">
          <img src={CodexaLogo} alt="Codexa logo" className="sidebar-logo" />
        </div>
        <div className="sidebar-text">
          <h1 className="sidebar-title">Codexa</h1>
          <p className="sidebar-subtitle">AI Code Reviewer</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <button
          className={`sidebar-nav-item ${
            activeTab === "review" ? "active" : ""
          }`}
          onClick={() => onChangeTab("review")}
        >
          <span>⚡ Review</span>
        </button>

        <button
          className={`sidebar-nav-item ${
            activeTab === "history" ? "active" : ""
          }`}
          onClick={() => onChangeTab("history")}
        >
          <span>📜 History</span>
        </button>

        <button
          className={`sidebar-nav-item ${
            activeTab === "settings" ? "active" : ""
          }`}
          onClick={() => onChangeTab("settings")}
        >
          <span>⚙️ Settings</span>
        </button>
      </nav>

      <div className="sidebar-footer">
        <span className="sidebar-status-dot" />
        <span className="sidebar-status-text">
          Backend: <span className="sidebar-status-value">local</span>
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
