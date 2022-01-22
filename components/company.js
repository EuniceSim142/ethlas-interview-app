import styles from "./company.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFlickr } from "@fortawesome/free-brands-svg-icons";

export default function company() {
  const data = {
    headquarters: {
      address: "Rocket Road",
      city: "Hawthorne",
      state: "California",
    },
    links: {
      website: "https://www.spacex.com/",
      flickr: "https://www.flickr.com/photos/spacex/",
      twitter: "https://twitter.com/SpaceX",
      elon_twitter: "https://twitter.com/elonmusk",
    },
    name: "SpaceX",
    founder: "Elon Musk",
    founded: 2002,
    employees: 8000,
    vehicles: 3,
    launch_sites: 3,
    test_sites: 1,
    ceo: "Elon Musk",
    cto: "Elon Musk",
    coo: "Gwynne Shotwell",
    cto_propulsion: "Tom Mueller",
    valuation: 52000000000,
    summary:
      "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.",
    id: "5eb75edc42fea42237d7f3ed",
  };

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
