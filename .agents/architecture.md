# Architecture Overview

This document describes the high-level architecture, directory layout, and technology stack of the project.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (configured in `tailwind.config.ts` and `src/app/globals.css`)
- **Data Layer:** Static and local mock datasets housed under `src/lib/data.ts`

## Directory Structure

```
├── .agents/               # Persistent AI Agent Context files
│   ├── architecture.md    # This file (high-level system design)
│   ├── decisions.md       # Architecture Decision Records (ADRs)
│   ├── patterns.md        # Codebase-specific implementation patterns
│   └── memory.md          # Active state and task log
├── public/                # Static public assets (images, icons, etc.)
└── src/
    ├── app/               # Next.js App Router folders & pages
    │   ├── actions/       # Server Actions
    │   ├── layout.tsx     # Root Layout
    │   ├── page.tsx       # Home Page
    │   └── [routes]/      # Sub-pages (products, blog, contact, etc.)
    ├── components/        # Reusable UI components
    │   ├── blog/          # Blog-related UI elements
    │   ├── home/          # Homepage sections (Hero, Features, etc.)
    │   ├── layout/        # Site Header, Footer, Navigation
    │   └── ui/            # Basic UI components (buttons, inputs, cards)
    └── lib/               # Shared libraries and mock data
        └── data.ts        # Primary data store for products, reviews, and blogs
```

## Key Components & Flows
1. **Routing:** Managed via file-system routing in `src/app/`.
2. **Global Styling:** Defined in `src/app/globals.css` and powered by Tailwind utility classes.
3. **Mock Database:** Since this is a static showcase/frontend site, all dynamic data like product details, blog posts, and client reviews are defined in `src/lib/data.ts` and imported directly into pages or components.
