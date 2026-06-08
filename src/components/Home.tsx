import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Clock, MapPin, Compass, ChevronDown, Award } from 'lucide-react';
import { IMAGES } from '../data';
import { PageType } from '../types';

interface HomeProps {
  onNavigate: (page: PageType) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div id="home-view" className="relative min-h-screen text-neutral-100 font-sans overflow-x-hidden select-none bg-neutral-950">
      
      {/* SECTION 1: HERO - THE HEARTH ENTRY */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Cutler Table Setup" 
            className="w-full h-full object-cover scale-105 filter brightness-45 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[#0a0a0a]/35" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gold-400/10 border border-gold-400/20 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-[0.25em] text-gold-300 uppercase mx-auto"
          >
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>Awarded Michelin Excellence</span>
          </motion.div>

          {/* Glassmorphic Brand Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="p-8 md:p-12 rounded-2xl bg-black/45 backdrop-blur-xl border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.8)] max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-serif text-neutral-50 tracking-tight leading-none mb-4">
              Culinary Artistry <br />
              <span className="font-serif-italic text-gold-300">Reshaped by Fire</span>
            </h1>

            <p className="text-sm md:text-base text-neutral-300 font-sans font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              A deliberate masterclass in dry-ageing, primordial woodfire hearth grilling, and micro-seasonal forage curation. Nestled inside the stone-lined walls of our 1840s historic warehouse cellar.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="book-btn-home"
                onClick={() => onNavigate('reservation')}
                className="w-full sm:w-auto px-8 py-4 bg-gold-400 hover:bg-gold-500 text-neutral-950 font-sans font-medium hover:scale-103 transition-all duration-300 rounded shadow-lg shadow-gold-500/10 flex items-center justify-center gap-2 group text-xs tracking-widest uppercase cursor-pointer"
              >
                <span>Secure Your Counter</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <button
                id="explore-btn-home"
                onClick={() => onNavigate('menu')}
                className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-gold-300 hover:bg-white/5 text-neutral-200 hover:scale-103 transition-all duration-300 rounded flex items-center justify-center gap-2 text-xs tracking-widest uppercase cursor-pointer"
              >
                <span>Browse Menu Book</span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center gap-1.5 text-[10px] font-mono text-neutral-400 tracking-[0.2em] uppercase pt-4"
          >
            <span>Scroll To Unveil</span>
            <ChevronDown className="w-4 h-4 text-gold-400" />
          </motion.div>
        </div>
      </section>


      {/* SECTION 2: PHILOSOPHY - TIMBER AND SMOKE */}
      <section className="relative min-h-[90vh] flex items-center py-20 px-4 md:px-8 overflow-hidden bg-neutral-950 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80" 
            alt="Grilling steaks on charcoal hot embers" 
            className="w-full h-full object-cover brightness-35 filter contrast-105"
            referrerPolicy="no-referrer"
          />
          {/* Parallax dark mask */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="md:col-span-6 bg-black/45 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-3xl text-left space-y-6"
          >
            <span className="text-xs font-mono tracking-[0.35em] text-gold-400 uppercase block">THE HEARTH SCIENCE</span>
            <h2 className="text-3xl md:text-5xl font-serif text-neutral-100 tracking-tight leading-tight">
              Where Fire <br />Captures Flavor
            </h2>
            
            <p className="text-sm text-neutral-300 font-sans font-light leading-relaxed">
              Our active woodfire pits use no synthetic coals or gas prompts. We burn only split logs of dry ironbark and weathered applewood—cured for precisely sixteen months. 
            </p>

            <blockquote className="border-l-2 border-gold-400 pl-4 py-1 italic text-neutral-400 text-xs font-serif leading-relaxed">
              "We cook elements at temperatures shifting from blazing active sears of 900°F to slow, ambient rest-baths over applewood timber columns. Smoke is not an afterthought; it is our primary culinary punctuation."
            </blockquote>

            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Every steak, heritage fowl, and wild mushroom is aged, trimmed, and grilled under the immediate touch of Chef Paul Cutler, building deep caramelized outer crusts that trap rich fat sugars.
            </p>

            <button
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center gap-2 group px-6 py-3 border border-white/15 hover:border-gold-300 text-gold-400 hover:text-gold-300 rounded font-mono text-[10px] tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              <span>Examine Custom Dishes</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>


      {/* SECTION 3: IMMERSION - THE SUBTERRANEAN SENSORY VAULTS */}
      <section className="relative min-h-[90vh] flex items-center justify-end py-20 px-4 md:px-8 overflow-hidden bg-neutral-900 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=80" 
            alt="Subterranean cellar vault" 
            className="w-full h-full object-cover brightness-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/35 to-black/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="hidden md:block md:col-span-5" />
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="md:col-span-7 bg-black/45 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-3xl text-left space-y-6"
          >
            <span className="text-xs font-mono tracking-[0.35em] text-gold-400 uppercase block">IMMERSIVE FLUIDS</span>
            <h2 className="text-3xl md:text-5xl font-serif text-neutral-100 tracking-tight leading-tight">
              Twelve Meters Below <br />the Stone Cellar
            </h2>
            
            <p className="text-sm text-neutral-300 font-sans font-light leading-relaxed">
              Step twelve meters down our stone spiral stairs to enter a quiet world of absolute sanctuary. Our historic storage vaults sleep under soft candlelight, housing over 4,000 legendary back-vintage wine bottles and single-cask whiskeys.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1 bg-white/2 p-3 rounded border border-white/5">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block">Liquid Decades</span>
                <p className="text-xs text-neutral-300 font-sans font-light">Custom sommelier-led tours highlighting French Bordeaux, Australian Shiraz, and dry-aged sakes.</p>
              </div>
              <div className="space-y-1 bg-white/2 p-3 rounded border border-white/5">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block">Premium Beers</span>
                <p className="text-xs text-neutral-300 font-sans font-light">Artisan craft lagers, smoked Baltic porters, and rare unfiltered pale sours select-sourced for dining pairings.</p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Enjoy Wednesday Cellar night or customize a private flight session inside our limestone vault caves, matching raw, citrus-cured wild plates with vintage pours.
            </p>

            <button
              onClick={() => onNavigate('drinks')}
              className="inline-flex items-center gap-2 group px-6 py-3 border border-white/15 hover:border-gold-300 text-gold-400 hover:text-gold-300 rounded font-mono text-[10px] tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              <span>Browse Drinks & Beers</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>


      {/* SECTION 4: INVITATION & HOURS - FLOATING CARD */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 px-4 overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80" 
            alt="Cutler Dining Room Tables Setup" 
            className="w-full h-full object-cover brightness-25 filter contrast-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-black/50 backdrop-blur-2xl border border-white/10 p-8 md:p-14 rounded-2xl shadow-3xl space-y-6"
          >
            <span className="text-xs font-mono tracking-[0.4em] text-gold-400 uppercase block">AN INVITATION FROM PAUL CUTLER</span>
            <h2 className="text-3xl md:text-6xl font-serif text-neutral-100 tracking-tight">Gather at Cutler</h2>
            <div className="w-12 h-[1px] bg-gold-400 mx-auto" />

            <p className="text-sm md:text-base text-neutral-300 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Settle into a world of warm wood embers, deep limestone cellars, and deliberate fine dining. Our counter seats, tableside carvings, and interactive chef counter blocks book ninety days in advance.
            </p>

            {/* Information schedule rows */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6 max-w-3xl mx-auto font-mono text-[10px] text-neutral-400 uppercase tracking-widest border-t border-white/10">
              <div className="space-y-1.5 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center space-x-1 text-gold-400">
                  <MapPin className="w-4.5 h-4.5 text-gold-400" />
                  <span className="font-bold">LOCATION</span>
                </div>
                <p className="text-[11px] text-neutral-300 font-sans tracking-wide">42 STONE ARCHWAY<br />THE HISTORIC OLD DISTRICT</p>
              </div>

              <div className="space-y-1.5 flex flex-col items-center justify-center text-center">
                <div className="flex items-center space-x-1 text-gold-400">
                  <Clock className="w-4.5 h-4.5 text-gold-400" />
                  <span className="font-bold">FEASTING HOURS</span>
                </div>
                <p className="text-[11px] text-neutral-300 font-sans tracking-wide">TUE—SAT: 17:30 — 23:00<br />SUNDAY CARVERY: 12:00 — 17:00</p>
              </div>

              <div className="space-y-1.5 flex flex-col items-center md:items-end text-center md:text-right">
                <div className="flex items-center space-x-1 text-gold-400">
                  <Compass className="w-4.5 h-4.5 text-gold-400" />
                  <span className="font-bold">THE CREW</span>
                </div>
                <p className="text-[11px] text-neutral-300 font-sans tracking-wide">CHEF DE CUISINE: PAUL CUTLER<br />SOMMELIER DIRECTOR: VANCE</p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('reservation')}
                className="px-10 py-4 bg-gold-400 hover:bg-gold-500 text-neutral-950 font-semibold rounded text-xs tracking-widest uppercase cursor-pointer transition-all duration-300 hover:scale-104 shadow-lg shadow-gold-500/10"
              >
                Launch Booking Terminal
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
