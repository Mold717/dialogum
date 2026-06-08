'use client';

import Image from 'next/image';

const PERCEPTIONS = [
  { title: "Clarté", desc: "Comprendre sa situation, sécuriser ses choix.", icon: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", color: "brand-red" },
  { title: "Crédibilité", desc: "Un système structuré, exigeant et transparent.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", color: "brand-red" },
  { title: "Progression", desc: "Chaque étape rapproche de votre objectif.", icon: "M23 6l-9.5 9.5l-5-5L1 18M17 6h6v6", color: "brand-gold" },
  { title: "Stabilité", desc: "Des parcours solides, alignés avec l'Allemagne.", icon: "M9 12l2 2 4-4m5.618-4.016A9 9 0 112.862 12.862", color: "brand-red" },
  { title: "Confiance", desc: "Un accompagnement humain, à chaque étape.", icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", color: "brand-red" },
  { title: "Sophistication calme", desc: "Un environnement premium, clair et rassurant.", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", color: "brand-gold" },
];

export default function PerceptionsGrid() {
  return (
    <section className="py-24 md:py-40 bg-brand-white relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t-2 border-brand-slate pt-16">
          
          {/* Perceptions Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-brand-slate opacity-40 mb-12">Perceptions clés</h3>
            
            <div className="space-y-10">
              {PERCEPTIONS.map((p, i) => (
                <div key={i} className="flex gap-6 items-start group animate-entrance" style={{ animationDelay: `${i * 0.1}s` }}>
                  <svg className={`w-6 h-6 text-${p.color} mt-1 group-hover:scale-110 transition-standard`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                  </svg>
                  <div>
                    <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-brand-slate mb-2 group-hover:text-brand-red transition-standard">{p.title}</h4>
                    <p className="text-[13px] text-brand-slate/50 font-medium leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Moments Photo Grid */}
          <div className="lg:col-span-8">
            <div className="mb-12">
               <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-slate uppercase tracking-tight mb-4">Des moments réels.</h2>
               <p className="text-[15px] font-sans font-bold text-brand-red italic">Une trajectoire crédible.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: "Préparer son dossier avec méthode.", bg: "linear-gradient(135deg,#b8b0a6 0%,#9a9088 100%)" },
                { label: "Apprendre l'allemand et se qualifier.", bg: "linear-gradient(135deg,#d0c8be 0%,#b8afa5 100%)" },
                { label: "Être accompagné et sécuriser son parcours.", bg: "linear-gradient(135deg,#c5beb4 0%,#a09080 100%)" },
                { label: "Se former ou travailler en Allemagne.", bg: "linear-gradient(135deg,#a8b8c5 0%,#8090a0 100%)" },
                { label: "S'intégrer et construire son avenir.", bg: "linear-gradient(135deg,#c0b8a8 0%,#a09080 100%)" },
                { label: "Avancer avec clarté, chaque jour.", bg: "linear-gradient(135deg,#b0a898 0%,#907860 100%)" },
              ].map((m, i) => (
                <div key={i} className="group animate-entrance" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-soft border border-black/5 bg-brand-beige transition-standard group-hover:shadow-institutional group-hover:-translate-y-1">
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-standard" style={{ background: m.bg }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <svg className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                    </div>
                  </div>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-slate/40 mt-4 text-center leading-relaxed px-4">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
