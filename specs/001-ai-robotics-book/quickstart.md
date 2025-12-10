# Quickstart Guide: RAG Chatbot

This guide provides the basic steps to set up and run the RAG chatbot locally.

## Prerequisites

- Python 3.9+
- Docker
- Accounts for:
    - OpenAI
    - Vercel
    - Neon
    - Qdrant Cloud

## 1. Backend Setup (FastAPI)

1.  **Clone the repository.**
2.  **Create a `.env` file** in the `backend` directory and add your API keys:
    ```
    OPENAI_API_KEY=...
    NEON_DATABASE_URL=...
    QDRANT_URL=...
    QDRANT_API_KEY=...
    ```
3.  **Install dependencies**:
    ```bash
    pip install -r backend/requirements.txt
    ```
4.  **Run the embedding pipeline**:
    A script will be provided to read the book content, chunk it, and upload the embeddings to Qdrant.
    ```bash
    python backend/embed_content.py
    ```
5.  **Run the backend server locally**:
    ```bash
    uvicorn backend.main:app --reload
    ```
    The API will be available at `http://127.0.0.1:8000`.

## 2. Frontend Setup (Docusaurus)

1.  **Navigate to the `docs` directory.**
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Configure the chatbot component**:
    Update the chatbot component in Docusaurus to point to your locally running API endpoint (`http://127.0.0.1:8000/ask`).
4.  **Run the Docusaurus development server**:
    ```bash
    npm run start
    ```
    The book will be available at `http://localhost:3000`.

## 3. Deployment

Refer to the `research.md` file for the deployment architecture.

- The Docusaurus site is deployed to GitHub Pages.
- The FastAPI backend is deployed to Vercel. Remember to set the environment variables in the Vercel project settings.
