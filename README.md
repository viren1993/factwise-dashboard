# FactWise People Dashboard

A production-grade employee analytics dashboard built with React + AG Grid.

## Setup & Run

```bash
npm install
npm start
```

Then open http://localhost:3000

## Features

- **AG Grid** (client-side) with pagination, sorting, filtering, column resize & reorder
- **Quick search** — filters across all fields in real time
- **Department filter** — dropdown to isolate a team
- **Status filter** — Active / Inactive employees
- **CSV Export** — downloads current filtered view
- **KPI strip** — live stats that update with filters (headcount, avg salary, avg rating, etc.)
- **Rich cell renderers**: avatar initials, dept colour badges, animated rating bars, skill tags, project dot-matrix, tenure calculator
- **Row multi-select** supported

## Tech Stack

- React 18
- AG Grid Community 31 (`ag-grid-react`)
- Google Fonts (DM Serif Display + DM Sans)
- Pure CSS (no Tailwind / MUI dependency)
