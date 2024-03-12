import styles from "./footer.module.scss";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerBox}>
            <div className={styles.copyright}>
              <p>Designed by <a href="https://www.figma.com/community/file/1170206889562959306" target="_blank">Templatecookie</a> & Developed by <a href="https://www.dilipmaurya.in" target="_blank">Dilip Kumar Maurya</a></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
