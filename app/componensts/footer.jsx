import styles from "./footer.module.scss";
import Link from "next/link";
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
                  <Link href="#hero">Home</Link>
                </li>
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="#process">Process</Link>
                </li>
                <li>
                  <Link href="#portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="#client">Clients</Link>
                </li>
                <li>
                  <Link href="#testimonial">Testimonials</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
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
