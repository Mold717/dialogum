'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroBoxed() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden animate-entrance font-sans">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* EXPANSIVE GRID WITHOUT BOX CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] gap-12 lg:gap-24 items-center">
          
          {/* Visual & Quote — Top on Mobile, Rounded explicitly */}
          <div className="relative min-h-[350px] md:min-h-[500px] overflow-hidden bg-brand-beige lg:order-last group rounded-[2.5rem] shadow-institutional border border-black/5">
            <Image 
              src="/assets/heroes/hero-01-home-dialogum+.png" 
              alt="" 
              fill 
              className="object-cover grayscale-[0.2] contrast-[1.1] opacity-95 transition-standard group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-brand-slate/10 mix-blend-multiply"></div>
            
            {/* Institutional Quote Overlay */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 glass-pro-max p-6 md:p-10 rounded-2xl max-w-[240px] md:max-w-sm animate-entrance shadow-institutional border border-white/20" style={{ animationDelay: '0.6s' }}>
              <div className="flex gap-3 md:gap-4 items-start">
                <span className="text-4xl md:text-5xl font-serif text-brand-red leading-none flex-shrink-0 mt-[-2px] md:mt-[-4px]">“</span>
                <div>
                  <p className="text-base md:text-xl font-heading font-bold text-brand-slate leading-tight mb-4 md:mb-6">
                    Ce n'est pas juste un départ. C'est une <span className="text-brand-red italic underline underline-offset-8 decoration-1 opacity-90">trajectoire</span>.
                  </p>
                  <div className="w-8 md:w-12 h-1 bg-brand-gold"></div>
                </div>
              </div>
            </div>

            {/* Bottom detail */}
            <div className="absolute bottom-6 right-8 text-right hidden md:block">
               <p className="text-[10px] font-heading font-bold text-white/50 uppercase tracking-[0.5em] italic leading-loose">
                 Pflege heute<br />
                 Deutsch für die Pflege<br />
                 Anatomie und Physiologie
               </p>
            </div>
          </div>

          {/* Editorial Content — Bottom on Mobile */}
          <div className="flex flex-col justify-center animate-entrance">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-slate uppercase leading-[1.05] mb-10 tracking-tighter text-balance">
              Du flou à la clarté. De l’hésitation à la <span className="text-brand-red">trajectoire.</span>
            </h1>
            
            <p className="text-[15px] md:text-[18px] text-brand-slate/60 font-medium mb-14 max-w-xl leading-relaxed">
              Dialogum transforme une situation confuse en un projet structuré, compréhensible et crédible vers l'Allemagne.
            </p>
            
            {/* STRICT HORIZONTAL FEATURES */}
            <div className="flex flex-row items-start justify-between w-full mb-14 border-b border-black/5 pb-14 gap-2">
              {[
                { label: "Clarté", icon: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" },
                { label: "Orientation", icon: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" },
                { label: "Progression", icon: "M23 6l-9.5 9.5l-5-5L1 18M17 6h6v6" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 text-center flex-1">
                  <svg className="w-7 h-7 md:w-10 md:h-10 text-brand-slate opacity-80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="text-[8px] md:text-[10px] font-sans font-bold uppercase tracking-[0.1em] md:tracking-[0.3em] text-brand-slate/40 whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/contact" 
                className="px-12 py-6 bg-brand-red text-white text-[11px] font-sans font-bold uppercase tracking-[0.4em] rounded-2xl shadow-pro-max hover:bg-brand-slate transition-standard text-center"
              >
                Évaluer Situation
              </Link>
              <Link 
                href="/contact" 
                className="px-12 py-6 bg-white text-brand-slate border border-black/5 text-[11px] font-sans font-bold uppercase tracking-[0.4em] rounded-2xl shadow-soft hover:bg-brand-beige transition-standard text-center"
              >
                Parler avec l'équipe
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
