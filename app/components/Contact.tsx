const items = [
  {
    label: "Write to us",
    value: "contact@infoglen.com",
    icon: <path d="M3 5h18v14H3V5zm2 2v.5l7 4.5 7-4.5V7H5zm14 2.8l-7 4.5-7-4.5V17h14V9.8z" />,
  },
  {
    label: "Call Us",
    value: "+1 (408) 642 5329",
    icon: (
      <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
    ),
  },
  {
    label: "Our Office",
    value: "100 Century Center Ct., #301, San Jose, CA 95112, USA.",
    icon: <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-gradient-to-br from-brand-deep via-brand to-brand-light py-16">
      <div className="container-max">
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.label}
              className="flex items-start gap-4 rounded-2xl bg-white/10 p-6 text-white backdrop-blur-sm"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  {it.icon}
                </svg>
              </span>
              <span>
                <span className="block font-display text-lg font-semibold">{it.label}</span>
                <span className="mt-1 block text-white/85">{it.value}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
