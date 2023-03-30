import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img class={styles.main_logo} src="https://raw.githubusercontent.com/Nikolai-Ahlhelm/blackstar-gaming/main/static/img/MainLogo_big_with_BLACK_STAR_Shadow.png" alt="BSG Logo"/>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={styles.main_title_container}>
          <h1 className={styles.main_title}>{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg "
                to="http://discord.blackstar-gaming.de/">     
                🎮 Tritt uns bei!
              </Link>
            </div>
        </div>


        <div className={styles.featuresStyle}>
          <HomepageFeatures />
        </div>

      </main>
    </Layout>
  );
}
