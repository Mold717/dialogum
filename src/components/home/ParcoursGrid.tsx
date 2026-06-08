'use client';

import Link from 'next/link';

const PARCOURS = [
  {
    title: "Emploi",
    subtitle: "Allemagne",
    color: "bg-brand-red",
    icon: "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 7h20v14H2z",
    items: ["Contrats de travail en Allemagne", "Profils qualifiés & opérationnels", "Métiers en tension", "Placement rapide & sécurisé"],
    accent: "text-brand-red",
    href: "/parcours-emploi"
  },
  {
    title: "Ausbildung",
    subtitle: "Formation professionnelle",
    color: "bg-brand-gold",
    icon: "M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5",
    items: ["Formation en alternance rémunérée", "Métiers d'avenir", "Apprentissage structuré", "Insertion durable"],
    accent: "text-brand-gold",
    href: "/parcours-ausbildung"
  },
  {
    title: "Études",
    subtitle: "Parcours académique",
    color: "bg-brand-slate",
    icon: "M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5",
    items: ["Universités allemandes", "Orientation académique", "Constitution du dossier", "Préparation linguistique"],
    accent: "text-brand-slate",
    href: "/parcours-etudes"
  }
];

export default function ParcoursGrid() {
  return (
    <section className="py-24 md:py-40 bg-brand-white relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t-2 border-brand-slate pt-16">
          
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
            {PARCOURS.map((p, i) => (
              <div key={i} className="bento-card group flex flex-col p-10 animate-entrance" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`mb-10 p-5 ${p.color} rounded-sm shadow-soft`}>
                   <div className="flex items-center gap-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                      </svg>
                      <h3 className="text-xl font-heading font-bold text-white uppercase leading-none tracking-tight">
                        {p.title}
                        <span className="block text-[9px] font-medium opacity-70 mt-1">{p.subtitle}</span>
                      </h3>
                   </div>
                </div>

                <ul className="space-y-4 mb-12 flex-1">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[12px] font-sans font-medium text-brand-slate/60 leading-tight">
                      <span className={`${p.accent} font-bold`}>⊘</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href={p.href} className={`inline-flex items-center gap-4 text-[10px] font-sans font-bold uppercase tracking-[0.3em] ${p.accent} hover:opacity-70 transition-standard`}>
                  Découvrir le parcours <span>→</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Priority Sidebar */}
          <div className="lg:col-span-3 bento-card bg-brand-beige/30 p-10 flex flex-col items-center justify-center text-center animate-entrance" style={{ animationDelay: '0.4s' }}>
             <svg className="w-10 h-10 text-brand-red mb-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
             </svg>
             <h4 className="text-[14px] font-heading font-bold text-brand-slate uppercase leading-tight mb-8">
               Notre priorité :<br />votre trajectoire.
             </h4>
             <p className="text-[12px] font-sans font-medium text-brand-slate/50 leading-relaxed uppercase tracking-widest">
               Clarté aujourd'hui,<br />stabilité demain,<br />avenir durable.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
}
