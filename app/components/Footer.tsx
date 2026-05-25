"use client";

import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Rankers", href: "#rankers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const courses = [
  "NEET Coaching",
  "JEE Main & Advanced",
  "AMU Class 9th",
  "AMU Class 11th",
  "AMU B.Tech",
];

export default function Footer() {
  return (
    <footer style={{ background: "#1a0000", color: "white" }}>
      {/* CTA Banner */}
      <div style={{ background: "#cc0000", padding: "3rem 1.5rem" }}>
        <div
          className="container-max"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}
        >
          <div>
            <h3 style={{ fontSize: "1.7rem", fontWeight: 800, marginBottom: "0.5rem" }}>
              Ready to Begin Your Success Story?
            </h3>
            <p style={{ opacity: 0.9, fontSize: "1rem" }}>
              Admissions open for 2026–27 batch. Limited seats available.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "white",
              color: "#cc0000",
              padding: "0.9rem 2rem",
              borderRadius: "10px",
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              display: "inline-block",
              flexShrink: 0,
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            Enroll Now →
          </motion.a>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ padding: "4rem 1.5rem 2rem" }}>
        <div className="container-max footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: "#cc0000",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 900,
                  fontSize: "1.3rem",
                }}
              >
                C
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "1.25rem", color: "#cc0000" }}>CRISTA</div>
                <div style={{ fontSize: "0.65rem", color: "#aaa", fontWeight: 600, letterSpacing: "0.08em" }}>
                  INSTITUTE
                </div>
              </div>
            </div>
            <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              Aligarh&apos;s most trusted institute for NEET, JEE, and AMU
              entrance examinations. Shaping the future of students since 2010.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ color: "#aaa", fontSize: "0.875rem" }}>
                📍 Akbar Market, Medical Rd, Aligarh, UP 202001
              </div>
              <div style={{ color: "#aaa", fontSize: "0.875rem" }}>
                📞 07300709105
              </div>
              <div style={{ color: "#aaa", fontSize: "0.875rem" }}>
                ✉️ info@cristainstitute.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem", color: "white" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{ color: "#aaa", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ff6666")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#aaa")}
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem", color: "white" }}>
              Our Courses
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {courses.map((c) => (
                <li key={c}>
                  <a
                    href="#courses"
                    style={{ color: "#aaa", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ff6666")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#aaa")}
                  >
                    → {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem", color: "white" }}>
              Batch Timings
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { slot: "Morning Batch", time: "6:00 AM – 9:00 AM" },
                { slot: "Afternoon Batch", time: "12:00 PM – 3:00 PM" },
                { slot: "Evening Batch", time: "5:00 PM – 8:00 PM" },
                { slot: "Weekend Batch", time: "8:00 AM – 12:00 PM" },
              ].map((b) => (
                <div key={b.slot} style={{ borderLeft: "3px solid #cc0000", paddingLeft: "0.75rem" }}>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "0.85rem" }}>{b.slot}</div>
                  <div style={{ color: "#888", fontSize: "0.8rem" }}>{b.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #330000",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "#666", fontSize: "0.85rem" }}>
            © 2026 Crista Institute, Aligarh. All rights reserved.
          </p>
         
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
        @media (max-width: 640px) {
          footer > div:last-child { padding: 2.5rem 1rem 1.5rem; }
          .footer-grid { grid-template-columns: 1fr; gap: 1.75rem; }
          footer > div:first-child { padding: 2rem 1rem; }
          footer > div:first-child > div { flex-direction: column; align-items: flex-start; gap: 1.25rem; }
          footer > div:first-child h3 { font-size: 1.3rem; }
        }
      `}</style>
    </footer>
  );
}
