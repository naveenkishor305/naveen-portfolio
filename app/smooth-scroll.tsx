"use client";

import { useEffect } from "react";
import { animate } from "motion";
import { useReducedMotion } from "motion/react";

export default function SmoothScroll() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let stopCurrentAnimation: (() => void) | undefined;

    function handleClick(event: MouseEvent) {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      ) {
        return;
      }

      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href) return;

      const destination =
        href === "#" ? document.documentElement : document.querySelector(href);

      if (!destination) return;

      event.preventDefault();

      const targetPosition =
        href === "#"
          ? 0
          : destination.getBoundingClientRect().top + window.scrollY;

      stopCurrentAnimation?.();

      if (shouldReduceMotion) {
        window.scrollTo(0, targetPosition);
      } else {
        const animation = animate(window.scrollY, targetPosition, {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (position) => {
            window.scrollTo({
              top: position,
              behavior: "instant",
            });
          },
        });

        stopCurrentAnimation = () => animation.stop();
      }

      window.history.pushState(
        null,
        "",
        href === "#" ? window.location.pathname : href,
      );
    }

    document.addEventListener("click", handleClick);

    return () => {
      stopCurrentAnimation?.();
      document.removeEventListener("click", handleClick);
    };
  }, [shouldReduceMotion]);

  return null;
}
