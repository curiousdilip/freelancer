import Header from "./componensts/header";
import styles from "./home.module.scss"
export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="hero">
          <div className={styles.container}></div>

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
