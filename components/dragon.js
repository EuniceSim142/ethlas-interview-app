import styles from "./dragon.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";
import moment from "moment";

export default function dragon({ data }) {
  let imgSrc = data?.flickr_images[0];
  if (imgSrc == null) {
    imgSrc = "/images/no-pictures.png";
  }
  const date = new moment(data?.first_flight).format("MMMM Do YYYY");

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
              ? styles.dragon_data_status_active
              : styles.dragon_data_status_inactive
          }
        >
          <strong>{data.active ? "ACTIVE" : "INACTIVE"}</strong>
        </li>
        <li className={styles.dragon_name}>
          <h1>{data.name}</h1>
        </li>
        <li className={styles.dragon_data}>
          <strong>Type:</strong> {data.type}
        </li>
        <li className={styles.dragon_data}>
          <strong>Crew capacity:</strong> {data.crew_capacity}
        </li>
        <li className={styles.dragon_data}>
          <strong>First flight:</strong> {date}
        </li>
        <li className={styles.dragon_data}>
          <strong>Dry Mass: </strong>
          {data.dry_mass_kg} kg | {data.dry_mass_lb} lb
        </li>
        <li className={styles.dragon_data_description}>{data.description}</li>
        <li className={styles.dragon_data}>
          <strong>Media:</strong>
          <ul className={styles.media_content}>
            {data.wikipedia && (
              <li className={styles.dragon_data_link}>
                <Link href={data.wikipedia}>
                  <a>
                    <FontAwesomeIcon
                      icon={faWikipediaW}
                      alt="Wikipedia"
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
