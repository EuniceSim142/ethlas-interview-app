import styles from "./launch.module.css";
import Link from "next/link";
import { YOUTUBE_URL } from "../constants/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faReddit } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

export default function launch({ data }) {
  const imgSrc = data?.links.flickr.original[0];
  const date = new moment(data?.date_utc).format("MMMM Do YYYY, h:mm a");

  return (
    <article className={styles.container}>
      <img src={imgSrc} alt="Image of launch" className={styles.image}></img>
      <ul className={styles.content}>
        <li
          className={
            data.upcoming
              ? styles.launch_data_upcoming
              : data.success
              ? styles.launch_data_outcome_success
              : styles.launch_data_outcome_failure
          }
        >
          <strong>
            {data.upcoming ? "UPCOMING!" : data.success ? "SUCCESS" : "FAILURE"}
          </strong>
        </li>
        <li className={styles.launch_name}>
          <h1>{data.name}</h1>
        </li>
        <li className={styles.launch_data}>
          <strong>Rocket:</strong> {data.rocket}
        </li>
        <li className={styles.launch_data}>
          <strong>Launch pad:</strong> {data.launchpad}
        </li>
        <li className={styles.launch_data}>
          <strong>Launch date:</strong> {date}
        </li>
        <li className={styles.launch_data_description}>{data.details}</li>
        <li className={styles.launch_data}>
          <strong>Media:</strong>
          <ul className={styles.media_content}>
            <li className={styles.launch_data_link}>
              <Link href={data.links.article}>
                <a>
                  <FontAwesomeIcon
                    icon={faNewspaper}
                    alt="article"
                  ></FontAwesomeIcon>
                </a>
              </Link>
            </li>
            <li className={styles.launch_data_link}>
              <Link href={YOUTUBE_URL + data.links.youtube_id}>
                <a>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    alt="video"
                  ></FontAwesomeIcon>
                </a>
              </Link>
            </li>
            <li className={styles.launch_data_link}>
              <Link href={data.links.reddit.launch}>
                <a>
                  <FontAwesomeIcon
                    icon={faReddit}
                    alt="Reddit"
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
