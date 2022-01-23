import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Launch from "../../components/launch";
import styles from "../../styles/List.module.css";
import { spaceXClient } from "../../lib/spacex-client";
import { URL_PATHS } from "../../constants/utils";

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

export const getStaticProps = async () => {
  const allLaunchData = await spaceXClient.fetchAllLaunchData();

  return {
    props: {
      data: allLaunchData,
    },
  };
};
