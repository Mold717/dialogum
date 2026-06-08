import Image from 'next/image';
import Link from 'next/link';

export default function EmploiPage() {
  return (
    <div className="bg-brand-white relative min-h-screen">
      <div className="fixed inset-0 bg-mesh-gradient opacity-30 pointer-events-none -z-10"></div>
      <div className="fixed inset-0 bg-dot-pattern opacity-20 pointer-events-none -z-10"></div>

      <section className="relative pt-48 pb-20 md:pt-60 md:pb-40 overflow-hidden animate-entrance">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-2/3">
              <div className="mb-8 inline-flex items-center gap-4 px-4 py-1 bg-brand-red text-white rounded-full shadow-soft">
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.4em]">Expertise Emploi</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl heading-pro-max mb-10">
                Votre carrière, <br /> <span className="text-brand-red italic">optimisée.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-slate/60 font-medium max-w-xl leading-relaxed mb-12 font-sans">
                Dialogum certifie votre trajectoire pour une intégration institutionnelle réussie sur le marché allemand.
              </p>
              <div className="flex gap-8">
                <Link href="/contact" className="button-institutional bg-brand-red text-white rounded-2xl shadow-pro-max">Évaluer Situation</Link>
                <Link href="#details" className="button-institutional bg-white border border-black/5 rounded-2xl shadow-soft">Audit de Risques</Link>
              </div>
            </div>
            
            <div className="lg:w-1/3">
               <div className="relative bento-card p-4 aspect-[4/5] overflow-hidden bg-white/40 border-white/60 shadow-institutional">
                 <Image 
                   src="/assets/heroes/hero-02-parcours-emploi+.png" 
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
            <div className="md:col-span-4 bento-card p-12 min-h-[300px] flex flex-col justify-between">
              <h3 className="text-xl font-sans font-bold uppercase tracking-widest text-brand-red">Visibilité.</h3>
              <p className="text-[15px] text-brand-slate/60 font-medium leading-relaxed">Cartographie complète de vos paliers de progression pour une trajectoire sans angles morts.</p>
            </div>
            <div className="md:col-span-8 bento-card p-12 bg-brand-slate text-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none">
                 <Image src="/assets/backgrounds/accent-elements.png" alt="" fill className="object-contain invert" />
               </div>
               <div className="relative z-10">
                 <h3 className="text-2xl md:text-4xl font-sans font-bold uppercase tracking-widest text-white mb-6">Certification <br /> Trajectoire.</h3>
                 <p className="text-white/40 text-base max-w-md font-sans">Audit stratégique de chaque étape de votre parcours pour une conformité totale.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
