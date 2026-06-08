import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-bg pt-20 pb-10 border-t border-white/5 font-sans" role="contentinfo">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          
          {/* Brand */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M3 3h7v7H3zM3 14h7v7H3zM14 3h7v7h-7z"/></svg>
              </div>
              <div className="leading-none">
                <h2 className="font-serif text-xl font-bold text-white tracking-widest">DIALOGUM</h2>
                <p className="text-[9px] text-white/40 tracking-[1.5px] uppercase mt-1">Le parcours clair vers l'Allemagne</p>
              </div>
            </div>
            <p className="text-[14px] text-white/55 leading-relaxed mb-6 max-w-sm">
              Dialogum aide les candidats à clarifier leur situation, structurer leur progression et avancer plus sereinement vers l'Allemagne.
            </p>
            <p className="text-[14px] text-white/55 italic">
              Clarté, préparation et accompagnement à chaque étape du parcours.
            </p>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-8">Parcours</p>
            <ul className="space-y-1 list-none">
              {['Emploi Allemagne', 'Ausbildung', 'Études Allemagne', 'Fonctionnement', 'FAQ', 'Contact'].map(name => (
                <li key={name} className="border-b border-white/5 last:border-0">
                  <Link href="#" className="flex items-center justify-between py-3 text-white/70 hover:text-gold transition-colors text-[14px]">
                    {name}
                    <svg className="w-3.5 h-3.5 opacity-50" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Util links */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-8">Utile</p>
            <ul className="space-y-4 list-none">
              {[
                { title: 'Comprendre les parcours', desc: 'Informations claires et à jour', icon: 'M4 19.5A2.5 2.5 0 016.5 17H20' },
                { title: 'Évaluer ma situation', desc: 'Réponse personnalisée sous 24h', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
                { title: 'Parler avec l\'équipe', desc: 'Des conseillers à votre écoute', icon: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' }
              ].map(link => (
                <li key={link.title}>
                  <Link href="#" className="flex items-start gap-4 group">
                    <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={link.icon} /></svg>
                    </div>
                    <div>
                      <h4 className="text-[13.5px] font-semibold text-white/85 mb-1 transition-colors group-hover:text-gold">{link.title}</h4>
                      <p className="text-[12px] text-white/40">{link.desc}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-[12.5px] text-white/45">
            <Link href="#" className="hover:text-white/80 transition-colors">Mentions légales</Link>
            <span className="text-white/20">|</span>
            <Link href="#" className="hover:text-white/80 transition-colors">CGU</Link>
            <span className="text-white/20">|</span>
            <Link href="#" className="hover:text-white/80 transition-colors">Confidentialité</Link>
          </div>

          <p className="text-[12.5px] text-white/40">
            © 2026 Dialogum — <Link href="#" className="text-gold">Le parcours clair vers l'Allemagne.</Link>
          </p>

          <div className="flex items-center gap-3">
             {['Li', 'Wa', 'Fb', 'Ig'].map(net => (
               <Link key={net} href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-white/10 hover:border-white/25 transition-all text-[10px] font-bold uppercase">
                 {net}
               </Link>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
