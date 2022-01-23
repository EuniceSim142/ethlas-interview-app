import Layout from "../../components/layout";
import Head from "next/head";
import styles from "../../styles/List.module.css";
import Crew from "../../components/crew";
import { spaceXClient } from "../../lib/spacex-client";

/**
 * Displays all Crew data using {@link Crew} Component.
 * @param {JSON} data Array of Crew data.
 * @returns Crew page.
 */
export default function crew({ data }) {
  // slice data in 2 halves to display data in 2 columns
  const mid = Math.ceil(data.length / 2) - 1;
  const left = data.slice(0, mid);
  const right = data.slice(mid, data.length - 1);

  return (
    <Layout>
      <Head>
        <title>Crew</title>
        <link rel="icon" href="../../spacecraft.svg" />
      </Head>
      <article className={styles.content_crew}>
        <article className={styles.column}>
          {left.map((crewData) => {
            return <Crew data={crewData} key={crewData.id}></Crew>;
          })}
        </article>
        <article className={styles.column}>
          {right.map((crewData) => {
            return <Crew data={crewData}></Crew>;
          })}
        </article>
      </article>
    </Layout>
  );
}

/**
 * Generates the data used in this page.
 * @returns props containing crew data.
 */
export const getStaticProps = async () => {
  const allCrewData = await spaceXClient.fetchAllCrewData();

  return {
    props: {
      data: allCrewData,
    },
  };
};
