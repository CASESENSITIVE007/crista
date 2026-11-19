/* eslint-disable @next/next/no-img-element */
import { aiCards, clientLogos } from "./data";

export default function AiSuccess() {
  return (
    <>
      <section id="ai-success" className="scroll-mt-20 bg-mist py-20 md:py-24">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Salesforce + AI</span>
            <h2 className="section-title mt-3">
              Salesforce + AI Success with <span className="hl">Infoglen</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Salesforce AI holds huge promise, but results depend on the right partner and we&rsquo;ve
              turned that promise into performance across dozens of implementations.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {aiCards.map((card) => (
              <article
                key={card.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(2,127,210,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(2,127,210,0.16)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={card.image}
                    alt=""
                    className="aspect-[507/293] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex-1 text-lg font-semibold leading-snug text-ink">{card.title}</h3>
                  <a href={card.href} className="btn-outline mt-6 self-start">
                    Know More <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white py-12">
        <div className="container-max">
          <p className="text-center font-display text-lg font-semibold text-ink">
            Trusted by <span className="text-brand">50+</span> Customers
          </p>
        </div>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="marquee flex w-max items-center gap-16">
            {[...clientLogos, ...clientLogos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={i < clientLogos.length ? "Client logo" : ""}
                aria-hidden={i >= clientLogos.length}
                className="h-9 w-auto max-w-[150px] object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
