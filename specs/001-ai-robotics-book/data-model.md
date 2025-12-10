# Data Model for AI & Humanoid Robotics Book

This document outlines the key data entities for the project.

## 1. Book

Represents the entire book.

- **Attributes**:
    - `title` (string): The title of the book.
    - `authors` (array of strings): The list of authors.
    - `version` (string): The book's version number.
- **Relationships**:
    - Has many `Chapters`.

## 2. Chapter

Represents a single chapter or module in the book.

- **Attributes**:
    - `number` (integer): The chapter number.
    - `title` (string): The title of the chapter.
    - `content` (string): The full Markdown content of the chapter.
- **Relationships**:
    - Belongs to a `Book`.

## 3. ChatbotInteraction

Represents a single interaction with the RAG chatbot. This is more of a transient data structure for the API than a persisted model.

- **Attributes**:
    - `query` (string): The user's question.
    - `context` (string, optional): The user-selected text.
    - `response` (string): The chatbot's answer.
    - `source_chunks` (array of strings): The chunks of text from the book used to generate the answer.

## 4. VectorEmbedding

Represents a single chunk of text and its corresponding vector embedding stored in Qdrant.

- **Attributes**:
    - `id` (string/UUID): Unique identifier for the chunk.
    - `text` (string): The chunk of text.
    - `vector` (array of floats): The embedding vector.
- **Metadata**:
    - `source_chapter_number` (integer): The chapter the chunk came from.
    - `source_document` (string): The book identifier.
