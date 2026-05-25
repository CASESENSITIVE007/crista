"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const rankers = [
  {
    name: "Mohammad Ali",
    exam: "NEET 2024",
    rank: "AIR 142",
    score: "720/720",
    college: "AIIMS New Delhi",
    year: "2024",
    category: "NEET",
    avatar: "MA",
    color: "#cc0000",
  },
  {
    name: "Fatima Khan",
    exam: "JEE Advanced 2024",
    rank: "AIR 284",
    score: "312/360",
    college: "IIT Bombay",
    year: "2024",
    category: "JEE",
    avatar: "FK",
    color: "#990000",
  },
  {
    name: "Aisha Siddiqui",
    exam: "AMU B.Tech 2024",
    rank: "Rank 3",
    score: "Top Merit",
    college: "AMU - CS Branch",
    year: "2024",
    category: "AMU B.Tech",
    avatar: "AS",
    color: "#cc0000",
  },
  {
    name: "Zaid Rahman",
    exam: "NEET 2023",
    rank: "AIR 215",
    score: "715/720",
    college: "JIPMER Puducherry",
    year: "2023",
    category: "NEET",
    avatar: "ZR",
    color: "#cc0000",
  },
  {
    name: "Hira Ansari",
    exam: "JEE Main 2024",
    rank: "99.8 Percentile",
    score: "280/300",
    college: "NIT Allahabad",
    year: "2024",
    category: "JEE",
    avatar: "HA",
    color: "#990000",
  },
  {
    name: "Usman Farooq",
    exam: "AMU Class 11th",
    rank: "Rank 1",
    score: "Merit List",
    college: "AMU Senior Secondary",
    year: "2024",
    category: "AMU 9 & 11",
    avatar: "UF",
    color: "#cc0000",
  },
  {
    name: "Nida Hussain",
    exam: "NEET 2023",
    rank: "AIR 390",
    score: "710/720",
    college: "Maulana Azad Medical",
    year: "2023",
    category: "NEET",
    avatar: "NH",
    color: "#cc0000",
  },
  {
    name: "Arshad Malik",
    exam: "JEE Advanced 2023",
    rank: "AIR 520",
    score: "295/360",
    college: "IIT Roorkee",
    year: "2023",
    category: "JEE",
    avatar: "AM",
    color: "#990000",
  },
  {
    name: "Sana Parveen",
    exam: "AMU Class 9th 2024",
    rank: "Rank 2",
    score: "Top Merit",
    college: "AMU Girls High School",
    year: "2024",
    category: "AMU 9 & 11",
    avatar: "SP",
    color: "#cc0000",
  },
];

const filters = ["All", "NEET", "JEE", "AMU B.Tech", "AMU 9 & 11"];

function RankerCard({ ranker, index }: { ranker: typeof rankers[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: "0 15px 40px rgba(204,0,0,0.18)" }}
      style={{
        background: "white",
        borderRadius: "18px",
        padding: "1.75rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
        border: "1px solid #f0f0f0",
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.3s",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #cc0000, #ff6666)",
        }}
      />

      {/* Trophy badge top right */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "#fff0f0",
          border: "1px solid #ffcccc",
          borderRadius: "8px",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
        }}
      >
        🏆
      </div>

      {/* Avatar */}
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${ranker.color}, ${ranker.color}cc)`,
          color: "white",
          fontWeight: 800,
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          boxShadow: "0 4px 15px rgba(204,0,0,0.3)",
        }}
      >
        {ranker.avatar}
      </div>

      <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.2rem" }}>
        {ranker.name}
      </h3>
      <p style={{ fontSize: "0.8rem", color: "#999", marginBottom: "1rem", fontWeight: 500 }}>
        Batch {ranker.year}
      </p>

      {/* Rank badge */}
      <div
        style={{
          background: "#fff0f0",
          border: "1px solid #ffcccc",
          borderRadius: "8px",
          padding: "0.5rem 0.75rem",
          marginBottom: "0.75rem",
        }}
      >
        <div style={{ color: "#cc0000", fontWeight: 900, fontSize: "1.15rem" }}>
          {ranker.rank}
        </div>
        <div style={{ color: "#888", fontSize: "0.8rem", fontWeight: 500 }}>
          {ranker.exam}
        </div>
      </div>

      <div style={{ marginBottom: "0.75rem" }}>
        <span
          style={{
            background: "#fafafa",
            border: "1px solid #e8e8e8",
            color: "#555",
            fontSize: "0.75rem",
            fontWeight: 600,
            padding: "0.2rem 0.6rem",
            borderRadius: "20px",
          }}
        >
          Score: {ranker.score}
        </span>
      </div>

      <div
        style={{
          borderTop: "1px solid #f5f5f5",
          paddingTop: "0.75rem",
          fontSize: "0.82rem",
          color: "#666",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span style={{ color: "#cc0000", fontSize: "0.75rem" }}>▶</span>
        {ranker.college}
      </div>
    </motion.div>
  );
}

export default function Rankers() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All" ? rankers : rankers.filter((r) => r.category === activeFilter);

  return (
    <section id="rankers" className="rankers-section">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h2 className="section-title">
            Our <span>Rankers</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Proud of our achievers who cracked top competitive exams with flying colours.
            Their success is our greatest testimony.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "50px",
                border: "2px solid",
                borderColor: activeFilter === f ? "#cc0000" : "#e0e0e0",
                background: activeFilter === f ? "#cc0000" : "white",
                color: activeFilter === f ? "white" : "#555",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* Rankers Grid */}
        <div className="rankers-grid">
          {filtered.map((ranker, i) => (
            <RankerCard key={`${ranker.name}-${ranker.year}`} ranker={ranker} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "2.5rem",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
            border: "1px solid #ffe0e0",
          }}
        >
          <p style={{ fontSize: "1.1rem", color: "#333", fontWeight: 500, marginBottom: "1.25rem" }}>
            You could be our next top ranker! Join Crista Institute today.
          </p>
          <a href="#contact" className="btn-primary">
            Start Your Journey
          </a>
        </motion.div>
      </div>

      <style>{`
        .rankers-section {
          background: linear-gradient(135deg, #fff5f5 0%, #ffffff 100%);
          padding: 5rem 1.5rem;
        }
        .rankers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .rankers-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .rankers-section { padding: 3rem 1rem; }
          .rankers-grid { grid-template-columns: 1fr; gap: 1rem; }
        }
      `}</style>
    </section>
  );
}
