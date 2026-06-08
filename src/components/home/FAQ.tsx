'use client';

import Image from 'next/image';

const FAQS = [
  { num: "01", q: "Et si mon profil n&apos;était finalement pas compatible ?", a: "C&apos;est la crainte majeure. Notre audit stratégique clarifie vos options réelles avant tout engagement, vous évitant de vous projeter dans une impasse.", color: "bg-[#5B7FA6]" },
  { num: "02", q: "Le projet paraît beaucoup trop compliqué…", a: "La complexité administrative est neutralisée par notre ingénierie de dossier. Dès que les étapes deviennent lisibles, le projet devient mentalement accessible.", color: "bg-brand-red" },
  { num: "03", q: "J&apos;ai peur de perdre encore du temps…", a: "L&apos;incertitude est le premier facteur de perte de temps. En apportant une visibilité immédiate, nous accélérons votre transition de manière sécurisée.", color: "bg-brand-gold" },
];

const FOOTER_ITEMS = [
  { title: "Compréhension", desc: "Une vision stratégique pour avancer sans reculer." },
  { title: "Direction", desc: "Des étapes certifiées, un cap institutionnel tenu." },
  { title: "Sérénité", desc: "Moins de fatigue mentale, plus de réussite concrète." }
];

export default function FAQ() {
  return (
    <section className="bg-brand-beige/20 py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="max-w-[1280px] mx-auto px-6 animate-entrance">
        
        <div className="bg-white border border-black/5 rounded-sm p-10 md:p-14 shadow-pro-max">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-start mb-11">
            <h2 id="faq-heading" className="font-serif text-[clamp(26px,3.5vw,42px)] leading-[1.18] text-brand-slate tracking-tight">
              Les questions que beaucoup <br />
              gardent en tête <em className="italic text-brand-red font-serif">pendant des mois.</em>
            </h2>
            
            <div className="bg-brand-beige/20 border border-black/5 rounded-sm p-6 max-w-[280px] text-center shadow-sm relative overflow-hidden group hover:border-brand-red/10 transition-standard">
               <span className="text-[40px] text-brand-red font-serif leading-[0.8] block mb-2 opacity-80">“</span>
               <p className="text-[14px] leading-[1.55] text-brand-slate/60 font-sans italic">
                 Des pensées récurrentes, des doutes légitimes, mais surtout des <strong className="text-brand-red font-bold">réponses concrètes.</strong>
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-11">
            {FAQS.map((f, i) => (
              <article key={i} className="bg-brand-beige/20 border border-black/5 rounded-sm p-7 relative group hover:border-brand-red/10 transition-standard">
                <div className={`w-9 h-9 ${f.color} rounded-full flex items-center justify-center text-white font-sans font-bold text-[15px] mb-5 shadow-sm`}>
                  {i + 1}
                </div>
                <h3 className="text-[17px] font-sans font-bold text-brand-slate mb-3.5 leading-[1.3]">{f.q}</h3>
                <p className="text-[13.5px] text-brand-slate/50 leading-[1.6] font-sans">{f.a}</p>
                
                <div className="absolute top-6 right-6 w-9 h-9 bg-white border border-black/5 rounded-full flex items-center justify-center shadow-sm group-hover:bg-brand-red/5 transition-standard">
                   <svg className="w-4.5 h-4.5 text-brand-slate/20 group-hover:text-brand-red transition-standard" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr] gap-8 items-center pt-8 border-t border-black/5">
            <div className="text-[15px] font-sans font-bold leading-[1.5] text-brand-slate">
              Vos doutes sont normaux. <br />
              <em className="text-brand-red italic font-serif">Ce qui change tout, c&apos;est la clarté.</em>
            </div>

            <div className="w-14 h-14 bg-gradient-to-br from-brand-gold/60 to-brand-gold rounded-full flex items-center justify-center shadow-soft shrink-0">
               <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
            </div>

            {FOOTER_ITEMS.map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                 <h4 className="text-[13px] font-sans font-bold text-brand-slate uppercase tracking-wide">{item.title}</h4>
                 <p className="text-[12.5px] text-brand-slate/50 font-sans leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
