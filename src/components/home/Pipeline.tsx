'use client';

const STEPS = [
  { num: "01", title: "Orientation & Qualification", desc: "Clarifier votre situation actuelle pour comprendre vos options réelles.", icon: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", active: true },
  { num: "02", title: "Préparation & Dossier", desc: "Structurer méthodiquement vos preuves de compétences et garanties.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2", active: false },
  { num: "03", title: "Matching Stratégique", desc: "Alignement précis entre votre profil et les besoins réels en Allemagne.", icon: "M11 19a8 8 0 100-16 8 8 0 000 16z M21 21l-4.35-4.35", active: false },
  { num: "04", title: "Validation Finale", desc: "Audit de conformité et sécurisation finale avant le déploiement.", icon: "M12 2L4 6v6c0 5.4 3.4 10.4 8 12 4.6-1.6 8-6.6 8-12V6l-8-4z", active: false },
  { num: "05", title: "Départ Logistique", desc: "Accompagnement complet vers la transition physique et administrative.", icon: "M19 13l-4-4m0 0l-4 4m4-4v12M5 13h14", active: false },
  { num: "06", title: "Intégration Locale", desc: "Suivi de stabilisation institutionnelle après votre arrivée effective.", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100-8 4 4 0 000 8z", active: false },
];

const OUTCOMES = [
  { title: "SÉCURITÉ", desc: "Élimination des risques d'échec par l'audit." },
  { title: "CLARTÉ", desc: "Vision nette des prochaines étapes à franchir." },
  { title: "CONFORMITÉ", desc: "Dossier aligné avec les standards allemands." },
  { title: "STABILITÉ", desc: "Projet construit pour durer sur le long terme." }
];

export default function Pipeline() {
  return (
    <section className="bg-brand-beige/20 py-20 md:py-28" aria-labelledby="pipeline-heading">
      <div className="max-w-[1280px] mx-auto px-6 animate-entrance">
        
        <div className="bg-white border border-black/5 rounded-sm p-10 md:p-14 shadow-pro-max relative overflow-hidden">
          <div className="text-[11px] font-sans font-bold uppercase tracking-[2px] text-brand-slate/40 mb-3">
            Notre pipeline opérationnel
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="pipeline-text">
              <h2 id="pipeline-heading" className="font-serif text-[clamp(28px,3.5vw,42px)] leading-[1.18] mb-5 text-brand-slate tracking-tight">
                Un projet Allemagne sérieux ne se construit <em className="italic text-brand-red font-serif">pas dans le chaos.</em>
              </h2>
              <p className="text-[15px] leading-[1.7] text-brand-slate/70 font-sans mb-4">
                Le pipeline Dialogum fonctionne comme une progression logique et rigoureuse. Chaque étape est conçue pour réduire l&apos;incertitude et augmenter la crédibilité de votre dossier.
              </p>
              <p className="text-[15px] leading-[1.7] text-brand-slate/70 font-sans">
                Nous ne nous contentons pas de « chercher » une opportunité : nous préparons le terrain pour qu&apos;elle soit une réussite durable.
              </p>
            </div>

            <div className="rounded-sm overflow-hidden h-[240px] bg-gradient-to-br from-[#C8B890] via-[#A0906A] to-[#705838] relative flex items-center justify-center opacity-90">
               <svg viewBox="0 0 24 24" className="w-24 h-24 text-white opacity-20" fill="none" stroke="currentColor" strokeWidth={1}><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
               <div className="absolute inset-0 bg-black/5"></div>
            </div>
          </div>

          {/* Pipeline Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-0 relative mb-12">
            {/* Connecting line for desktop */}
            <div className="absolute top-[26px] left-[8%] right-[8%] h-[2px] bg-black/5 hidden lg:block -z-0"></div>

            {STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center px-2 relative z-10 group mt-8 lg:mt-0">
                <div className="absolute top-[-12px] left-[-4px] font-serif text-[16px] font-bold text-brand-slate/20 group-hover:text-brand-red/30 transition-colors">
                  {step.num}
                </div>
                <div className={`w-[52px] h-[52px] rounded-full border-2 border-black/5 flex items-center justify-center mb-3 transition-standard bg-white ${step.active ? 'border-brand-red bg-brand-red !text-white' : 'group-hover:border-brand-red'}`}>
                  <svg className={`w-5 h-5 ${step.active ? 'text-white' : 'text-brand-slate/40 group-hover:text-brand-red'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={step.icon} /></svg>
                </div>
                <h4 className="text-[12px] font-sans font-bold text-brand-slate mb-1.5 leading-tight">{step.title}</h4>
                <p className="text-[11.5px] text-brand-slate/50 leading-[1.45] font-sans max-w-[140px]">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Outcomes Grid */}
          <div className="bg-brand-beige/20 rounded-sm p-7 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 border border-black/5">
            {OUTCOMES.map((o, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white border border-black/5 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/></svg>
                </div>
                <div>
                  <h4 className="text-[13px] font-sans font-bold text-brand-slate mb-1">{o.title}</h4>
                  <p className="text-[12px] text-brand-slate/60 leading-[1.45] font-sans">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
