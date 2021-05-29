import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Free to read',
    Svg: require('../../static/img/home/reading.svg').default,
    description: (
      <>
        Read the online book at your own pace and free of charge.
      </>
    ),
  },
  {
    title: 'Escape the tutorial hell',
    Svg: require('../../static/img/home/programming.svg').default,
    description: (
      <>
        This book is going to teach you how to create a more realistic application,
        very similar to what you might do at your job.
      </>
    ),
  },
  {
    title: 'Go to the next level',
    Svg: require('../../static/img/home/whiteboard.svg').default,
    description: (
      <>
        Once you read this book, you will be ready to build complex React applications.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
