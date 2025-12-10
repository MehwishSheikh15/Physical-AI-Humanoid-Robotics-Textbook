import React from 'react';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext'; // Not needed
// import { useBaseUrlUtils } from '@docusaurus/useBaseUrl'; // Not needed
// import { useFrontMatter } from '@docusaurus/theme-common'; // Not needed

interface ModuleLearningOutcomesProps {
  learningOutcomes: string[]; // Explicitly define prop
}

const ModuleLearningOutcomes: React.FC<ModuleLearningOutcomesProps> = ({ learningOutcomes }) => {
  // const { siteConfig } = useDocusaurusContext(); // Not needed
  // const { withBaseUrl } = useBaseUrlUtils(); // Not needed
  // const { frontMatter } = useFrontMatter(); // Not needed

  if (!learningOutcomes || learningOutcomes.length === 0) {
    return null; // Don't render if no learning outcomes are defined
  }

  return (
    <div className="module-learning-outcomes margin-bottom--lg">
      <h2 className="margin-bottom--md">Learning Outcomes</h2>
      <ul className="clean-list">
        {learningOutcomes.map((outcome: string, index: number) => (
          <li key={index} className="margin-bottom--sm">
            <span role="img" aria-label="checkmark" className="margin-right--sm">✅</span>
            {outcome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleLearningOutcomes;
