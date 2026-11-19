import { SECTIONS } from "./data";

const items = [
  {
    title: "1% Pledge Member",
    text: "Every year, we dedicate 1% of our profit to pledge1percent.org for creating a more sustainable world.",
    href: SECTIONS.contact,
    icon: (
      <path d="M12 21s-7-4.35-9.5-8.5C.6 9.3 2.4 5 6.3 5c2.2 0 3.6 1.3 4.2 2.4h1C12.1 6.3 13.5 5 15.7 5c3.9 0 5.7 4.3 3.8 7.5C19 16.65 12 21 12 21z" />
    ),
  },
  {
    title: "Green Glen Reforestation Project",
    text: "We've planted 3,800+ trees worldwide, doing our bit in restoring habitats and fighting climate change.",
    href: SECTIONS.contact,
    icon: <path d="M12 2l6 8h-3l4 6h-4l3 4H6l3-4H5l4-6H6l6-8zm-1 18h2v2h-2z" />,
  },
];

export default function Csr() {
  return (
    <section id="csr" className="scroll-mt-20 bg-white py-20 md:py-24">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">CSR at Infoglen</span>
          <h2 className="section-title mt-3">
            We Grow More Than <span className="hl">Businesses</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {items.map((it) => (
            <a
              key={it.title}
              href={it.href}
              className="group flex gap-6 rounded-2xl border border-black/5 bg-gradient-to-br from-sky to-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(2,127,210,0.12)]"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  {it.icon}
                </svg>
              </span>
              <span>
                <span className="block font-display text-xl font-semibold text-ink">{it.title}</span>
                <span className="mt-2 block leading-relaxed text-ink/70">{it.text}</span>
                <span className="mt-4 inline-block text-sm font-semibold text-brand group-hover:underline">
                  Learn more →
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
