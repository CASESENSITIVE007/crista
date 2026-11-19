/* eslint-disable @next/next/no-img-element */
import { LOGO_WHITE, SECTIONS, services, solutions } from "./data";

const company = [
  { label: "Home", href: SECTIONS.home },
  { label: "Why Infoglen", href: SECTIONS.partner },
  { label: "Client Stories", href: SECTIONS.work },
  { label: "Contact Us", href: SECTIONS.contact },
];

const footerSolutions = [
  ...solutions,
  { label: "Free AI Readiness Assessment", href: SECTIONS.ai },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-base font-semibold text-white">{title}</h3>
      <ul className="mt-5 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-white/60 transition hover:text-accent">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 text-white">
      <div className="container-max grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <img src={LOGO_WHITE} alt="Infoglen" className="h-10 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Salesforce Crest Consulting Partner delivering Salesforce implementation, Agentforce and AI
            solutions that drive real business results.
          </p>
        </div>
        <Column title="Company" links={company} />
        <Column title="Services" links={services} />
        <Column title="Solutions" links={footerSolutions} />
      </div>
      <div className="border-t border-white/10 py-6">
        <p className="container-max text-center text-sm text-white/50">
          Copyright © {new Date().getFullYear()} Infoglen. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
