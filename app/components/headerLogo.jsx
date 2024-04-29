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
    <div className={styles.onlogo}>
      <Link href="/" className={styles.dLogo}>
        <Image
          src="/img/logo.svg"
          width={208}
          height={56}
          alt="Logo"
          priority
        />
      </Link>
    </div>
  );
};

export default Navbar;
