import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'SQL Query on JSON Data',
    Svg: require('@site/static/img/coding-5-61.svg').default,
    description: (
      <>
         Harness SQL's power on JSON datasets seamlessly with jsonSqlQuery's innovative querying capabilities.
      </>
    ),
  },
  {
    title: 'Intuitive JSON Data Exploration',
    Svg: require('@site/static/img/data-visualization-73.svg').default,
    description: (
      <>
        Navigate complex JSON hierarchies effortlessly through jsonSqlQuery's user-friendly tree view interface
      </>
    ),
  },
  {
    title: 'Versatile Display Modes',
    Svg: require('@site/static/img/user-interface-81.svg').default,
    description: (
      <>
        Enjoy flexible tabular and JSON tree display modes for comprehensive data analysis.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
