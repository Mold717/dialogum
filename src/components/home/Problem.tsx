'use client';

export default function Problem() {
  return (
    <section className="bg-brand-beige/20 py-24 md:py-32 relative overflow-hidden" aria-labelledby="problem-heading">
      <div className="absolute top-[-40px] left-[-60px] w-80 h-82 rounded-full border-[50px] border-brand-gold/5 pointer-events-none"></div>
      
      <div className="max-w-[1140px] mx-auto px-6 relative z-10 animate-entrance">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-10 h-0.5 bg-brand-red/30"></span>
          <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
          <span className="w-10 h-0.5 bg-brand-red/30"></span>
        </div>

        <h2 id="problem-heading" className="font-serif text-3xl md:text-5xl text-center leading-[1.2] mb-10 text-brand-slate tracking-tight">
          Vous avez peut-être déjà essayé d'avancer…<br />
          <span className="text-brand-red italic opacity-90 block mt-2">sans réellement savoir par où commencer.</span>
        </h2>

        <div className="max-w-[720px] mx-auto text-center mb-16 space-y-6">
          <p className="text-lg leading-relaxed text-brand-slate/60 font-sans">
            Au début, beaucoup de candidats pensent que le plus difficile sera <strong className="text-brand-slate font-bold">la langue, les démarches ou les documents.</strong>
          </p>

          <p className="text-lg leading-relaxed text-brand-slate/60 font-sans">
            Mais avec le temps, le vrai problème devient souvent plus mental. Vous commencez à ressentir une <strong className="text-brand-slate font-bold">confusion permanente</strong>, trop d'informations contradictoires, des <strong className="text-brand-slate font-bold">hésitations</strong>, une difficulté à vous projeter.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto bg-white border border-brand-beige border-l-4 border-l-brand-red rounded-sm p-8 md:p-10 flex items-start gap-6 shadow-pro-max group hover:border-brand-red/20 transition-standard" role="alert">
          <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0 font-serif shadow-soft group-hover:scale-110 transition-standard" aria-hidden="true">!</div>
          <p className="text-[16px] leading-relaxed text-brand-slate/70 font-sans">
            Plus le temps passe, plus les décisions deviennent difficiles, plus le <span className="text-brand-red font-bold underline underline-offset-4 decoration-brand-red/20">projet paraît lourd</span>, et <strong className="text-brand-slate">plus vous avez peur de perdre encore <span className="text-brand-gold italic">plusieurs mois... ou plusieurs années.</span></strong>
          </p>
        </div>
      </div>
    </section>
  );
}
