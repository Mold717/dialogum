'use client';

import Image from 'next/image';

const BEFORE_ITEMS = [
  "Le projet reste flou",
  "Les décisions restent difficiles",
  "L&apos;avenir reste difficile à visualiser"
];

const AFTER_ITEMS = [
  { t: "Clarifier votre situation actuelle", d: "Audit stratégique de votre profil, objectifs et contraintes réelles." },
  { t: "Identifier les possibilités accessibles", d: "Matching de précision entre votre parcours et les filières certifiées." },
  { t: "Structurer votre progression pas-à-pas", d: "Ingénierie de parcours séquencée en étapes claires et validées." },
  { t: "Construire une trajectoire crédible", d: "Support institutionnel continu jusqu&apos;à votre stabilisation durable." }
];

export default function Info() {
  return (
    <section className="bg-brand-beige/40 py-20 md:py-28" aria-labelledby="info-heading">
      <div className="max-w-[1280px] mx-auto px-6 animate-entrance">
        
        <div className="bg-white border border-black/5 rounded-sm p-10 md:p-14 shadow-pro-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column */}
            <div className="info-left">
              <h2 id="info-heading" className="font-serif text-[clamp(28px,3.5vw,42px)] leading-[1.2] mb-6 text-brand-slate tracking-tight">
                Vous n&apos;avez probablement pas besoin de <em className="italic text-brand-red font-serif">plus d&apos;informations.</em>
              </h2>
              <p className="text-[15px] text-brand-slate/50 mb-6 leading-[1.6] font-sans">
                Aujourd&apos;hui, beaucoup de candidats consomment énormément de contenu (vidéos, conseils, témoignages). Mais malgré cela :
              </p>

              <ul className="mb-6 space-y-2.5">
                {BEFORE_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans font-bold text-[14px] text-brand-slate p-3 px-4 bg-brand-beige/30 border border-black/5 rounded-sm">
                    <div className="w-5.5 h-5.5 bg-brand-red rounded-full flex items-center justify-center text-white text-[12px] shrink-0">✕</div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-2.5 mt-4">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="bg-brand-beige/30 border border-black/5 rounded-sm h-20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-brand-slate/10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      {i === 0 && <path d="M2 3h20v14H2z M8 21h8 M12 17v4" />}
                      {i === 1 && <path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M10 8l6 4l-6 4z" />}
                      {i === 2 && <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />}
                    </svg>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center py-4">
                <svg viewBox="0 0 24 24" className="w-9 h-9 text-brand-gold opacity-40 animate-pulse" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 5l7 7-7 7M5 12h14"/></svg>
              </div>
            </div>

            {/* Right Column */}
            <div className="info-right">
              <div className="bg-brand-beige/30 border border-black/5 rounded-sm p-6 mb-7 flex flex-col gap-2 shadow-sm">
                <div className="flex items-center gap-3 mb-1">
                   <div className="w-7 h-5 rounded-[2px] overflow-hidden flex flex-col shrink-0 border border-black/5 shadow-sm">
                      <div className="bg-black h-1/3"></div>
                      <div className="bg-[#FF0000] h-1/3"></div>
                      <div className="bg-[#FFCC00] h-1/3"></div>
                   </div>
                   <strong className="text-[14px] font-sans font-bold text-brand-slate uppercase tracking-tight">Ce que Dialogum fait pour vous</strong>
                </div>
                <p className="text-[14px] leading-[1.55] text-brand-slate/60 font-sans italic">
                  Moins de confusion. Plus de <em className="text-brand-red font-bold">clarté.</em> Un avenir qui redevient possible.
                </p>
              </div>

              <h3 className="text-[18px] font-sans font-bold text-brand-slate mb-2">Un accompagnement structuré :</h3>
              <p className="text-[13px] text-brand-slate/50 mb-6 font-sans">Pas seulement des informations, mais une trajectoire certifiée.</p>

              <ul className="space-y-0">
                {AFTER_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 py-4 border-b border-black/5 last:border-0 group">
                    <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 16 16" fill="currentColor"><path d="M6.5 11.5l-3-3 1-1 2 2 4-4 1 1z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-sans font-bold text-brand-slate mb-1 group-hover:text-brand-red transition-colors">{item.t}</h4>
                      <p className="text-[12.5px] leading-[1.5] text-brand-slate/50 font-sans">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
