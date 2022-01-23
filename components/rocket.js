import styles from "./rocket.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";
import moment from "moment";
import { IMAGE_DOMAIN } from "../constants/utils";

export default function rocket({ data }) {
  let imgSrc = data?.flickr_images[0];
  if (imgSrc == null) {
    imgSrc = "/images/no-pictures.png";
  }
  const date = new moment(data?.first_flight).format("MMMM Do YYYY");
  const cost_in_USD = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(data.cost_per_launch);

  return (
    <article className={styles.container}>
      <img
        src={imgSrc}
        alt={"Image of " + data.name}
        className={
          imgSrc == "/images/no-pictures.png" ? styles.no_image : styles.image
        }
      ></img>
      <ul className={styles.content}>
        <li
          className={
            data.active
              ? styles.rocket_data_status_active
              : styles.rocket_data_status_inactive
          }
        >
          <strong>{data.active ? "ACTIVE" : "INACTIVE"}</strong>
        </li>
        <li className={styles.rocket_name}>
          <h1>{data.name}</h1>
        </li>
        <li className={styles.rocket_data}>
          <strong>Success rate:</strong> {data.success_rate_pct}%
        </li>
        <li className={styles.rocket_data}>
          <strong>Cost per launch:</strong> {cost_in_USD}
        </li>
        <li className={styles.rocket_data}>
          <strong>First flight:</strong> {date}
        </li>
        <li className={styles.rocket_data_description}>{data.description}</li>
        <li className={styles.rocket_data}>
          <strong>Media:</strong>
          <ul className={styles.media_content}>
            <li className={styles.rocket_data_link}>
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
