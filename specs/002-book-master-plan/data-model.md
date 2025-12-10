# Data Model for Book Master Plan

This document outlines the key data entities for the `002-book-master-plan` feature.

## 1. Book

Represents the entire textbook.

- **Attributes**:
    - `title` (string): The title of the book.
    - `authors` (array of strings): The list of authors.
    - `version` (string): The book's version number.
    - `parts` (array of Part): A collection of parts that make up the book.
- **Relationships**:
    - Has many `Parts`.

## 2. Part

Represents a major section or collection of related modules within the book.

- **Attributes**:
    - `title` (string): The title of the part.
    - `description` (string): A brief description of the part.
    - `modules` (array of Module): A collection of modules within this part.
- **Relationships**:
    - Belongs to a `Book`.
    - Has many `Modules`.

## 3. Module

Represents a major topic area or learning unit within a Part.

- **Attributes**:
    - `id` (string): Unique identifier for the module (e.g., "01-introduction").
    - `title` (string): The title of the module.
    - `description` (string): A brief description of the module.
    - `learning_outcomes` (array of strings): Specific, measurable learning outcomes for the module.
    - `chapters` (array of Chapter): A collection of chapters within this module.
- **Relationships**:
    - Belongs to a `Part`.
    - Has many `Chapters`.

## 4. Chapter

Represents a single document containing content on a specific topic. Chapters will be Markdown files with YAML frontmatter.

- **Attributes (YAML Frontmatter)**:
    - `week` (integer): The week number in the course schedule this chapter is covered.
    - `module` (string): The ID of the module this chapter belongs to.
    - `prerequisites` (array of strings, optional): List of required prior knowledge or chapters.
    - `learning_objectives` (array of strings): Specific learning objectives for this chapter.
    - `sidebar_label` (string): The label to display in the Docusaurus sidebar.
    - `assessment_type` (string, optional): Type of assessment associated with the chapter (e.g., "quiz", "assignment", "none").
    - `difficulty` (string): Difficulty level of the chapter ("beginner", "intermediate", "advanced").
    - `capstone_component` (boolean, optional): True if this chapter contributes to the capstone project.
    - `title` (string): The title of the chapter (also derived from H1 in Markdown).
- **Relationships**:
    - Belongs to a `Module`.
    - Has many `Sections` (implicitly through Markdown structure).

## 5. Section

A sub-division within a chapter (implicitly defined by Markdown headers).

- **Attributes**:
    - `title` (string): The title of the section (e.g., H2, H3).
    - `content` (string): Markdown content within the section.
- **Relationships**:
    - Belongs to a `Chapter`.

## 6. Glossary Entry

Represents a single term in the book's glossary.

- **Attributes**:
    - `term` (string): The word or phrase being defined.
    - `definition` (string): The explanation of the term.
    - `synonyms` (array of strings, optional): Alternative terms.
    - `related_terms` (array of strings, optional): Links to other glossary entries.
- **Relationships**:
    - Stored as a collection, accessible sitewide.

## 7. Quick Reference Entry

Represents an entry in a quick reference guide (e.g., ROS 2 commands, notation).

- **Attributes**:
    - `title` (string): The title of the reference entry.
    - `category` (string): Category for organization (e.g., "ROS 2 CLI", "Notation").
    - `content` (string): Markdown content for the reference.
- **Relationships**:
    - Stored as a collection, accessible sitewide.
