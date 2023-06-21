import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageStats from '@site/src/components/HomepageStats';

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
            <div className={styles.buttons}  >
              <Link
                className="button button--secondary button--dg"
                style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', margin:'20px', fontSize: '28px'}}
                to="http://discord.blackstar-gaming.de/">     
                🎮 Tritt uns bei!
              </Link>
            </div>
        </div>


        <div className={styles.featuresStyle} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
          <HomepageFeatures />
        </div>

        <div className={styles.statsStyle} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
          <HomepageStats />
        </div>
        
        <div className={styles.projectsStyle} style={{display: 'flex', justifyContent: 'center', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
          <div className={clsx('col col--4')}>
            

            <div className="text--center">
              <h1 style={{fontSize: '50px'}}>Unsere Projekte</h1>
            </div>
            
            <br></br>
            <hr style={{margin: "auto"}}></hr>
            <br></br>
            
            <div className="text--center">
              <h1>🪖 MilSim</h1>
              <p className={styles.bigFont}>Unser Arma 3 MilSim Projekt mit Fokus auf Bundeswehr. <br></br> 
              Missionen finden jedes Wochenende statt. <br></br>
              </p>
              <Link to="/milsim/main"> 
                <button type="button"  className="button button--secondary button--dg" style={{borderWidth: '2px', borderColor: '#BBBBBB'}}>
                 Mehr Infos
                </button>
              </Link>
            </div>

            <br></br>
            <hr></hr>
            <br></br>

            <div style={{borderWidth: '200px', borderColor: '#BBBBBB'}}>
              <div className="text--center padding-horiz--md">
                <h1>🔬 SCP: Secret Laboratory</h1>
                <p className={styles.bigFont}>Unser SCP:SL Projekt. Schlage dich auf die Seite der SCPs oder der Nine-Tailed-Fox Spezialeinheit. <br></br> 
                Für welche Seite entscheidest du dich? <br></br>
                </p>
                <Link to="/docs/scp_sl"> 
                  <button type="button"  className="button button--secondary button--dg" style={{borderWidth: '2px', borderColor: '#BBBBBB'}}>
                   Mitspielen
                  </button>
                </Link>
              </div>
            </div>

            <br></br>
            <hr></hr>
            <br></br>

            <div className="text--center padding-horiz--md">
              <h1>🌍 Minecraft Modded</h1>
              <p className={styles.bigFont}>Betritt unsere Welt von ausgewählten Mods und bebaue mit uns diese gigantische Welt.  <br></br> 
              Du hast die Wahl dich unserer Gemeinde anzuschlißen oder etwas ganz neues zu erschaffen.<br></br>
              </p>
              <Link to="/docs/category/%EF%B8%8F-minecraft-1"> 
                <button type="button"  className="button button--secondary button--dg" style={{borderWidth: '2px', borderColor: '#BBBBBB'}}>
                 Mitmachen
                </button>
              </Link>
            </div>
          </div>
        </div>

      </main>
    </Layout>
  );
}
