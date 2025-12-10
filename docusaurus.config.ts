import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

// ⭐ Add this import for Mermaid support
import mermaid from "@docusaurus/theme-mermaid";

const config: Config = {
  title: "Physical AI & Humanoid Robotics",
  tagline: "Master Plan for Physical AI & Humanoid Robotics Textbook",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  customFields: {
    githubRepoUrl: "https://github.com/ai-robotics/ai-robotics-book",
  },

  url: "https://ai-robotics.github.io",
  baseUrl: process.env.BASE_URL || "/ai-robotics-book/",

  organizationName: "MehwishSheikh15",
  projectName: "Physical-AI-Humanoid-Robotics-Textbook",

  onBrokenLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    // ⭐ Enable mermaid in markdown
    mermaid: true,
  },

  // ⭐ Register Mermaid theme
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/ai-robotics/ai-robotics-book/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/ai-robotics/ai-robotics-book/tree/main/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Physical AI & Humanoid Robotics",
      logo: {
        alt: "Physical AI & Humanoid Robotics Logo",
        src: "img/logo.jpg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Book Content",
        },
        {
          href: "https://github.com/ai-robotics/ai-robotics-book",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Modules",
          items: [
            {
              label: "Module 1: ROS 2",
              to: "/docs/Module-1-ROS2/week-01-intro-physical-ai",
            },
            {
              label: "Module 2: Gazebo",
              to: "/docs/Module-2-GAZEBO/week-06-gazebo-fundamentals",
            },
            {
              label: "Module 3: NVIDIA Isaac",
              to: "/docs/Module-3-ISSAC/week-08-isaac-intro",
            },
            {
              label: "Module 4: VLA",
              to: "/docs/Module-4-VLA/week-11-humanoid-development",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ai-robotics/ai-robotics-book",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
