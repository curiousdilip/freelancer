"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.scss";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/">
          <Image
            src="/img/logo.svg"
            width={208}
            height={56}
            alt="Logo"
            priority
          />
        </Link>
        <button className={styles.toggleButton} onClick={toggleMenu}>
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}>
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
          <Link href="#">Portfolio</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="#">Services</Link>
        </li>

        <Link href="#" className={styles.primaryBtn}>
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
