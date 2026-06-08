'use client';

import Link from 'next/link';

const CARDS = [
  {
    num: "01",
    title: "Emploi Allemagne",
    desc: "Vous travaillez peut-être déjà depuis plusieurs années… Mais vous avez aujourd'hui l'impression que votre évolution ralentit ou devient difficile à projeter.",
    benefits: ["Davantage de stabilité", "Une trajectoire plus claire", "Une progression cohérente"],
    note: "Vous voulez retrouver une progression professionnelle plus crédible.",
    btnText: "Découvrir le parcours",
    accent: "bg-[#5B7FA6]",
    borderColor: "border-[#5B7FA6]",
    icon: "M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M2 7h20v14H2z"
  },
  {
    num: "02",
    title: "Ausbildung",
    desc: "Vous voulez construire quelque chose de plus stable… Mais sans savoir quel métier choisir ou comment éviter de perdre plusieurs années.",
    benefits: ["Un métier d'État", "Des compétences certifiées", "Une trajectoire structurée"],
    note: "Vous recherchez peut-être une direction professionnelle plus claire.",
    btnText: "Comprendre l'Ausbildung",
    accent: "bg-brand-gold",
    borderColor: "border-brand-gold",
    icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10"
  },
  {
    num: "03",
    title: "Études Allemagne",
    desc: "Vous avez peut-être peur de faire des études sans débouchés clairs, de manquer d'opportunités, ou d'avancer sans réelle trajectoire après votre diplôme.",
    benefits: ["Davantage d'opportunités", "Une trajectoire plus crédible", "Un avenir plus structuré"],
    note: "Vous voulez construire un avenir académique avec plus de visibilité.",
    btnText: "Découvrir les universités",
    accent: "bg-brand-red",
    borderColor: "border-brand-red",
    icon: "M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5"
  }
];

export default function Situations() {
  return (
    <section className="bg-brand-white py-16 md:py-24" id="parcours" aria-labelledby="situation-heading">
      <div className="max-w-[1280px] mx-auto px-6 animate-entrance">
        
        <div className="text-center mb-12">
          <h2 id="situation-heading" className="font-serif text-[clamp(26px,3.5vw,44px)] leading-[1.2] mb-3 text-brand-slate tracking-tight">
            Quelle est votre <em className="italic text-brand-red font-serif">priorité actuelle ?</em>
          </h2>
          <p className="text-[14px] text-brand-slate/50 font-sans tracking-wide">
            Votre projet vers l&apos;Allemagne doit être clarifié avant d&apos;être accéléré.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {CARDS.map((c, i) => (
            <article key={i} className="bg-brand-beige/20 border border-black/5 rounded-sm p-7 md:p-8 flex flex-col relative overflow-hidden group hover:shadow-pro-max transition-standard">
              <div className={`absolute top-0 left-0 right-0 h-[3px] ${c.accent}`}></div>
              
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="font-serif text-[13px] font-bold text-brand-slate/40 tracking-[1px]">{c.num}</span>
                  <span className="w-6 h-[1.5px] bg-black/10"></span>
                </div>
                <div className="w-11 h-11 bg-white border border-black/5 rounded-sm flex items-center justify-center shadow-sm group-hover:scale-110 transition-standard">
                  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-brand-slate/60" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d={c.icon} /></svg>
                </div>
              </div>

              <h3 className="font-sans text-[20px] font-bold text-brand-slate mb-3">{c.title}</h3>
              <p className="text-[13.5px] leading-[1.6] text-brand-slate/60 mb-5 font-sans">
                {c.desc}
              </p>

              <ul className="space-y-2 mb-6 flex-grow">
                {c.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[13px] text-brand-slate/80 font-medium leading-[1.4] font-sans">
                    <div className={`w-4 h-4 rounded-full ${c.accent} flex-shrink-0 mt-0.5 flex items-center justify-center`}>
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 16 16" fill="currentColor"><path d="M6.5 11.5l-3-3 1-1 2 2 4-4 1 1z"/></svg>
                    </div>
                    {b}
                  </li>
                ))}
              </ul>

              <p className="text-[12px] text-brand-slate/40 italic font-sans border-t border-black/5 pt-4 mt-1 leading-relaxed">
                {c.note}
              </p>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 py-4">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
          <p className="text-[13px] text-brand-slate/50 font-sans italic tracking-wide">
            Notre priorité : sécuriser votre trajectoire à chaque étape.
          </p>
        </div>
      </div>
    </section>
  );
}
