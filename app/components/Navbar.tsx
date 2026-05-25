"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Rankers", href: "#rankers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.15)" : "0 1px 5px rgba(0,0,0,0.08)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#cc0000",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 900,
                fontSize: "1.2rem",
              }}
            >
              C
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.2rem", color: "#cc0000", lineHeight: 1.1 }}>
                CRISTA
              </div>
              <div style={{ fontSize: "0.6rem", color: "#666", fontWeight: 600, letterSpacing: "0.08em" }}>
                INSTITUTE
              </div>
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: 600,
                fontSize: "0.95rem",
                transition: "color 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#cc0000")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#333")}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.9rem" }}>
            Enroll Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            flexDirection: "column",
            gap: "5px",
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "25px",
                height: "3px",
                background: "#cc0000",
                borderRadius: "2px",
                transition: "all 0.3s",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "white",
              borderTop: "2px solid #cc0000",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: 600,
                    fontSize: "1rem",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary" style={{ textAlign: "center" }}>
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
