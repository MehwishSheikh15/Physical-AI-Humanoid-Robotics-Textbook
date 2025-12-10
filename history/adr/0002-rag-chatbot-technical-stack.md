# ADR-0002: RAG Chatbot Technical Stack

- **Status:** Accepted
- **Date:** 2025-12-05
- **Feature:** 001-ai-robotics-book
- **Context:** The project requires an embedded chatbot capable of answering user questions based on the book's content. The architecture must be performant, leverage modern Python libraries, and use services with a free tier to ensure accessibility for the student audience.

## Decision

- **Backend Framework:** FastAPI
- **Vector Database:** Qdrant Cloud (Free Tier)
- **Metadata Store:** Neon Serverless Postgres
- **Frontend SDKs:** OpenAI Agents SDK and OpenAI ChatKit SDK

## Consequences

### Positive
- FastAPI is a high-performance, modern Python framework ideal for building APIs and integrating with AI libraries.
- Qdrant is a purpose-built vector database optimized for similarity search, which is the core of the RAG pipeline.
- The serverless nature of Neon and Qdrant Cloud minimizes maintenance overhead and costs.
- Providing instructions for both OpenAI SDKs gives readers exposure to different levels of abstraction for building chat applications.

### Negative
- The architecture involves multiple cloud services, which can be complex for students to set up and manage.
- Supporting two frontend SDKs increases the complexity and length of the book's tutorials.
- Reliance on third-party free tiers means the service is subject to their limitations and potential changes in their offerings.

## Alternatives Considered

- **Alternative Stack A (Backend)**: Flask (a popular but less performant choice for async IO) or Node.js/Express (requires a different language ecosystem from the AI/ML libraries).
- **Alternative Stack B (Vector Store)**: Pinecone (another popular managed vector DB) or a self-hosted solution like `pgvector` on Postgres (which would increase setup complexity).

## References

- Feature Spec: `specs/001-ai-robotics-book/spec.md`
- Implementation Plan: `specs/001-ai-robotics-book/plan.md`
- Related ADRs: `ADR-0001`
- Evaluator Evidence: `specs/001-ai-robotics-book/research.md`