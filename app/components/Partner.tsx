/* eslint-disable @next/next/no-img-element */
import { IMG } from "./data";

export default function Partner() {
  return (
    <section id="partner"
      className="relative overflow-hidden bg-navy bg-cover bg-center py-20 md:py-24"
      style={{ backgroundImage: `url(${IMG}/bg2.webp)` }}
    >
      <div className="absolute inset-0 bg-[#060b2a]/80" />
      <div className="container-max relative grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <img
            src={`${IMG}/expert-navigator-img.png`}
            alt="Salesforce Crest Consulting Partner, Expert Navigator"
            className="h-36 w-auto shrink-0 object-contain"
          />
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight text-white">
              Salesforce Crest Consulting Partner Recognized as{" "}
              <span className="text-accent">Expert Navigators</span>
            </h2>
            <p className="mt-4 text-white/75">
              Trusted by Salesforce to deliver at the highest level across multiple clouds.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="grid grid-cols-2 divide-x divide-white/15">
            <div className="pr-6">
              <p className="font-display text-5xl font-bold text-white">4.9/5</p>
              <p className="mt-2 text-sm text-white/70">CSAT on AppExchange</p>
            </div>
            <div className="pl-6">
              <p className="font-display text-5xl font-bold text-accent">90%+</p>
              <p className="mt-2 text-sm text-white/70">Repeat Business</p>
            </div>
          </div>
          <p className="mt-6 border-t border-white/15 pt-5 text-white/85">
            High ratings prove our quality. Repeat business proves our value.
          </p>
        </div>
      </div>
    </section>
  );
}
