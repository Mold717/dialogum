'use client';

import Image from 'next/image';

const STEPS = [
  { num: "01", label: "Orientation", desc: "Comprendre votre situation actuelle", color: "bg-brand-slate" },
  { num: "02", label: "Préparation", desc: "Structurer votre dossier et votre profil", color: "bg-brand-red" },
  { num: "03", label: "Matching", desc: "Aligner avec les meilleures opportunités", color: "bg-brand-gold" },
  { num: "04", label: "Validation", desc: "Vérifier et sécuriser votre parcours", color: "bg-brand-slate" },
  { num: "05", label: "Départ", desc: "Organiser votre départ sereinement", color: "bg-brand-red" },
  { num: "06", label: "Intégration", desc: "Vous accompagner dans la durée", color: "bg-brand-gold" },
];

export default function PipelineBento() {
  return (
    <section className="py-24 md:py-40 bg-brand-white relative">
      <div className="section-container">
        <div className="mb-24">
           <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-brand-slate opacity-40 mb-10">Notre pipeline opérationnel</h3>
           <h2 className="text-3xl md:text-5xl heading-pro-max">L'Ingénierie <br /> <span className="text-brand-red italic">en six phases.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="bento-card group p-10 flex flex-col justify-between min-h-[220px] animate-entrance" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex justify-between items-start mb-10">
                <span className="text-[10px] font-heading font-bold text-brand-slate opacity-20 uppercase tracking-[0.3em]">{step.num}</span>
                <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center shadow-soft group-hover:scale-110 transition-standard`}>
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                </div>
              </div>
              <div>
                <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-brand-slate mb-3">{step.label}</h4>
                <p className="text-[13px] text-brand-slate/60 font-medium leading-relaxed">{step.desc}</p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-beige/20 rounded-full blur-2xl group-hover:bg-brand-red/5 transition-standard"></div>
            </div>
          ))}

          {/* Institutional Note Tile */}
          <div className="lg:col-span-3 bento-card bg-brand-beige/20 p-10 flex items-center gap-10 animate-entrance border-none shadow-none" style={{ animationDelay: '0.7s' }}>
             <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-soft flex-shrink-0">
                <svg className="w-7 h-7 text-brand-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
             </div>
             <div>
                <p className="text-[14px] font-heading font-bold text-brand-slate leading-relaxed">
                  Un système exigeant et bienveillant. <br />
                  <span className="text-brand-slate/40 text-[12px] font-medium">Seuls les profils alignés avec les critères sont accompagnés.</span>
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
