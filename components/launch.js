import styles from "./launch.module.css";
import Link from "next/link";
import { YOUTUBE_URL } from "../constants/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faReddit } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

export default function launch({ data }) {
  let imgSrc = data?.links.flickr.original[0];
  if (imgSrc == null) {
    imgSrc = "/images/no-pictures.png";
  }
  const date = new moment(data?.date_utc).format("MMMM Do YYYY, h:mm a");

  return (
    <article className={styles.container}>
      <img
        src={imgSrc}
        alt="Image of launch"
        className={
          imgSrc == "/images/no-pictures.png" ? styles.no_image : styles.image
        }
      ></img>
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
            {data.links.article && (
              <li className={styles.launch_data_link}>
                <Link
                  href={data.links.article == null ? "" : data.links.article}
                >
                  <a>
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      alt="article"
                    ></FontAwesomeIcon>
                  </a>
                </Link>
              </li>
            )}
            {data.links.youtube_id && (
              <li className={styles.launch_data_link}>
                <Link
                  href={
                    data.links.youtube_id == null
                      ? ""
                      : YOUTUBE_URL + data.links.youtube_id
                  }
                >
                  <a>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      alt="video"
                    ></FontAwesomeIcon>
                  </a>
                </Link>
              </li>
            )}
            {data.links.reddit.launch && (
              <li className={styles.launch_data_link}>
                <Link
                  href={
                    data.links.reddit.launch == null
                      ? ""
                      : data.links.reddit.launch
                  }
                >
                  <a>
                    <FontAwesomeIcon
                      icon={faReddit}
                      alt="Reddit"
                    ></FontAwesomeIcon>
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </li>
      </ul>
    </article>
  );
}
