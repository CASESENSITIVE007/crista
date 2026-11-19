"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { serviceCards, solutionCards } from "./data";

const tabs = [
  { id: "services", label: "Services", cards: serviceCards },
  { id: "solutions", label: "Solutions", cards: solutionCards },
] as const;

export default function Services() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("services");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="services" className="scroll-mt-20 bg-white py-20 md:py-24">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="section-title mt-3">
            Salesforce Consulting &amp; <span className="hl">Implementation Experts</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            We don&rsquo;t just consult. We embed as part of your team, committed to making Salesforce work for
            your business, not the other way around.
          </p>
        </div>

        <div role="tablist" className="mx-auto mt-10 flex w-fit rounded-full bg-sky p-1.5">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className={`rounded-full px-7 py-2.5 text-sm font-semibold transition ${
                active === t.id ? "bg-brand text-white shadow-md" : "text-ink/70 hover:text-brand"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={active}
            role="tabpanel"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          >
            {current.cards.map((card) => (
              <li key={card.label}>
                <a
                  href={card.href}
                  className="group flex h-full flex-col items-center rounded-2xl border border-black/5 bg-white p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_16px_40px_rgba(2,127,210,0.12)]"
                >
                  <img
                    src={card.icon}
                    alt=""
                    className="h-28 w-28 object-contain transition duration-300 group-hover:scale-105"
                  />
                  <span className="mt-5 flex-1 font-display font-semibold leading-snug text-ink">
                    {card.label}
                  </span>
                  <span className="mt-4 text-sm font-semibold text-brand">Learn more →</span>
                </a>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}
