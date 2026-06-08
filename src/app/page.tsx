import Hero from '@/components/home/Hero';
import Problem from '@/components/home/Problem';
import Situations from '@/components/home/Situations';
import Clarity from '@/components/home/Clarity';
import Pipeline from '@/components/home/Pipeline';
import FAQ from '@/components/home/FAQ';
import Info from '@/components/home/Info';
import FinalCTA from '@/components/home/FinalCTA';
import TrustQuote from '@/components/home/TrustQuote';

export default function Home() {
  return (
    <div className="bg-brand-white relative min-h-screen">
      {/* GLOBAL MESH & PATTERN LAYER */}
      <div className="fixed inset-0 bg-mesh-gradient opacity-30 pointer-events-none -z-10"></div>
      <div className="fixed inset-0 bg-dot-pattern opacity-20 pointer-events-none -z-10"></div>

      <div className="relative z-10 flex flex-col">
        <Hero />
        <Problem />
        <Situations />
        <Clarity />
        <Pipeline />
        <FAQ />
        <Info />
        <FinalCTA />
        <TrustQuote />
      </div>
    </div>
  );
}
