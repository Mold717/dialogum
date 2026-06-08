'use client';

export default function Clarity() {
  return (
    <section className="bg-brand-slate py-24 md:py-40 relative overflow-hidden text-center" aria-labelledby="clarity-heading">
      {/* Decorative Dots — PDF Style */}
      {[
        { pos: "top-10 left-10", id: "dots-tl" },
        { pos: "top-10 right-10", id: "dots-tr" },
        { pos: "bottom-10 left-10", id: "dots-bl" },
        { pos: "bottom-10 right-10", id: "dots-br" }
      ].map((dot, i) => (
        <svg key={i} className={`absolute w-32 h-32 opacity-10 ${dot.pos} pointer-events-none`} viewBox="0 0 80 80">
          <pattern id={dot.id} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="rgba(201,155,60,0.5)"/>
          </pattern>
          <rect width="80" height="80" fill={`url(#${dot.id})`}/>
        </svg>
      ))}

      <div className="section-container relative z-10">
        <div className="flex items-center justify-center gap-3 mb-10 animate-entrance">
          <span className="w-10 h-0.5 bg-brand-red"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-brand-gold"></span>
          <span className="w-10 h-0.5 bg-brand-red"></span>
        </div>

        <h2 id="clarity-heading" className="text-white font-serif text-3xl md:text-5xl lg:text-7xl max-w-4xl mx-auto leading-[1.1] mb-12 animate-entrance tracking-tight" style={{ animationDelay: '0.1s' }}>
          Quand votre projet devient <span className="text-brand-gold italic">plus clair,</span><br />
          tout devient plus simple mentalement.
        </h2>

        <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed font-sans animate-entrance font-medium" style={{ animationDelay: '0.2s' }}>
          Quand vous comprenez enfin quelles possibilités correspondent réellement à votre situation, quelles étapes viennent ensuite, et comment avancer progressivement, vous commencez à ressentir quelque chose que beaucoup de candidats perdent avec le temps :
        </p>

        <div className="flex items-center justify-center gap-10 md:gap-16 mb-16 animate-entrance" style={{ animationDelay: '0.3s' }}>
          <span className="block h-px w-24 bg-brand-gold/30"></span>
          <div className="font-serif italic text-7xl md:text-9xl lg:text-[10rem] text-brand-gold leading-none drop-shadow-2xl">la visibilité.</div>
          <span className="block h-px w-24 bg-brand-gold/30"></span>
        </div>

        <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto mb-20 leading-relaxed animate-entrance font-medium" style={{ animationDelay: '0.4s' }}>
          Et cette visibilité change énormément de choses : les décisions deviennent plus simples, le stress baisse, l'avenir paraît plus accessible, et vous recommencez à avancer avec davantage de confiance.
        </p>

        <div className="w-10 h-10 border-2 border-white/20 rounded-full flex items-center justify-center mx-auto mt-12 animate-bounce cursor-pointer hover:border-brand-gold transition-standard">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>
    </section>
  );
}
