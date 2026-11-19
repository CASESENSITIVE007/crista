"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { title: "Expert Faculty", desc: "Highly qualified teachers with 10+ years of experience in competitive exam coaching.", num: "01" },
  { title: "Comprehensive Study Material", desc: "Meticulously crafted notes and practice papers aligned with latest exam patterns.", num: "02" },
  { title: "Regular Assessments", desc: "Weekly tests and mock exams to track progress and identify improvement areas.", num: "03" },
  { title: "Proven Results", desc: "Consistent track record of producing top rankers in NEET, JEE, and AMU exams.", num: "04" },
  { title: "Doubt Clearing Sessions", desc: "Dedicated sessions for concept clarity with one-on-one guidance from faculty.", num: "05" },
  { title: "Located in Aligarh", desc: "Strategically situated at Akbar Market, Medical Rd, Aligarh for easy access.", num: "06" },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="feature-card"
      whileHover={{ y: -6 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div className="feature-num-box">
          <span style={{ color: "white", fontWeight: 900, fontSize: "0.85rem" }}>{feature.num}</span>
        </div>
        <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, #ffcccc, transparent)", borderRadius: "2px" }} />
      </div>
      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a1a1a" }}>{feature.title}</h3>
      <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{feature.desc}</p>
    </motion.div>
  );
}

export default function About() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section id="about" className="about-section">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2 className="section-title">About <span>Crista</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Established with a mission to provide quality education, Crista Institute has
            been the cornerstone of academic success for students across Aligarh and beyond.
          </p>
        </motion.div>

        {/* Two-column */}
        <div className="about-main-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="about-heading">
              Empowering Students Since <span style={{ color: "#cc0000" }}>2010</span>
            </h3>
            <p style={{ color: "#555", lineHeight: 1.9, marginBottom: "1.25rem", fontSize: "1rem" }}>
              Crista Institute was founded with a singular vision — to make quality competitive
              exam preparation accessible to every aspiring student in Aligarh. Over the years, we have
              built a reputation for excellence through our rigorous curriculum and dedicated faculty.
            </p>
            <p style={{ color: "#555", lineHeight: 1.9, marginBottom: "2rem", fontSize: "1rem" }}>
              Our students consistently secure top ranks in NEET, JEE, and AMU entrance examinations,
              making Crista the most trusted name in coaching in the region.
            </p>

            <div className="about-stats-row">
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#cc0000" }}>5K+</div>
                <div style={{ color: "#666", fontSize: "0.85rem", fontWeight: 600 }}>Alumni</div>
              </div>
              <div className="about-stat-divider" />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#cc0000" }}>50+</div>
                <div style={{ color: "#666", fontSize: "0.85rem", fontWeight: 600 }}>Faculty</div>
              </div>
              <div className="about-stat-divider" />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#cc0000" }}>4</div>
                <div style={{ color: "#666", fontSize: "0.85rem", fontWeight: 600 }}>Programs</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mission-card">
              <div className="mission-circle" />
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>Our Mission</h3>
              <p style={{ lineHeight: 1.8, opacity: 0.9, marginBottom: "1.5rem" }}>
                To nurture students with knowledge, discipline, and confidence — equipping them to
                excel in competitive examinations and beyond.
              </p>
              <div className="mission-quote">
                <p style={{ fontStyle: "italic", opacity: 0.9, fontSize: "0.95rem" }}>
                  &quot;Success is not an accident, it&apos;s the result of hard work, the right guidance,
                  and consistent effort.&quot;
                </p>
                <p style={{ fontWeight: 700, marginTop: "0.75rem", fontSize: "0.9rem" }}>— Crista Institute</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="feature-grid">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .about-section { background: #fafafa; padding: 5rem 1.5rem; }

        .about-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }
        .about-heading {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }
        .about-stats-row { display: flex; gap: 2rem; flex-wrap: wrap; }
        .about-stat-divider { width: 1px; background: #e0e0e0; }

        .mission-card {
          background: linear-gradient(135deg, #cc0000 0%, #990000 100%);
          border-radius: 24px;
          padding: 2.5rem;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .mission-circle {
          position: absolute;
          top: -40px; right: -40px;
          width: 200px; height: 200px;
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
        }
        .mission-quote {
          background: rgba(255,255,255,0.15);
          border-radius: 12px;
          padding: 1rem 1.25rem;
          backdrop-filter: blur(5px);
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .feature-card {
          background: white;
          border-radius: 16px;
          padding: 1.75rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .feature-num-box {
          width: 44px; height: 44px;
          background: #cc0000;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .about-main-grid { gap: 2.5rem; }
          .feature-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Mobile landscape / small tablet */
        @media (max-width: 768px) {
          .about-section { padding: 3.5rem 1.25rem; }
          .about-main-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .about-heading { font-size: 1.5rem; }
          .mission-card { padding: 1.75rem; }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .about-section { padding: 3rem 1rem; }
          .feature-grid { grid-template-columns: 1fr; }
          .about-stats-row { justify-content: center; }
          .about-stat-divider { display: none; }
        }
      `}</style>
    </section>
  );
}
