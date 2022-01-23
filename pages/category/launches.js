import Layout from "../../components/layout";
import Head from "next/head";
import Launch from "../../components/launch";
import styles from "../../styles/List.module.css";
import { spaceXClient } from "../../lib/spacex-client";

/**
 * Displays all Launch data using {@link Launch} Component.
 * @param {JSON} data Array of Launch data.
 * @returns Launch page.
 */
export default function launches({ data }) {
  return (
    <Layout>
      <Head>
        <title>Launches</title>
        <link rel="icon" href="../../spacecraft.svg" />
      </Head>
      <article className={styles.content}>
        {data.map((launchData) => {
          return <Launch data={launchData} key={launchData.id}></Launch>;
        })}
      </article>
    </Layout>
  );
}

/**
 * Generates the data used in this page.
 * @returns props containing launch data.
 */
export const getStaticProps = async () => {
  const allLaunchData = await spaceXClient.fetchAllLaunchData();

  return {
    props: {
      data: allLaunchData,
    },
  };
};
