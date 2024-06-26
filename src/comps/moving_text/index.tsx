"use client";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Moving_Text() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  const direction = -1;

  useLayoutEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animate);
  };

  return (
    <main className="overflow-hidden px-[4rem]">
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>fastlight cafeteria-</p>
          <p ref={secondText}>fastlight cafeteria-</p>
        </div>
      </div>
    </main>
  );
}
