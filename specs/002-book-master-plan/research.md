# Research & Decisions for Book Master Plan

This document outlines research findings and decisions made for the 002-book-master-plan feature.

## 1. Docusaurus Version and Core Setup

**Decision**: Docusaurus 3.x will be used. The core setup will follow standard Docusaurus practices, including `docusaurus.config.ts`, `sidebars.ts`, and a `docs` directory for markdown content.

**Rationale**: Docusaurus 3.x provides the latest features and performance improvements. Its established structure is well-suited for a book-like documentation site.

**Alternatives Considered**:
- Docusaurus 2.x: Rejected for not being the latest stable version.
- MkDocs, GitBook: While viable, Docusaurus offers a richer feature set for documentation and community support, especially for a technical textbook.

## 2. Documentation Architecture and Content Structure

**Decision**: The documentation will be structured hierarchically within the `docs/` directory, reflecting the Parts, Modules, and Chapters of the book. Each module will reside in its own subdirectory (e.g., `docs/modules/01-introduction/`). Chapter files will be Markdown (`.md`) and include a YAML frontmatter for metadata.

**Rationale**: This structure directly supports the hierarchical book structure outlined in the `spec.md` (FR-001). Using subdirectories for modules keeps the content organized and scalable. YAML frontmatter is a standard Docusaurus feature for adding metadata to Markdown files.

**Alternatives Considered**:
- Flat structure for all chapters: Rejected due to potential for disorganization and difficulty in managing a large number of chapters.
- Custom content types: While Docusaurus supports MDX, simple Markdown with YAML frontmatter is sufficient for the current needs and simpler to manage.

## 3. Sidebar Navigation

**Decision**: The sidebar will be multi-category and collapsible, with each module represented as a top-level collapsible category. This will be configured in `sidebars.ts` using Docusaurus's sidebar API.

**Rationale**: This directly addresses FR-002 from `spec.md`. The collapsible nature improves user experience by allowing students to focus on the current module while easily navigating others.

**Alternatives Considered**:
- Flat sidebar: Rejected as it would be unwieldy for a book with multiple modules and chapters.
- Custom React sidebar component: Rejected as Docusaurus's native sidebar functionality is robust and sufficient.

## 4. Homepage Layout

**Decision**: The homepage will feature a grid of cards, where each card represents one of the four main modules and links to that module's introduction. This will be implemented as a React component within `src/pages/index.tsx`.

**Rationale**: This directly addresses FR-010 from `spec.md`. A card-grid layout provides a visually appealing and intuitive entry point to the book's main sections.

**Alternatives Considered**:
- Simple list of links: Rejected for being less visually engaging.
- Complex interactive homepage: Rejected for adding unnecessary complexity and maintenance overhead for a documentation site.

## 5. Search Functionality

**Decision**: Algolia DocSearch will be integrated to provide sitewide search functionality.

**Rationale**: This addresses FR-011 from `spec.md`. Algolia DocSearch is the recommended and most robust search solution for Docusaurus sites, offering fast and relevant search results.

**Alternatives Considered**:
- Docusaurus's local search plugin: While an option, Algolia provides superior performance and features for larger sites.
- Custom search implementation: Rejected due to significant development effort and maintenance.

## 6. Chapter Metadata

**Decision**: Each chapter file will include a YAML frontmatter with specific metadata fields: `week`, `module`, `prerequisites`, `learning_objectives`, `sidebar_label`, `assessment_type`, `difficulty`, `capstone_component`.

**Rationale**: This addresses FR-009 from `spec.md` and ensures all chapters have consistent, structured metadata essential for various features (e.g., filtering, progress tracking, dynamic rendering).

**Alternatives Considered**:
- Storing metadata externally (e.g., in a database or separate JSON files): Rejected to keep metadata co-located with the content it describes, simplifying content management and versioning.

## 7. Content Pipeline and Data Modeling Considerations

**Decision**: Content will be primarily Markdown files. Metadata will be in YAML frontmatter. Additional structured data (e.g., for glossary or quick reference) will be stored in JSON files. A JSON Schema will be defined for chapter metadata validation.

**Rationale**: Markdown and YAML/JSON are native to Docusaurus and are human-readable and version-controllable. JSON Schema provides a robust way to ensure data consistency and validate the chapter metadata.

**Alternatives Considered**:
- Database for all content: Rejected for static site generation, as it introduces unnecessary complexity for deployment and data management.
