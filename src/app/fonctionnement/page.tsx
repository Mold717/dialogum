import Image from 'next/image';
import Link from 'next/link';

export default function FonctionnementPage() {
  return (
    <div className="bg-brand-white relative min-h-screen">
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 bg-mesh-gradient opacity-30 pointer-events-none -z-10"></div>
      <div className="fixed inset-0 bg-dot-pattern opacity-20 pointer-events-none -z-10"></div>

      {/* HERO SECTION — EDITORIAL */}
      <section className="relative pt-48 pb-20 md:pt-60 md:pb-40 overflow-hidden">
        <div className="section-container relative z-10 animate-entrance">
          <div className="max-w-4xl">
            <div className="mb-10 inline-flex items-center gap-4 px-4 py-1 bg-brand-slate text-white rounded-full">
              <span className="text-[9px] font-sans font-bold uppercase tracking-[0.4em]">Le Pipeline Dialogum</span>
            </div>
            <h1 className="text-5xl md:text-8xl heading-pro-max mb-12">
              L'Ingénierie <br /> <span className="text-brand-red italic">en six phases.</span>
            </h1>
            <p className="body-institutional text-xl max-w-2xl mb-12">
              Nous neutralisons l'incertitude par une progression certifiée. Chaque étape du pipeline Dialogum est un palier de validation pour votre projet institutionnel.
            </p>
          </div>
        </div>
      </section>

      {/* BENTO GRID PIPELINE */}
      <section className="py-24 md:py-40 bg-brand-beige/10">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[1400px] md:grid-rows-3">
            
            {/* Phase 01 */}
            <div className="md:col-span-4 bento-card group p-12 flex flex-col justify-between">
              <span className="text-4xl font-heading font-bold text-brand-red opacity-20">01</span>
              <div>
                <h3 className="text-xl font-sans font-bold uppercase tracking-widest text-brand-slate mb-6">Diagnostic & <br /> Qualification.</h3>
                <p className="body-institutional text-sm">Audit approfondi de votre situation actuelle et identification des trajectoires institutionnelles compatibles.</p>
              </div>
            </div>

            {/* Phase 02 */}
            <div className="md:col-span-8 bento-card group p-12 md:p-20 relative overflow-hidden bg-white">
               <div className="absolute top-0 right-0 w-2/3 h-full opacity-5 pointer-events-none">
                 <Image src="/assets/backgrounds/brand-marks.png" alt="" fill className="object-cover" />
               </div>
               <span className="text-4xl font-heading font-bold text-brand-slate opacity-10">02</span>
               <div className="relative z-10 mt-12">
                 <h3 className="text-2xl md:text-4xl font-sans font-bold uppercase tracking-widest text-brand-slate mb-8">Ingénierie <br /> de Dossier.</h3>
                 <p className="body-institutional text-lg max-w-md">Structuration méthodique des preuves de compétences et des garanties administratives nécessaires à l'excellence.</p>
               </div>
            </div>

            {/* Phase 03 */}
            <div className="md:col-span-8 bento-card group p-12 md:p-20 bg-brand-slate text-white flex flex-col justify-center">
               <span className="text-4xl font-heading font-bold text-white opacity-10 mb-12">03</span>
               <h3 className="text-2xl md:text-4xl font-sans font-bold uppercase tracking-widest text-brand-gold mb-8">Matching <br /> Stratégique.</h3>
               <p className="text-white/50 font-sans text-lg max-w-md">Alignement de haute précision entre vos objectifs de long terme et les opportunités institutionnelles validées.</p>
            </div>

            {/* Phase 04 */}
            <div className="md:col-span-4 bento-card group p-12 flex flex-col justify-between bg-brand-white border-brand-red/20">
              <span className="text-4xl font-heading font-bold text-brand-red opacity-40">04</span>
              <div>
                <h3 className="text-xl font-sans font-bold uppercase tracking-widest text-brand-slate mb-6">Audit de <br /> Conformité.</h3>
                <p className="body-institutional text-sm">Validation finale par notre conseil d'experts pour garantir une sécurisation totale avant le déploiement.</p>
              </div>
            </div>

            {/* Phase 05 */}
            <div className="md:col-span-4 bento-card group p-12 flex flex-col justify-between bg-white shadow-soft">
              <span className="text-4xl font-heading font-bold text-brand-gold opacity-30">05</span>
              <div>
                <h3 className="text-xl font-sans font-bold uppercase tracking-widest text-brand-slate mb-6">Logistique de <br /> Transition.</h3>
                <p className="body-institutional text-sm">Accompagnement opérationnel pour le passage vers l'Allemagne et gestion des flux d'intégration.</p>
              </div>
            </div>

            {/* Phase 06 */}
            <div className="md:col-span-8 bento-card group p-12 md:p-20 relative overflow-hidden bg-brand-gold">
               <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <Image src="/assets/backgrounds/accent-elements.png" alt="" fill className="object-contain invert -rotate-12" />
               </div>
               <span className="text-4xl font-heading font-bold text-white opacity-20">06</span>
               <div className="relative z-10 mt-12">
                 <h3 className="text-2xl md:text-4xl font-sans font-bold uppercase tracking-widest text-white mb-8">Excellence <br /> d'Intégration.</h3>
                 <p className="text-white/80 font-sans text-lg max-w-md">Suivi de stabilisation institutionnelle pour certifier la pérennité de votre trajectoire de vie en Allemagne.</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-48 bg-white relative overflow-hidden">
        <div className="section-container relative z-10 text-center animate-entrance">
          <h2 className="text-4xl md:text-7xl heading-pro-max text-brand-slate mb-16">Plus de clarté, <br /> <span className="text-brand-red italic">moins d'incertitude.</span></h2>
          <Link href="/contact" className="button-institutional bg-brand-red text-white rounded-2xl shadow-pro-max inline-block">Certifier ma Trajectoire</Link>
        </div>
      </section>
    </div>
  );
}
