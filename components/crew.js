import styles from "./crew.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

export default function crew({ data }) {
  const launches = data.launches.join(", ");

  return (
    <article className={styles.container}>
      <img
        src={data.image}
        alt={"Image of " + data.name}
        className={styles.image}
      ></img>
      <ul className={styles.content}>
        <li
          className={
            data.status == "active"
              ? styles.crew_data_status_active
              : styles.crew_data_status_inactive
          }
        >
          <strong>{data.status.toUpperCase()}</strong>
        </li>
        <li className={styles.crew_name}>
          <h1>{data.name}</h1>
        </li>
        <li className={styles.crew_data}>
          <strong>Agency:</strong> {data.agency}
        </li>
        <li className={styles.crew_data}>
          <strong>Launches:</strong> {launches}
        </li>
        <li className={styles.crew_data}>
          <strong>Media:</strong>
          <ul className={styles.media_content}>
            <li className={styles.crew_data_link}>
              <Link href={data.wikipedia}>
                <a>
                  <FontAwesomeIcon
                    icon={faWikipediaW}
                    alt="Wikipedia"
                  ></FontAwesomeIcon>
                </a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  );
}
