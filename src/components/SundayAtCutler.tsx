import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  Clock, 
  Wine, 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Music, 
  UtensilsCrossed, 
  ChevronRight 
} from 'lucide-react';
import { IMAGES } from '../data';

interface SundayProps {
  onNavigate: (page: 'reservation') => void;
}

export default function SundayAtCutler({ onNavigate }: SundayProps) {
  const [activeRitual, setActiveRitual] = useState<number>(0);

  const rituals = [
    {
      hour: '12:00 - THE IGNITION',
      title: 'Hearth Ignition & Wild Sourdough',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80',
      description: 'Our dual cast-iron fire pits are fed fresh cherry logs under absolute heat. We serve warm woodfired sourdough with whipped smoked bone marrow butter on arrival.',
      details: ['Hickory sparks are fanned manually', 'Aged starter dough baked fresh', 'Bone marrow butter is smoked with oak ash']
    },
    {
      hour: '13:30 - THE FEAST CARVE',
      title: 'The Great Mahogany Carve',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      description: 'The roast master carves slow lavender-honey lacquered aged duck breasts and woodfire-seared Westholme Wagyu sirloins, delivered directly at the diners’ tables.',
      details: ['Slow dry-roasting over peachwood', 'Tableside silver-dome carving service', 'Double reduction wild berry jus']
    },
    {
      hour: '15:30 - THE MELLOW SUNSET',
      title: 'Zero-Proof Botanicals & Rare Digestifs',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
      description: 'The room mellows as vertical sunlight slides across the limestone arches. Savor our signature chocolate obsidian cake paired with rare aged sake or clear digestifs.',
      details: ['Vintage dry ports poured from magnums', 'Hand-shaken botanical tonics', 'Chamber ambient cello background performance']
    }
  ];

  const feastItems = [
    {
      name: '16-Hour Oak-Cured Sirloin',
      type: 'HEARTH ROAST',
      desc: 'Westholme Wagyu, cured in wild juniper sea salt, cooked slowly over a glowing white-oak bed and carved with natural red wine glaze.',
      meta: 'Served medium rare'
    },
    {
      name: 'Lavender-Honey Lacquered Duck',
      type: 'CHAMBER SPECIAL',
      desc: 'Local farm duck thighs, glazed with botanical elderberry honey and smoked with dried lavender twigs directly at your plate side.',
      meta: 'Aromatic & crispy skin'
    },
    {
      name: 'White Coal Heirloom Carrots',
      type: 'VEGETAL ACCORD',
      desc: 'Sweet organic carrots roasted on glowing ash embers, glazed with brown birch syrup and sprinkled with toasted sesame oil.',
      meta: 'Vegetarian'
    }
  ];

  return (
    <div className="space-y-20 py-10 md:py-16 overflow-hidden">
      
      {/* 1. HERO BANNER WITH FLUID HOVER SHIMMER & STAGGERED TEXTS */}
      <section className="relative h-[70vh] md:h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden border-b border-white/10 mx-4 md:mx-8 rounded-2xl shadow-2xl">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1.02, opacity: 0.95 }}
            transition={{ duration: 10, ease: 'easeOut' }}
            src={IMAGES.sundayHero} 
            alt="Sunday Roast Table Setting" 
            className="w-full h-full object-cover filter brightness-30 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        </div>

        {/* Story details (staggered display) */}
        <div className="relative z-10 max-w-4xl px-4 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gold-400/10 border border-gold-400/30 px-3.5 py-1.5 rounded-full text-[10px] uppercase font-mono tracking-[0.25em] text-gold-300 shadow-md"
          >
            <Flame className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>EXQUISITE WEEKEND CONGLOMERATE</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-8xl font-serif text-neutral-50 tracking-tight leading-none"
          >
            Sunday at Cutler
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs md:text-sm text-neutral-350 max-w-xl mx-auto font-sans font-light leading-relaxed tracking-wide"
          >
            A slow-paced, rustic-inspired gourmet ritual. Centering primordial open-fire grilling, tableside carvings, and a beautiful collection of old world magnums poured graciously till sunset.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-4"
          >
            <a
              href="#agenda-ritual-sec"
              className="px-6 py-3.5 bg-gold-400 hover:bg-gold-500 text-neutral-950 font-mono text-xs uppercase tracking-widest font-bold rounded cursor-pointer transition-all shadow-lg shadow-gold-500/10 inline-flex items-center gap-2"
            >
              <span>Explore Agenda Rituals</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE NARRATIVE ROW WITH AESTHETIC HIGHLIGHT CARDS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left column: poetic text */}
        <div className="space-y-6 text-left">
          <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase block font-medium">CURATOR STORYTELLING</span>
          
          <h3 className="text-3xl md:text-4xl font-serif text-neutral-100 leading-snug">
            Slowing Time down. <br />
            <span className="font-serif-italic text-gold-300">Celebrating Raw Elements.</span>
          </h3>

          <p className="text-xs md:text-sm text-neutral-450 leading-relaxed font-sans font-light">
            Sundays at Cutler are a conscious detour from the rapid multi-course pace of the weekday evenings. There are no rigid timelines here. We slow-roast massive prime cuts over native woods for 16 hours, releasing rich caramelized aroma throughout our high-ceiling salon. 
          </p>
          
          <p className="text-xs md:text-sm text-neutral-450 leading-relaxed font-sans font-light">
            We source our honey-fig glazes from local family apiaries and procure slow-risen ancient grains for the fireplace bake. Our wine program shifts entirely to pouring select aged magnums by the glass—making rare cellars exceptionally reachable for lingering tables.
          </p>

          {/* Interactive Live Jazz Showcase Box */}
          <div className="p-4 bg-gold-400/5 rounded-lg border border-gold-400/20 flex items-start space-x-3.5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold-400/10 to-transparent" />
            <Music className="w-5 h-5 text-gold-300 shrink-0 mt-0.5 animate-pulse" />
            <div className="space-y-1">
              <span className="block text-[10px] font-mono tracking-widest text-gold-300 uppercase font-bold">LIVE CELLO & CONTEMPORARY JAZZ</span>
              <p className="text-xs text-neutral-400 font-light leading-normal">
                To reinforce the serene afternoon transition, the central mezzanine gallery hosts local cellists and jazz duos performing warm, unamplified acoustics from 13:00 till sundown.
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Image frame */}
        <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl">
          <img 
            src={IMAGES.brunchDish} 
            alt="Sunday Roast on Fire Pit" 
            className="w-full aspect-video md:aspect-[4/3] object-cover filter brightness-95 group-hover:scale-102 transition-transform duration-[6000ms]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 font-mono text-[9px] tracking-widest text-gold-300 bg-[#0a0a0a]/95 px-3 py-1.5 border border-white/10 rounded">
            THE CHERRY WOOD FIRE GRID
          </span>
        </div>
      </section>

      {/* 3. INTERACTIVE RITUAL SEGMENT (TABS AND STAGE TRANSITIONS) */}
      <section id="agenda-ritual-sec" className="py-12 bg-neutral-950/60 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02),transparent)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono tracking-widest text-[#8e8e8e] uppercase">HOUR-BY-HOUR TIMELINE</span>
            <h3 className="text-2xl md:text-4xl font-serif text-neutral-100 mt-1">The Sunday Agenda</h3>
            <p className="text-xs text-neutral-450 font-sans font-light max-w-sm mx-auto pt-1">
              Click any element below to visualize each custom ritual scene.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Interactive Timeline selectors (Lg: 5 columns) */}
            <div className="lg:col-span-5 space-y-4">
              {rituals.map((rit, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveRitual(idx)}
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-350 cursor-pointer flex items-center justify-between gap-4 ${
                    activeRitual === idx 
                      ? 'bg-gold-400/10 border-gold-400 text-gold-200 shadow-lg shadow-gold-500/5' 
                      : 'bg-[#0a0a0a]/40 border-white/5 hover:border-white/15 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${activeRitual === idx ? 'bg-gold-400 text-neutral-950' : 'bg-neutral-900 border border-white/5 text-neutral-500'}`}>
                      {rit.hour.split(' ')[0]}
                    </span>
                    <h4 className="text-base font-serif font-bold tracking-wide uppercase pt-1">{rit.title.split(' & ')[0]}</h4>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-gold-400 transition-transform ${activeRitual === idx ? 'translate-x-1.5' : 'opacity-40'}`} />
                </button>
              ))}
            </div>

            {/* Right Col: Animated details card (Lg: 7 columns) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRitual}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="bg-[#0e0e0e]/80 border border-white/10 rounded-xl p-6 md:p-8 space-y-6 relative overflow-hidden"
                >
                  {/* Photo representing the hour */}
                  <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-white/5">
                    <img 
                      src={rituals[activeRitual].image} 
                      alt={rituals[activeRitual].title} 
                      className="w-full h-full object-cover filter brightness-90 animate-fade-in"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-3 text-left">
                    <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase">{rituals[activeRitual].hour} Ritual</span>
                    <h3 className="text-xl md:text-2xl font-serif text-neutral-100 uppercase tracking-wide">
                      {rituals[activeRitual].title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans font-light">
                      {rituals[activeRitual].description}
                    </p>
                  </div>

                  {/* Highlights Bulleting list */}
                  <div className="border-t border-white/10 pt-4 text-left space-y-2">
                    <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Process Secrets</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-neutral-300 font-sans">
                      {rituals[activeRitual].details.map((det, d_idx) => (
                        <div key={d_idx} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-gold-400 rounded-full shrink-0" />
                          <span className="font-light">{det}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SUNDAY FEAST CARD GRID GRID LIST */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
        <div className="text-left border-b border-white/10 pb-4">
          <span className="text-[10px] font-mono uppercase text-gold-400">CULINARY PROGRAM</span>
          <h3 className="text-2xl md:text-3xl font-serif text-neutral-50 tracking-wide font-bold">The Sunday Carvery Platter</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feastItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0e0e0e]/40 border border-white/10 rounded-lg p-6 relative overflow-hidden flex flex-col justify-between hover:border-gold-400/40 transition-all text-left group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400/10 to-transparent" />
              <div className="space-y-3">
                <span className="text-[8px] font-mono tracking-widest bg-gold-400/10 border border-gold-400/15 text-gold-300 px-2 py-0.5 rounded uppercase font-medium">
                  {item.type}
                </span>
                <h4 className="text-base md:text-lg font-serif text-neutral-100 group-hover:text-gold-300 transition-colors uppercase font-bold tracking-wide">
                  {item.name}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase">
                <span>RESERVED SPECIALTY</span>
                <span className="text-gold-400 font-bold">{item.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. RESERVE AT THE BOTTOM CARD CTA */}
      <section className="max-w-3xl mx-auto px-4 text-center">
        <div className="bg-[#0e0e0e]/40 border border-white/10 rounded-xl p-8 md:p-14 relative overflow-hidden space-y-6 shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[radial-gradient(circle,rgba(212,175,55,0.05),transparent)] rounded-full translate-x-20 translate-y-20" />
          
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase">EXPERIECE IMMERSION</span>
            <h4 className="text-xl md:text-3xl font-serif text-neutral-50 tracking-wide font-bold">Reserve Your Sunday Lounge</h4>
            <p className="text-xs text-neutral-450 max-w-md mx-auto leading-relaxed font-sans font-light">
              Sunday sessions operate from 12:00 until 17:00. This slot covers the complete tableside carvery carvings, slow sourdough loaves, and immediate expert decantation access.
            </p>
          </div>

          <button
            onClick={() => onNavigate('reservation')}
            className="px-8 py-3.5 bg-gold-400 hover:bg-gold-500 text-neutral-950 font-bold font-mono tracking-widest text-xs uppercase rounded transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-gold-500/10 hover:scale-102"
          >
            <span>Book Sunday Lounge</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
}
