# My Portfolio

Full-stack portfolio monorepo with a React client and Express API server.

## Project structure

```
my-portfolio/
├── client/          # React + Vite frontend
│   ├── public/
│   ├── src/
│   ├── index.html
│   └── package.json
├── server/          # Express API
│   ├── index.js
│   └── package.json
└── package.json     # Root workspace scripts
```

## Getting started

Install dependencies from the root:

```bash
npm install
```

Run both client and server in development:

```bash
npm run dev
```

Or run them separately:

```bash
npm run dev:client   # http://localhost:5173
npm run dev:server   # http://localhost:3001
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start client and server together |
| `npm run dev:client` | Start Vite dev server only |
| `npm run dev:server` | Start Express API only |
| `npm run build` | Build client for production |
| `npm run start` | Start production server |

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Contact form submission |

During development, Vite proxies `/api/*` requests to the server on port 3001.
