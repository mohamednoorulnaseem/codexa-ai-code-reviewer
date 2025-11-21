# ⚡ Codexa – AI Code Reviewer 🧠💻

[![Python Version](https://img.shields.io/badge/python-3.14-blue.svg)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green.svg)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-Frontend-blue.svg)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Codexa is a full-stack **AI-powered code review system** that analyzes source code and automatically generates:

- 🔍 **Detected issues** (bug / style / security / performance)
- 📌 **Line numbers indicating problems**
- 💡 **Suggestions for improvements**
- 🧾 **Readable descriptive summary**
- 🏆 **Overall quality score (0–100)**

Built with **FastAPI (Backend)** + **React + TypeScript (Frontend)** using **OpenAI’s latest Responses API**.

---

## 🚀 Features

| Feature                      | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| 🧠 AI-powered review         | Uses OpenAI to analyze uploaded source code                  |
| 🐍 Multi-language capable    | Currently supports Python; easily extendable to JS, C++, etc |
| 📌 Precise line feedback     | Shows exact lines where issues occur                         |
| 🔐 Secure environment config | `.env` for secret keys (ignored by Git)                      |
| 📊 Quality Score             | Calculates maintainability and readability score             |
| 🌐 Web UI                    | User-friendly interface to paste and review code             |

---

## 🛠️ Tech Stack

### 🔧 Backend

- Python **3.14**
- FastAPI
- Uvicorn
- OpenAI Responses API
- Dotenv

### 🎨 Frontend

- React + TypeScript
- Vite + Rollup
- Axios
- CSS

---

## 📁 Project Structure

```text
codexa-ai-code-reviewer/
│
├── backend/
│   ├── codexa_backend/
│   │   ├── __init__.py
│   │   ├── main.py          # FastAPI API + CORS
│   │   └── ai_reviewer.py   # Calls OpenAI + parses JSON response
│   │
│   ├── .env                 # (ignored) contains OPENAI_API_KEY
│   ├── .env.example         # Template for environment variables
│   └── requirements.txt     # Backend dependencies
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx          # UI logic + API call
│   │   ├── App.css          # UI theme (dark)
│   │   └── ...
│   ├── vite.config.ts       # Frontend config
│   └── package.json
│
└── README.md

## ⚙️ Installation & Usage

### 💻 1️⃣ Backend Setup (FastAPI)

cd backend
py -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt

📌 Create a `.env` file inside `backend/` and add:

OPENAI_API_KEY=your_openai_api_key_here

▶️ Run the backend server:

uvicorn codexa_backend.main:app --reload --port 8000

📌 Open API Docs:
http://127.0.0.1:8000/docs

---

### 🌐 2️⃣ Frontend Setup (React + TypeScript)

Open a **new terminal** (do NOT close backend)

cd frontend
npm install
npm run dev

🌍 Frontend URL:
http://localhost:5173

---

## 📬 Example API Usage

### 📥 Request
POST /api/review

{
  "filename": "example.py",
  "language": "python",
  "code": "def add(a,b): return a+b"
}

### 📤 Example Response

{
  "issues": [
    {
      "line": 1,
      "severity": "low",
      "category": "style",
      "description": "Function definition should have spaces after commas...",
      "suggestion": "Rewrite as: def add(a, b):\\n    return a + b"
    }
  ],
  "summary": "Function works correctly but lacks readability due to inline formatting.",
  "score": 90
}

---

## 🧭 Roadmap

- Multi-language support (JS, C++, Java)
- Security vulnerability scanning
- Cyclomatic complexity metrics
- Auto-generated test cases
- GitHub pull-request integration

---

## 👨‍💻 Author

Developed by **Mohamed Noorul Naseem**
_AI & Backend Engineering Enthusiast_

---

## 🤝 Contribute

Pull requests are welcome!
Have ideas? Open an issue or contribute.

---

### ⭐ If you like Codexa, don’t forget to **star the repo!**
```
