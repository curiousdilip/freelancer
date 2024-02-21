import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerBox}>
            <div className={styles.logo}>
              <a href="/">
                {" "}
                <img src="/img/logo-white.svg" alt="" />
              </a>
            </div>
            <div className={styles.nav}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
              </ul>
            </div>
            <div className={styles.copyright}>
              <p>Copyright @ Dilip Maurya</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
