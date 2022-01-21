import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function spacecrafts() {
  return (
    <Layout>
      <Head>
        <title>Spacecrafts and Satellites</title>
        <link rel="icon" href="../../spacecraft.svg" />
      </Head>
      <article>
        <h1>Spacecrafts</h1>
      </article>
    </Layout>
  );
}
