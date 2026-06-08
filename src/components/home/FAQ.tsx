'use client';

import Image from 'next/image';

const FAQS = [
  { num: "01", q: "Et si mon profil n'était finalement pas compatible ?", a: "C'est la crainte majeure. Notre audit stratégique clarifie vos options réelles avant tout engagement, vous évitant de vous projeter dans une impasse institutionnelle.", color: "bg-brand-red" },
  { num: "02", q: "Le projet paraît beaucoup trop compliqué…", a: "La complexité administrative est neutralisée par notre ingénierie de dossier. Dès que les étapes deviennent lisibles, le projet devient mentalement accessible.", color: "bg-brand-slate" },
  { num: "03", q: "J'ai peur de perdre encore du temps…", a: "L'incertitude est le premier facteur de perte de temps. En apportant une visibilité immédiate, nous accélérons votre transition vers l'Allemagne de manière sécurisée.", color: "bg-brand-gold" },
];

export default function FAQ() {
  return (
    <section className="bg-brand-beige/20 py-24 md:py-40 relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Decorative Marks */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none -z-0">
        <Image src="/assets/backgrounds/brand-marks.png" alt="" fill className="object-cover" />
      </div>

      <div className="section-container relative z-10 animate-entrance">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-10 h-0.5 bg-brand-red"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold"></span>
            </div>
            <h2 id="faq-heading" className="font-serif text-3xl md:text-5xl lg:text-6xl heading-pro-max leading-tight text-balance">
              Les questions que beaucoup <br />
              gardent en tête <span className="text-brand-red italic">pendant des mois.</span>
            </h2>
          </div>
          <div className="bg-white border border-brand-beige rounded-sm p-10 max-w-sm shadow-pro-max relative">
             <div className="absolute top-0 right-0 w-2 h-full bg-brand-gold/20"></div>
             <span className="text-5xl text-brand-red font-serif leading-none block mb-6">“</span>
             <p className="text-[15px] font-sans font-medium text-brand-slate/60 leading-relaxed italic">
               Des pensées récurrentes, des doutes légitimes, mais surtout des <strong className="text-brand-slate">réponses institutionnelles concrètes.</strong>
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {FAQS.map((f, i) => (
            <article key={i} className="bg-white border border-brand-beige rounded-sm p-10 relative group hover:shadow-pro-max transition-standard overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 ${f.color} opacity-20 group-hover:opacity-100 transition-standard`}></div>
              <div className={`w-10 h-10 ${f.color} rounded-full flex items-center justify-center text-white font-bold text-sm mb-8 font-heading shadow-soft`}>{f.num}</div>
              <h3 className="text-xl font-heading font-bold text-brand-slate mb-6 leading-tight tracking-tight">{f.q}</h3>
              <p className="text-[14px] text-brand-slate/50 font-medium leading-relaxed font-sans">{f.a}</p>
              
              <div className="absolute top-8 right-8 w-10 h-10 bg-brand-beige/20 rounded-full flex items-center justify-center group-hover:bg-brand-red/10 transition-standard">
                 <svg className="w-5 h-5 text-brand-slate/20 group-hover:text-brand-red transition-standard" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 pt-16 border-t border-brand-slate/5">
           <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-[linear-gradient(135deg,#C99B3C,#8B1E1E)] rounded-full flex items-center justify-center shadow-institutional group-hover:rotate-12 transition-standard">
                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
              </div>
              <div className="text-lg font-bold text-brand-slate font-sans leading-tight">
                 Vos doutes sont normaux. <br />
                 <span className="text-brand-red italic opacity-90 font-serif">Ce qui change tout, c'est la clarté.</span>
              </div>
           </div>
           
           <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-12">
              {[
                { t: "Compréhension", d: "Une vision stratégique pour avancer sans reculer.", icon: "M9 18l6-6-6-6" },
                { t: "Direction", d: "Des étapes certifiées, un cap institutionnel tenu.", icon: "M3 17l4-8 4 6 3-4 4 6" },
                { t: "Sérénité", d: "Moins de fatigue mentale, plus de réussite concrète.", icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }
              ].map((c, i) => (
                <div key={i} className="flex flex-col gap-3">
                   <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={c.icon} /></svg>
                   <h4 className="text-[13px] font-heading font-bold text-brand-slate uppercase tracking-widest">{c.t}</h4>
                   <p className="text-[12px] text-brand-slate/50 font-medium leading-relaxed">{c.d}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
