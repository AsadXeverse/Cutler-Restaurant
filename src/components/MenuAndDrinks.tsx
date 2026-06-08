import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Compass, ArrowUpRight, X, Maximize2, Minimize2, 
  BookOpen, ChevronLeft, ChevronRight, Info, Wine, Star, Eye
} from 'lucide-react';
import { MENU_CATEGORIES, DRINKS_CATEGORIES, IMAGES } from '../data';
import { MenuItem } from '../types';

interface MenuAndDrinksProps {
  mode: 'menu' | 'drinks';
  onNavigate: (page: 'reservation') => void;
}

export default function MenuAndDrinks({ mode, onNavigate }: MenuAndDrinksProps) {
  // Mode-based scrolling control
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mode]);

  // Food Menu Spread Index Controls (0: Cover, 1: Appetisers & Seafood, 2: Entrees & Classics, 3: Mains & Accompaniments, 4: Desserts & Cheese)
  const [spreadIdx, setSpreadIdx] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Load existing food items from CATEGORIES safely to present them with classical restaurant layouts
  const appetisersObj = MENU_CATEGORIES.find(c => c.id === 'appetisers');
  const seafoodObj = MENU_CATEGORIES.find(c => c.id === 'seasonal-seafood');
  const entreesObj = MENU_CATEGORIES.find(c => c.id === 'entrees');
  const classicsObj = MENU_CATEGORIES.find(c => c.id === 'cutler-classics');
  const mainsObj = MENU_CATEGORIES.find(c => c.id === 'mains');
  const accompanimentsObj = MENU_CATEGORIES.find(c => c.id === 'accompaniments');
  const dessertsObj = MENU_CATEGORIES.find(c => c.id === 'desserts');
  const cheeseObj = MENU_CATEGORIES.find(c => c.id === 'cheese-selection');

  // Safely fallback to first indices if undefined
  const appetisers = appetisersObj?.items || [];
  const seafood = seafoodObj?.items || [];
  const entrees = entreesObj?.items || [];
  const classics = classicsObj?.items || [];
  const mains = mainsObj?.items || [];
  const accompaniments = accompanimentsObj?.items || [];
  const desserts = dessertsObj?.items || [];
  const cheese = cheeseObj?.items || [];

  // Craft Beer Dataset as specified in Drinks page changes — "just show the Bear, Alcohol and other types of bears .."
  const beers = DRINKS_CATEGORIES.find(c => c.id === 'beer-alkohol')?.items || [];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 select-none text-neutral-100">
      
      {/* 1. APP-HEADER BRAND SECTION */}
      <div className="text-center md:text-left mb-10 md:mb-14">
        <span className="text-[10px] font-mono tracking-[0.35em] text-gold-400 uppercase block mb-1">
          {mode === 'menu' ? 'The Culinary Codex' : 'Subterranean Spirits'}
        </span>
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-50 tracking-tight leading-none uppercase">
            {mode === 'menu' ? 'The Hearth Menu' : 'Beer, Alcohol & Other Beers'}
          </h2>
          <button
            onClick={() => onNavigate('reservation')}
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-gold-400 hover:text-gold-200 uppercase self-center md:self-auto cursor-pointer transition-colors"
          >
            <span>Reserve Premium Counter</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="w-full h-[1px] bg-white/10 mt-6" />
      </div>

      {/* =========================================================================
          VIEW A: FOOD MENU - AUTHENTIC REPLICATED PREMIUM MENU CARD EXPERIENCE
          ========================================================================= */}
      {mode === 'menu' && (
        <div className="flex flex-col items-center space-y-8">
          
          {/* Menu Action Ribbon */}
          <div className="flex flex-wrap justify-between items-center gap-4 w-full max-w-5xl bg-neutral-900/50 border border-white/5 p-4 rounded-xl">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-4 h-4 text-gold-400 animate-pulse" />
              <p className="text-xs font-mono text-neutral-300 tracking-wider">
                CUTLER PHYSICAL CARD VOLUME — <span className="text-gold-400 uppercase font-bold">SPREAD {spreadIdx} OF 4</span>
              </p>
            </div>
            
            <div className="flex items-center space-x-3 text-[11px] text-neutral-400 font-mono">
              <span className="hidden sm:inline">Hover over dishes to project visual plate presentation.</span>
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 border border-white/10 hover:border-gold-400/40 text-neutral-200 text-[10px] font-mono tracking-widest uppercase rounded cursor-pointer transition-all"
              >
                {isZoomed ? <Minimize2 className="w-3.5 h-3.5 text-gold-400" /> : <Maximize2 className="w-3.5 h-3.5 text-gold-400" />}
                <span>{isZoomed ? 'Unzoom' : 'Magnify Page'}</span>
              </button>
            </div>
          </div>

          {/* SENSORIUM MENU REVOLVING DESK WORKSPACE */}
          <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* BOOKLET DISPLAY BLOCK (8 of 12 Wide Columns) */}
            <div 
              className={`lg:col-span-8 w-full transition-all duration-500 ease-out origin-center ${
                isZoomed ? 'scale-[1.03] lg:scale-[1.05]' : 'scale-100'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={spreadIdx}
                  initial={{ opacity: 0.85, rotateY: 15, scale: 0.98 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0.85, rotateY: -15, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="perspective-[2000px] select-text"
                >
                  
                  {/* 2-PAGE SPREAD BLOCK FRAME (CREAM MATTE PHYSICAL PAPYRUS IN DISCRETE LEATHER CASE) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 bg-[#FAF6EE] text-neutral-900 rounded-2xl shadow-[0_45px_100px_rgba(0,0,0,0.9)] border-4 border-neutral-800 min-h-[640px] md:min-h-[720px] overflow-hidden relative">
                    
                    {/* CENTRAL BINDING SEAM (REALISTIC BOOK SPINE BOUND SHADOW) */}
                    <div className="hidden md:block absolute inset-y-0 left-1/2 -ml-[14px] w-[28px] pointer-events-none z-20 bg-gradient-to-r from-black/15 via-black/40 to-black/15 border-l border-r border-[#695D4A]/10 shadow-[inner_0_0_12px_rgba(0,0,0,0.2)]" />
                    
                    {/* ==================== SPREAD INDEX 0: COVER & MANIFESTO ==================== */}
                    {spreadIdx === 0 && (
                      <>
                        {/* Left Page: Intro / Manifesto */}
                        <div className="p-8 md:p-12 bg-[#FAF6EE] relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-300">
                          <div className="absolute inset-4 border border-dashed border-[#695D4A]/20 pointer-events-none" />
                          
                          <div className="space-y-6 pt-6 relative">
                            <span className="text-[9px] font-mono tracking-[0.3em] text-[#9A7D56] block">METHODOLOGY OF FIRE</span>
                            <h3 className="text-2xl font-serif text-neutral-900 leading-tight">The Primordial Ash <br /><span className="italic font-serif-italic text-[#9A7D56]">at the Grand Basin</span></h3>
                            <div className="w-8 h-[1px] bg-[#9A7D56]/40" />
                            
                            <p className="text-xs text-neutral-700 leading-relaxed font-sans font-light">
                              Cutler resides inside the stone cellar chambers of an original 1840s customs store warehouse. We maintain two massive dual-firewood brick hearth ovens fueled daily with seasoned Victorian ironbark and applewood logs.
                            </p>
                            <p className="text-xs text-neutral-700 leading-relaxed font-sans font-light">
                              There are no gas lines, convection assists, or electronic temp gauges inside our kitchen. Every ingredient cooks in response to shifting wood lipids, radiant charcoal temperatures, and active smoke dynamics.
                            </p>
                            <p className="text-xs text-neutral-800 leading-relaxed font-sans italic font-light pt-2">
                              "We do not manipulate nature. We subject our raw harvests to the intense purification of flame, salt, and time."
                            </p>
                          </div>

                          <div className="pb-6 pt-4 font-mono text-[8px] text-neutral-500 uppercase tracking-widest space-y-1 relative border-t border-neutral-200">
                            <p>CHEF DE CUISINE: PAUL CUTLER</p>
                            <p>CELLAR MASTER: ELEANOR VANCE</p>
                          </div>
                        </div>

                        {/* Right Page: Book Cover itself */}
                        <div className="p-8 md:p-12 bg-[#F5ECE0] relative flex flex-col justify-between items-center text-center">
                          <div className="absolute inset-5 border-2 border-double border-[#C5A880]/65 pointer-events-none" />
                          
                          <div className="pt-8">
                            <span className="text-[10px] font-mono tracking-[0.4em] text-[#9A7D56] block uppercase font-bold">ESTABLISHED 2021</span>
                          </div>

                          {/* Gold crest watermark */}
                          <div className="my-auto space-y-4">
                            <div className="w-16 h-16 border border-[#C5A880] rounded-full mx-auto flex items-center justify-center text-[#9A7D56] font-serif italic text-lg shadow-sm">
                              C
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-[0.2em] font-extrabold uppercase leading-none">
                              CUTLER
                            </h1>
                            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto my-1" />
                            <p className="text-[9px] font-mono tracking-[0.2em] text-[#9A7D56] uppercase leading-relaxed font-bold">
                              Wood-Hearth Chronicle<br />& Subterranean Cellars
                            </p>
                          </div>

                          <div className="space-y-1 pb-6">
                            <span className="text-[9px] font-mono tracking-[0.15em] text-neutral-500 uppercase block">An Authentic Seasonal Compilation</span>
                            <span className="text-xs font-serif italic text-neutral-800 block">Chamber 42, The Wharf Basin</span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* ==================== SPREAD INDEX 1: APPETISERS & SEAFOOD ==================== */}
                    {spreadIdx === 1 && (
                      <>
                        {/* Left Page: Appetisers list */}
                        <div className="p-8 md:p-12 bg-[#FAF6EE] relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-300">
                          <div className="absolute inset-4 border border-dashed border-[#695D4A]/20 pointer-events-none" />
                          
                          <div className="space-y-5 relative pt-4">
                            <div className="text-center pb-2 border-b border-neutral-200">
                              <span className="text-[9px] font-mono tracking-[0.25em] text-[#9A7D56] block uppercase">Plates 01 — Preface</span>
                              <h3 className="text-lg font-serif text-neutral-900 uppercase tracking-widest font-bold">Appetisers</h3>
                            </div>

                            <div className="space-y-4.5">
                              {appetisers.map((item) => (
                                <div 
                                  key={item.id} 
                                  className="space-y-0.5 group cursor-pointer"
                                  onMouseEnter={() => setHoveredItem(item)}
                                  onClick={() => setSelectedItem(item)}
                                >
                                  <div className="flex justify-between items-baseline">
                                    <h4 className="font-serif italic font-bold text-xs text-neutral-900 group-hover:text-[#9A7D56] transition-colors flex items-center gap-1.5">
                                      {item.name}
                                      {item.isSpecial && <Star className="w-2.5 h-2.5 text-[#9A7D56] fill-current" />}
                                    </h4>
                                    <span className="flex-1 border-b border-dotted border-neutral-300 mx-2" />
                                    <span className="font-mono text-xs font-bold text-[#9A7D56]">{item.price}</span>
                                  </div>
                                  <p className="text-[10px] text-neutral-600 font-sans font-light leading-relaxed line-clamp-1 group-hover:line-clamp-none transition-all">
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 pb-2 border-t border-neutral-250 flex justify-between items-center text-[8px] font-mono text-neutral-500 uppercase tracking-wider relative">
                            <span>Bespoke Micro Plaquettes</span>
                            <span>Cutler Table</span>
                          </div>
                        </div>

                        {/* Right Page: Seasonal Seafood */}
                        <div className="p-8 md:p-12 bg-[#FAF6EE] relative flex flex-col justify-between">
                          <div className="absolute inset-4 border border-dashed border-[#695D4A]/20 pointer-events-none" />
                          
                          <div className="space-y-5 relative pt-4">
                            <div className="text-center pb-2 border-b border-neutral-200">
                              <span className="text-[9px] font-mono tracking-[0.25em] text-[#9A7D56] block uppercase">Plates 02 — Reef & Current</span>
                              <h3 className="text-lg font-serif text-neutral-900 uppercase tracking-widest font-bold font-extrabold">Seasonal Seafood</h3>
                            </div>

                            <div className="space-y-5 pt-2">
                              {seafood.map((item) => (
                                <div 
                                  key={item.id} 
                                  className="space-y-1 group cursor-pointer"
                                  onMouseEnter={() => setHoveredItem(item)}
                                  onClick={() => setSelectedItem(item)}
                                >
                                  <div className="flex justify-between items-baseline">
                                    <h4 className="font-serif italic font-bold text-xs text-neutral-900 group-hover:text-[#9A7D56] transition-colors">
                                      {item.name}
                                    </h4>
                                    <span className="flex-1 border-b border-dotted border-neutral-300 mx-2" />
                                    <span className="font-mono text-xs font-bold text-[#9A7D56]">{item.price}</span>
                                  </div>
                                  <p className="text-[10px] text-neutral-600 font-sans font-light leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 pb-2 border-t border-neutral-250 flex justify-between items-center text-[8px] font-mono text-neutral-500 uppercase tracking-wider relative">
                            <span>Deep Tide Ocean Harvests</span>
                            <span>Season 2026</span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* ==================== SPREAD INDEX 2: ENTREES & CLASSICS ==================== */}
                    {spreadIdx === 2 && (
                      <>
                        {/* Left Page: Entrées */}
                        <div className="p-8 md:p-12 bg-[#FAF6EE] relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-300">
                          <div className="absolute inset-4 border border-dashed border-[#695D4A]/20 pointer-events-none" />
                          
                          <div className="space-y-5 relative pt-4">
                            <div className="text-center pb-2 border-b border-neutral-200">
                              <span className="text-[9px] font-mono tracking-[0.25em] text-[#9A7D56] block uppercase">Plates 03 — Chamber Heat</span>
                              <h3 className="text-lg font-serif text-neutral-900 uppercase tracking-widest font-bold">Entrées</h3>
                            </div>

                            <div className="space-y-5">
                              {entrees.map((item) => (
                                <div 
                                  key={item.id} 
                                  className="space-y-1 group cursor-pointer"
                                  onMouseEnter={() => setHoveredItem(item)}
                                  onClick={() => setSelectedItem(item)}
                                >
                                  <div className="flex justify-between items-baseline">
                                    <h4 className="font-serif italic font-bold text-xs text-neutral-900 group-hover:text-[#9A7D56] transition-colors">
                                      {item.name}
                                    </h4>
                                    <span className="flex-1 border-b border-dotted border-neutral-300 mx-2" />
                                    <span className="font-mono text-xs font-bold text-[#9A7D56]">{item.price}</span>
                                  </div>
                                  <p className="text-[10px] text-neutral-600 font-sans font-light leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 pb-2 border-t border-neutral-250 flex justify-between items-center text-[8px] font-mono text-neutral-500 uppercase tracking-wider relative">
                            <span>First Direct Firing</span>
                            <span>Mid-Evening Curation</span>
                          </div>
                        </div>

                        {/* Right Page: Cutler Classics */}
                        <div className="p-8 md:p-12 bg-[#FAF6EE] relative flex flex-col justify-between">
                          <div className="absolute inset-4 border border-dashed border-[#695D4A]/20 pointer-events-none" />
                          
                          <div className="space-y-5 relative pt-4">
                            <div className="text-center pb-2 border-b border-neutral-200">
                              <span className="text-[9px] font-mono tracking-[0.25em] text-[#9A7D56] block uppercase">Plates 04 — Hearth Pillars</span>
                              <h3 className="text-lg font-serif text-[#9A7D56] uppercase tracking-widest font-bold">Cutler Classics</h3>
                            </div>

                            <div className="space-y-6 pt-2">
                              {classics.map((item) => (
                                <div 
                                  key={item.id} 
                                  className="space-y-1.5 group cursor-pointer"
                                  onMouseEnter={() => setHoveredItem(item)}
                                  onClick={() => setSelectedItem(item)}
                                >
                                  <div className="flex justify-between items-baseline">
                                    <h4 className="font-serif italic font-extrabold text-sm text-neutral-950 group-hover:text-[#9A7D56] transition-colors tracking-tight">
                                      {item.name}
                                    </h4>
                                    <span className="flex-1 border-b border-dotted border-neutral-300 mx-2" />
                                    <span className="font-mono text-xs font-bold text-[#9A7D56]">{item.price}</span>
                                  </div>
                                  <p className="text-[10.5px] text-neutral-750 font-sans font-light leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 pb-2 border-t border-neutral-250 flex justify-between items-center text-[8px] font-mono text-neutral-500 uppercase tracking-wider relative">
                            <span>Signature Fire Masterpieces</span>
                            <span>Monumental Cravings</span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* ==================== SPREAD INDEX 3: MAINS & ACCOMPANIMENTS ==================== */}
                    {spreadIdx === 3 && (
                      <>
                        {/* Left Page: Mains */}
                        <div className="p-8 md:p-12 bg-[#FAF6EE] relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-300">
                          <div className="absolute inset-4 border border-dashed border-[#695D4A]/20 pointer-events-none" />
                          
                          <div className="space-y-5 relative pt-4">
                            <div className="text-center pb-2 border-b border-neutral-200">
                              <span className="text-[9px] font-mono tracking-[0.25em] text-[#9A7D56] block uppercase">Plates 05 — Heart of Table</span>
                              <h3 className="text-lg font-serif text-neutral-900 uppercase tracking-widest font-bold font-extrabold">Primary Mains</h3>
                            </div>

                            <div className="space-y-5">
                              {mains.map((item) => (
                                <div 
                                  key={item.id} 
                                  className="space-y-1 group cursor-pointer"
                                  onMouseEnter={() => setHoveredItem(item)}
                                  onClick={() => setSelectedItem(item)}
                                >
                                  <div className="flex justify-between items-baseline">
                                    <h4 className="font-serif italic font-bold text-xs text-neutral-900 group-hover:text-[#9A7D56] transition-colors">
                                      {item.name}
                                    </h4>
                                    <span className="flex-1 border-b border-dotted border-neutral-300 mx-2" />
                                    <span className="font-mono text-xs font-bold text-[#9A7D56]">{item.price}</span>
                                  </div>
                                  <p className="text-[10px] text-neutral-600 font-sans font-light leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 pb-2 border-t border-neutral-250 flex justify-between items-center text-[8px] font-mono text-neutral-500 uppercase tracking-wider relative">
                            <span>Hickory & Aspen Smoke Infusion</span>
                            <span>Shared Abundance</span>
                          </div>
                        </div>

                        {/* Right Page: Accompaniments */}
                        <div className="p-8 md:p-12 bg-[#FAF6EE] relative flex flex-col justify-between">
                          <div className="absolute inset-4 border border-dashed border-[#695D4A]/20 pointer-events-none" />
                          
                          <div className="space-y-4 pt-4 relative">
                            <div className="text-center pb-2 border-b border-neutral-200">
                              <span className="text-[9px] font-mono tracking-[0.25em] text-[#9A7D56] block uppercase">Plates 06 — Accessories</span>
                              <h3 className="text-lg font-serif text-neutral-900 uppercase tracking-widest font-bold font-extrabold">Accompaniments</h3>
                            </div>

                            <div className="space-y-4 pt-1">
                              {accompaniments.map((item) => (
                                <div 
                                  key={item.id} 
                                  className="space-y-0.5 group cursor-pointer"
                                  onMouseEnter={() => setHoveredItem(item)}
                                  onClick={() => setSelectedItem(item)}
                                >
                                  <div className="flex justify-between items-baseline">
                                    <h4 className="font-serif italic font-bold text-[11px] text-neutral-900 group-hover:text-[#9A7D56] transition-colors">
                                      {item.name}
                                    </h4>
                                    <span className="flex-1 border-b border-dotted border-neutral-300 mx-1.5" />
                                    <span className="font-mono text-[11px] font-bold text-[#9A7D56]">{item.price}</span>
                                  </div>
                                  <p className="text-[9.5px] text-neutral-600 font-sans font-light leading-normal line-clamp-1 group-hover:line-clamp-none">
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 pb-2 border-t border-neutral-250 flex justify-between items-center text-[8px] font-mono text-neutral-500 uppercase tracking-wider relative">
                            <span>Baked and Harvested Daily</span>
                            <span>Victorian Sourced Wood</span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* ==================== SPREAD INDEX 4: DESSERTS & CHEESE ==================== */}
                    {spreadIdx === 4 && (
                      <>
                        {/* Left Page: Desserts */}
                        <div className="p-8 md:p-12 bg-[#FAF6EE] relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-300">
                          <div className="absolute inset-4 border border-dashed border-[#695D4A]/20 pointer-events-none" />
                          
                          <div className="space-y-5 relative pt-4">
                            <div className="text-center pb-2 border-b border-neutral-200">
                              <span className="text-[9px] font-mono tracking-[0.25em] text-[#9A7D56] block uppercase font-bold">Plates 07 — Sugar & Ember</span>
                              <h3 className="text-lg font-serif text-neutral-900 uppercase tracking-widest font-bold font-extrabold">Desserts</h3>
                            </div>

                            <div className="space-y-4.5">
                              {desserts.map((item) => (
                                <div 
                                  key={item.id} 
                                  className="space-y-1 group cursor-pointer"
                                  onMouseEnter={() => setHoveredItem(item)}
                                  onClick={() => setSelectedItem(item)}
                                >
                                  <div className="flex justify-between items-baseline">
                                    <h4 className="font-serif italic font-bold text-xs text-neutral-900 group-hover:text-[#9A7D56] transition-colors">
                                      {item.name}
                                    </h4>
                                    <span className="flex-1 border-b border-dotted border-neutral-300 mx-2" />
                                    <span className="font-mono text-xs font-bold text-[#9A7D56]">{item.price}</span>
                                  </div>
                                  <p className="text-[10px] text-neutral-600 font-sans font-light leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 pb-2 border-t border-neutral-250 flex justify-between items-center text-[8px] font-mono text-neutral-500 uppercase tracking-wider relative">
                            <span>Baked and Assembled Intimately</span>
                            <span>Sweet Finishes</span>
                          </div>
                        </div>

                        {/* Right Page: Cheese Selection & Sign-off Charter */}
                        <div className="p-8 md:p-12 bg-[#FAF6EE] relative flex flex-col justify-between">
                          <div className="absolute inset-4 border border-dashed border-[#695D4A]/20 pointer-events-none" />
                          
                          <div className="space-y-4 pt-4 relative">
                            <div className="text-center pb-2 border-b border-neutral-200">
                              <span className="text-[9px] font-mono tracking-[0.25em] text-[#9A7D56] block uppercase text-gold-400 font-bold">Plates 08 — Dairy & Caves</span>
                              <h3 className="text-lg font-serif text-neutral-900 uppercase tracking-widest font-bold font-extrabold">Cheese Selection</h3>
                            </div>

                            <div className="space-y-4">
                              {cheese.map((item) => (
                                <div 
                                  key={item.id} 
                                  className="space-y-0.5 group cursor-pointer"
                                  onMouseEnter={() => setHoveredItem(item)}
                                  onClick={() => setSelectedItem(item)}
                                >
                                  <div className="flex justify-between items-baseline">
                                    <h4 className="font-serif italic font-bold text-xs text-neutral-900 group-hover:text-[#9A7D56] transition-colors">
                                      {item.name}
                                    </h4>
                                    <span className="flex-1 border-b border-dotted border-neutral-300 mx-2" />
                                    <span className="font-mono text-xs font-bold text-[#9A7D56]">{item.price}</span>
                                  </div>
                                  <p className="text-[10px] text-neutral-600 font-sans font-light leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Sourcing Charter Sign-off */}
                          <div className="pt-3 border-t border-neutral-250 space-y-1 relative text-[10px] text-neutral-800 font-serif leading-relaxed italic text-center">
                            <span className="block text-[8px] font-mono tracking-widest text-[#9A7D56] uppercase font-bold not-italic">THE SOURCING AGREEMENT</span>
                            <p className="text-[9.5px] text-neutral-600 leading-snug font-sans font-light">
                              We commit strictly to regional organic growers and ocean gatherers. Every timber piece used inside the hearth stems from sustainable plantations.
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* SENSORY DUAL PROJECTION CABINET (4 of 12 Col-Span Width for dynamic hovering images!) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 text-left">
              
              <div className="bg-[#0e0e0e]/65 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
                
                <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-gold-400 mb-4 font-bold flex items-center gap-1.5 border-b border-white/5 pb-3">
                  <Compass className="w-4 h-4 text-gold-300" />
                  <span>Interactive Plate Projection</span>
                </h4>

                <AnimatePresence mode="wait">
                  {hoveredItem || selectedItem ? (
                    <motion.div
                      key={(hoveredItem || selectedItem)?.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      {/* Interactive visual plate if exists */}
                      {(hoveredItem || selectedItem)?.image ? (
                        <div className="relative aspect-video rounded-lg overflow-hidden border border-white/15 bg-neutral-950">
                          <img 
                            src={(hoveredItem || selectedItem)?.image} 
                            alt={(hoveredItem || selectedItem)?.name} 
                            className="w-full h-full object-cover filter brightness-90 contrast-[1.05] hover:scale-103 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <span className="absolute bottom-2.5 left-2.5 bg-neutral-950/80 border border-white/10 rounded px-2 py-0.5 text-[8.5px] font-mono text-gold-300 uppercase tracking-widest">
                            Visual Specimen
                          </span>
                        </div>
                      ) : (
                        <div className="aspect-video rounded-lg border border-dashed border-white/10 bg-neutral-950/40 flex flex-col items-center justify-center text-center p-4">
                          <Wine className="w-8 h-8 text-neutral-600 mb-2" />
                          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Baked Warm / Crafted Embers Only</span>
                        </div>
                      )}

                      <div className="space-y-2">
                        <h5 className="font-serif italic font-extrabold text-neutral-100 text-base leading-snug">
                          {(hoveredItem || selectedItem)?.name}
                        </h5>
                        <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light">
                          {(hoveredItem || selectedItem)?.description}
                        </p>
                      </div>

                      {/* Display recipe ingredients / specifications if present */}
                      {(hoveredItem || selectedItem)?.ingredients && (
                        <div className="space-y-1.5 pt-2 border-t border-white/5 font-mono text-[9px] text-neutral-400">
                          <span className="block text-gold-400 font-bold uppercase tracking-wider">Plate Ingredients:</span>
                          <div className="flex flex-wrap gap-1">
                            {(hoveredItem || selectedItem)?.ingredients?.map(ing => (
                              <span key={ing} className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[8.5px]">
                                {ing}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Detail page notification */}
                      <p className="text-[9px] text-neutral-500 font-mono italic pt-1 text-center">
                        * Ingredients gathered fresh from Victorian bio-farms daily.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty-projection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      className="text-center py-12 space-y-3"
                    >
                      <Info className="w-10 h-10 text-neutral-600 mx-auto" />
                      <p className="text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed font-sans font-light">
                        Glance or hover over any specific dish item on the physical paper menu card to project its photographic visual presentation and organic ingredients deck.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>

          {/* SPREAD INDICATOR CONTROLS */}
          <div className="flex items-center space-x-6 z-20">
            <button
              onClick={() => {
                setSpreadIdx(prev => Math.max(0, prev - 1));
                setHoveredItem(null);
              }}
              disabled={spreadIdx === 0}
              className={`p-3.5 border rounded-full transition-all flex items-center justify-center cursor-pointer ${
                spreadIdx === 0 
                  ? 'border-white/5 text-neutral-700 cursor-not-allowed' 
                  : 'border-white/10 hover:border-gold-400 text-neutral-200 hover:text-gold-300 hover:scale-105'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Breadcrumbs */}
            <div className="flex items-center space-x-3.5 font-mono text-xs text-neutral-400">
              {[0, 1, 2, 3, 4].map(idx => (
                <button
                  key={idx}
                  onClick={() => {
                    setSpreadIdx(idx);
                    setHoveredItem(null);
                  }}
                  className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                    spreadIdx === idx 
                      ? 'bg-gold-400 text-neutral-950 font-bold scale-110' 
                      : 'hover:text-neutral-200'
                  }`}
                  id={`spread-dot-${idx}`}
                >
                  {idx === 0 ? 'Cover' : `Part 0${idx}`}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setSpreadIdx(prev => Math.min(4, prev + 1));
                setHoveredItem(null);
              }}
              disabled={spreadIdx === 4}
              className={`p-3.5 border rounded-full transition-all flex items-center justify-center cursor-pointer ${
                spreadIdx === 4 
                  ? 'border-white/5 text-neutral-700 cursor-not-allowed' 
                  : 'border-white/10 hover:border-gold-400 text-neutral-200 hover:text-gold-300 hover:scale-105'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Immersive menu guidelines note */}
          <div className="text-center text-[11px] text-neutral-400 font-sans flex items-center gap-1.5 bg-white/2 p-3.5 rounded-lg border border-white/5 max-w-md">
            <Info className="w-4 h-4 text-gold-400 shrink-0 animate-bounce" />
            <p>Every dish reflects custom daily changes. Dietary integrations are happily supported; kindly advise our cellar team during your table booking.</p>
          </div>

        </div>
      )}

      {/* =========================================================================
          VIEW B: DRINKS PAGE - "just show the Bear, Alcohol and other types of bears .."
          ========================================================================= */}
      {mode === 'drinks' && (
        <div className="space-y-10">
          
          {/* Quick Informative Header */}
          <div className="bg-[#0e0e0e]/50 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
            <div className="space-y-2 text-left">
              <span className="text-[10px] font-mono text-gold-400 tracking-[0.3em] uppercase block font-bold">Unfiltered Tap Cask Cellars</span>
              <h3 className="text-xl md:text-2xl font-serif text-neutral-50 uppercase tracking-wider">Premium Beers & Ales</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light max-w-xl">
                We present an elite gallery of smoked porters, wild saison sours, and crisp pilsners cold-conditioned in underground vaults.
              </p>
            </div>
            
            <span className="text-xs font-mono text-gold-300 border border-gold-300/30 px-3 py-1.5 rounded uppercase tracking-widest bg-gold-400/5">
              🍺 {beers.length} Crafts Available
            </span>
          </div>

          {/* GRID OF LIQUIDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            
            {/* ========= BEER, ALCOHOL, AND OTHER TYPES OF BEERS ========= */}
            {beers.map((beer, idx) => (
              <motion.div
                key={beer.id}
                id={`beer-card-${beer.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="bg-neutral-900/40 border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-gold-400/40 hover:shadow-gold-400/5 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Image box with badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950 border-b border-white/10">
                    <img 
                      src={beer.image} 
                      alt={beer.name} 
                      className="w-full h-full object-cover filter brightness-80 group-hover:brightness-100 group-hover:scale-103 transition-transform duration-[4000ms]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
                    
                    <span className="absolute top-3 left-3 bg-[#0a0a0a]/90 text-gold-400 font-mono text-[8px] font-bold tracking-widest border border-gold-400/20 px-2 py-1 rounded">
                      Craft Brew
                    </span>

                    <span className="absolute bottom-3 right-3 bg-neutral-900 border border-white/10 text-white font-mono text-xs font-semibold px-2.5 py-1 rounded">
                      {beer.price}
                    </span>
                  </div>

                  {/* Metadata & Title */}
                  <div className="px-5 space-y-3 text-left">
                    <div>
                      <div className="flex justify-between items-baseline gap-2">
                        <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest leading-none font-bold">CUTLER TAP SELECTION</span>
                        <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest bg-white/5 border border-white/10 px-1.5 p-0.5 rounded leading-none">Victorian Cask</span>
                      </div>
                      <h4 className="text-base font-serif font-bold text-neutral-50 group-hover:text-gold-300 transition-colors uppercase tracking-wide pt-1 leading-snug">
                        {beer.name}
                      </h4>
                      <p className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest font-light">Craft Barrel</p>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed font-sans font-light">
                      {beer.description}
                    </p>

                    {/* Tasting Notes Highlight Box */}
                    {beer.ingredients && (
                      <div className="bg-white/[0.02] border border-white/5 p-3 rounded-lg text-[10.5px] font-sans flex items-start gap-1.5 font-light text-neutral-400">
                        <span className="text-gold-400 font-mono text-xs uppercase shrink-0">Notes:</span>
                        <p className="italic">"Brewed locally in Victorian wood-hives with dry yeasts, crystal malts, and spring hops."</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Beer Footer Tags */}
                <div className="mt-6 pt-4 pb-4 px-5 border-t border-white/5 flex flex-wrap gap-1 justify-start">
                  {beer.tags?.map(tag => (
                    <span 
                      key={tag}
                      className="text-[8px] font-mono tracking-wider bg-white/5 border border-white/10 px-2 py-0.5 rounded text-neutral-400 uppercase font-light"
                    >
                      {tag}
                    </span>
                  )) || <span className="text-[8px] font-mono text-neutral-500 uppercase">PREMIUM BREW</span>}
                </div>
              </motion.div>
            ))}

          </div>

          {/* Quick info footer */}
          <div className="mt-12 bg-white/[0.01] border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block font-bold">Secure Taproom Counter</span>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light max-w-lg">
                Our draft handles turn and rest continually based on brew batch maturation cycles. Book a seating countertop to enjoy unreleased keg projects.
              </p>
            </div>
            
            <button
              onClick={() => onNavigate('reservation')}
              className="px-6 py-3 bg-[#9A7D56] hover:bg-[#b08e64] text-[#FAF6EE] font-bold rounded text-xs font-mono uppercase tracking-widest cursor-pointer transition-all shrink-0 shadow-lg shadow-[#9A7D56]/10"
            >
              Secure Counter Seating
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
