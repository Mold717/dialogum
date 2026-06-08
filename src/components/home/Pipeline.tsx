'use client';

const STEPS = [
  { num: "01", title: "Orientation & Qualification", desc: "Clarifier votre situation actuelle pour comprendre vos options réelles.", icon: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", color: "bg-brand-slate" },
  { num: "02", title: "Préparation", desc: "Structurer méthodiquement vos preuves de compétences et garanties.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2", color: "bg-brand-red" },
  { num: "03", title: "Matching", desc: "Alignement stratégique entre votre profil et les opportunités d'État.", icon: "M11 19a8 8 0 100-16 8 8 0 000 16z M21 21l-4.35-4.35", color: "bg-brand-gold" },
  { num: "04", title: "Validation", desc: "Audit de conformité et sécurisation finale avant le déploiement.", icon: "M12 2L4 6v6c0 5.4 3.4 10.4 8 12 4.6-1.6 8-6.6 8-12V6l-8-4z", color: "bg-brand-slate" },
  { num: "05", title: "Départ", desc: "Accompagnement logistique et psychologique vers la transition.", icon: "M19 13l-4-4m0 0l-4 4m4-4v12M5 13h14", color: "bg-brand-red" },
  { num: "06", title: "Intégration", desc: "Suivi de stabilisation institutionnelle après votre arrivée.", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100-8 4 4 0 000 8z", color: "bg-brand-gold" },
];

export default function Pipeline() {
  return (
    <section className="bg-brand-beige/10 py-24 md:py-40 relative overflow-hidden" aria-labelledby="pipeline-heading">
      <div className="section-container relative z-10 animate-entrance">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
             <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-brand-slate/40 mb-10 block">Notre pipeline opérationnel</span>
             <h2 id="pipeline-heading" className="font-serif text-4xl md:text-6xl heading-pro-max text-balance">
                Un projet Allemagne sérieux ne se construit <span className="text-brand-red italic">pas dans le chaos.</span>
             </h2>
          </div>
          <div className="lg:max-w-xs text-right hidden lg:block">
             <p className="text-[15px] font-sans font-medium text-brand-slate/60 leading-relaxed italic border-r-2 border-brand-red pr-8">
               "Le pipeline Dialogum fonctionne comme une progression claire : chaque étape réduit l’incertitude."
             </p>
          </div>
        </div>

        {/* Steps Grid — Museum Linear Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-0 relative mb-24">
          {/* Connecting Line for Desktop */}
          <div className="absolute top-10 left-0 w-full h-px bg-brand-beige hidden lg:block -z-0"></div>

          {STEPS.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 relative z-10 animate-entrance group" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
              <div className={`w-20 h-20 rounded-full border-[6px] border-white shadow-institutional ${step.color} flex items-center justify-center mb-10 transition-standard group-hover:scale-110 group-hover:rotate-12`}>
                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={step.icon} /></svg>
              </div>
              <span className="text-[10px] font-heading font-bold text-brand-slate/30 uppercase tracking-[0.4em] mb-4">{step.num}</span>
              <h4 className="text-[13px] font-heading font-bold text-brand-slate mb-4 uppercase tracking-wider leading-tight min-h-[40px] flex items-center justify-center">{step.title}</h4>
              <p className="text-[12px] text-brand-slate/50 font-medium leading-relaxed max-w-[160px] mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Educational Note Tile */}
        <div className="bg-white border border-brand-beige p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 shadow-pro-max max-w-5xl mx-auto rounded-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
           <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-soft">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4" /></svg>
           </div>
           <div>
              <h3 className="text-xl font-heading font-bold text-brand-slate uppercase mb-2 tracking-tight">Un système exigeant et bienveillant.</h3>
              <p className="text-[15px] font-sans font-medium text-brand-slate/60 leading-relaxed">
                Notre ingénierie de parcours est sélective. Seuls les profils alignés avec les critères d'excellence institutionnelle sont accompagnés pour garantir un taux de réussite de 100%.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
