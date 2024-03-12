"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function MyComponent() {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/img/hero-animation.json",
    });
  }, []);

  return <div ref={animationContainer}></div>;
}
