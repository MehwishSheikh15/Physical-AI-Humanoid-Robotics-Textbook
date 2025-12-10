import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { useHistory } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./index.module.css";
import { JSX } from "react/jsx-dev-runtime";

function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory();

  // Always use baseUrl-aware paths
  const introUrl = useBaseUrl("/docs/intro");

  const handleStartReading = () => {
    history.push(introUrl);
  };

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <button
                className="button button--secondary button--lg"
                onClick={handleStartReading}
                style={{ cursor: "pointer" }}
              >
                Start Reading
              </button>
            </div>
          </div>

          <div className={styles.heroImageContainer}>
            <img
              src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=736&auto=format&fit=crop"
              alt="Physical AI Robot"
              className={styles.pixelRobot3D}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
