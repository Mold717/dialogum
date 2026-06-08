'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-brand-beige relative overflow-hidden min-h-[580px]" aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[580px]">
        
        {/* Content Side */}
        <div className="pt-40 pb-12 pl-8 pr-12 flex flex-col justify-center relative z-10 lg:pl-[10%] xl:pl-[15%]">
          <h1 id="hero-heading" className="font-bold leading-[1.15] mb-2 font-serif tracking-[2px]">
            <span className="text-[30px] text-black block mb-1">Vous voulez probablement plus qu&apos;un simple départ vers l&apos;Allemagne.</span>
            <em className="text-[26px] italic text-brand-red">Vous voulez surtout retrouver une trajectoire plus claire pour votre avenir.</em>
          </h1>

          <div className="my-7 mb-8 flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border-[1.5px] border-black/5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-brand-red">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </div>
              <p className="text-[14px] leading-[1.5] text-brand-slate/80 font-sans mt-1">
                Aujourd&apos;hui, beaucoup de candidats ont l&apos;impression d&apos;avancer sans vraie direction, de <strong className="font-bold text-brand-slate">manquer de visibilité</strong>, de repousser leurs décisions ou de tourner en rond malgré leurs efforts.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border-[1.5px] border-black/5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-brand-red">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
              </div>
              <p className="text-[14px] leading-[1.5] text-brand-slate/80 font-sans mt-1">
                Travail, Ausbildung ou études : Dialogum vous aide à transformer une situation confuse ou bloquée en un <strong className="font-bold text-brand-slate">projet plus structuré</strong>, plus compréhensible et plus crédible vers l&apos;Allemagne.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2.5 px-6 py-3 bg-brand-red text-white rounded-[10%] font-sans text-[15px] font-medium border-2 border-brand-red hover:bg-[#6B1414] hover:border-[#6B1414] transition-colors whitespace-nowrap">
              Évaluer ma situation
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/></svg>
            </Link>
            <Link href="/fonctionnement" className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent text-brand-slate rounded-[10%] font-sans text-[15px] font-medium border-2 border-black/20 hover:border-brand-red hover:text-brand-red transition-colors whitespace-nowrap">
              Comprendre les parcours possibles
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/></svg>
            </Link>
          </div>

          <div className="flex items-stretch gap-0 mt-9 pt-7 border-t border-black/10">
            <div className="flex-1 flex items-center gap-2.5 pr-5 border-r border-black/10 mr-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-brand-gold flex-shrink-0">
                <circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="9"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>
              </svg>
              <p className="text-[13px] leading-[1.4] text-brand-slate/60 font-medium font-sans">Vision plus claire<br/>des étapes.</p>
            </div>
            <div className="flex-1 flex items-center gap-2.5 pr-5 border-r border-black/10 mr-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-brand-gold flex-shrink-0">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              <p className="text-[13px] leading-[1.4] text-brand-slate/60 font-medium font-sans">Orientation adaptée<br/>à votre situation.</p>
            </div>
            <div className="flex-1 flex items-center gap-2.5 pr-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-brand-gold flex-shrink-0">
                <path d="M3 17l4-8 4 6 3-4 4 6"/><path d="M3 20h18"/>
              </svg>
              <p className="text-[13px] leading-[1.4] text-brand-slate/60 font-medium font-sans">Progression<br/>structurée.</p>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative overflow-hidden hidden lg:block" aria-hidden="true">
          <Image 
            src="/assets/heroes/hero-01-home-dialogum+.png" 
            alt="Ingénierie de parcours Dialogum" 
            fill 
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center grayscale-[0.2] contrast-[1.05] opacity-95 transition-transform duration-1000 hover:scale-105"
            priority
          />
          {/* Overlay gradient for text readability and premium fade effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-brand-beige)_0%,rgba(248,244,236,0.3)_20%,transparent_40%)]"></div>
          {/* subtle dark gradient at bottom for potential text */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/40 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-brand-slate py-4.5 px-8" role="complementary" aria-label="Garanties">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border-[1.5px] border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-brand-gold">
                <path d="M12 2L4 6v6c0 5.4 3.4 10.4 8 12 4.6-1.6 8-6.6 8-12V6l-8-4z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-sans text-[13px] font-semibold text-white">Système sécurisé</h4>
              <p className="text-[12px] text-white/55">Données protégées</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border-[1.5px] border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-brand-gold">
                <circle cx="12" cy="8" r="4"/><circle cx="8" cy="16" r="3"/><circle cx="16" cy="16" r="3"/>
              </svg>
            </div>
            <div>
              <h4 className="font-sans text-[13px] font-semibold text-white">Parcours structurés</h4>
              <p className="text-[12px] text-white/55">Méthodologie claire</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border-[1.5px] border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-brand-gold">
                <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/><path d="M8 12l3 3 5-5"/>
              </svg>
            </div>
            <div>
              <h4 className="font-sans text-[13px] font-semibold text-white">Accompagnement humain</h4>
              <p className="text-[12px] text-white/55">À chaque étape</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border-[1.5px] border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-brand-gold">
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
