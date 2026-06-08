'use client';

import Link from 'next/link';

const CARDS = [
  {
    num: "01",
    title: "Emploi Allemagne",
    intro: "Vous voulez retrouver une progression professionnelle plus crédible",
    desc: "Vous travaillez peut-être déjà depuis plusieurs années… Mais vous avez aujourd'hui l'impression que votre évolution ralentit ou devient difficile à projeter.",
    benefits: ["davantage de stabilité ;", "une trajectoire plus claire ;", "une progression cohérente."],
    btnText: "Découvrir le parcours",
    accent: "bg-brand-red",
    icon: "M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M2 7h20v14H2z"
  },
  {
    num: "02",
    title: "Ausbildung",
    intro: "Vous recherchez peut-être une direction professionnelle plus claire",
    desc: "Vous voulez construire quelque chose de plus stable… Mais sans savoir quel métier choisir ou comment éviter de perdre plusieurs années.",
    benefits: ["un métier d'État ;", "des compétences certifiées ;", "une trajectoire structurée."],
    btnText: "Comprendre l'Ausbildung",
    accent: "bg-brand-gold",
    icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10"
  },
  {
    num: "03",
    title: "Études Allemagne",
    intro: "Vous voulez construire un avenir académique avec plus de visibilité",
    desc: "Vous avez peut-être peur de faire des études sans débouchés clairs, de manquer d'opportunités, ou d'avancer sans réelle trajectoire après votre diplôme.",
    benefits: ["davantage d'opportunités ;", "une trajectoire plus crédible ;", "un avenir plus structuré."],
    btnText: "Découvrir les universités",
    accent: "bg-brand-slate",
    icon: "M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5"
  }
];

export default function Situations() {
  return (
    <section id="parcours" className="bg-white py-24 md:py-32" aria-labelledby="situation-heading">
      <div className="section-container relative z-10 animate-entrance">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-brand-slate/10 pt-20">
          
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
            {CARDS.map((c, i) => (
              <article key={i} className="bg-brand-beige/20 border border-brand-beige/40 p-10 md:p-12 flex flex-col justify-between group hover:shadow-pro-max transition-standard relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${c.accent} opacity-40 group-hover:opacity-100 transition-standard`}></div>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[18px] font-bold text-brand-slate opacity-20">{c.num}</span>
                    <div className="w-12 h-12 bg-white border border-brand-beige rounded-sm flex items-center justify-center group-hover:scale-110 transition-standard shadow-soft">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-slate/60" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d={c.icon} /></svg>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-slate uppercase leading-none tracking-tight">{c.title}</h3>
                  <p className="text-[14px] font-bold text-brand-slate/80 leading-relaxed italic">{c.intro}</p>
                  <p className="text-[14px] text-brand-slate/60 leading-relaxed font-sans">{c.desc}</p>
                  
                  <ul className="space-y-4 my-6 list-none font-sans">
                    {c.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[13px] text-brand-slate font-medium leading-tight">
                        <div className={`w-1.5 h-1.5 rounded-full ${c.accent} mt-1.5 opacity-60`}></div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className={`inline-flex items-center gap-3 px-6 py-4 ${c.accent} text-white rounded-sm text-[12px] font-bold uppercase tracking-[0.2em] transition-standard hover:bg-brand-slate shadow-soft mt-8`}>
                   {c.btnText}
                </Link>
              </article>
            ))}
          </div>

          {/* Priority Sidebar from PDF */}
          <aside className="lg:col-span-3 bg-brand-beige border border-brand-beige rounded-sm p-10 flex flex-col items-center justify-center text-center shadow-soft">
             <div className="w-16 h-16 bg-white border border-brand-beige rounded-full flex items-center justify-center mb-10 shadow-pro-max">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
             </div>
             <h4 className="text-xl font-heading font-bold text-brand-slate uppercase leading-tight mb-8">
               Notre priorité :<br /><span className="text-brand-red italic opacity-90">votre trajectoire.</span>
             </h4>
             <p className="text-[13px] font-sans font-medium text-brand-slate/50 leading-relaxed uppercase tracking-widest">
               Clarté aujourd'hui,<br />stabilité demain,<br />avenir durable.
             </p>
          </aside>

        </div>
      </div>
    </section>
  );
}
