/**
 * @file Type definitions for the Docusaurus sidebar configuration.
 *
 * This structure reflects the hierarchical, multi-category, and collapsible
 * nature required for the book's navigation.
 */

// Represents a single item in the sidebar, which can be a link to a doc or a category.
export type SidebarItem = DocItem | CategoryItem;

// Represents a link to a specific Markdown document.
export interface DocItem {
  type: 'doc';
  id: string; // The ID of the document (e.g., 'modules/01-introduction/chapter_1')
  label?: string; // Optional label, if different from document title
}

// Represents a collapsible category that can contain other items (docs or nested categories).
export interface CategoryItem {
  type: 'category';
  label: string; // The label for the category (e.g., 'Module 1: Introduction')
  items: SidebarItem[]; // Array of child items
  collapsed?: boolean; // Whether the category is collapsed by default (default: false)
  collapsible?: boolean; // Whether the category can be collapsed (default: true)
  link?: { // Optional link for the category itself (e.g., an introduction page)
    type: 'doc';
    id: string;
  };
}

// The top-level sidebar configuration, typically an array of categories.
export type SidebarConfig = {
  // Key represents the sidebar ID (e.g., 'tutorialSidebar')
  [sidebarId: string]: CategoryItem[];
};

/**
 * Example of how a module-based sidebar might be structured:
 *
 * const mySidebars: SidebarConfig = {
 *   tutorialSidebar: [
 *     {
 *       type: 'category',
 *       label: 'Part 1: Foundations',
 *       collapsible: true,
 *       collapsed: false,
 *       items: [
 *         {
 *           type: 'category',
 *           label: 'Module 1: Introduction',
 *           collapsible: true,
 *           collapsed: false,
 *           link: { type: 'doc', id: 'modules/01-introduction/index' },
 *           items: [
 *             { type: 'doc', id: 'modules/01-introduction/chapter_1', label: 'Chapter 1: Overview' },
 *             { type: 'doc', id: 'modules/01-introduction/chapter_2', label: 'Chapter 2: Concepts' },
 *           ],
 *         },
 *         {
 *           type: 'category',
 *           label: 'Module 2: Core Robotics',
 *           // ... more items
 *         },
 *       ],
 *     },
 *     {
 *       type: 'category',
 *       label: 'Part 2: Advanced Topics',
 *       // ... more items
 *     },
 *   ],
 * };
 */
