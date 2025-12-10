# Implementation Plan: Book Master Plan

**Branch**: `002-book-master-plan` | **Date**: 2025-12-07 | **Spec**: specs/002-book-master-plan/spec.md
**Input**: Feature specification from `specs/002-book-master-plan/spec.md`

## Summary

The goal is to create a comprehensive book master plan, including parts, modules, chapters, structure, navigation, and the Docusaurus project layout, for a Physical AI & Humanoid Robotics textbook. The technical approach involves using Docusaurus with a module-centric card grid homepage, Algolia DocSearch integration, and standardized chapter templates with rich metadata.

## Technical Context

**Language/Version**: TypeScript 5.x, JavaScript (ES2022)
**Primary Dependencies**: Docusaurus 3.x, React 18.x, Algolia DocSearch, Node.js 18.x+
**Storage**: Filesystem (Markdown, JSON)
**Testing**: Jest, React Testing Library, Docusaurus default test utilities, link-check, Lighthouse CI
**Target Platform**: Web Browser (Static Site)
**Project Type**: Web application (Docusaurus static site)
**Performance Goals**: <2s FCP, <4s LCP, 90+ Lighthouse score, <500ms search response
**Constraints**: GitHub Pages deployment, Static site generation, Markdown-based content
**Scale/Scope**: 4 Modules, 13 Weeks of content per module (approx 52 chapters), ~500 pages

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The plan adheres to the project constitution:
- **Accuracy**: The plan includes tasks for validating all content against authoritative sources.
- **Clarity**: The plan is structured to produce clear, step-by-step instructions.
- **Reproducibility**: A core goal, with research tasks specifically aimed at ensuring version compatibility.
- **Rigor**: The plan emphasizes using peer-reviewed sources and validating AI-generated content.
- **Safety & Ethics**: The project is simulation-focused, adhering to the constitution's safety principle.

## Project Structure

### Documentation (this feature)

```text
specs/002-book-master-plan/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
ai-robotics-book/ (Docusaurus root)
├── docs/                 # All Markdown content
│   ├── intro.md
│   └── modules/
│       ├── 01-introduction/
│       │   ├── chapter_1.md
│       │   └── index.md
│       └── ... (other modules and chapters)
├── src/
│   ├── components/       # React components (e.g., HomepageFeatures, QuickLinks, GlossarySearch)
│   ├── css/              # Custom CSS
│   └── pages/            # Docusaurus pages (e.g., index.tsx)
├── static/               # Static assets (images, glossary-index.json)
├── docusaurus.config.ts  # Docusaurus configuration
├── sidebars.ts           # Sidebar navigation configuration
├── package.json          # Node.js project configuration
├── tsconfig.json         # TypeScript configuration
└── ...
```

**Structure Decision**: The project will utilize the Docusaurus static site generator's standard structure, with content primarily residing in the `docs/` directory, custom React components in `src/components/`, and configuration files at the root of `ai-robotics-book/`. This aligns with best practices for Docusaurus projects, ensuring maintainability and scalability.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|---|---|---|
| | | |