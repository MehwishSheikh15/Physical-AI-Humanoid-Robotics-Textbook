import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface SourceCodeLinkProps {
  repoPath: string; // Path relative to the GitHub repository root
  line?: number;    // Optional line number
  children?: React.ReactNode; // Optional children for the link text
}

const SourceCodeLink: React.FC<SourceCodeLinkProps> = ({ repoPath, line, children }) => {
  const { siteConfig } = useDocusaurusContext();
  // Assuming GitHub repo is configured in docusaurus.config.ts customFields
  const githubRepoUrl = siteConfig.customFields?.githubRepoUrl as string || 'https://github.com/your-github-username/ai-robotics-book';

  let url = `${githubRepoUrl}/blob/main/${repoPath}`;
  if (line) {
    url += `#L${line}`;
  }

  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      {children || `View Source: ${repoPath}${line ? `#L${line}` : ''}`}
    </Link>
  );
};

export default SourceCodeLink;
