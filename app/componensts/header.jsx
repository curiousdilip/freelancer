"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          <Image src="/img/logo.svg" alt="" width={208} height={56} />
        </Link>
        <nav className={menuOpen ? "open" : ""}>
          <Link href="/blog">Blog</Link>
          <Link href="/works">Works</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
        </button>
      </div>
    </header>
  );
}
