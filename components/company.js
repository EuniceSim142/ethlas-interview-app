import styles from "./company.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFlickr } from "@fortawesome/free-brands-svg-icons";

export default function company({ data }) {
  const imgSrc = "/images/SpaceX.jpeg";

  return (
    <article className={styles.container}>
      <img src={imgSrc} alt="Image of SpaceX" className={styles.image}></img>
      <ul className={styles.content}>
        <li className={styles.launch_data}>
          <strong>Location:</strong> {data.headquarters.city},{" "}
          {data.headquarters.state}
        </li>
        <li className={styles.launch_data}>
          <strong>Founded in:</strong> {data.founded}
        </li>
        <li className={styles.launch_data_description}>{data.summary}</li>
        <li className={styles.launch_data}>
          <strong>Media:</strong>
          <ul className={styles.media_content}>
            <li className={styles.launch_data_link}>
              <Link href={data.links.twitter}>
                <a>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    alt="article"
                  ></FontAwesomeIcon>
                </a>
              </Link>
            </li>
            <li className={styles.launch_data_link}>
              <Link href={data.links.flickr}>
                <a>
                  <FontAwesomeIcon
                    icon={faFlickr}
                    alt="Flickr"
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
