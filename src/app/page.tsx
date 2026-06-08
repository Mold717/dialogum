import Hero from '@/components/home/Hero';

export default function Home() {
  return (
    <div className="bg-brand-white relative min-h-screen">
      {/* GLOBAL MESH & PATTERN LAYER */}
      <div className="fixed inset-0 bg-mesh-gradient opacity-30 pointer-events-none -z-10"></div>
      <div className="fixed inset-0 bg-dot-pattern opacity-20 pointer-events-none -z-10"></div>

      <div className="relative z-10 flex flex-col">
        <Hero />
      </div>
    </div>
  );
}
