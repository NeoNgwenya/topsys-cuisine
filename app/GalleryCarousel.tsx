"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import styles from "./page.module.scss";

type GalleryImage = { src: string; alt: string };
type MouseDrag = {
  pointerId: number;
  startX: number;
  startScroll: number | null;
};

export default function GalleryCarousel({ images }: { images: GalleryImage[] }) {
  const viewport = useRef<HTMLDivElement>(null);
  const moveSlide = useRef<(direction: number) => void>(null);
  const [activeImage, setActiveImage] = useState(0);
  const count = images.length;

  useLayoutEffect(() => {
    const scroller = viewport.current!;
    const slides = Array.from(scroller.querySelectorAll<HTMLElement>(`.${styles.gallerySlide}`));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let step = 0;
    let activeIndex = 0;
    let targetIndex: number | null = null;
    let scrollTimer: number | undefined;
    let drag: MouseDrag | undefined;
    const hasScrollEnd = "onscrollend" in scroller;

    function updatePerspective() {
      const scrollLeft = scroller.scrollLeft;
      slides.forEach((slide, index) => {
        const offset = index * step - scrollLeft;
        const distance = Math.abs(offset) < 1 ? 0 : Math.max(-2, Math.min(2, offset / step));
        slide.style.setProperty("--slide-distance", String(distance));
      });
    }

    function finishScroll() {
      if (!step || drag?.startScroll != null) return;

      const index = Math.round(scroller.scrollLeft / step);
      activeIndex = index % count;
      targetIndex = null;
      setActiveImage(activeIndex);

      // Recenter on the identical slide in the middle copy to keep both directions open.
      if (index < count || index >= count * 2) {
        scroller.scrollTo({ left: (count + activeIndex) * step, behavior: "instant" });
      }
      updatePerspective();
    }

    function handleScroll() {
      if (!step) return;

      updatePerspective();
      if (!hasScrollEnd) {
        window.clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout(finishScroll, 140);
      }
    }

    function measure() {
      const track = scroller.firstElementChild!;
      const nextStep = scroller.clientWidth
        ? parseFloat(getComputedStyle(slides[0]).width) + parseFloat(getComputedStyle(track).columnGap)
        : 0;
      if (nextStep === step) return;

      step = nextStep;
      targetIndex = null;
      if (!step) return;

      scroller.scrollTo({ left: (count + activeIndex) * step, behavior: "instant" });
      updatePerspective();
    }

    function goToSlide(index: number) {
      targetIndex = Math.max(0, Math.min(slides.length - 1, index));
      const left = targetIndex * step;
      if (Math.abs(scroller.scrollLeft - left) < 1) {
        finishScroll();
        return;
      }
      scroller.scrollTo({ left, behavior: reducedMotion.matches ? "instant" : "smooth" });
    }

    moveSlide.current = (direction) => {
      if (!step) return;

      const index = targetIndex ?? Math.round(scroller.scrollLeft / step);
      goToSlide(index + direction);
    };

    function handlePointerDown(event: PointerEvent) {
      if (event.pointerType !== "mouse" || event.button !== 0 || !step) return;

      drag = { pointerId: event.pointerId, startX: event.clientX, startScroll: null };
    }

    function handlePointerMove(event: PointerEvent) {
      if (!drag || event.pointerId !== drag.pointerId || !step) return;

      const delta = event.clientX - drag.startX;
      if (drag.startScroll === null) {
        if (Math.abs(delta) < 6) return;

        targetIndex = null;
        drag.startScroll = scroller.scrollLeft;
        scroller.dataset.dragging = "";
        scroller.setPointerCapture(event.pointerId);
      }

      // Loop through the middle copy so even a long drag has a photo on each side.
      const cycle = count * step;
      const position = (drag.startScroll - delta) % cycle;
      scroller.scrollTo({ left: cycle + (position + cycle) % cycle, behavior: "instant" });
    }

    function endPointer(event: PointerEvent) {
      if (!drag || event.pointerId !== drag.pointerId) return;

      const wasDragging = drag.startScroll !== null;
      drag = undefined;
      if (!wasDragging) return;

      const index = Math.round(scroller.scrollLeft / step);
      delete scroller.dataset.dragging;
      if (step) goToSlide(index);
    }

    function handlePointerLeave(event: PointerEvent) {
      if (drag?.startScroll === null) endPointer(event);
    }

    function handleClick(event: MouseEvent) {
      if (!step || !(event.target instanceof Element)) return;

      // After a drag the captured pointer targets the viewport, not a photo.
      const slide = event.target.closest<HTMLElement>(`.${styles.gallerySlide}`);
      if (slide) goToSlide(slides.indexOf(slide));
    }

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(scroller);
    scroller.addEventListener("scroll", handleScroll, { passive: true });
    scroller.addEventListener("scrollend", finishScroll);
    scroller.addEventListener("pointerdown", handlePointerDown);
    scroller.addEventListener("pointermove", handlePointerMove);
    scroller.addEventListener("pointerup", endPointer);
    scroller.addEventListener("pointercancel", endPointer);
    scroller.addEventListener("lostpointercapture", endPointer);
    scroller.addEventListener("pointerleave", handlePointerLeave);
    scroller.addEventListener("click", handleClick);

    return () => {
      resizeObserver.disconnect();
      scroller.removeEventListener("scroll", handleScroll);
      scroller.removeEventListener("scrollend", finishScroll);
      scroller.removeEventListener("pointerdown", handlePointerDown);
      scroller.removeEventListener("pointermove", handlePointerMove);
      scroller.removeEventListener("pointerup", endPointer);
      scroller.removeEventListener("pointercancel", endPointer);
      scroller.removeEventListener("lostpointercapture", endPointer);
      scroller.removeEventListener("pointerleave", handlePointerLeave);
      scroller.removeEventListener("click", handleClick);
      window.clearTimeout(scrollTimer);
      moveSlide.current = null;
    };
  }, [count]);

  return (
    <div className={styles.galleryCarousel} role="region" aria-label="Food gallery" aria-roledescription="carousel">
      <div
        ref={viewport}
        className={styles.galleryViewport}
        tabIndex={0}
        aria-label="Scroll through food photos"
        onKeyDown={(event) => {
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          moveSlide.current?.(event.key === "ArrowLeft" ? -1 : 1);
        }}
      >
        <div className={styles.galleryTrack} aria-hidden="true">
          {[...images, ...images, ...images].map((image, index) => (
            <div className={styles.gallerySlide} key={`${index}-${image.src}`}>
              <div className={styles.galleryCard}>
                <Image src={image.src} alt="" fill sizes="(min-width: 1525px) 290px, 19vw" draggable={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.galleryControls}>
        {([-1, 1] as const).map((direction) => (
          <button
            type="button"
            key={direction}
            aria-label={direction === -1 ? "Previous photo" : "Next photo"}
            onClick={() => moveSlide.current?.(direction)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={direction === -1 ? "M19 12H5m7-7-7 7 7 7" : "M5 12h14m-7-7 7 7-7 7"} />
            </svg>
          </button>
        ))}
      </div>
      <span className={styles.galleryStatus} aria-live="polite">
        {activeImage + 1} of {count}. {images[activeImage].alt}
      </span>
    </div>
  );
}
