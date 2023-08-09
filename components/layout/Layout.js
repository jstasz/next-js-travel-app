import styles from "./Layout.module.css";
import MainNav from "./MainNav";

function Layout(props) {
  return (
    <div>
      <MainNav />
      <main className={styles.main}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
