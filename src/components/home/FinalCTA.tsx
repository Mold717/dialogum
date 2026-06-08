'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-40 bg-brand-white relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="section-container relative z-10">
        <div className="bg-brand-beige/30 border border-brand-beige rounded-sm overflow-hidden relative grid grid-cols-1 lg:grid-cols-2 min-h-[500px] shadow-pro-max animate-entrance">
          
          <div className="p-12 md:p-16 lg:p-20 flex flex-col justify-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <span className="w-10 h-0.5 bg-brand-red"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold"></span>
              </div>
              <h2 id="cta-heading" className="font-serif text-3xl md:text-5xl lg:text-6xl heading-pro-max leading-tight mb-8">
                Vous n'avez pas besoin <br />
                de toutes les réponses <br />
                <span className="text-brand-red italic">pour commencer.</span>
              </h2>
              <p className="text-[16px] text-brand-slate/70 leading-relaxed mb-12 max-w-lg font-sans font-medium">La première étape consiste simplement à comprendre quelles possibilités correspondent réellement à votre situation et comment avancer avec davantage de visibilité.</p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact" className="flex items-center justify-center gap-3 px-10 py-5 bg-brand-red text-white rounded-sm text-[13px] font-bold uppercase tracking-widest hover:bg-brand-slate transition-standard shadow-pro-max">
                  Évaluer ma situation
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/></svg>
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-3 px-10 py-5 bg-transparent border border-brand-slate/10 text-brand-slate rounded-sm text-[13px] font-bold uppercase tracking-widest hover:border-brand-red transition-standard">
                  Parler avec l'équipe
                </Link>
              </div>

              <div className="flex flex-wrap gap-10 mt-16">
                {[
                  "Approche structurée",
                  "Vision plus claire",
                  "Progression adaptée"
                ].map((check, i) => (
                  <div key={i} className="flex items-center gap-3 text-[11px] font-heading font-bold text-brand-slate/40 uppercase tracking-[0.2em]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7"/></svg>
                    {check}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual: Skyline/City Pattern from PDF */}
          <div className="relative overflow-hidden hidden lg:block" aria-hidden="true">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#C8B898_0%,#B0986A_35%,#8B7450_65%,#6B5430_100%)] opacity-95"></div>
            
            {/* City Silhouette SVG */}
            <svg viewBox="0 0 400 300" className="absolute bottom-0 right-0 w-full h-full opacity-10 fill-brand-slate mix-blend-multiply">
               <rect x="150" y="80" width="100" height="180"/><polygon points="150 80 200 20 250 80"/><rect x="0" y="240" width="400" height="60" opacity="0.5"/><rect x="300" y="60" width="8" height="180"/><ellipse cx="304" cy="100" rx="20" ry="30"/>
            </svg>

            {/* Pulsing Mark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/20 rounded-full flex items-center justify-center animate-pulse">
               <div className="w-20 h-20 opacity-40">
                  <Image src="/assets/logos/Monogramme-dialogum-Final-transparent.png" alt="" fill className="object-contain invert" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
