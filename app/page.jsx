import Link from "next/link";
import Header from "./componensts/header";
import styles from "./home.module.scss";
import Image from "next/image";
import Blog from "./componensts/blog";
import Testimonial from "./componensts/testimonial";
export default function Home() {
  return (
    <>
      <Header />
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
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                        width="16"
                        height="16"
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
                        width="16"
                        height="16"
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
                        width="16"
                        height="16"
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
                <h2>I am Professional User Experience Designer</h2>
                <p>
                  I design and develop services for customers specializing
                  creating stylish, modern websites, web services and online
                  stores. My passion is to design digital user experiences.
                </p>
                <p>
                  I design and develop services for customers specializing
                  creating stylish, modern websites, web services.
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
              <h3>Work Process</h3>
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
                <h4>1. Research</h4>
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
                <h4>2. Analyze</h4>
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
                <h4>3. Design</h4>
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
                <h4>4. Launch</h4>
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
              <h3>Portfolio</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea magni aut quo iusto itaque, cum rem ullam! Sed similique, voluptas hic dolorem fugit dolorum illum obcaecati qui illo! Voluptates, dignissimos.</p>

            </div>
            <div className={styles.projects}>
              <div className={styles.project}>
                <div className={styles.imgContainer}>
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className={styles.content}>
                  <p className={styles.type}>UI UX </p>
                  <h4>Somthing</h4>
                  <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quas dolores quidem dolorem nostrum expedita autem, est rerum voluptate alias ex facere repellat esse eos ipsam exercitationem iusto repudiandae laudantium.</div>
                  <button><a href="#">Case Study</a></button>

                </div>


              </div>
              <div className={styles.project}>
                <div className={styles.imgContainer}>
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className={styles.content}>
                  <p className={styles.type}>UI UX </p>
                  <h4>Somthing</h4>
                  <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quas dolores quidem dolorem nostrum expedita autem, est rerum voluptate alias ex facere repellat esse eos ipsam exercitationem iusto repudiandae laudantium.</div>
                  <button><a href="#">Case Study</a></button>

                </div>


              </div><div className={styles.project}>
                <div className={styles.imgContainer}>
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className={styles.content}>
                  <p className={styles.type}>UI UX </p>
                  <h4>Somthing</h4>
                  <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quas dolores quidem dolorem nostrum expedita autem, est rerum voluptate alias ex facere repellat esse eos ipsam exercitationem iusto repudiandae laudantium.</div>
                  <button><a href="#">Case Study</a></button>

                </div>


              </div><div className={styles.project}>
                <div className={styles.imgContainer}>
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className={styles.content}>
                  <p className={styles.type}>UI UX </p>
                  <h4>Somthing</h4>
                  <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quas dolores quidem dolorem nostrum expedita autem, est rerum voluptate alias ex facere repellat esse eos ipsam exercitationem iusto repudiandae laudantium.</div>
                  <button><a href="#">Case Study</a></button>

                </div>


              </div>
              <div className={styles.project}>
                <div className={styles.imgContainer}>
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className={styles.content}>
                  <p className={styles.type}>UI UX </p>
                  <h4>Somthing</h4>
                  <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quas dolores quidem dolorem nostrum expedita autem, est rerum voluptate alias ex facere repellat esse eos ipsam exercitationem iusto repudiandae laudantium.</div>
                  <button><a href="#">Case Study</a></button>

                </div>


              </div>
              <div className={styles.project}>
                <div className={styles.imgContainer}>
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className={styles.content}>
                  <p className={styles.type}>UI UX </p>
                  <h4>Somthing</h4>
                  <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quas dolores quidem dolorem nostrum expedita autem, est rerum voluptate alias ex facere repellat esse eos ipsam exercitationem iusto repudiandae laudantium.</div>
                  <button><a href="#">Case Study</a></button>

                </div>


              </div>

            </div>
            <div className={styles.more}>
              <button><a href="#">More Projects</a></button>
            </div>

          </div>
        </section>

        <section className={styles.cta} id="cta">
          <div className={styles.container}>
            <div className={styles.content}>
              <h2>Do you have Project Idia?<br />
                Let's discuss your project!</h2>
              <p>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.</p>
              <button><a href="#">Let's Work Together</a> <i className="bi bi-arrow-right-short"></i></button>

            </div>
          </div>

        </section >
        <section className={styles.blogss} id="blogs">
          <div className={styles.container}>
            <div className={styles.heading}>
              <h3>Blog</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea magni aut quo iusto itaque, cum rem ullam! Sed similique, voluptas hic dolorem fugit dolorum illum obcaecati qui illo! Voluptates, dignissimos.</p>

            </div>
            <Blog />

          </div>

        </section>

        <section className={styles.routine} id="routine">

          <div className={styles.container}>
            <div className={styles.content}>
              <h3>What I do?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, earum. Possimus magnam quae nobis expedita iure, nesciunt nulla commodi rem quisquam harum molestiae ducimus natus. Recusandae quas ullam perferendis ducimus.  <br /><br />

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus quam numquam nesciunt provident, asperiores pariatur quis, labore delectus, illo aperiam cupiditate expedita. Voluptas, neque. Facilis repellendus laudantium nihil aliquid.</p>

              <div className={styles.btn}>
                <Link href="#" className={styles.primaryBtn}>
                  Say Hello!
                </Link>
              </div>

            </div>
            <div className={styles.works}>
              <div className={styles.work}>
                <h4>User Experience (UX)</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ab explicabo libero voluptas cumque temporibus repellendus laboriosam quam necessitatibus quibusdam sapiente veritatis omnis velit est optio vero, ipsam vel earum.</p>
              </div>
              <div className={styles.work}>
                <h4>User Experience (UX)</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ab explicabo libero voluptas cumque temporibus repellendus laboriosam quam necessitatibus quibusdam sapiente veritatis omnis velit est optio vero, ipsam vel earum.</p>
              </div>  <div className={styles.work}>
                <h4>User Experience (UX)</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ab explicabo libero voluptas cumque temporibus repellendus laboriosam quam necessitatibus quibusdam sapiente veritatis omnis velit est optio vero, ipsam vel earum.</p>
              </div>
            </div>

          </div>
        </section>
        <section className={styles.clients} id="client">
          <div className={styles.container}>
            <div className={styles.heading}>
              <h3>Happy Clients</h3>
              <p>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.</p>

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
              <h3>Testimonial</h3>
              <p>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.</p>
            </div>
            <Testimonial />

          </div>

        </section>
        <section className={styles.contact} id="contact">
          <div className={styles.container}>
            <div className={styles.details}>
              <h4>Let’s discuss your Project</h4>
              <p>There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>
              <div className={styles.iconDetail}>
                <div className={styles.icon}>
                  <div className={styles.box}>
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 2.4804C13.4087 0.8891 11.2504 -0.00488283 8.99999 -0.00488281C6.74955 -0.0048828 4.59129 0.8891 2.99999 2.4804C1.40869 4.0717 0.514709 6.22996 0.514709 8.4804C0.514709 10.7308 1.40869 12.8891 2.99999 14.4804L8.26999 19.7604C8.36295 19.8541 8.47356 19.9285 8.59541 19.9793C8.71727 20.0301 8.84798 20.0562 8.97999 20.0562C9.112 20.0562 9.24271 20.0301 9.36457 19.9793C9.48643 19.9285 9.59703 19.8541 9.68999 19.7604L15 14.4304C16.5846 12.8457 17.4749 10.6965 17.4749 8.4554C17.4749 6.21434 16.5846 4.06508 15 2.4804ZM13.57 13.0004L8.99999 17.5904L4.42999 13.0004C3.52713 12.0967 2.91247 10.9456 2.66369 9.69269C2.4149 8.43973 2.54318 7.14115 3.03229 5.96108C3.52141 4.78101 4.34941 3.77245 5.41162 3.06288C6.47383 2.3533 7.72258 1.97458 8.99999 1.97458C10.2774 1.97458 11.5261 2.3533 12.5884 3.06288C13.6506 3.77245 14.4786 4.78101 14.9677 5.96108C15.4568 7.14115 15.5851 8.43973 15.3363 9.69269C15.0875 10.9456 14.4728 12.0967 13.57 13.0004ZM5.99999 5.4104C5.19271 6.22017 4.73939 7.31697 4.73939 8.4604C4.73939 9.60383 5.19271 10.7006 5.99999 11.5104C6.59975 12.1112 7.36358 12.5215 8.19564 12.6898C9.0277 12.8581 9.89094 12.777 10.6771 12.4566C11.4632 12.1361 12.1372 11.5907 12.6145 10.8886C13.0918 10.1866 13.3511 9.35927 13.36 8.5104C13.3645 7.9436 13.2553 7.38166 13.0389 6.85779C12.8225 6.33392 12.5032 5.85875 12.1 5.4604C11.7037 5.05498 11.2311 4.73194 10.7094 4.50986C10.1878 4.28779 9.62733 4.17107 9.06039 4.16643C8.49345 4.16178 7.93119 4.2693 7.40596 4.48279C6.88073 4.69628 6.40291 5.01153 5.99999 5.4104ZM10.69 10.0904C10.311 10.4751 9.8102 10.7163 9.27312 10.7727C8.73603 10.829 8.19605 10.697 7.7455 10.3993C7.29494 10.1016 6.96179 9.65664 6.803 9.14048C6.64421 8.62432 6.66964 8.06904 6.87495 7.56955C7.08026 7.07007 7.45269 6.65741 7.92858 6.40213C8.40446 6.14686 8.95424 6.06481 9.48393 6.17002C10.0136 6.27522 10.4903 6.56116 10.8325 6.97893C11.1747 7.3967 11.3612 7.92037 11.36 8.4604C11.3454 9.07767 11.0865 9.66393 10.64 10.0904H10.69Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className={styles.detail}>
                    <p>Address:</p>
                    <h5>New Mexico 31134</h5>
                  </div>

                </div>
                <div className={styles.icon}>
                  <div className={styles.box}>
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 2.4804C13.4087 0.8891 11.2504 -0.00488283 8.99999 -0.00488281C6.74955 -0.0048828 4.59129 0.8891 2.99999 2.4804C1.40869 4.0717 0.514709 6.22996 0.514709 8.4804C0.514709 10.7308 1.40869 12.8891 2.99999 14.4804L8.26999 19.7604C8.36295 19.8541 8.47356 19.9285 8.59541 19.9793C8.71727 20.0301 8.84798 20.0562 8.97999 20.0562C9.112 20.0562 9.24271 20.0301 9.36457 19.9793C9.48643 19.9285 9.59703 19.8541 9.68999 19.7604L15 14.4304C16.5846 12.8457 17.4749 10.6965 17.4749 8.4554C17.4749 6.21434 16.5846 4.06508 15 2.4804ZM13.57 13.0004L8.99999 17.5904L4.42999 13.0004C3.52713 12.0967 2.91247 10.9456 2.66369 9.69269C2.4149 8.43973 2.54318 7.14115 3.03229 5.96108C3.52141 4.78101 4.34941 3.77245 5.41162 3.06288C6.47383 2.3533 7.72258 1.97458 8.99999 1.97458C10.2774 1.97458 11.5261 2.3533 12.5884 3.06288C13.6506 3.77245 14.4786 4.78101 14.9677 5.96108C15.4568 7.14115 15.5851 8.43973 15.3363 9.69269C15.0875 10.9456 14.4728 12.0967 13.57 13.0004ZM5.99999 5.4104C5.19271 6.22017 4.73939 7.31697 4.73939 8.4604C4.73939 9.60383 5.19271 10.7006 5.99999 11.5104C6.59975 12.1112 7.36358 12.5215 8.19564 12.6898C9.0277 12.8581 9.89094 12.777 10.6771 12.4566C11.4632 12.1361 12.1372 11.5907 12.6145 10.8886C13.0918 10.1866 13.3511 9.35927 13.36 8.5104C13.3645 7.9436 13.2553 7.38166 13.0389 6.85779C12.8225 6.33392 12.5032 5.85875 12.1 5.4604C11.7037 5.05498 11.2311 4.73194 10.7094 4.50986C10.1878 4.28779 9.62733 4.17107 9.06039 4.16643C8.49345 4.16178 7.93119 4.2693 7.40596 4.48279C6.88073 4.69628 6.40291 5.01153 5.99999 5.4104ZM10.69 10.0904C10.311 10.4751 9.8102 10.7163 9.27312 10.7727C8.73603 10.829 8.19605 10.697 7.7455 10.3993C7.29494 10.1016 6.96179 9.65664 6.803 9.14048C6.64421 8.62432 6.66964 8.06904 6.87495 7.56955C7.08026 7.07007 7.45269 6.65741 7.92858 6.40213C8.40446 6.14686 8.95424 6.06481 9.48393 6.17002C10.0136 6.27522 10.4903 6.56116 10.8325 6.97893C11.1747 7.3967 11.3612 7.92037 11.36 8.4604C11.3454 9.07767 11.0865 9.66393 10.64 10.0904H10.69Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className={styles.detail}>
                    <p>Address:</p>
                    <h5>New Mexico 31134</h5>
                  </div>

                </div>  <div className={styles.icon}>
                  <div className={styles.box}>
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 2.4804C13.4087 0.8891 11.2504 -0.00488283 8.99999 -0.00488281C6.74955 -0.0048828 4.59129 0.8891 2.99999 2.4804C1.40869 4.0717 0.514709 6.22996 0.514709 8.4804C0.514709 10.7308 1.40869 12.8891 2.99999 14.4804L8.26999 19.7604C8.36295 19.8541 8.47356 19.9285 8.59541 19.9793C8.71727 20.0301 8.84798 20.0562 8.97999 20.0562C9.112 20.0562 9.24271 20.0301 9.36457 19.9793C9.48643 19.9285 9.59703 19.8541 9.68999 19.7604L15 14.4304C16.5846 12.8457 17.4749 10.6965 17.4749 8.4554C17.4749 6.21434 16.5846 4.06508 15 2.4804ZM13.57 13.0004L8.99999 17.5904L4.42999 13.0004C3.52713 12.0967 2.91247 10.9456 2.66369 9.69269C2.4149 8.43973 2.54318 7.14115 3.03229 5.96108C3.52141 4.78101 4.34941 3.77245 5.41162 3.06288C6.47383 2.3533 7.72258 1.97458 8.99999 1.97458C10.2774 1.97458 11.5261 2.3533 12.5884 3.06288C13.6506 3.77245 14.4786 4.78101 14.9677 5.96108C15.4568 7.14115 15.5851 8.43973 15.3363 9.69269C15.0875 10.9456 14.4728 12.0967 13.57 13.0004ZM5.99999 5.4104C5.19271 6.22017 4.73939 7.31697 4.73939 8.4604C4.73939 9.60383 5.19271 10.7006 5.99999 11.5104C6.59975 12.1112 7.36358 12.5215 8.19564 12.6898C9.0277 12.8581 9.89094 12.777 10.6771 12.4566C11.4632 12.1361 12.1372 11.5907 12.6145 10.8886C13.0918 10.1866 13.3511 9.35927 13.36 8.5104C13.3645 7.9436 13.2553 7.38166 13.0389 6.85779C12.8225 6.33392 12.5032 5.85875 12.1 5.4604C11.7037 5.05498 11.2311 4.73194 10.7094 4.50986C10.1878 4.28779 9.62733 4.17107 9.06039 4.16643C8.49345 4.16178 7.93119 4.2693 7.40596 4.48279C6.88073 4.69628 6.40291 5.01153 5.99999 5.4104ZM10.69 10.0904C10.311 10.4751 9.8102 10.7163 9.27312 10.7727C8.73603 10.829 8.19605 10.697 7.7455 10.3993C7.29494 10.1016 6.96179 9.65664 6.803 9.14048C6.64421 8.62432 6.66964 8.06904 6.87495 7.56955C7.08026 7.07007 7.45269 6.65741 7.92858 6.40213C8.40446 6.14686 8.95424 6.06481 9.48393 6.17002C10.0136 6.27522 10.4903 6.56116 10.8325 6.97893C11.1747 7.3967 11.3612 7.92037 11.36 8.4604C11.3454 9.07767 11.0865 9.66393 10.64 10.0904H10.69Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className={styles.detail}>
                    <p>Address:</p>
                    <h5>New Mexico 31134</h5>
                  </div>

                </div>

              </div>

              <div className={styles.social}>
                <div className={styles.box}>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                      width="16"
                      height="16"
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
                      width="16"
                      height="16"
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
                      width="16"
                      height="16"
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
            <div className={styles.form}>
              <p>There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alte.</p>
            </div>

          </div>

        </section>
      </main >
    </>
  );
}
