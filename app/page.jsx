import Link from "next/link";
import Header from "./componensts/header";
import styles from "./home.module.scss";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id={styles.hero}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.content}>
                  <h1>
                    Hello, I'm <br />
                    Dilip Kumar
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                    <span>Magnam</span> officiis voluptates alias consequuntur
                    totam cupiditate fugiat dolores recusandae corporis earum
                    error autem eligendi, vitae expedita! Culpa consequatur
                    ratione non dolorem.
                  </p>
                  <div className={styles.btn}>
                    <Link href="#" className={styles.primaryBtn}>
                      Say Hello!
                    </Link>
                  </div>
                </div>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <h3>2+</h3>
                    <p>Experience</p>
                  </div>
                  <div className={styles.stat}>
                    <h3>10+</h3>
                    <p>Project Completed</p>
                  </div>
                  <div className={styles.stat}>
                    <h3>5+</h3> <p>Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/sample-img.jpeg"
                    width={636}
                    height={536}
                    alt="sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about"></section>
        <section id="services"></section>
        <section id="process"></section>
        <section id="portfolio"></section>
        <section id="blog"></section>
        <section id="services"></section>
        <section id="contact"></section>
      </main>
    </>
  );
}
