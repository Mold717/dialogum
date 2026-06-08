'use client';

import Image from 'next/image';

const PARCOURS_LINKS = [
  { name: 'Emploi Allemagne' },
  { name: 'Ausbildung' },
  { name: 'Études Allemagne' },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 w-full z-50 pt-0 pb-1 px-6 lg:px-[5%] transition-standard">

      <nav className="flex justify-end items-center py-3 w-full gap-12">
          
          {/* Left: Brand Identity - Not clickable */}
          <div className="flex items-center gap-4 group transition-standard mr-auto cursor-default">
            <Image 
              src="/assets/logos/signature-marque-Dialogum-horizontale-transparent.png" 
              alt="Dialogum Logo" 
              width={180} 
              height={45} 
              className="object-contain"
              priority
            />
          </div>

          {/* Center: Desktop Navigation - Not clickable */}
          <ul className="hidden lg:flex items-center gap-12 list-none">
            <li className="relative group">
              <span className="text-brand-slate/60 font-heading font-bold text-[15px] uppercase tracking-[0.3em] flex items-center gap-2 cursor-default">
                Parcours
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </li>
            <li><span className="text-brand-slate/60 font-heading font-bold text-[15px] uppercase tracking-[0.3em] cursor-default">Pipeline</span></li>
            <li><span className="text-brand-slate/60 font-heading font-bold text-[15px] uppercase tracking-[0.3em] cursor-default">À propos</span></li>
          </ul>

          {/* Right: Primary CTA - Not clickable */}
          <div className="flex items-center gap-6">
            <span 
              className="hidden sm:block bg-brand-red/80 text-white px-8 py-4 text-[10px] font-sans font-bold uppercase tracking-[0.3em] shadow-soft rounded-[10%] cursor-default"
            >
              Évaluer Situation
            </span>
            
            <div className="lg:hidden p-2 text-brand-slate/50 cursor-default">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
          </div>
        </nav>
    </header>
  );
}
