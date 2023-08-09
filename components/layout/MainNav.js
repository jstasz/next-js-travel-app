import styles from "./MainNav.module.css";
import Link from "next/link";

function MainNav() {
  return (
    <header className={styles["header"]}>
      <p className={styles["title"]}>
        plan your <span className={styles["title-color"]}>travel</span>
      </p>
      {/* <div> */}
      <nav className={styles["main-nav"]}>
        <ul className={styles["nav-items"]}>
          <li className={styles["nav-item"]}>
            <Link href="/">travels</Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/new-travel">new Travel</Link>
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </header>
  );
}

export default MainNav;
