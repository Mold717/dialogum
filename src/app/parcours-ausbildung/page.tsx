import Image from 'next/image';
import Link from 'next/link';

export default function AusbildungPage() {
  return (
    <div className="bg-brand-white relative min-h-screen">
      <div className="fixed inset-0 bg-mesh-gradient opacity-30 pointer-events-none -z-10"></div>
      <div className="fixed inset-0 bg-dot-pattern opacity-20 pointer-events-none -z-10"></div>

      <section className="relative pt-48 pb-20 md:pt-60 md:pb-40 overflow-hidden animate-entrance">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="lg:w-2/3">
              <div className="mb-8 inline-flex items-center gap-4 px-4 py-1 bg-brand-gold text-white rounded-full shadow-soft">
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.4em]">Excellence Ausbildung</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl heading-pro-max mb-10">
                Un métier d'État, <br /> <span className="text-brand-gold italic">un avenir sécurisé.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-slate/60 font-medium max-w-xl leading-relaxed mb-12 font-sans">
                Accédez au système de formation duale le plus performant au monde avec la garantie Dialogum.
              </p>
              <div className="flex gap-8">
                <Link href="/contact" className="button-institutional bg-brand-red text-white rounded-2xl shadow-pro-max">Évaluer Situation</Link>
                <Link href="#details" className="button-institutional bg-white border border-black/5 rounded-2xl shadow-soft">Filières d'Excellence</Link>
              </div>
            </div>
            
            <div className="lg:w-1/3">
               <div className="relative bento-card p-4 aspect-[4/5] overflow-hidden bg-white/40 border-white/60 shadow-institutional">
                 <Image 
                   src="/assets/heroes/hero-03-parcours-ausbildung+.png" 
                   alt="" 
                   fill 
                   sizes="(max-width: 1024px) 100vw, 400px"
                   className="object-cover grayscale group-hover:grayscale-0 transition-standard" 
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="py-32 md:py-48 bg-brand-beige/10">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bento-card p-12 bg-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl"></div>
               <h3 className="text-2xl md:text-4xl font-sans font-bold uppercase tracking-widest text-brand-slate mb-8">Indépendance <br /> Immédiate.</h3>
               <p className="body-institutional text-lg max-w-md font-sans">Formation rémunérée dès le premier jour, certifiée par l'État fédéral allemand.</p>
            </div>
            <div className="md:col-span-4 bento-card p-12 bg-brand-slate text-white flex flex-col justify-between">
              <h3 className="text-xl font-sans font-bold uppercase tracking-widest text-brand-gold">Certification.</h3>
              <p className="text-white/40 text-sm font-sans">Diplôme d'État reconnu internationalement.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
