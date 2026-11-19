"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5000+", label: "Students Enrolled" },
  { value: "200+", label: "Rankers Produced" },
  { value: "15+", label: "Years of Excellence" },
  { value: "98%", label: "Success Rate" },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background decorative circles */}
      <div className="hero-circle hero-circle-1" />
      <div className="hero-circle hero-circle-2" />

      <div className="container-max hero-content">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hero-badge"
          >
            <span className="hero-badge-dot" />
            <span>Aligarh&apos;s Premier Institute</span>
          </motion.div>

          <h1 className="hero-heading">
            Shape Your Future
            <br />
            with{" "}
            <span style={{ color: "#cc0000" }}>Crista</span>
            <br />
            Coaching
          </h1>

          <p className="hero-desc">
            Expert-led coaching for NEET, JEE, AMU Class 9 &amp; 11, and AMU B.Tech.
            Join thousands of students who turned their dreams into reality with
            Crista&apos;s proven methodology.
          </p>

          <div className="hero-cta">
            <a href="#courses" className="btn-primary">Explore Courses</a>
            <a href="#rankers" className="btn-outline">See Our Rankers</a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="hero-right"
        >
          <div className="hero-card-wrap">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="hero-card"
            >
              <div className="hero-card-icon">🎓</div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#cc0000", marginBottom: "0.5rem" }}>
                CRISTA
              </h3>
              <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Institute, Aligarh
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
                {["NEET", "JEE", "AMU", "B.Tech"].map((tag) => (
                  <span key={tag} className="hero-tag">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              className="hero-badge-float hero-badge-top"
            >
              <div style={{ fontWeight: 900, fontSize: "1.4rem" }}>200+</div>
              <div style={{ fontSize: "0.7rem", opacity: 0.9 }}>Rankers</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
              className="hero-badge-float hero-badge-bottom"
            >
              <div style={{ fontWeight: 900, fontSize: "1.4rem", color: "#cc0000" }}>15+</div>
              <div style={{ fontSize: "0.7rem", color: "#666" }}>Years</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="stats-bar"
      >
        <div className="container-max stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
              className="stat-item"
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #fff 0%, #fff5f5 50%, #ffe8e8 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 70px;
          position: relative;
          overflow: hidden;
        }
        .hero-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-circle-1 {
          top: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(204,0,0,0.08) 0%, transparent 70%);
        }
        .hero-circle-2 {
          bottom: -80px; left: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(204,0,0,0.06) 0%, transparent 70%);
        }
        .hero-content {
          padding: 3rem 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .hero-left { display: flex; flex-direction: column; }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #fff0f0;
          border: 1px solid #ffcccc;
          border-radius: 50px;
          padding: 0.4rem 1rem;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #cc0000;
          width: fit-content;
        }
        .hero-badge-dot {
          width: 8px; height: 8px;
          background: #cc0000;
          border-radius: 50%;
          display: inline-block;
          animation: pulse-red 2s infinite;
          flex-shrink: 0;
        }
        .hero-heading {
          font-size: clamp(2rem, 5vw, 3.8rem);
          font-weight: 900;
          line-height: 1.15;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
        }
        .hero-desc {
          font-size: 1.05rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          max-width: 480px;
        }
        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-card-wrap {
          position: relative;
          width: 100%;
          max-width: 380px;
        }
        .hero-card {
          background: white;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 20px 60px rgba(204,0,0,0.15);
          border: 1px solid #ffe0e0;
          text-align: center;
        }
        .hero-card-icon {
          width: 80px; height: 80px;
          background: linear-gradient(135deg, #cc0000, #ff4444);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2rem;
        }
        .hero-tag {
          background: #fff0f0;
          color: #cc0000;
          border: 1px solid #ffcccc;
          border-radius: 20px;
          padding: 0.25rem 0.75rem;
          font-size: 0.8rem;
          font-weight: 700;
        }
        .hero-badge-float {
          position: absolute;
          border-radius: 16px;
          padding: 0.75rem 1rem;
          text-align: center;
        }
        .hero-badge-top {
          top: -20px; right: -20px;
          background: #cc0000;
          color: white;
          box-shadow: 0 8px 25px rgba(204,0,0,0.4);
        }
        .hero-badge-bottom {
          bottom: -20px; left: -20px;
          background: white;
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
          border: 2px solid #ffcccc;
        }
        .stats-bar {
          background: #cc0000;
          padding: 2rem 1.5rem;
          margin-top: 2rem;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          text-align: center;
        }
        .stat-value { font-weight: 900; font-size: 2rem; color: white; }
        .stat-label { color: rgba(255,255,255,0.8); font-size: 0.9rem; font-weight: 500; }

        /* Tablet */
        @media (max-width: 1024px) {
          .hero-card-wrap { max-width: 320px; }
          .hero-card { padding: 2rem; }
        }

        /* Large mobile / small tablet */
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          .hero-badge { margin-left: auto; margin-right: auto; }
          .hero-desc { max-width: 100%; }
          .hero-cta { justify-content: center; }
          .hero-right { margin-top: 1rem; }
          .hero-card-wrap { max-width: 300px; margin: 0 auto; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
          .stat-value { font-size: 1.6rem; }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .hero-content { padding: 2rem 1rem; }
          .hero-right { display: none; }
          .hero-heading { font-size: 2rem; }
          .hero-desc { font-size: 0.95rem; }
          .stats-bar { padding: 1.5rem 1rem; }
          .stat-value { font-size: 1.4rem; }
          .stat-label { font-size: 0.8rem; }
        }
      `}</style>
    </section>
  );
}
