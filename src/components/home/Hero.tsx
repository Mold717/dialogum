'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-brand-beige relative overflow-hidden min-h-[580px] pt-0" aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] w-full min-h-[580px]">
        
        {/* Image Side - Visible on all, Order 1 on mobile, 2 on desktop */}
        <div className="relative overflow-hidden h-[380px] lg:h-auto order-1 lg:order-2 [clip-path:ellipse(200%_100%_at_50%_0%)] lg:[clip-path:ellipse(100%_200%_at_100%_50%)]">
          <Image 
            src="/assets/heroes/hero-01-home-dialogum+.png" 
            alt="Ingénierie de parcours Dialogum" 
            fill 
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center grayscale-[0.2] contrast-[1.05] opacity-95 transition-transform duration-1000 hover:scale-105"
            priority
          />
          
          {/* PREMIUM TRANSITION ELEMENTS */}
          
          {/* Mobile: Clean transition without blur */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-beige to-transparent lg:hidden z-20"></div>
          
          {/* Desktop: Premium Vertical Border and Soft Glow */}
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent hidden lg:block z-30"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-brand-beige)_0%,rgba(248,244,236,0.3)_10%,transparent_30%)] hidden lg:block"></div>
          
          {/* subtle dark gradient at bottom for potential text - Only on desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/40 via-transparent to-transparent hidden lg:block"></div>
        </div>

        {/* Content Side - Order 2 on mobile, 1 on desktop */}
        <div className="pt-12 lg:pt-32 pb-12 px-8 flex flex-col items-center lg:items-start text-center lg:text-left justify-center relative z-10 lg:pl-[10%] xl:pl-[15%] order-2 lg:order-1 -mt-4 lg:mt-0 lg:-left-[20px]">
          <h1 id="hero-heading" className="font-bold leading-[1.15] mb-2 font-serif tracking-[2px] -mt-[10px]">
            <span className="text-[28px] lg:text-[32px] text-black block mb-1">Vous voulez probablement plus qu&apos;un simple départ vers l&apos;Allemagne.</span>
            <em className="text-[24px] lg:text-[28px] italic text-brand-red">Vous voulez surtout retrouver une trajectoire plus claire pour votre avenir.</em>
          </h1>

          <div className="my-7 mb-8 flex flex-col gap-4 w-full">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border-[1.5px] border-black/5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-black">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </div>
              <p className="text-[14px] leading-[1.5] text-brand-slate/80 font-sans mt-1 text-left">
                Aujourd&apos;hui, beaucoup de candidats ont l&apos;impression d&apos;avancer sans vraie direction, de <strong className="font-bold text-brand-slate">manquer de visibilité</strong>, de repousser leurs décisions ou de tourner en rond malgré leurs efforts.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border-[1.5px] border-black/5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-black">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
              </div>
              <p className="text-[14px] leading-[1.5] text-brand-slate/80 font-sans mt-1 text-left">
                Travail, Ausbildung ou études : Dialogum vous aide à transformer une situation confuse ou bloquée en un <strong className="font-bold text-brand-slate">projet plus structuré</strong>, plus compréhensible et plus crédible vers l&apos;Allemagne.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center lg:justify-start gap-2 lg:gap-4 pb-4 lg:pb-0 w-full px-2 lg:px-0">
            <Link href="/contact" className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-3 py-3 lg:px-6 lg:py-3 bg-brand-red text-white rounded-full font-sans text-[11px] lg:text-[15px] font-medium border-2 border-brand-red hover:bg-[#6B1414] hover:border-[#6B1414] transition-colors whitespace-nowrap">
              Évaluer ma situation
              <svg className="hidden lg:block w-6 h-6 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/></svg>
            </Link>
            <Link href="/fonctionnement" className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-3 py-3 lg:px-6 lg:py-3 bg-transparent text-brand-slate rounded-full font-sans text-[11px] lg:text-[15px] font-medium border-2 border-black/20 hover:border-brand-gold hover:text-brand-gold transition-colors whitespace-nowrap">
              Parcours possibles
              <svg className="hidden lg:block w-6 h-6 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/></svg>
            </Link>
          </div>

          <div className="relative mt-9 pt-7 border-t border-black/10 w-full">
            {/* Timeline Line - Only on mobile */}
            <div className="absolute top-[calc(1.75rem+12px)] left-[15%] right-[15%] h-[0.5px] bg-brand-gold/30 lg:hidden"></div>
            
            <div className="grid grid-cols-3 lg:flex lg:flex-row items-center lg:items-stretch justify-items-center gap-2 lg:gap-0 w-full relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3 lg:flex-1 lg:pr-5 lg:border-r lg:border-black/10 lg:mr-5">
                <div className="bg-brand-beige p-0.5 rounded-full lg:bg-transparent lg:p-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 lg:w-8 lg:h-8 text-brand-gold flex-shrink-0">
                    <circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="9"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>
                  </svg>
                </div>
                <p className="text-[11px] lg:text-[13px] leading-[1.3] lg:leading-[1.4] text-brand-slate/60 font-medium font-sans text-center lg:text-left">Vision plus claire<br className="hidden lg:block"/>des étapes.</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3 lg:flex-1 lg:pr-5 lg:border-r lg:border-black/10 lg:mr-5">
                <div className="bg-brand-beige p-0.5 rounded-full lg:bg-transparent lg:p-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 lg:w-8 lg:h-8 text-brand-gold flex-shrink-0">
                    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                </div>
                <p className="text-[11px] lg:text-[13px] leading-[1.3] lg:leading-[1.4] text-brand-slate/60 font-medium font-sans text-center lg:text-left">Orientation adaptée<br className="hidden lg:block"/>à votre situation.</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3 lg:flex-1">
                <div className="bg-brand-beige p-0.5 rounded-full lg:bg-transparent lg:p-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 lg:w-8 lg:h-8 text-brand-gold flex-shrink-0">
                    <path d="M3 17l4-8 4 6 3-4 4 6"/><path d="M3 20h18"/>
                  </svg>
                </div>
                <p className="text-[11px] lg:text-[13px] leading-[1.3] lg:leading-[1.4] text-brand-slate/60 font-medium font-sans text-center lg:text-left">Progression<br className="hidden lg:block"/>structurée.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-brand-slate py-4.5 px-8 relative z-30 -translate-y-[10px]" role="complementary" aria-label="Garanties">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-[1.5px] border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-brand-gold">
                <path d="M12 2L4 6v6c0 5.4 3.4 10.4 8 12 4.6-1.6 8-6.6 8-12V6l-8-4z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-sans text-[13px] font-semibold text-white">Système sécurisé</h4>
              <p className="text-[12px] text-white/55">Données protégées</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-[1.5px] border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-brand-gold">
                <circle cx="12" cy="8" r="4"/><circle cx="8" cy="16" r="3"/><circle cx="16" cy="16" r="3"/>
              </svg>
            </div>
            <div>
              <h4 className="font-sans text-[13px] font-semibold text-white">Parcours structurés</h4>
              <p className="text-[12px] text-white/55">Méthodologie claire</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-[1.5px] border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-brand-gold">
                <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/><path d="M8 12l3 3 5-5"/>
              </svg>
            </div>
            <div>
              <h4 className="font-sans text-[13px] font-semibold text-white">Accompagnement humain</h4>
              <p className="text-[12px] text-white/55">À chaque étape</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-[1.5px] border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-brand-gold">
                <path d="M9 12l2 2 4-4"/><path d="M12 2L3 6v6c0 5.4 3.4 10.4 8 12l1 .4"/>
                <circle cx="18" cy="18" r="5"/><path d="M16 18h2v2h-2z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-sans text-[13px] font-semibold text-white">Informations fiables</h4>
              <p className="text-[12px] text-white/55">Mises à jour régulières</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
