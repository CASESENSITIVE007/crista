"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slides } from "./data";

const INTERVAL = 6500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  const slide = slides[index];

  return (
    <section
      id="home"
      className="relative flex min-h-[620px] items-center overflow-hidden bg-navy pt-[76px] md:min-h-[680px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.bg})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-[#060b2a]/95 via-[#0a1033]/75 to-transparent" />

      <div className="container-max relative z-10 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
            aria-live="polite"
          >
            <h1 className="text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.12] text-white">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{slide.sub}</p>
            <a href={slide.href} className="btn-accent mt-8">
              {slide.cta}
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 flex items-center gap-4">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-accent" : "w-3 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(index + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
          >
            ›
          </button>
        </div>
      </div>

      <a
        href="#ai-success"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium tracking-wide text-white/70 hover:text-white md:flex"
      >
        Jump to section
        <span className="animate-bounce text-lg" aria-hidden>↓</span>
      </a>
    </section>
  );
}
