import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const StatList = [
  {
    title: 'Gamer und Gamerinnen',
    icon: '🙋🏻🙋🏻‍♀️',
    description: (
      <>
        50+
      </>
    ),
  },
  {
    title: 'Gründung',
    icon: '📆',
    description: (
      <>
        14.12.2021
      </>
    ),
  },
  {
    title: 'Aktuelle Projekte',
    icon: '🎮',
    description: (
      <>
        4
      </>
    ),
  },
];

function Stat({title, description, icon}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h1>{icon}</h1>
        <h3>{title}</h3>
        <h1>{description}</h1>
      </div>
    </div>
  );
}

export default function HomepageStats() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {StatList.map((props, idx) => (
            <Stat key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}