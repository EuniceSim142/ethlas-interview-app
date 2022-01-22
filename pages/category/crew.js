import Layout from "../../components/layout";
import Head from "next/head";
import styles from "../../styles/List.module.css";
import Crew from "../../components/crew";

export default function crew() {
  const data = [
    {
      name: "Robert Behnken 1",
      agency: "NASA",
      image: "https://imgur.com/0smMgMH.png",
      wikipedia: "https://en.wikipedia.org/wiki/Robert_L._Behnken",
      launches: ["5eb87d46ffd86e000604b388"],
      status: "active",
      id: "5ebf1a6e23a9a60006e03a7a",
    },
    {
      name: "Robert Behnken 2",
      agency: "NASA",
      image: "https://imgur.com/0smMgMH.png",
      wikipedia: "https://en.wikipedia.org/wiki/Robert_L._Behnken",
      launches: ["5eb87d46ffd86e000604b388"],
      status: "active",
      id: "5ebf1a6e23a9a60006e03a7a",
    },
    {
      name: "Robert Behnken 3",
      agency: "NASA",
      image: "https://imgur.com/0smMgMH.png",
      wikipedia: "https://en.wikipedia.org/wiki/Robert_L._Behnken",
      launches: ["5eb87d46ffd86e000604b388"],
      status: "active",
      id: "5ebf1a6e23a9a60006e03a7a",
    },
  ];

  const mid = Math.ceil(data.length / 2);
  console.log(mid);
  const left = data.splice(0, mid);
  const right = data;

  console.log(left);
  console.log(right);

  return (
    <Layout>
      <Head>
        <title>Crew</title>
        <link rel="icon" href="../../spacecraft.svg" />
      </Head>
      <article className={styles.content_crew}>
        <article>
          {left.map((crewData) => {
            return <Crew data={crewData}></Crew>;
          })}
        </article>
        <article>
          {right.map((crewData) => {
            return <Crew data={crewData}></Crew>;
          })}
        </article>
      </article>
    </Layout>
  );
}
