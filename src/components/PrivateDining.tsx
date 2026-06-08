import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle2, ShieldAlert, Award, ChevronRight, Landmark, Calendar, Users, Phone, Sparkles, Compass } from 'lucide-react';
import { IMAGES } from '../data';

export default function PrivateDining() {
  const [inquired, setInquired] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    partySize: '12',
    date: '',
    eventNotes: ''
  });

  const suites = [
    {
      id: 'crypt-suite',
      name: 'The Vault Crypt Room',
      capacity: '8 to 16 guests',
      style: 'Underground Stone Archway',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
      description: 'An isolated candlelit room separated by hand-forged raw steel gates. Guests sit at a rustic solid oak dining slab, with fully bespoke sommelier service.',
      highlights: ['Enclosed private wine storage', 'Decantation stage', 'Dedicated private butler']
    },
    {
      id: 'hearth-mezzanine',
      name: 'The Hearth Mezzanine Room',
      capacity: '20 to 45 guests',
      style: 'Suspended Elevated Vista',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
      description: 'Overlooks the primary salon and open woodfire kitchen from a private glass gallery level. Warm charcoal aromas, gorgeous view, vibrant atmosphere yet isolated acoustics.',
      highlights: ['Panoramic kitchen vistas', 'Bespoke custom wine lounge', 'Dedicated microphone/AV setup']
    },
    {
      id: 'sommeliers-tasting',
      name: 'The Sommelier’s Tasting Vault',
      capacity: '4 to 8 guests',
      style: 'Subterranean Wine Sanctum',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
      description: 'Dine in complete isolation surrounded by our historic archive of 4,000 vintage wine labels. Taste a bespoke 7-course pairing chosen individually for your party by our Cellar Master.',
      highlights: ['Rare vintages by the glass', 'Atmospheric candlelight', 'Personalized menu pairings']
    },
    {
      id: 'whispering-library',
      name: 'The Whispering Library Suite',
      capacity: '6 to 12 guests',
      style: 'Classic Leather & Mahogany',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=605&q=80',
      description: 'Flanked by floor-to-ceiling bookshelves housing 19th-century gastronomic texts. Features a cozy private fireplace, deep-set leather armchairs, and historic wood finishes.',
      highlights: ['Working cedar fireplace', 'Pre-dinner cocktail bar', 'Acoustic absolute seclusion']
    },
    {
      id: 'botanical-greenhouse',
      name: 'The Botanical Greenhouse Pavilion',
      capacity: '12 to 25 guests',
      style: 'Glass-Walled Garden Oasis',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      description: 'A luminous, glass-enclosed canopy filled with living aromatic herbs, jasmine creepers, and citrus trees. Experience dining under the evening stars with custom floral decor.',
      highlights: ['Living edible herb walls', 'Starlit evening sky view', 'Custom seasonal botanical themes']
    },
    {
      id: 'oak-alcove',
      name: 'The Oak Arch Alcove',
      capacity: '2 to 4 guests',
      style: 'Semi-Private Romantic Nook',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80',
      description: 'Our most sought-after niche for proposals and significant anniversaries. Tucked behind structural granite pillars with custom velvet acoustic drapes.',
      highlights: ['Velvet separation curtains', 'Candlelit granite niches', 'Complimentary Rose Champagne']
    },
    {
      id: 'proprietors-study',
      name: 'The Proprietor’s Private Study',
      capacity: '4 to 10 guests',
      style: 'Refined Executive Study',
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=80',
      description: 'A stately boardroom setup equipped with historical portraits, drafting desks, and hand-woven wool rugs. Frequently commissioned for highly confidential executive alignments.',
      highlights: ['Built-in secure safes', 'Executive seating standard', 'High-speed encrypted Wi-Fi']
    },
    {
      id: 'grand-fireplace-reserve',
      name: 'The Grand Fireplace Salon Reserve',
      capacity: '30 to 60 guests',
      style: 'Exclusivity of the Central Hearth',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      description: 'Commission the entire central dining pavilion. This allows access to our signature dual firewood hearth fire pits, raw stone arches, and solid-stone table arrangements.',
      highlights: ['Dual active hearth dominance', 'Customizable live music stage', 'Whole-hall acoustic mapping']
    },
    {
      id: 'secluded-cellar-cage',
      name: 'The Secluded Cellar Cage',
      capacity: '2 to 6 guests',
      style: 'Industrial Cave Mystique',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
      description: 'An intimate dining sanctuary nestled behind hand-forged iron scrollwork frames. Features slate slate tables and direct access to old back-vintages of Port wines.',
      highlights: ['Hand-forged iron gates', 'Dedicated decantation cart', 'Personalized sommelier steward']
    },
    {
      id: 'culinary-lab',
      name: 'The Culinary Laboratory Stage',
      capacity: '2 to 8 guests',
      style: 'High-Tech Kitchen Theater',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
      description: 'Get behind the scenes inside our active culinary R&D preparation lab. Sit in proximity to cryo-freezers, dehydrators, and wood ovens while experiencing an unscripted testing flight.',
      highlights: ['Unreleased research dishes', 'Direct access to preparation line', 'Custom chef apron souvenirs']
    }
  ];

  const triggerInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquired(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20">
      
      {/* Title block */}
      <div className="text-center mb-16">
        <span className="text-xs font-mono tracking-[0.3em] text-gold-400 block mb-2 uppercase">Uncompromising Seclusion</span>
        <h2 className="text-3xl md:text-5xl font-serif text-neutral-50 tracking-tight">Private Dining & Events</h2>
        <div className="w-12 h-[1px] bg-gold-400 mx-auto mt-4" />
      </div>

      {/* Main Feature Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        
        {/* Story details */}
        <div className="space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 bg-gold-400/5 border border-gold-400/10 px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest text-gold-300 uppercase">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span>EXEMPT PRIVATE VENUE STATUS</span>
          </div>

          <h3 className="text-2xl md:text-4xl font-serif leading-snug text-neutral-50">
            Intimate Gatherings. <br />
            <span className="font-serif-italic text-gold-300">Unforgettable Backdrops.</span>
          </h3>

          <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-sans font-light">
            Behind the historic brickwork and high granite arches of Cutler, we maintain ten entirely discrete, stunning dining spaces. Whether celebrating family milestones, hosting confidential corporate boards, or conducting elite wine seminars, our private suites provide an exceptional level of personal service, structural anonymity, and sensory magic.
          </p>

          {/* Core high-end feature elements */}
          <div className="space-y-3 pt-2 font-mono text-xs text-neutral-300">
            <div className="flex items-center space-x-3">
              <ChevronRight className="w-4 h-4 text-gold-400" />
              <span>Tailor-made customized tasting courses from Chef Paul Cutler</span>
            </div>
            <div className="flex items-center space-x-3">
              <ChevronRight className="w-4 h-4 text-gold-400" />
              <span>Dedicated Sommelier curation pairing back-vintage reserve bottles</span>
            </div>
            <div className="flex items-center space-x-3">
              <ChevronRight className="w-4 h-4 text-gold-400" />
              <span>Separate secure service entry point for maximum confidentiality</span>
            </div>
          </div>
        </div>

        {/* Stunning visual banner from our generated assets */}
        <div className="relative group overflow-hidden rounded-lg border border-white/10 shadow-2xl">
          <img 
            src={IMAGES.privateDining} 
            alt="Private Dinner Vault Room" 
            className="w-full aspect-video md:aspect-[4/3] object-cover filter brightness-90 group-hover:scale-102 transition-transform duration-[5000ms]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
          <div className="absolute top-4 right-4 bg-[#0a0a0a]/80 border border-white/10 text-gold-300 text-[10px] uppercase font-mono tracking-widest px-3 py-1.5 rounded">
            Featured: Vault Crypt
          </div>
        </div>
      </div>

      {/* Visual representation of rooms catalog */}
      <div className="mb-20 space-y-6">
        <div className="text-left mb-8 border-b border-white/10 pb-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-gold-400">CATALOGUE</span>
            <h3 className="text-xl md:text-2xl font-serif text-neutral-100 font-bold">Select Private Chambers</h3>
          </div>
          <span className="text-xs font-mono text-neutral-400">{suites.length} Suites listed</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suites.map((suite) => (
            <div 
              key={suite.id} 
              className="bg-[#0e0e0e]/50 rounded-lg overflow-hidden border border-white/10 hover:border-gold-400/40 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-900 border-b border-white/10">
                <img 
                  src={suite.image} 
                  alt={suite.name} 
                  className="w-full h-full object-cover filter brightness-80 hover:brightness-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-3 left-3 bg-[#0a0a0a]/90 border border-white/10 px-2 py-0.5 rounded text-[9px] font-mono text-neutral-300 uppercase tracking-widest">
                  {suite.style}
                </span>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-between space-y-5 text-left">
                <div className="space-y-3">
                  <h4 className="text-base font-serif text-neutral-100 tracking-wide font-bold uppercase">{suite.name}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light line-clamp-3">{suite.description}</p>
                  
                  <div className="space-y-1 pt-1.5">
                    <span className="block text-[9px] font-mono tracking-widest text-gold-400 uppercase">Specs / Perks:</span>
                    <div className="flex flex-wrap gap-1">
                      {suite.highlights.slice(0, 2).map(h => (
                        <span key={h} className="text-[8px] font-mono bg-[#0a0a0a] text-neutral-400 px-2.5 py-1 border border-white/10 rounded">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-neutral-500 uppercase">capacity</span>
                  <span className="font-bold text-gold-300 uppercase">{suite.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Inquiry Form segment */}
      <div className="max-w-3xl mx-auto bg-white/[0.01] border border-white/10 p-6 md:p-10 rounded-lg shadow-xl relative overflow-hidden">
        
        {/* Success screen placeholder */}
        <AnimatePresence mode="wait">
          {!inquired ? (
            <motion.div
              key="inquiry-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center mb-8">
                <h4 className="text-xl font-serif text-neutral-100">Inquire About Private Dining</h4>
                <p className="text-xs text-neutral-400 pt-1">Provide introductory details. Our events director responds within 4 business hours.</p>
              </div>

              <form onSubmit={triggerInquiry} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-left">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-medium">Full Name</label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      placeholder="e.g. Richard Weston"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-medium">Contact Email</label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      placeholder="e.g. r.weston@westoncorp.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-medium">Phone Number</label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      placeholder="e.g. +1 555-0199"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-medium font-bold text-gold-300">Target Suites Preference</label>
                    <select
                      id="inquiry-quantity"
                      value={form.partySize}
                      onChange={(e) => setForm({ ...form, partySize: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-gold-400 cursor-pointer"
                    >
                      {suites.map(s => (
                        <option key={s.id} value={s.name} className="bg-[#0a0a0a] text-neutral-200">
                          {s.name} ({s.capacity})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2 md:col-span-2 text-left">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-medium">Brief Description of the Event & Dietary Priorities</label>
                    <textarea
                      id="inquiry-notes"
                      rows={3}
                      placeholder="e.g. Executive board alignment, custom sommelier testing limits, or anniversary dining preferences..."
                      value={form.eventNotes}
                      onChange={(e) => setForm({ ...form, eventNotes: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    className="w-full py-4 bg-gold-400 hover:bg-gold-500 text-neutral-950 font-bold font-mono text-xs uppercase tracking-widest transition-all rounded cursor-pointer shadow-lg shadow-gold-500/10"
                  >
                    Submit Private Request
                  </button>
                  <div className="flex items-center justify-center space-x-1.5 text-[10px] font-mono text-neutral-500 uppercase">
                    <Landmark className="w-3.5 h-3.5 text-gold-400" />
                    <span>Discrete security protocol applies to all suites</span>
                  </div>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="inquiry-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-5"
            >
              <div className="inline-flex items-center justify-center p-3 bg-gold-400/5 border border-gold-400/20 rounded-full">
                <CheckCircle2 className="w-10 h-10 text-gold-300" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase">INQUIRY MEMORANDUM SENT</span>
                <h4 className="text-2xl font-serif text-neutral-100">Thank You, {form.name}</h4>
                <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Your event parameters have been registered privately with Cutler Office. An events manager will establish contact via <span className="text-neutral-200 font-medium">{form.email}</span> within 4 hours.
                </p>
              </div>

              <button
                type="button"
                id="reset-inquiry-btn"
                onClick={() => {
                  setInquired(false);
                  setForm({ name: '', email: '', phone: '', partySize: '12', date: '', eventNotes: '' });
                }}
                className="px-4 py-2 border border-white/10 text-[10px] font-mono tracking-wider uppercase text-neutral-400 hover:border-gold-300 rounded transition-all cursor-pointer"
              >
                Send New Inquiry
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
