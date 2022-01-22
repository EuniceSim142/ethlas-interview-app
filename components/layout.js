import styles from "./layout.module.css";
import Link from "next/link";
import ROUTES from "../constants/routes";

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
      <footer>Footer :)</footer>
    </article>
  );
}
