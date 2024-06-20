import React from "react";
import { projects } from "../data/projects";
import styles from "./projects.module.scss";
import Image from "next/image";
import Header from "../components/headerLogo";

export const metadata = {
  title: "Projects",
  openGraph: {
    title: "Projects",
    description:
      "These are the Projects / Works that I was a part and i have developed some of them from scratch ",
    images: "/img/profilecardimg.jpeg",
    url: "https://www.dilipmaurya.in/projects",
    siteName: "Projects",
  },
  locale: "en_US",
  type: "website",
};

const Page = () => {
  return (
    <>
      <Header />
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2>Portfolio</h2>
            <p>
              Bringing your vision to life with code that's both beautiful and
              functional.
            </p>
          </div>
          <div className={styles.works}>
            {projects.map((project, index) => (
              <div className={styles.project} key={index}>
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  width={394}
                  height={248}
                  priority="true"
                />
                <div className={styles.details}>
                  {project.tech ? (
                    <ul className={styles.techStack}>
                      {project.tech.map((technology, techIndex) => (
                        <li key={techIndex}>{technology}</li>
                      ))}
                    </ul>
                  ) : null}
                  <h3 className={styles.pTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>

                  <a
                    className={styles.pLink}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
