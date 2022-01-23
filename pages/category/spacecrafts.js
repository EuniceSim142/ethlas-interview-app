import Head from "next/head";
import Layout from "../../components/layout";
import Dragon from "../../components/dragon";
import Rocket from "../../components/rocket";
import styles from "../../styles/List.module.css";
import { spaceXClient } from "../../lib/spacex-client";

/**
 * Displays all Dragon and Rocket data using {@link Dragon} and {@link Rocket} Components respectively.
 * @param {JSON} dragons Array of Dragon data.
 * @param {JSON} rockets Array of Rocket data.
 * @returns Spacecraft page.
 */
export default function spacecrafts({ dragons, rockets }) {
  return (
    <Layout>
      <Head>
        <title>Dragons and Rockets</title>
        <link rel="icon" href="../../spacecraft.svg" />
      </Head>
      <article className={styles.content}>
        {dragons.map((dragonData) => {
          return <Dragon data={dragonData} key={dragonData.id}></Dragon>;
        })}
        {rockets.map((rocketData) => {
          return <Rocket data={rocketData} key={rocketData.id}></Rocket>;
        })}
      </article>
    </Layout>
  );
}

/**
 * Generates the data used in this page.
 * @returns props containing dragon and rocket data.
 */
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
