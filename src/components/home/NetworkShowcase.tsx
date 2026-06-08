'use client';

import Image from 'next/image';

const NETWORK = [
  { label: "Universités", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" },
  { label: "Centres techniques", icon: "M2 3h20v14H2z M8 21h8 M12 17v4" },
  { label: "Hôpitaux", icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
  { label: "Entreprises industrielles", icon: "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2 M2 7h20v14H2z" },
  { label: "Institutions publiques", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
  { label: "Entreprises services", icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
];

const CIBLES = [
  { title: "Personnel Médical", desc: "Infirmiers et spécialistes.", icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
  { title: "Étudiants", desc: "Cursus Uni & Ausbildung.", icon: "M22 10v6M2 10l10-5 10 5-10 5z" },
  { title: "Mobilité Pro", desc: "Conversions & Évolution.", icon: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" },
];

export default function NetworkShowcase() {
  return (
    <section className="py-24 md:py-40 bg-brand-slate text-white relative overflow-hidden">
      {/* Background Mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <Image src="/assets/backgrounds/brand-marks.png" alt="" fill className="object-cover" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Network Area */}
          <div className="lg:col-span-8">
            <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-white/40 mb-12">Notre réseau institutionnel</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {NETWORK.map((item, i) => (
                <div key={i} className="bento-card bg-white/5 border-white/5 group p-8 min-h-[160px] flex flex-col justify-between animate-entrance" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-gold/20 transition-standard">
                    <svg className="w-6 h-6 text-white/40 group-hover:text-brand-gold transition-standard" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/60 leading-tight group-hover:text-white transition-standard">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cibles Sidebar */}
          <div className="lg:col-span-4 bg-white/5 backdrop-blur-xl border border-white/5 rounded-3xl p-10 md:p-14 animate-entrance" style={{ animationDelay: '0.4s' }}>
             <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-brand-gold mb-12">Nos cibles prioritaires</h4>
             <div className="space-y-10">
                {CIBLES.map((c, i) => (
                  <div key={i} className="flex gap-6 group">
                     <svg className="w-6 h-6 text-brand-red opacity-50 group-hover:opacity-100 transition-standard mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                     </svg>
                     <div>
                        <strong className="block text-[13px] font-sans font-bold uppercase tracking-widest text-white mb-2">{c.title}</strong>
                        <p className="text-[12px] text-white/40 font-medium">{c.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
             
             <div className="mt-16 pt-10 border-t border-white/5">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-gold mb-6">Nos principes</h4>
                <ul className="space-y-4">
                  {["Accès conditionné", "Progression séquencée", "Excellence d'État"].map((p, i) => (
                    <li key={i} className="flex items-center gap-3 text-[10px] font-sans font-bold uppercase tracking-widest text-white/30">
                       <div className="w-1 h-1 bg-brand-red rounded-full"></div>
                       {p}
                    </li>
                  ))}
                </ul>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
