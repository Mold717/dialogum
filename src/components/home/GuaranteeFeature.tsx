'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function GuaranteeFeature() {
  return (
    <section className="py-24 md:py-48 bg-brand-white relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Guarantee Box — Museum Style */}
          <div className="relative animate-entrance">
            <div className="absolute -inset-10 bg-brand-red/5 blur-3xl rounded-full"></div>
            <div className="bento-card border-brand-gold/40 p-12 md:p-20 bg-white relative">
              <div className="mb-10 inline-flex items-center gap-4 px-5 py-2 bg-brand-gold text-white rounded-sm shadow-soft">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em]">Garantie de Réussite</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl heading-pro-max text-brand-red mb-10 leading-none">Pour les <br /> Infirmiers.</h2>
              
              <p className="text-[15px] text-brand-slate/60 font-medium mb-12 leading-relaxed">
                Si vous obtenez le niveau B1 et réussissez l'entretien d'embauche préparé avec Dialogum, nous certifions le remboursement intégral de :
              </p>
              
              <ul className="space-y-6 mb-12">
                {["Les frais de cours de langue", "Les frais de procédure de visa"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center">
                       <svg className="w-3 h-3 text-brand-red" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                       </svg>
                    </div>
                    <span className="text-[14px] font-sans font-bold uppercase tracking-widest text-brand-slate">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Physical Stamp Feel */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-red rounded-full flex flex-col items-center justify-center text-white border-[6px] border-white shadow-institutional rotate-12 group-hover:rotate-0 transition-standard">
                 <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                 </svg>
                 <span className="text-[8px] font-sans font-bold uppercase tracking-tighter text-center">Satisfaction<br />Garantie</span>
              </div>
            </div>
          </div>

          {/* CTA Area */}
          <div className="animate-entrance" style={{ animationDelay: '0.3s' }}>
             <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-brand-slate opacity-40 mb-10 text-center lg:text-left">Entrer dans le système</h3>
             <h2 className="text-4xl md:text-6xl heading-pro-max mb-12 text-center lg:text-left">
               Votre réussite est <br /> <span className="text-brand-gold italic">une ingénierie.</span>
             </h2>
             <p className="body-institutional text-xl mb-16 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
               Chaque parcours commence par une qualification structurée. Accédez au standard Dialogum dès aujourd'hui.
             </p>
             <div className="text-center lg:text-left">
                <Link href="/contact" className="button-institutional bg-brand-slate text-white px-16 py-7 rounded-2xl shadow-pro-max hover:bg-brand-red">
                   Accéder au système →
                </Link>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
