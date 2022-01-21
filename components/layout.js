import styles from "./layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>SpaceX</h1>
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
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </header>
      {children}
      <footer>Footer :)</footer>
    </article>
  );
}
