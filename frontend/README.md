# Career Advisor - Complete MERN Stack Application

This is a modern, clean, scalable, and production-ready MERN Stack application.
The project has been completely refactored from a Vite/React/TypeScript template into a fully functional JavaScript-based MERN architecture.

## Project Structure
```text
project-root/
├── frontend/             # React JS + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── components/   # Modular React components
│   │   ├── context/      # React context (Auth)
│   │   ├── services/     # Axios API layer
│   │   ├── styles/       # Pure CSS (global, career-path)
│   │   ├── App.jsx       # Routing
│   │   └── main.jsx      # Entry point
│   └── package.json      # Frontend dependencies
│
└── backend/              # Node.js + Express backend
    ├── config/           # MongoDB configuration
    ├── models/           # Mongoose schemas (User, CareerPath, etc.)
    ├── server.js         # Entry point
    └── package.json      # Backend dependencies
```

## Features
- **Progressive Career Mapping**: Guided step-by-step UI to discover optimal career paths.
- **Pure CSS Styling**: Tailwind has been removed in favor of semantic, custom CSS (`.career-card`, `.flow-container`).
- **Complete TypeScript Removal**: Clean, human-readable modern ES6+ Javascript (`.js` and `.jsx`).
- **MERN Backend**: Express server seamlessly integrated with MongoDB and Mongoose.

## Setup Instructions

### 1. Backend Setup
Navigate into the `backend/` directory:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/career-advisor
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:5173
```

Start the backend development server:
```bash
npm start
```
*(Make sure your local MongoDB instance is running, or replace `MONGO_URI` with a MongoDB Atlas cluster URL).*

### 2. Frontend Setup
Open a new terminal and navigate to the `frontend/` directory:
```bash
cd frontend
npm install
```

Start the Vite development server:
```bash
npm run dev
```

The frontend will be accessible at: `http://localhost:5173/`

## Recent Major Architectural Changes
- Refactored `CareerFlowContainer.jsx` to progressively reveal steps instead of displaying everything at once.
- Migrated all TypeScript syntax to pure Javascript syntax.
- Separated standard `src/` and `server/` codebases into robust `frontend/` and `backend/` projects.
