import Link from "next/link";
import styles from "./home.module.scss";
import Image from "next/image";
import Blog from "./componensts/blog";
import Testimonial from "./componensts/testimonial";
export default function Home() {
  return (
    <>
      <main>
        <section id="hero" className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.content}>
                  <h1>
                    Hello, I'm <br />
                    Dilip Kumar
                  </h1>
                  <p>
                    {" "}
                    I'm a passionate <span>frontend web developer </span>
                    dedicated to creating captivating digital experiences. With
                    over 2 years of experience and 10+ completed projects, I
                    specialize in crafting visually stunning websites that leave
                    a lasting impression.
                  </p>
                  <div className={styles.btn}>
                    <Link
                      href="https://wa.me/919899742615"
                      target="_blank"
                      className={styles.primaryBtn}
                    >
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
                  {/* <Image
                    src="/img/sample-img.jpeg"
                    width={636}
                    height={536}
                    alt="sample image"
                  /> */}
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.about} id="about">
          <div className={styles.container}>
            <div className={styles.aboutBox}>
              <div className={styles.imgContainer}>
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className={styles.social}>
                  <div className={styles.box}>
                    <a href="https://linkedin.com/curiousdilip" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </a>
                    <a href="https://github.com/curiousdilip" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                    <a href="https://twitter.com/curiousdilip" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </a>
                    <a href="https://www.dilipmaurya.in" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-globe"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <h2>I am a Frontend Web Developer</h2>
                <p>
                  I am a Frontend Web Developer passionate about crafting
                  stylish, modern websites, web services, and online stores.
                  With a keen eye for detail and a love for creating exceptional
                  digital experiences, I specialize in designing and developing
                  services that cater to the unique needs of each client.
                </p>
                <p>
                  In my work, I merge creativity with technical expertise to
                  bring ideas to life. Whether it's building intuitive user
                  interfaces or optimizing website performance, I thrive on the
                  challenges of the ever-evolving digital landscape.
                </p>
                <div className={styles.ctaBtns}>
                  <button>
                    <a href="#">My Projects</a>
                  </button>
                  <button>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-download"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                      </svg>
                      Download CV
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.process} id="process">
          <div className={styles.container}>
            <div className={styles.content}>
              <h2>Work Process</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non.
              </p>
            </div>
            <div className={styles.steps}>
              <div className={styles.step}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                </svg>
                <h3>1. Research</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
              <div className={styles.step}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-graph-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
                  />
                </svg>
                <h3>2. Analyze</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
              <div className={styles.step}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
                <h3>3. Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
              <div className={styles.step}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-laptop"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                </svg>
                <h3>4. Launch</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.portfolio} id="portfolio">
          <div className={styles.container}>
            <div className={styles.heading}>
              <h2>Portfolio</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                magni aut quo iusto itaque, cum rem ullam! Sed similique,
                voluptas hic dolorem fugit dolorum illum obcaecati qui illo!
                Voluptates, dignissimos.
              </p>
            </div>
            <div className={styles.projects}>
              <div className={styles.project}>
                <div className={styles.imgContainer}>
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.type}>UI UX </p>
                  <h3>Somthing</h3>
                  <div className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quas dolores quidem dolorem nostrum expedita
                    autem, est rerum voluptate alias ex facere repellat esse eos
                    ipsam exercitationem iusto repudiandae laudantium.
                  </div>
                  <button>
                    <a href="#">Case Study</a>
                  </button>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.imgContainer}>
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.type}>UI UX </p>
                  <h3>Somthing</h3>

                  <div className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quas dolores quidem dolorem nostrum expedita
                    autem, est rerum voluptate alias ex facere repellat esse eos
                    ipsam exercitationem iusto repudiandae laudantium.
                  </div>
                  <button>
                    <a href="#">Case Study</a>
                  </button>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.imgContainer}>
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.type}>UI UX </p>
                  <h3>Somthing</h3>

                  <div className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quas dolores quidem dolorem nostrum expedita
                    autem, est rerum voluptate alias ex facere repellat esse eos
                    ipsam exercitationem iusto repudiandae laudantium.
                  </div>
                  <button>
                    <a href="#">Case Study</a>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.more}>
              <button>
                <Link href="/projects">More Projects</Link>
              </button>
            </div>
          </div>
        </section>

        <section className={styles.cta} id="cta">
          <div className={styles.container}>
            <div className={styles.content}>
              <h2>
                Do you have Project Idia?
                <br />
                Let's discuss your project!
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <button>
                <a href="#">Let's Work Together</a>{" "}
                <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>
        </section>

        <section className={styles.routine} id="routine">
          <div className={styles.container}>
            <div className={styles.content}>
              <h2>What I do?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, earum. Possimus magnam quae nobis expedita iure,
                nesciunt nulla commodi rem quisquam harum molestiae ducimus
                natus. Recusandae quas ullam perferendis ducimus. <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                accusamus quam numquam nesciunt provident, asperiores pariatur
                quis, labore delectus, illo aperiam cupiditate expedita.
                Voluptas, neque. Facilis repellendus laudantium nihil aliquid.
              </p>

              <div className={styles.btn}>
                <Link href="#" className={styles.primaryBtn}>
                  Say Hello!
                </Link>
              </div>
            </div>
            <div className={styles.works}>
              <div className={styles.work}>
                <h3>User Experience (UX)</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum ab explicabo libero voluptas cumque temporibus
                  repellendus laboriosam quam necessitatibus quibusdam sapiente
                  veritatis omnis velit est optio vero, ipsam vel earum.
                </p>
              </div>
              <div className={styles.work}>
                <h3>User Experience (UX)</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum ab explicabo libero voluptas cumque temporibus
                  repellendus laboriosam quam necessitatibus quibusdam sapiente
                  veritatis omnis velit est optio vero, ipsam vel earum.
                </p>
              </div>{" "}
              <div className={styles.work}>
                <h3>User Experience (UX)</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum ab explicabo libero voluptas cumque temporibus
                  repellendus laboriosam quam necessitatibus quibusdam sapiente
                  veritatis omnis velit est optio vero, ipsam vel earum.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.clients} id="client">
          <div className={styles.container}>
            <div className={styles.heading}>
              <h2>Happy Clients</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
            <div className={styles.logos}>
              <img src="/img/logo.svg" />
              <img src="/img/logo.svg" />
              <img src="/img/logo.svg" />
              <img src="/img/logo.svg" />
              <img src="/img/logo.svg" />
            </div>
          </div>
        </section>
        <section className={styles.testimonial} id="testimonial">
          <div className={styles.container}>
            <div className={styles.heading}>
              <h2>Testimonial</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
            <Testimonial />
          </div>
        </section>
        <section className={styles.contact} id="contact">
          <div className={styles.container}>
            <div className={styles.details}>
              <h2>Contact Us</h2>
              <p>Let’s discuss your project</p>
              <div className={styles.iconDetail}>
                <div className={styles.icon}>
                  <div className={styles.box}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-phone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                  </div>
                  <div className={styles.detail}>
                    <p>Phone:</p>
                    <h3>+91 98997 42615</h3>
                  </div>
                </div>{" "}
                <div className={styles.icon}>
                  <div className={styles.box}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                  </div>
                  <div className={styles.detail}>
                    <p>Email:</p>
                    <h3>contact@dilipmaurya.in</h3>
                  </div>
                </div>
                <div className={styles.icon}>
                  <div className={styles.box}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </div>
                  <div className={styles.detail}>
                    <p>Address:</p>
                    <h3>New Delhi, India</h3>
                  </div>
                </div>
              </div>

              <div className={styles.social}>
                <div className={styles.box}>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-globe"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.form}>
              <p>Fill out the form below to get started</p>
              <form>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name*"
                  required
                  maxLength="45"
                />
                <br />{" "}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  required
                  maxLength="45"
                />
                <br />
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Location"
                  maxLength="45"
                />
                <br />
                <div className={styles.bsub}>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    placeholder="Budget*"
                    required
                    maxLength="10"
                  />
                  <br />{" "}
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject*"
                    required
                    maxLength="45"
                  />
                  <br />
                </div>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="3"
                  placeholder="Message*"
                  required
                  maxLength="100"
                ></textarea>
                <input type="submit" value="Submit" />
                <br />
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
