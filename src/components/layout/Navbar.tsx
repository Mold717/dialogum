'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const PARCOURS_LINKS = [
  { name: 'Emploi Allemagne', href: '/parcours-emploi' },
  { name: 'Ausbildung', href: '/parcours-ausbildung' },
  { name: 'Études Allemagne', href: '/parcours-etudes' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isParcoursOpen, setIsParcoursOpen] = useState(false);

  return (
    <header className="absolute w-full z-50 pt-[25px] pb-1 px-6 lg:px-[5%] transition-standard">
      <nav className="flex justify-end items-center py-3 w-full gap-12">
          
          {/* Left: Brand Identity from PDF */}
          <Link href="/" className="flex items-center gap-4 group transition-standard mr-auto">
            <Image 
              src="/assets/logos/signature-marque-Dialogum-horizontale-transparent.png" 
              alt="Dialogum Logo" 
              width={180} 
              height={45} 
              className="object-contain"
              priority
            />
          </Link>

          {/* Center: Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-12 list-none">
            <li className="relative group">
              <button 
                onMouseEnter={() => setIsParcoursOpen(true)}
                onMouseLeave={() => setIsParcoursOpen(false)}
                className="text-brand-slate/60 hover:text-brand-red transition-standard font-heading font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-2"
              >
                Parcours
                <svg className={`w-2.5 h-2.5 transition-transform duration-500 ${isParcoursOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                onMouseEnter={() => setIsParcoursOpen(true)}
                onMouseLeave={() => setIsParcoursOpen(false)}
                className={`absolute left-[-20px] mt-6 w-64 bg-white/95 backdrop-blur-xl shadow-pro-max border border-black/5 rounded-sm transition-standard ${isParcoursOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
              >
                {PARCOURS_LINKS.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className="block px-8 py-5 text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-brand-slate/50 hover:bg-brand-beige hover:text-brand-red transition-colors border-b border-black/5 last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </li>
            <li><Link href="/fonctionnement" className="text-brand-slate/60 hover:text-brand-red transition-standard font-heading font-bold text-[10px] uppercase tracking-[0.3em]">Pipeline</Link></li>
            <li><Link href="/contact" className="text-brand-slate/60 hover:text-brand-red transition-standard font-heading font-bold text-[10px] uppercase tracking-[0.3em]">À propos</Link></li>
          </ul>

          {/* Right: Primary CTA */}
          <div className="flex items-center gap-6">
            <Link 
              href="/contact" 
              className="hidden sm:block bg-brand-red text-white px-8 py-4 text-[10px] font-sans font-bold uppercase tracking-[0.3em] hover:bg-brand-slate transition-standard shadow-soft rounded-[10%]"
            >
              Évaluer Situation
            </Link>
            
            <button className="lg:hidden p-2 text-brand-slate" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full px-6 transition-standard">
          <div className="bg-white/95 backdrop-blur-3xl shadow-pro-max border border-black/5 rounded-sm p-8 flex flex-col space-y-8 animate-entrance">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[12px] font-sans font-bold uppercase tracking-widest text-brand-slate border-b border-black/5 pb-4">Accueil</Link>
            {PARCOURS_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[12px] font-sans font-bold uppercase tracking-widest text-brand-slate border-b border-black/5 pb-4">{link.name}</Link>
            ))}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-brand-red text-white py-5 text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-center rounded-sm">Évaluer ma situation</Link>
          </div>
        </div>
      )}
    </header>
  );
}
