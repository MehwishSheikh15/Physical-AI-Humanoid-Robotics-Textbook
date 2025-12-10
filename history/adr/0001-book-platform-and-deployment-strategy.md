# ADR-0001: Book Platform and Deployment Strategy

- **Status:** Accepted
- **Date:** 2025-12-05
- **Feature:** 001-ai-robotics-book
- **Context:** The project requires a maintainable, extensible platform for a technical book that can be easily deployed and accessed online. It needs to support interactive components like the RAG chatbot.

## Decision

- **Documentation Framework:** Docusaurus
- **Deployment Platform:** GitHub Pages

## Consequences

### Positive
- Excellent authoring experience using Markdown.
- Rich ecosystem for interactive components using React.
- Free, reliable hosting with version control integration via GitHub Pages.
- Good SEO and theming capabilities out of the box.

### Negative
- As a static site host, GitHub Pages cannot run the Python backend. This forces a decoupled architecture, requiring a separate hosting solution for the FastAPI service.
- Build times can increase for very large sites.

## Alternatives Considered

- **Alternative Stack A: MkDocs / Hugo**: Simpler static site generators, but with less native support for rich, interactive React components, which are needed for the chatbot.
- **Alternative Stack B: Custom React App (e.g., Next.js)**: Offers maximum flexibility but requires significant boilerplate development for standard documentation features like navigation, versioning, and search, increasing development time.

## References

- Feature Spec: `specs/001-ai-robotics-book/spec.md`
- Implementation Plan: `specs/001-ai-robotics-book/plan.md`
- Related ADRs: None
- Evaluator Evidence: `specs/001-ai-robotics-book/research.md`