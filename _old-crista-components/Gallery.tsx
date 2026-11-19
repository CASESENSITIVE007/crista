"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    label: "Annual Result Celebration",
    category: "Events",
    photo: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=400&fit=crop",
    desc: "Students celebrating top ranks in NEET & JEE 2024",
  },
  {
    id: 2,
    label: "Classroom Session",
    category: "Classes",
    photo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop",
    desc: "Expert faculty conducting an interactive physics session",
  },
  {
    id: 3,
    label: "Science Lab",
    category: "Facilities",
    photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop",
    desc: "State-of-the-art chemistry and biology lab facility",
  },
  {
    id: 4,
    label: "Mock Test Day",
    category: "Academics",
    photo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop",
    desc: "Students appearing in the All India Mock Test Series",
  },
  {
    id: 5,
    label: "Toppers Felicitation",
    category: "Events",
    photo: "https://images.unsplash.com/photo-1567942712661-82b9b407abbf?w=400&h=400&fit=crop",
    desc: "Annual prize distribution ceremony for top performers",
  },
  {
    id: 6,
    label: "Parent-Teacher Meet",
    category: "Events",
    photo: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=400&fit=crop",
    desc: "Monthly progress review session with parents",
  },
  {
    id: 7,
    label: "Study Hall",
    category: "Facilities",
    photo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=400&fit=crop",
    desc: "Air-conditioned study hall open 6 AM to 10 PM",
  },
  {
    id: 8,
    label: "Online Test Platform",
    category: "Academics",
    photo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=400&fit=crop",
    desc: "Digital test interface for computer-based exam practice",
  },
  {
    id: 9,
    label: "Motivational Seminar",
    category: "Events",
    photo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
    desc: "Guest lecture by IIT and AIIMS alumni for inspiration",
  },
  {
    id: 10,
    label: "Library & Resources",
    category: "Facilities",
    photo: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
    desc: "Extensive library with NEET, JEE, and AMU study material",
  },
  {
    id: 11,
    label: "Group Discussion",
    category: "Classes",
    photo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
    desc: "Weekly doubt-clearing and concept discussion sessions",
  },
  {
    id: 12,
    label: "AMU Entrance Camp",
    category: "Academics",
    photo: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=400&fit=crop",
    desc: "Intensive 30-day AMU entrance preparation bootcamp",
  },
];

const categories = ["All", "Events", "Classes", "Facilities", "Academics"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" style={{ background: "white", padding: "5rem 1.5rem" }}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h2 className="section-title">
            Photo <span>Gallery</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            A glimpse into life at Crista — celebrations, classrooms, facilities, and the moments
            that define our journey together.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "50px",
                border: "2px solid",
                borderColor: activeCategory === cat ? "#cc0000" : "#e0e0e0",
                background: activeCategory === cat ? "#cc0000" : "white",
                color: activeCategory === cat ? "white" : "#555",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                onClick={() => setSelectedItem(item)}
                whileHover={{ scale: 1.03, zIndex: 2 }}
                style={{
                  borderRadius: "14px",
                  aspectRatio: "1",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
                }}
              >
                {/* Photo */}
                <img
                  src={item.photo}
                  alt={item.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Gradient overlay at bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "55%",
                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                  }}
                />

                {/* Category chip top-right */}
                <span
                  style={{
                    position: "absolute",
                    top: "0.6rem",
                    right: "0.6rem",
                    background: "#cc0000",
                    color: "white",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    padding: "0.15rem 0.5rem",
                    borderRadius: "10px",
                    letterSpacing: "0.03em",
                  }}
                >
                  {item.category}
                </span>

                {/* Label bottom */}
                <p
                  style={{
                    position: "absolute",
                    bottom: "0.75rem",
                    left: "0.75rem",
                    right: "0.75rem",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    lineHeight: 1.3,
                    textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                    margin: 0,
                  }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.88)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "2rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                width: "min(600px, 90vw)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
                position: "relative",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "rgba(0,0,0,0.5)",
                  border: "none",
                  color: "white",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                ✕
              </button>

              {/* Full image */}
              <img
                src={selectedItem.photo.replace("w=400&h=400", "w=600&h=380")}
                alt={selectedItem.label}
                style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }}
              />

              {/* Info */}
              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <span
                    style={{
                      background: "#cc0000",
                      color: "white",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "20px",
                    }}
                  >
                    {selectedItem.category}
                  </span>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: "1.25rem", color: "#1a1a1a", marginBottom: "0.5rem" }}>
                  {selectedItem.label}
                </h3>
                <p style={{ color: "#666", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  {selectedItem.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        #gallery { padding: 5rem 1.5rem; }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        @media (max-width: 1024px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          #gallery { padding: 3rem 1rem; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
        }
        @media (max-width: 380px) {
          .gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
