"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LOGO, SECTIONS, navItems } from "./data";

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      aria-hidden
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_6px_24px_rgba(19,25,35,0.08)]" : "border-b border-black/5"
      }`}
    >
      <div className="container-max flex h-[76px] items-center justify-between gap-6">
        <a href={SECTIONS.home} aria-label="Infoglen home" className="shrink-0">
          <img src={LOGO} alt="Infoglen" className="h-11 w-auto" />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden lg:block" onMouseLeave={() => setHovered(null)}>
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const open = hovered === item.label;
              return (
                <li key={item.label} className="relative" onMouseEnter={() => setHovered(item.label)}>
                  {item.links ? (
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setHovered(open ? null : item.label)}
                      className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-[15px] font-medium transition-colors ${
                        open ? "text-brand" : "text-ink hover:text-brand"
                      }`}
                    >
                      {item.label}
                      <Chevron open={open} />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-[15px] font-medium text-ink transition-colors hover:text-brand"
                    >
                      {item.label}
                    </a>
                  )}

                  <AnimatePresence>
                    {item.links && open && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full pt-3"
                      >
                        <div
                          className={`flex overflow-hidden rounded-xl border border-black/5 bg-white shadow-[0_20px_50px_rgba(19,25,35,0.14)] ${
                            item.feature ? "w-[640px]" : "w-[280px]"
                          }`}
                        >
                          <ul
                            className={`grid flex-1 gap-0.5 p-4 ${
                              item.feature && item.links.length > 6 ? "grid-cols-2" : "grid-cols-1"
                            }`}
                          >
                            {item.links.map((l) => (
                              <li key={l.label}>
                                <a
                                  href={l.href}
                                  className="block rounded-md px-3 py-2 text-sm text-ink/80 transition-colors hover:bg-sky hover:text-brand"
                                >
                                  {l.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                          {item.feature && (
                            <a
                              href={item.feature.href}
                              className="group flex w-[240px] flex-col bg-sky p-4"
                            >
                              <img
                                src={item.feature.image}
                                alt=""
                                className="mb-3 h-28 w-full rounded-lg object-cover"
                              />
                              <span className="font-display text-sm font-semibold text-ink">
                                {item.feature.title}
                              </span>
                              <span className="mt-1 text-xs leading-relaxed text-ink/70">
                                {item.feature.text}
                              </span>
                              <span className="mt-3 text-xs font-semibold text-brand group-hover:underline">
                                {item.feature.cta} →
                              </span>
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={SECTIONS.contact} className="btn-accent hidden sm:inline-flex">
            Contact Us
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
          >
            <ul className="container-max max-h-[75vh] overflow-y-auto py-3">
              {navItems.map((item) => {
                const open = mobileSection === item.label;
                return (
                  <li key={item.label} className="border-b border-black/5 last:border-0">
                    {item.links ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={open}
                          onClick={() => setMobileSection(open ? null : item.label)}
                          className="flex w-full items-center justify-between py-3 text-left font-medium text-ink"
                        >
                          {item.label}
                          <Chevron open={open} />
                        </button>
                        {open && (
                          <ul className="pb-3 pl-3">
                            {item.links.map((l) => (
                              <li key={l.label}>
                                <a href={l.href} className="block py-2 text-sm text-ink/75 hover:text-brand">
                                  {l.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <a href={item.href} className="block py-3 font-medium text-ink">
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
              <li className="pt-4 pb-2 sm:hidden">
                <a href={SECTIONS.contact} className="btn-accent w-full justify-center">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
