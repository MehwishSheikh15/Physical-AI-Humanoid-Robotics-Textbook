# Research & Decisions for AI & Humanoid Robotics Book

This document outlines the research findings and decisions made to resolve the technical unknowns identified in the implementation plan.

## 1. Robotics Software Versioning

**Decision**:
To ensure stability and long-term reproducibility, the following versions will be used:
- **ROS 2**: Humble Hawksbill (LTS)
- **Gazebo**: Fortress
- **NVIDIA Isaac Sim**: 2023.1.1 (or the latest stable version available at the time of writing)
- **Unity**: 2022.3.x (LTS)

**Rationale**:
- **ROS 2 Humble** is a Long-Term Support (LTS) release, making it a stable target for a book intended to be used for several years.
- **Gazebo Fortress** is the officially recommended and supported version for ROS 2 Humble.
- **NVIDIA Isaac Sim 2023.1.1** explicitly supports ROS 2 Humble, ensuring seamless integration.
- **Unity 2022.3.x** is a recent LTS release. The integration will be managed via the official `ROS-TCP-Connector` package, which is maintained for modern Unity versions.

**Alternatives Considered**:
- Using the absolute latest (non-LTS) versions of all software was considered but rejected to prioritize stability and reduce the risk of breaking changes for the readers.

## 2. Deployment Architecture for Docusaurus & FastAPI

**Decision**:
- The **Docusaurus site** will be deployed as a static site to **GitHub Pages**.
- The **FastAPI backend** for the RAG chatbot will be containerized using Docker and deployed as a serverless function on **Vercel**.
- The Docusaurus frontend will make authenticated API calls to the Vercel-hosted backend.

**Rationale**:
- **GitHub Pages** is a free and simple solution for hosting static documentation sites like Docusaurus.
- **Vercel** offers a generous free tier, is extremely simple to use, and is optimized for Jamstack-style deployments (static frontend + serverless backend). Its integration with GitHub will allow for seamless continuous deployment of the API.
- This decoupled architecture is standard for modern web applications and allows the frontend and backend to be scaled and updated independently.

**Alternatives Considered**:
- **Google Cloud Run / Fly.io / Heroku**: These are all excellent platforms for hosting FastAPI applications. Vercel was chosen for its unparalleled simplicity and developer experience, which is a good fit for a project that is part of an educational book.
- **Monolithic Server**: Hosting both the Docusaurus build and the Python backend on a single server (e.g., a VPS) was rejected as it adds unnecessary complexity and maintenance overhead.

## 3. RAG Pipeline: Chunking & Embedding Strategy

**Decision**:
A hybrid, structure-aware chunking strategy will be implemented.
- **Chunking Method**: **Recursive Character Splitting** will be used, with the following prioritized list of separators to respect the document's structure:
  1. Markdown Headers (`##`, `###`)
  2. Double Newline (`

`)
  3. Single Newline (`
`)
  4. Space (` `)
- **Chunk Size**: A starting `chunk_size` of **1000 characters**.
- **Chunk Overlap**: A `chunk_overlap` of **200 characters** to maintain context between chunks.
- **Embedding Model**: A general-purpose sentence-transformer model such as `all-MiniLM-L6-v2` will be used as the default for generating embeddings.

**Rationale**:
- A book's content is inherently structured (chapters, sections, paragraphs). A recursive splitting strategy that honors this structure is more likely to create semantically coherent chunks than simple fixed-size chunking.
- The chosen chunk size and overlap are common starting points that balance context preservation with the input limits of most embedding models. These values can be tuned during the implementation phase if retrieval quality is poor.
- `all-MiniLM-L6-v2` is a well-regarded, efficient model that provides a good balance of performance and quality for RAG tasks.

**Alternatives Considered**:
- **Fixed-Size Chunking**: Rejected because it can split sentences and paragraphs, leading to a loss of semantic meaning.
- **Sentence-Level Chunking**: Considered, but paragraph-level or section-level context is often important for technical documentation. The recursive strategy provides a better balance.
- **More advanced semantic chunking**: While potentially more powerful, this adds significant computational complexity and is likely overkill for this project's goals. The chosen recursive strategy is a robust and widely used baseline.
