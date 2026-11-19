"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "./data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;
  const t = testimonials[i];

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setI((v) => (v + 1) % n), 7000);
    return () => clearTimeout(id);
  }, [i, paused, n]);

  return (
    <section id="testimonials" className="bg-mist py-20 md:py-24">
      <div className="container-max">
        <div className="text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title mt-3">
            What Our <span className="hl">Clients Say</span>
          </h2>
        </div>

        <div
          className="mx-auto mt-12 max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.article
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="grid overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_rgba(2,127,210,0.1)] md:grid-cols-[2fr_3fr]"
            >
              <img src={t.image} alt="" className="h-64 w-full object-cover md:h-full" />
              <div className="flex flex-col p-8 md:p-10">
                <span className="font-display text-5xl leading-none text-accent" aria-hidden>
                  &ldquo;
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-brand">{t.industry}</h3>
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink/80">{t.quote}</blockquote>
                <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-black/5 pt-5 text-sm">
                  <div>
                    <dt className="text-ink/50">Project Length</dt>
                    <dd className="mt-1 font-semibold text-ink">{t.length}</dd>
                  </div>
                  <div>
                    <dt className="text-ink/50">Country</dt>
                    <dd className="mt-1 font-semibold text-ink">United States</dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setI((i - 1 + n) % n)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/30 text-brand transition hover:bg-brand hover:text-white"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  type="button"
                  aria-label={`Show testimonial ${k + 1}`}
                  aria-current={k === i}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-7 bg-brand" : "w-2 bg-brand/25"}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setI((i + 1) % n)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/30 text-brand transition hover:bg-brand hover:text-white"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
