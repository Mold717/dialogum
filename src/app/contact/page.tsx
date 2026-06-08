'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      age: formData.get('age'),
      country: formData.get('country'),
      pathway: formData.get('pathway'),
      situation: formData.get('situation'),
      message: formData.get('message'),
    };

    const { error } = await supabase.from('inquiries').insert([data]);

    if (error) {
      alert('Une erreur est survenue. Veuillez réessayer.');
      console.error(error);
    } else {
      setSubmitted(true);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-brand-white min-h-screen flex items-center justify-center pt-20 px-6 bg-mesh-gradient">
        <div className="max-w-2xl w-full text-center py-20 bento-card p-12 bg-white animate-entrance">
          <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-10">
            <svg className="w-10 h-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-sans font-bold uppercase tracking-[0.4em] text-brand-slate mb-8">Confirmation.</h1>
          <p className="body-institutional text-lg mb-16">
            Votre audit stratégique a été initié. Un expert Dialogum analysera vos données et vous contactera pour une première clarification institutionnelle.
          </p>
          <Link href="/" className="button-institutional bg-brand-slate text-white rounded-2xl shadow-pro-max">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-white min-h-screen pt-48 pb-24 md:pt-64 md:pb-40 relative overflow-hidden">
      {/* GLOBAL MESH GRADIENT */}
      <div className="fixed inset-0 bg-mesh-gradient opacity-30 pointer-events-none -z-10"></div>
      <div className="fixed inset-0 bg-dot-pattern opacity-20 pointer-events-none -z-10"></div>

      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Context Area */}
            <div className="lg:col-span-4 animate-entrance">
              <div className="mb-10 inline-flex items-center gap-4 px-4 py-1 bg-brand-red text-white rounded-full">
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.4em]">Audit Strategique</span>
              </div>
              <h1 className="text-4xl md:text-6xl heading-pro-max mb-12">
                Initiez votre <br /> <span className="text-brand-red italic">clarification.</span>
              </h1>
              <p className="body-institutional text-lg mb-12">
                Ce formulaire est la première brique de votre ingénierie de parcours. Répondez avec précision pour un audit institutionnel de haute qualité.
              </p>
              
              <div className="p-8 bento-card bg-brand-slate text-white mt-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                   <Image src="/assets/logos/Monogramme-dialogum-Final-transparent.png" alt="" fill className="object-contain invert" />
                </div>
                <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-gold mb-4">Garantie</h3>
                <p className="text-white/40 text-sm font-sans italic leading-relaxed">"Confidentialité institutionnelle totale garantie par le système Dialogum."</p>
              </div>
            </div>

            {/* Form Area — Bento Style */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="bento-card group p-10 md:p-16 bg-white/60 backdrop-blur-xl space-y-16 animate-entrance" style={{ animationDelay: '0.2s' }}>
                
                {/* ID Section */}
                <div className="space-y-10">
                   <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-brand-red border-b border-black/5 pb-4">01 / Identification</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-brand-slate/40">Identité Complète</label>
                        <input name="full_name" type="text" required className="w-full p-4 bg-black/[0.02] border-b border-black/10 focus:border-brand-red focus:outline-none transition-standard font-heading font-bold text-brand-slate" placeholder="Prénom & Nom" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-brand-slate/40">Age Réel</label>
                        <input name="age" type="number" required className="w-full p-4 bg-black/[0.02] border-b border-black/10 focus:border-brand-red focus:outline-none transition-standard font-heading font-bold text-brand-slate" placeholder="Age" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-brand-slate/40">Email de Contact</label>
                        <input name="email" type="email" required className="w-full p-4 bg-black/[0.02] border-b border-black/10 focus:border-brand-red focus:outline-none transition-standard font-heading font-bold text-brand-slate" placeholder="professionnel@email.com" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-brand-slate/40">WhatsApp Direct</label>
                        <input name="whatsapp" type="text" required className="w-full p-4 bg-black/[0.02] border-b border-black/10 focus:border-brand-red focus:outline-none transition-standard font-heading font-bold text-brand-slate" placeholder="+212 ..." />
                      </div>
                   </div>
                </div>

                {/* Situation Section */}
                <div className="space-y-10">
                   <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-brand-gold border-b border-black/5 pb-4">02 / Diagnostic Situationnel</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-brand-slate/40">Pays Résidence</label>
                        <input name="country" type="text" required className="w-full p-4 bg-black/[0.02] border-b border-black/10 focus:border-brand-gold focus:outline-none transition-standard font-heading font-bold text-brand-slate" placeholder="Localisation actuelle" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-brand-slate/40">Parcours Cible</label>
                        <select name="pathway" className="w-full p-4 bg-black/[0.02] border-b border-black/10 focus:border-brand-gold focus:outline-none transition-standard font-heading font-bold text-brand-slate">
                          <option value="emploi">Emploi Allemagne</option>
                          <option value="ausbildung">Ausbildung</option>
                          <option value="etudes">Études Allemagne</option>
                        </select>
                      </div>
                   </div>
                   <div className="space-y-3">
                      <label className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-brand-slate/40">Statut Actuel</label>
                      <textarea name="situation" rows={2} className="w-full p-4 bg-black/[0.02] border-b border-black/10 focus:border-brand-gold focus:outline-none transition-standard font-heading font-bold text-brand-slate" placeholder="Décrivez votre statut (salarié, étudiant, recherche d'emploi)"></textarea>
                   </div>
                </div>

                <div className="pt-8">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="button-institutional w-full bg-brand-red text-white rounded-2xl shadow-pro-max disabled:bg-gray-300"
                  >
                    {loading ? 'Analyse en cours...' : 'Initier Audit de Situation'}
                  </button>
                  <p className="text-center text-[8px] font-sans font-bold uppercase tracking-[0.5em] text-brand-slate/20 mt-12">
                    Dialogum Institutionnel — Haute Ingénierie © 2026
                  </p>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
