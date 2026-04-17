# Coherence Theory Website — Setup Guide

A short onboarding for Richard (or anyone new to the repo).

## Prerequisites

You'll need these installed first:

- **Node.js 20+** — [download from nodejs.org](https://nodejs.org/) (pick the LTS version)
- **Git** — usually pre-installed on Mac; if not, run `xcode-select --install` in Terminal
- **GitHub CLI** (`gh`) — [cli.github.com](https://cli.github.com/) or `brew install gh`
- **Claude Code** — [claude.ai/code](https://claude.ai/code)

## One-time setup

### 1. Authenticate with GitHub

```bash
gh auth login
```

Follow the prompts. Choose HTTPS and "Login with a web browser."

### 2. Accept the collaborator invite

Check your email for an invitation from GitHub to collaborate on `mattgane-bot/coherence-theory-website`. Click the link and accept.

### 3. Clone the repo

```bash
cd ~/Applications   # or wherever you want to keep it
gh repo clone mattgane-bot/coherence-theory-website coherence-theory
cd coherence-theory
```

### 4. Install dependencies

```bash
npm install
```

This pulls down Next.js, React, Tailwind, etc. Takes a minute or two.

### 5. Run the dev server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser. You should see the site.

## Daily workflow

### Making changes

1. Open the folder in Claude Code: just run `claude` in the `coherence-theory` directory
2. Ask Claude to make the changes you want
3. Review the diff
4. Commit: `git add .` then `git commit -m "describe the change"`
5. Push: `git push`

### Publishing changes to the live site

The live site is at: **https://mattgane-bot.github.io/coherence-theory-website/**

To deploy new changes:

```bash
DEPLOY=gh-pages npx next build
npx gh-pages -d out
```

That builds the static site and pushes it to the `gh-pages` branch, which GitHub Pages serves. Takes about a minute for the live site to update after the command finishes.

## Project structure

```
coherence-theory/
├── src/
│   ├── app/              # Pages (one folder per route)
│   │   ├── theory/       # The 8 theory pages
│   │   ├── tools/        # Evaluation, assessment, pattern generator
│   │   └── case-studies/ # Case studies page
│   ├── components/
│   │   ├── diagrams/     # All the interactive diagrams
│   │   ├── ui/           # Reusable UI (nav, ConceptLink, etc.)
│   │   └── tools/        # Evaluation wizard, results
│   ├── data/             # Content data (evaluation steps, etc.)
│   └── lib/              # Utilities, Zustand store
├── public/
│   └── images/           # Static images served by the site
├── next.config.ts        # Next.js config (handles basePath for GitHub Pages)
└── package.json          # Dependencies
```

## Useful commands

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build (catches errors) |
| `npx next build` | Same as above |
| `DEPLOY=gh-pages npx next build` | Build for GitHub Pages |
| `npx gh-pages -d out` | Deploy the `out/` folder to GitHub Pages |
| `git pull` | Pull latest changes from Matt |
| `git push` | Push your changes up |

## Common questions

**"I made a change and the live site didn't update"**
You need to run the deploy commands — `git push` only updates the source code, not the live site.

**"The dev server shows an error"**
Usually a TypeScript issue. Ask Claude to read the error and fix it.

**"Where's the content for page X?"**
Look in `src/app/theory/<page-name>/page.tsx`.

**"How do I add a new page?"**
Create a new folder under `src/app/` with a `page.tsx` file. Claude can walk you through it.

## Getting help

If anything is broken or confusing, just describe the problem to Claude Code and ask for help. The project is well-structured and Claude can navigate it.
