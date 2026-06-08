'use client';

export default function Problem() {
  return (
    <section className="bg-brand-white py-24 md:py-32 relative overflow-hidden" aria-labelledby="problem-heading">
      {/* Decorative background element */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full border border-brand-gold/10 pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10 animate-entrance">
        <h2 id="problem-heading" className="font-serif text-[clamp(28px,3.5vw,44px)] text-center leading-[1.2] mb-10 text-brand-slate tracking-tight">
          Vous avez peut-être déjà essayé d&apos;avancer…<br />
          <span className="text-brand-red italic block mt-2">sans réellement savoir par où commencer.</span>
        </h2>

        <div className="max-w-[680px] mx-auto text-center mb-10 space-y-6">
          <p className="text-[16px] leading-[1.7] text-brand-slate/70 font-sans">
            Au début, beaucoup de candidats pensent que le plus difficile sera <strong className="text-brand-slate font-bold">la langue, les démarches ou les documents.</strong>
          </p>

          <p className="text-[16px] leading-[1.7] text-brand-slate/70 font-sans">
            Mais avec le temps, le vrai problème devient souvent plus mental. Vous commencez à ressentir une <strong className="text-brand-slate font-bold">confusion permanente</strong>, trop d&apos;informations contradictoires, des <strong className="text-brand-slate font-bold">hésitations</strong>, une difficulté à vous projeter.
          </p>
        </div>

        <div className="max-w-[680px] mx-auto bg-white border-2 border-black/5 border-l-[6px] border-l-brand-red rounded-sm p-6 md:p-8 flex items-start gap-5 shadow-sm group hover:border-brand-red/10 transition-standard" role="alert">
          <div className="w-[42px] h-[42px] bg-brand-red text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 font-serif shadow-soft group-hover:scale-110 transition-standard" aria-hidden="true">
            !
          </div>
          <p className="text-[15px] leading-[1.65] text-brand-slate/80 font-sans">
            Plus le temps passe, plus les décisions deviennent difficiles, plus le <span className="text-brand-red font-bold underline underline-offset-4 decoration-brand-red/20">projet paraît lourd</span>, et <strong className="text-brand-slate">plus vous avez peur de perdre encore <span className="text-brand-gold italic">plusieurs mois... ou plusieurs années.</span></strong>
          </p>
        </div>
      </div>
    </section>
  );
}
