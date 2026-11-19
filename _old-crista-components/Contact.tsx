"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", course: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    border: "2px solid #e0e0e0",
    borderRadius: "10px",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
    background: "white",
    color: "#1a1a1a",
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2 className="section-title">
            Contact <span>Us</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Ready to start your journey? Get in touch with us for admissions,
            course details, or any queries.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                {
                  icon: "📍",
                  title: "Our Location",
                  lines: ["Crista Institute", "Akbar Market, Medical Rd", "Aligarh, Uttar Pradesh 202001"],
                },
                {
                  icon: "📞",
                  title: "Call Us",
                  lines: ["07300709105", "Mon–Sat: 8 AM – 8 PM"],
                },
                {
                  icon: "✉️",
                  title: "Email Us",
                  lines: ["info@cristainstitute.com", "admissions@cristainstitute.com"],
                },
                {
                  icon: "⏰",
                  title: "Timings",
                  lines: ["Mon–Sat: 7:00 AM – 9:00 PM", "Sunday: 9:00 AM – 5:00 PM"],
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  style={{
                    background: "white",
                    borderRadius: "14px",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    border: "1px solid #f0f0f0",
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "#fff0f0",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.3rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#cc0000", marginBottom: "0.25rem", fontSize: "0.9rem" }}>
                      {item.title}
                    </div>
                    {item.lines.map((line) => (
                      <div key={line} style={{ color: "#555", fontSize: "0.875rem", lineHeight: 1.7 }}>
                        {line}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem" }}>
              {[
                { icon: "📘", label: "Facebook" },
                { icon: "📸", label: "Instagram" },
                { icon: "🐦", label: "Twitter" },
                { icon: "▶️", label: "YouTube" },
              ].map((s) => (
                <div
                  key={s.label}
                  title={s.label}
                  style={{
                    width: "42px",
                    height: "42px",
                    background: "white",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                    border: "1px solid #f0f0f0",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-3px)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
                >
                  {s.icon}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "2.5rem",
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                border: "1px solid #f0f0f0",
              }}
            >
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.5rem" }}>
                Enquire Now
              </h3>
              <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "1.75rem" }}>
                Fill in your details and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: "#f0fff0",
                    border: "2px solid #4caf50",
                    borderRadius: "12px",
                    padding: "2rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>✅</div>
                  <h4 style={{ color: "#1a7a1a", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                    Enquiry Submitted!
                  </h4>
                  <p style={{ color: "#555", fontSize: "0.9rem" }}>
                    Thank you! Our admission team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div className="form-name-grid">
                    <div>
                      <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "#333", marginBottom: "0.4rem" }}>
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#cc0000")}
                        onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "#333", marginBottom: "0.4rem" }}>
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#cc0000")}
                        onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "#333", marginBottom: "0.4rem" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#cc0000")}
                      onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "#333", marginBottom: "0.4rem" }}>
                      Course Interested In *
                    </label>
                    <select
                      required
                      value={form.course}
                      onChange={(e) => setForm({ ...form, course: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "#cc0000")}
                      onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                    >
                      <option value="">Select a course</option>
                      <option value="neet">NEET Coaching</option>
                      <option value="jee">JEE Coaching (Main & Advanced)</option>
                      <option value="amu-9">AMU Class 9th Entrance</option>
                      <option value="amu-11">AMU Class 11th Entrance</option>
                      <option value="amu-btech">AMU B.Tech Entrance</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "#333", marginBottom: "0.4rem" }}>
                      Message (Optional)
                    </label>
                    <textarea
                      placeholder="Any specific queries or requirements..."
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical", minHeight: "90px" }}
                      onFocus={(e) => (e.target.style.borderColor = "#cc0000")}
                      onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: "linear-gradient(135deg, #cc0000, #990000)",
                      color: "white",
                      border: "none",
                      padding: "1rem",
                      borderRadius: "10px",
                      fontSize: "1rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      marginTop: "0.5rem",
                      boxShadow: "0 4px 15px rgba(204,0,0,0.3)",
                    }}
                  >
                    Submit Enquiry →
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section { background: #fafafa; padding: 5rem 1.5rem; }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 3rem;
          align-items: start;
        }
        .form-name-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
        @media (max-width: 480px) {
          .contact-section { padding: 3rem 1rem; }
          .form-name-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
