# Quickstart Guide: Book Master Plan

This guide provides instructions for setting up your development environment and contributing to the Physical AI & Humanoid Robotics book project.

## 1. Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher (LTS recommended).
- **npm**: Version 8.x or higher (comes with Node.js).
- **Git**: For version control.

## 2. Getting Started

Follow these steps to get your local development environment up and running:

### 2.1. Clone the Repository

First, clone the book project repository to your local machine:

```bash
git clone <repository_url>
cd ai-robotics-book
```
*(Replace `<repository_url>` with the actual URL of the GitHub repository)*

### 2.2. Install Dependencies

Navigate into the `ai-robotics-book` directory and install the project dependencies:

```bash
cd ai-robotics-book
npm install
```

### 2.3. Start Local Development Server

Once the dependencies are installed, you can start the Docusaurus development server:

```bash
npm start
```

This command will start a local server and open your browser to `http://localhost:3000`. Docusaurus features hot-reloading, so any changes you make to the documentation or code will be reflected automatically.

## 3. Contributing Content

### 3.1. Chapter Structure

All chapter content resides in the `docs/modules/` directory. Each module has its own subdirectory (e.g., `docs/modules/01-introduction/`).

### 3.2. Creating a New Chapter

To create a new chapter:

1.  Navigate to the appropriate module directory (e.g., `docs/modules/01-introduction/`).
2.  Create a new Markdown file (e.g., `chapter_X.md`).
3.  Add the required YAML frontmatter at the top of the file, following the `chapter-metadata-schema.json` contract:

    ```yaml
    ---
    week: 1
    module: "01-introduction"
    title: "Your Chapter Title"
    sidebar_label: "Chapter Title"
    learning_objectives:
      - "Understand the basic concepts of X"
      - "Be able to perform Y"
    difficulty: "beginner"
    ---

    # Your Chapter Title

    Your chapter content goes here...
    ```

4.  Ensure your chapter is linked in `sidebars.ts` to appear in the navigation.

### 3.3. Updating `sidebars.ts`

The `sidebars.ts` file located at the root of `ai-robotics-book/` defines the navigation structure. When adding new modules or chapters, you will need to update this file to include them in the sidebar. Refer to `sidebar-config-structure.ts` for the expected type definitions.

## 4. Building for Deployment

To build the static site for deployment:

```bash
npm run build
```

The generated static assets will be placed in the `build/` directory.

## 5. Running Tests

To run various tests and checks:

```bash
npm run test           # Run Jest tests
npm run lint           # Run ESLint for code style
npm run type-check     # Run TypeScript type checking
npm run link-check     # Check for broken links in documentation
npm run lighthouse     # Run Lighthouse CI (requires configuration)
```

## 6. Project Configuration

Key configuration files:

-   `docusaurus.config.ts`: Main Docusaurus configuration.
-   `sidebars.ts`: Sidebar navigation configuration.
-   `package.json`: Project dependencies and scripts.
-   `tsconfig.json`: TypeScript compiler options.

## 7. Troubleshooting

-   **"Command not found"**: Ensure Node.js and npm are correctly installed and in your system's PATH.
-   **Build errors**: Check the console output for specific error messages. Often, these relate to incorrect Markdown syntax, invalid frontmatter, or broken links.
-   **Sidebar issues**: Verify that `sidebars.ts` is correctly configured and matches the file structure.
