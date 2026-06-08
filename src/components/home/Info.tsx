'use client';

import Image from 'next/image';

export default function Info() {
  return (
    <section className="bg-brand-white py-24 md:py-40 relative overflow-hidden" aria-labelledby="info-heading">
      <div className="section-container relative z-10 animate-entrance">
        <div className="bg-brand-beige/20 border border-brand-beige rounded-sm p-10 md:p-16 lg:p-24 shadow-pro-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left: The Information Trap */}
            <div className="lg:border-r lg:border-brand-slate/5 lg:pr-20">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-0.5 bg-brand-red"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold"></span>
              </div>
              <h2 id="info-heading" className="font-serif text-3xl md:text-5xl heading-pro-max leading-tight mb-10 text-balance">
                Vous n'avez probablement pas besoin de <span className="text-brand-red italic">plus d'informations.</span>
              </h2>

              <p className="text-[15px] text-brand-slate/60 mb-10 leading-relaxed font-sans">Aujourd'hui, beaucoup de candidats consomment énormément de contenu (vidéos, conseils, témoignages, informations contradictoires). Mais malgré cela :</p>

              <ul className="space-y-6 mb-12 list-none">
                {["Le projet reste flou", "Les décisions restent difficiles", "L'avenir reste difficile à visualiser"].map((text, i) => (
                  <li key={i} className="flex items-center gap-5 p-5 bg-white border border-brand-beige rounded-sm shadow-soft group hover:border-brand-red/20 transition-standard">
                    <div className="w-7 h-7 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red text-[10px] font-bold group-hover:bg-brand-red group-hover:text-white transition-standard">✕</div>
                    <span className="text-[14px] text-brand-slate font-bold tracking-tight">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center mb-10">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-brand-gold opacity-30 animate-pulse" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  "M2 3h20v14H2z M8 21h8 M12 17v4",
                  "M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M10 8l6 4l-6 4z",
                  "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                ].map((icon, i) => (
                  <div key={i} className="bg-white/50 h-24 border border-brand-beige rounded-sm flex items-center justify-center shadow-soft">
                    <svg className="w-8 h-8 text-brand-slate/10" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={icon} /></svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: The Dialogum Solution */}
            <div className="lg:pl-10">
              <div className="bg-brand-slate p-10 rounded-sm shadow-institutional mb-14 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none group-hover:rotate-12 transition-standard">
                  <Image src="/assets/logos/Monogramme-dialogum-Final-transparent.png" alt="" fill className="object-contain invert" />
                </div>
                <p className="text-xl md:text-2xl text-white font-serif leading-tight">
                  Moins de confusion.<br />
                  Plus de <span className="text-brand-gold italic">clarté.</span><br />
                  Un avenir qui <span className="text-brand-gold italic">redevient possible.</span>
                </p>
              </div>

              <div className="flex items-center gap-5 mb-4">
                <h3 className="text-xl font-heading font-bold text-brand-slate uppercase tracking-tight">Ce que Dialogum fait pour vous :</h3>
                <div className="w-8 h-5 rounded-sm overflow-hidden shadow-soft flex-shrink-0 opacity-80">
                  <div className="bg-black h-1/3 w-full"></div><div className="bg-red-600 h-1/3 w-full"></div><div className="bg-yellow-400 h-1/3 w-full"></div>
                </div>
              </div>
              <p className="text-[14px] text-brand-slate/50 mb-12 font-sans italic font-medium">Un accompagnement structuré, pas juste des informations.</p>

              <ul className="space-y-2 list-none font-sans">
                {[
                  { t: "Clarifier votre situation actuelle", d: "Audit stratégique de votre profil, objectifs et contraintes réelles." },
                  { t: "Identifier les possibilités accessibles", d: "Matching de précision entre votre parcours et les filières certifiées." },
                  { t: "Structurer votre progression pas-à-pas", d: "Ingénierie de parcours séquencée en étapes claires et validées." },
                  { t: "Construire une trajectoire crédible", d: "Support institutionnel continu jusqu'à votre stabilisation durable." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-6 py-6 border-b border-brand-slate/5 last:border-0 group">
                    <div className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-soft group-hover:bg-brand-gold transition-standard">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-gold group-hover:text-white transition-standard" fill="none" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-brand-slate mb-1 group-hover:text-brand-red transition-standard">{item.t}</h4>
                      <p className="text-[13px] text-brand-slate/60 leading-relaxed font-medium">{item.d}</p>
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
