import Layout from "../../components/layout";
import Head from "next/head";
import styles from "../../styles/List.module.css";
import Crew from "../../components/crew";
import { spaceXClient } from "../../lib/spacex-client";

export default function crew({ data }) {
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

export const getStaticProps = async () => {
  const allCrewData = await spaceXClient.fetchAllCrewData();

  return {
    props: {
      data: allCrewData,
    },
  };
};
