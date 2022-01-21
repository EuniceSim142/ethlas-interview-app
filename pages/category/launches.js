import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function launches() {
  return (
    <Layout>
      <Head>
        <title>Launches and Landings</title>
        <link rel="icon" href="../../spacecraft.svg" />
      </Head>
      <article>
        <h1>Launches</h1>
      </article>
    </Layout>
  );
}
