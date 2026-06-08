'use client';

export default function Clarity() {
  return (
    <section className="bg-brand-slate py-20 md:py-28 relative overflow-hidden text-center" aria-labelledby="clarity-heading">
      {/* Decorative Circles — PDF Style */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full border border-brand-gold/20 pointer-events-none opacity-40"></div>
      <div className="absolute bottom-[-80px] right-[-60px] w-[300px] h-[300px] rounded-full border border-brand-gold/20 pointer-events-none opacity-40"></div>

      {/* Decorative Dot Patterns */}
      {[
        { pos: "top-16 left-16", id: "dots-tl" },
        { pos: "top-16 right-16", id: "dots-tr" },
        { pos: "bottom-16 left-16", id: "dots-bl" },
        { pos: "bottom-16 right-16", id: "dots-br" }
      ].map((dot, i) => (
        <svg key={i} className={`absolute w-20 h-20 opacity-30 ${dot.pos} pointer-events-none`} viewBox="0 0 80 80">
          <pattern id={dot.id} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#C89B3C"/>
          </pattern>
          <rect width="80" height="80" fill={`url(#${dot.id})`}/>
        </svg>
      ))}

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <h2 id="clarity-heading" className="text-white font-serif text-[clamp(28px,4vw,52px)] max-w-[760px] mx-auto leading-[1.18] mb-7 animate-entrance tracking-tight">
          Quand votre projet devient <em className="italic text-brand-gold">plus clair,</em> tout devient plus simple mentalement.
        </h2>

        <p className="text-white/75 text-[17px] max-w-[640px] mx-auto mb-5 leading-[1.65] font-sans animate-entrance font-normal">
          Quand vous comprenez enfin quelles possibilités correspondent réellement à votre situation, quelles étapes viennent ensuite, et comment avancer progressivement, vous commencez à ressentir quelque chose que beaucoup de candidats perdent avec le temps :
        </p>

        <div className="flex flex-col items-center mb-6 animate-entrance" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="block h-px w-20 bg-brand-gold/50"></span>
            <span className="block h-px w-20 bg-brand-gold/50"></span>
          </div>
          <div className="font-serif italic text-[clamp(52px,8vw,96px)] text-brand-gold leading-none">
            la visibilité.
          </div>
        </div>

        <p className="text-white/70 text-[16px] max-w-[560px] mx-auto mb-4 leading-[1.65] font-sans animate-entrance font-normal">
          Et cette visibilité change énormément de choses : les décisions deviennent plus simples, le stress baisse, l&apos;avenir paraît plus accessible, et vous recommencez à avancer avec davantage de confiance.
        </p>

        <div className="w-9 h-9 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mt-6 animate-bounce cursor-pointer hover:border-brand-gold/60 transition-standard">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>
    </section>
  );
}
