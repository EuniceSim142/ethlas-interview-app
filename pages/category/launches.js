import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Launch from "../../components/launch";
import styles from "../../styles/Launches.module.css";

export default function launches() {
  return (
    <Layout>
      <Head>
        <title>Launches and Landings</title>
        <link rel="icon" href="../../spacecraft.svg" />
      </Head>
      <article className={styles.launch_content}>
        <Launch></Launch>
      </article>
    </Layout>
  );
}
