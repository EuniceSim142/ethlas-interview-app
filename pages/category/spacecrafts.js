import Head from "next/head";
import Layout from "../../components/layout";
import Dragon from "../../components/dragon";
import Rocket from "../../components/rocket";
import styles from "../../styles/List.module.css";
import { spaceXClient } from "../../lib/spacex-client";

export default function spacecrafts({ dragons, rockets }) {
  return (
    <Layout>
      <Head>
        <title>Dragons and Rockets</title>
        <link rel="icon" href="../../spacecraft.svg" />
      </Head>
      <article className={styles.content}>
        {dragons.map((dragonData) => {
          return <Dragon data={dragonData}></Dragon>;
        })}
        {rockets.map((rocketData) => {
          return <Rocket data={rocketData}></Rocket>;
        })}
      </article>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allDragonData = await spaceXClient.fetchAllDragonData();
  const allRocketData = await spaceXClient.fetchAllRocketData();

  return {
    props: {
      dragons: allDragonData,
      rockets: allRocketData,
    },
  };
};
