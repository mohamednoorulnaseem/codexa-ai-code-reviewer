# ⚡ Codexa – AI Code Reviewer 🧠💻

[![Python Version](https://img.shields.io/badge/python-3.14-blue.svg)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green.svg)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-Frontend-blue.svg)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Codexa is a full-stack AI-powered code review system that analyzes source code and automatically generates:

- 🔍 Detected issues (bugs, style, security, performance)
- 📌 Exact line numbers
- 💡 Actionable improvement suggestions
- 🧾 Detailed summary
- 🏆 Quality score (0–100)

Built using **FastAPI + Python (backend)** & **React + TypeScript (frontend)**, powered by **OpenAI Responses API**.

---

## 🚀 Features

| Feature                  | Description                         |
| ------------------------ | ----------------------------------- |
| 🧠 AI-powered analysis   | Understands code and finds problems |
| 🐍 Multi-language ready  | Extendable to JS, C++, Java         |
| 📌 Line-by-line feedback | Highlights exact issue locations    |
| 🔐 Secure key handling   | `.env` protection (not in Git)      |
| 📊 Quality scoring       | Calculates maintainability          |
| 🌐 Modern UI             | Easy pasting and reviewing of code  |

---

## 📁 Project Structure

```
codexa-ai-code-reviewer/
│
├── backend/
│   ├── codexa_backend/
│   │   ├── __init__.py
│   │   ├── main.py          (FastAPI endpoints + CORS)
│   │   └── ai_reviewer.py   (OpenAI request + JSON parsing)
│   │
│   ├── .env                 (ignored) OPENAI API key
│   ├── .env.example         (env template)
│   └── requirements.txt     (Python dependencies)
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx          (UI + API call)
│   │   ├── App.css          (UI styling)
│   │   └── ...
│   ├── vite.config.ts       (Vite config)
│   └── package.json         (React dependencies)
│
└── README.md
```

---

## ⚙️ Installation & Usage

### 💻 1️⃣ Backend Setup (FastAPI)

```
cd backend
py -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file inside `backend/` and add:

```
OPENAI_API_KEY=your_openai_api_key_here
```

▶️ Run the backend:

```
uvicorn codexa_backend.main:app --reload --port 8000
```

📌 Open docs: http://127.0.0.1:8000/docs

---

### 🌐 2️⃣ Frontend Setup (React + TypeScript)

Open a **new terminal** (keep backend running):

```
cd frontend
npm install
npm run dev
```

🌍 Access UI: http://localhost:5173

---

## 📬 Example API Usage

### 📥 Request: `POST /api/review`

```
{
  "filename": "example.py",
  "language": "python",
  "code": "def add(a,b): return a+b"
}
```

### 📤 Example Response

```
{
  "issues": [
    {
      "line": 1,
      "severity": "low",
      "category": "style",
      "description": "Function definition lacks spacing.",
      "suggestion": "Use: def add(a, b): return a + b"
    }
  ],
  "summary": "Logic works but lacks readability due to spacing.",
  "score": 90
}
```

---

## 🧭 Roadmap

- 🔧 Multi-language support (JS, C++, Java)
- 🛡️ Security vulnerability detection
- 🎯 Cyclomatic complexity metrics
- 🧪 Auto-generated test cases
- 🔌 GitHub PR integration

---

## 👨‍💻 Author

Developed by **Mohamed Noorul Naseem**  
_AI & Backend Engineering Enthusiast_

---

## 🤝 Contribute

Pull requests are welcome!  
Have ideas? Open an issue or contribute.

---

### ⭐ If you like Codexa, don’t forget to star the repo!
