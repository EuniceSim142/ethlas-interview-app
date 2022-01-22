import styles from "./layout.module.css";
import Link from "next/link";
import ROUTES from "../constants/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faReddit } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }) {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Link href="/">
            <a>SpaceX</a>
          </Link>
        </h1>
        <ul className={styles.navigations}>
          <li className={styles.nav}>
            <Link href="./launches">
              <a>Launches</a>
            </Link>
          </li>
          <li className={styles.nav}>
            <Link href="./spacecrafts">
              <a>Spacecrafts</a>
            </Link>
          </li>
          <li className={styles.nav}>
            <Link href="./crew">
              <a>Crew</a>
            </Link>
          </li>
        </ul>
      </header>
      {children}
      <footer className={styles.footer}>
        <section className={styles.disclaimer}>
          <p>
            We are not affiliated, associated, authorized, endorsed by, or in
            any way officially connected with Space Exploration Technologies
            Corp (SpaceX), or any of its subsidiaries or its affiliates.
            <br></br>The names SpaceX as well as related names, marks, emblems
            and images are registered trademarks of their respective owners.
          </p>
          <br></br>
          Credits to:{" "}
          <strong className={styles.navToAPI}>
            <a href="https://github.com/r-spacex/SpaceX-API">SpaceX API</a>
          </strong>{" "}
          for the SpaceX data used
        </section>
      </footer>
    </article>
  );
}
