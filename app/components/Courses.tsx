"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const courses = [
  {
    id: "neet",
    title: "NEET Coaching",
    subtitle: "Medical Entrance Preparation",
    badge: "Most Popular",
    description:
      "Comprehensive NEET preparation with expert biology, physics, and chemistry faculty. We cover the full NCERT syllabus with special focus on high-weightage topics.",
    highlights: [
      "Physics, Chemistry & Biology by specialists",
      "NCERT-based + advanced practice problems",
      "Weekly mock tests with NEET pattern",
      "Previous year paper analysis",
      "Online doubt resolution support",
      "All India Test Series",
    ],
    duration: "1-2 Years",
    batchSize: "30 Students",
    color: "#cc0000",
    darkColor: "#990000",
    bgColor: "#fff0f0",
    num: "01",
  },
  {
    id: "jee",
    title: "JEE Coaching",
    subtitle: "IIT-JEE Main & Advanced",
    badge: "High Demand",
    description:
      "Master JEE Main and Advanced concepts with our structured program. Strong emphasis on problem-solving techniques and time management strategies.",
    highlights: [
      "Mathematics, Physics & Chemistry depth",
      "JEE Main + Advanced level problems",
      "Bi-weekly test series",
      "Rank booster sessions",
      "Individual performance tracking",
      "Special crash courses available",
    ],
    duration: "1-2 Years",
    batchSize: "25 Students",
    color: "#990000",
    darkColor: "#660000",
    bgColor: "#fff5f5",
    num: "02",
  },
  {
    id: "amu-9-11",
    title: "AMU Class 9th & 11th",
    subtitle: "AMU School Entrance",
    badge: "New Batch",
    description:
      "Specialized coaching for AMU School entrance exams at Class 9th and 11th levels. Tailored curriculum aligned with AMU's specific exam pattern.",
    highlights: [
      "AMU-specific syllabus coverage",
      "Previous year AMU question papers",
      "Arabic & General Knowledge included",
      "English proficiency training",
      "Regular parent-teacher meetings",
      "Small batch for personal attention",
    ],
    duration: "6-12 Months",
    batchSize: "20 Students",
    color: "#cc0000",
    darkColor: "#990000",
    bgColor: "#fff0f0",
    num: "03",
  },
  {
    id: "amu-btech",
    title: "AMU B.Tech",
    subtitle: "AMU Engineering Entrance",
    badge: "Specialized",
    description:
      "Dedicated preparation for AMU B.Tech entrance examination with focused PCM coaching and AMU-specific exam strategies.",
    highlights: [
      "PCM with AMU exam focus",
      "AMU B.Tech past paper practice",
      "Engineering aptitude training",
      "Mathematics advanced problem solving",
      "Regular grand test series",
      "Counseling for branch selection",
    ],
    duration: "1 Year",
    batchSize: "25 Students",
    color: "#990000",
    darkColor: "#660000",
    bgColor: "#fff5f5",
    num: "04",
  },
];

function CourseCard({ course, index }: { course: typeof courses[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: "white",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: hovered ? "0 20px 50px rgba(204,0,0,0.18)" : "0 4px 20px rgba(0,0,0,0.08)",
        border: `2px solid ${hovered ? course.color : "#f0f0f0"}`,
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Card Header */}
      <div
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${course.color} 0%, ${course.darkColor} 100%)`
            : course.bgColor,
          padding: "1.75rem",
          transition: "background 0.3s ease",
          position: "relative",
        }}
      >
        {/* Badge */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: hovered ? "rgba(255,255,255,0.2)" : course.color,
            color: "white",
            fontSize: "0.7rem",
            fontWeight: 700,
            padding: "0.25rem 0.6rem",
            borderRadius: "20px",
            letterSpacing: "0.03em",
            backdropFilter: hovered ? "blur(5px)" : "none",
            border: hovered ? "1px solid rgba(255,255,255,0.3)" : "none",
          }}
        >
          {course.badge}
        </div>

        {/* Course number */}
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "12px",
            background: hovered ? "rgba(255,255,255,0.2)" : "white",
            border: hovered ? "1px solid rgba(255,255,255,0.3)" : `2px solid ${course.color}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
            backdropFilter: hovered ? "blur(5px)" : "none",
          }}
        >
          <span
            style={{
              fontWeight: 900,
              fontSize: "1.1rem",
              color: hovered ? "white" : course.color,
            }}
          >
            {course.num}
          </span>
        </div>

        <h3
          style={{
            fontSize: "1.3rem",
            fontWeight: 800,
            color: hovered ? "white" : "#1a1a1a",
            marginBottom: "0.25rem",
            transition: "color 0.3s",
          }}
        >
          {course.title}
        </h3>
        <p
          style={{
            fontSize: "0.85rem",
            color: hovered ? "rgba(255,255,255,0.85)" : "#888",
            fontWeight: 500,
            transition: "color 0.3s",
          }}
        >
          {course.subtitle}
        </p>
      </div>

      {/* Card Body */}
      <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
          {course.description}
        </p>

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem", flex: 1 }}>
          {course.highlights.map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.875rem", color: "#444" }}>
              <span style={{ color: course.color, fontWeight: 900, fontSize: "1rem", lineHeight: 1.3, flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Meta info */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "0.75rem",
            background: "#fafafa",
            borderRadius: "10px",
            marginBottom: "1.25rem",
            border: "1px solid #f0f0f0",
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: "#999", fontWeight: 700, letterSpacing: "0.05em" }}>DURATION</div>
            <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#333" }}>{course.duration}</div>
          </div>
          <div style={{ width: "1px", background: "#e0e0e0" }} />
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: "#999", fontWeight: 700, letterSpacing: "0.05em" }}>BATCH SIZE</div>
            <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#333" }}>{course.batchSize}</div>
          </div>
        </div>

        <a
          href="#contact"
          style={{
            display: "block",
            textAlign: "center",
            padding: "0.75rem",
            background: `linear-gradient(135deg, ${course.color}, ${course.darkColor})`,
            color: "white",
            borderRadius: "10px",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: "0.95rem",
            transition: "opacity 0.2s",
            boxShadow: `0 4px 12px ${course.color}40`,
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          Enroll Now →
        </a>
      </div>
    </motion.div>
  );
}

export default function Courses() {
  return (
    <section id="courses" style={{ background: "white" }}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2 className="section-title">
            Our <span>Courses</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Carefully designed programs to help you crack the most competitive exams with
            confidence and expertise.
          </p>
        </motion.div>

        <div className="courses-grid">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        #courses { padding: 5rem 1.5rem; }
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 900px) {
          .courses-grid { grid-template-columns: 1fr; gap: 1.25rem; }
        }
        @media (max-width: 480px) {
          #courses { padding: 3rem 1rem; }
        }
      `}</style>
    </section>
  );
}
