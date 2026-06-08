import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Mail, 
  Phone, 
  User, 
  Landmark, 
  HelpCircle, 
  X, 
  Flame, 
  ShieldAlert, 
  Wine, 
  Compass, 
  Utensils, 
  Sparkles 
} from 'lucide-react';
import { BookingDetails } from '../types';

interface ReservationProps {
  isModal?: boolean;
  onClose?: () => void;
  onOpenModal?: () => void;
}

export default function Reservation({ isModal = false, onClose, onOpenModal }: ReservationProps) {
  const [step, setStep] = useState<number>(1);
  const [details, setDetails] = useState<Partial<BookingDetails>>({
    guests: 2,
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    area: 'main-salon',
    requests: ''
  });

  const areas = [
    {
      id: 'main-salon',
      title: 'The Great Hearth Salon',
      subtitle: 'Atmospheric Woodfire Theater',
      description: 'Dine in proximity to our active dual-hearth firewood fire pits. Rich aromas of charcoal oak, vibrant energy, and high stone ceilings.',
      charge: 'No booking fee',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      badge: 'Active Oak Fire'
    },
    {
      id: 'cellar-vault',
      title: 'The Stone Cellar Vault',
      subtitle: 'Subterranean Sanctuary',
      description: 'Nestled deep inside our 19th-century cellar vaults. Absolute peace, surrounded by candlelit brick alcoves housing 4,000 vintage wines.',
      charge: 'Minimum spend $150pp',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
      badge: 'Limestone Vault'
    },
    {
      id: 'chefs-counter',
      title: 'The Chef’s Fire Counter',
      subtitle: 'Interactive High-Energy Counter',
      description: 'Sits only 8 guests. Observe the choreography firsthand. Intimate interaction with Chef Paul Cutler, custom course edits.',
      charge: 'Seat charge $50',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
      badge: 'Interactive Counter'
    }
  ];

  const times = ['17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

  const triggerNext = () => {
    if (step === 1 && (!details.date || !details.time)) return;
    if (step === 2 && !details.area) return;
    setStep(prev => prev + 1);
  };

  const triggerPrev = () => {
    setStep(prev => prev - 1);
  };

  const executeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  // RENDER BOOKING FORM ONLY (WHEN IN MODAL MODE)
  if (isModal) {
    return (
      <div className="bg-[#0e0e0e]/95 border border-white/10 rounded-lg p-6 md:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 rounded-full text-neutral-400 hover:text-gold-300 transition-colors cursor-pointer"
            aria-label="Dismiss booking"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <div className="text-center mb-8">
          <p className="text-[10px] font-mono tracking-[0.3em] text-gold-400 uppercase mb-1">
            Secure Your Table Account
          </p>
          <h2 className="text-2xl md:text-3xl font-serif tracking-tight text-neutral-100">
            Fine Dining Booking
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto mt-3" />
        </div>

        {/* Progress bar */}
        {step < 4 && (
          <div className="flex items-center justify-center space-x-3 md:space-x-6 mb-8 font-mono text-[9px] md:text-[10px] tracking-widest text-neutral-500">
            <span className={`pb-1 border-b transition-all ${step >= 1 ? 'text-gold-350 border-gold-400' : 'border-transparent'}`}>01 DETS</span>
            <span className="text-white/10">|</span>
            <span className={`pb-1 border-b transition-all ${step >= 2 ? 'text-gold-350 border-gold-400' : 'border-transparent'}`}>02 SALON</span>
            <span className="text-white/10">|</span>
            <span className={`pb-1 border-b transition-all ${step >= 3 ? 'text-gold-350 border-gold-400' : 'border-transparent'}`}>03 PROFILE</span>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="modal-step-1"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400">Party Size</label>
                  <div className="relative flex items-center bg-black border border-white/15 rounded px-3 py-2 focus-within:border-gold-400/70">
                    <Users className="w-4 h-4 text-gold-400 mr-2.5" />
                    <select
                      id="modal-guest-select"
                      value={details.guests}
                      onChange={(e) => setDetails({ ...details, guests: Number(e.target.value) })}
                      className="w-full bg-transparent text-neutral-200 focus:outline-none text-xs font-mono"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(qty => (
                        <option key={qty} value={qty} className="bg-neutral-900 text-neutral-200">{qty} Guests</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400">Choice of Date</label>
                  <div className="relative flex items-center bg-black border border-white/15 rounded px-3 py-2 focus-within:border-gold-400/70">
                    <Calendar className="w-4 h-4 text-gold-400 mr-2.5" />
                    <input
                      id="modal-date-input"
                      type="date"
                      value={details.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setDetails({ ...details, date: e.target.value })}
                      className="w-full bg-transparent text-neutral-200 focus:outline-none text-xs font-mono"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400">Available Seating Times</label>
                  <div className="grid grid-cols-4 gap-2">
                    {times.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setDetails({ ...details, time: t })}
                        className={`py-2 rounded text-[10px] font-mono border transition-all ${
                          details.time === t 
                            ? 'bg-gold-400/20 border-gold-400 text-gold-300' 
                            : 'bg-black border-white/10 hover:border-white/20 text-neutral-400'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={triggerNext}
                  className="px-5 py-2.5 bg-gold-400 hover:bg-gold-500 text-neutral-950 text-xs font-mono tracking-widest uppercase rounded flex items-center gap-2 transition-all cursor-pointer font-bold"
                >
                  <span>Choose Location</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="modal-step-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6 w-full"
            >
              <div className="text-center md:text-left">
                <h3 className="text-xs font-mono tracking-widest text-neutral-400 uppercase">Step 02 — Seating Ambience</h3>
                <h4 className="text-lg font-serif text-neutral-100 font-medium">Select Your Dining Environment</h4>
                <p className="text-xs text-neutral-450 mt-1">Each chamber offers an entirely unique micro-sensory climate & culinary focus.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {areas.map(area => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setDetails({ ...details, area: area.id as any })}
                    className={`group text-left rounded-lg overflow-hidden border transition-all duration-300 flex flex-col justify-between h-full cursor-pointer relative bg-neutral-900/40 ${
                      details.area === area.id 
                        ? 'border-gold-400 bg-gold-400/5 ring-1 ring-gold-400/40 shadow-xl' 
                        : 'border-white/15 hover:border-white/30 hover:bg-neutral-800/10'
                    }`}
                  >
                    {/* Visual container */}
                    <div className="relative aspect-[16/10] overflow-hidden w-full bg-neutral-950">
                      <img 
                        src={area.image} 
                        alt={area.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 brightness-75 group-hover:brightness-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Active Circle Badge */}
                      <span className={`absolute top-2.5 right-2.5 w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                        details.area === area.id 
                          ? 'border-gold-400 bg-gold-400 text-neutral-950' 
                          : 'border-white/20 bg-black/40 text-transparent'
                      }`}>
                        <span className="text-[10px] font-bold">✓</span>
                      </span>

                      {/* Atmosphere badge indicator */}
                      <span className="absolute bottom-2.5 left-2.5 text-[8px] font-mono tracking-widest bg-[#0a0a0a]/90 text-gold-300 border border-gold-400/25 px-1.5 py-0.5 rounded uppercase">
                        {area.badge}
                      </span>
                    </div>

                    {/* Meta info container */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1">
                        <h4 className="font-serif text-sm text-neutral-200 group-hover:text-gold-300 transition-colors uppercase tracking-wide font-bold">{area.title}</h4>
                        <p className="text-[9px] font-mono text-neutral-450 uppercase tracking-widest leading-none pb-1">{area.subtitle}</p>
                        <p className="text-[11px] text-neutral-400 font-sans leading-relaxed font-light">{area.description}</p>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-neutral-500 uppercase tracking-wider">Access Details</span>
                        <span className="text-gold-400 font-semibold">{area.charge}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-between bg-black/20 p-2.5 rounded-lg border border-white/5 items-center">
                <button
                  type="button"
                  onClick={triggerPrev}
                  className="px-4 py-2 hover:bg-white/5 border border-white/10 rounded text-[10px] font-mono text-neutral-440 hover:text-white flex items-center gap-1.5 cursor-pointer transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>PREV</span>
                </button>

                {details.area && (
                  <p className="text-[10px] font-mono text-gold-300 hidden md:block">
                    Selected: <span className="font-bold">{areas.find(a => a.id === details.area)?.title}</span>
                  </p>
                )}

                <button
                  type="button"
                  onClick={triggerNext}
                  className="px-5 py-2.5 bg-gold-400 hover:bg-gold-500 text-neutral-950 text-xs font-mono tracking-widest uppercase rounded flex items-center gap-2 font-bold cursor-pointer transition-all shadow-md shadow-gold-500/10"
                >
                  <span>Guest Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="modal-step-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <form onSubmit={executeSubmit} className="space-y-4">
                <h3 className="text-sm font-mono tracking-widest text-neutral-300 uppercase">Guest Profile Setup</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[9px] font-mono uppercase tracking-widest text-neutral-400">Your Full Name *</label>
                    <div className="flex items-center bg-black border border-white/15 rounded px-2.5 py-1.5 focus-within:border-gold-400/80">
                      <User className="w-3.5 h-3.5 text-neutral-500 mr-2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={details.name || ''}
                        onChange={(e) => setDetails({ ...details, name: e.target.value })}
                        className="w-full bg-transparent focus:outline-none text-xs text-neutral-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[9px] font-mono uppercase tracking-widest text-neutral-400">Email Address *</label>
                    <div className="flex items-center bg-black border border-white/15 rounded px-2.5 py-1.5 focus-within:border-gold-400/80">
                      <Mail className="w-3.5 h-3.5 text-neutral-500 mr-2" />
                      <input
                        type="email"
                        required
                        placeholder="e.g. eleanor@vance.com"
                        value={details.email || ''}
                        onChange={(e) => setDetails({ ...details, email: e.target.value })}
                        className="w-full bg-transparent focus:outline-none text-xs text-neutral-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[9px] font-mono uppercase tracking-widest text-neutral-400">Phone Number *</label>
                    <div className="flex items-center bg-black border border-white/15 rounded px-2.5 py-1.5 focus-within:border-gold-400/80">
                      <Phone className="w-3.5 h-3.5 text-neutral-500 mr-2" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +1 555-0142"
                        value={details.phone || ''}
                        onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                        className="w-full bg-transparent focus:outline-none text-xs text-neutral-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[9px] font-mono uppercase tracking-widest text-neutral-400">Dietary Limits & Celebrations</label>
                    <div className="flex items-center bg-black border border-white/15 rounded px-2.5 py-1.5 focus-within:border-gold-400/80">
                      <input
                        type="text"
                        placeholder="e.g. Gluten Free, Honeymoon details"
                        value={details.requests || ''}
                        onChange={(e) => setDetails({ ...details, requests: e.target.value })}
                        className="w-full bg-transparent focus:outline-none text-xs text-neutral-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded p-3 text-[10px] text-neutral-400 leading-relaxed font-light flex gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <p>
                    By clicking Confirm, you accept our standard booking policies. Standard cancellations within 24 hours incur an absolute $50pp deposit resolution.
                  </p>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={triggerPrev}
                    className="px-4 py-2 border border-white/10 rounded text-[10px] font-mono text-neutral-400 hover:text-white flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>PREV</span>
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-neutral-950 text-xs font-mono tracking-widest uppercase rounded font-bold transition-all shadow-lg shadow-gold-500/10"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="modal-step-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-5"
            >
              <div className="inline-flex items-center justify-center p-3.5 bg-gold-400/10 border border-gold-400/30 rounded-full">
                <CheckCircle2 className="w-10 h-10 text-gold-400" />
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-mono tracking-[0.25em] text-gold-400 uppercase">Chamber Secured</span>
                <h3 className="text-xl font-serif text-neutral-100">Booking Confirmed</h3>
                <p className="text-xs text-neutral-450 leading-relaxed max-w-sm mx-auto">
                  Fantastic! We have reserved your chamber space. A physical letter mockup has been piped to <span className="text-neutral-200 font-mono text-[11px] underline">{details.email}</span>.
                </p>
              </div>

              <div className="border border-white/10 bg-black rounded p-4 font-mono text-[10px] text-left max-w-sm mx-auto space-y-2">
                <div className="flex justify-between font-bold border-b border-white/10 pb-1.5 text-gold-250">
                  <span>CUTLER BOOTH</span>
                  <span>#CTL-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">DINERS:</span>
                  <span className="text-neutral-300 font-bold">{details.guests} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">SCHED:</span>
                  <span className="text-neutral-300 font-bold">{details.date} at {details.time}</span>
                </div>
                <div className="flex justify-between text-gold-400">
                  <span className="text-neutral-500">ZONE:</span>
                  <span>{areas.find(a => a.id === details.area)?.title}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 border border-white/15 hover:border-gold-400 text-[10px] font-mono uppercase tracking-widest text-neutral-400 hover:text-white rounded transition-colors"
                >
                  Excellent, Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // RENDER GORGEOUS RESERVATION LANDING COVER PAGE (WHEN RENDERED IN CORES)
  return (
    <div className="space-y-0">
      
      {/* 1. GORGEOUS HERO COVER BACKGROUND TRANSITION */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* HD Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80" 
            alt="The Grand Cutler Salon Room" 
            className="w-full h-full object-cover scale-105 filter brightness-35 contrast-105"
            referrerPolicy="no-referrer"
          />
          {/* Shimmer overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/80" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 md:space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-400/10 border border-gold-400/20 rounded-full text-[10px] font-mono tracking-[0.25em] text-gold-300 uppercase mb-2">
              <Sparkles className="w-3 h-3 text-gold-300" />
              Secured Dining Chambers
            </span>
            <h1 className="text-4xl md:text-7xl font-serif text-neutral-50 tracking-tight leading-none">
              A Sensory Chamber <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 font-light italic">
                of Fire & Time
              </span>
            </h1>
            <p className="text-xs md:text-sm font-mono tracking-[0.15em] text-neutral-400 max-w-2xl mx-auto uppercase leading-relaxed pt-2">
              Our hearth burns daily. Secure your reservation in the Stone vaults, the fire counter, or the glorious central pavilion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2"
          >
            {/* MAKE RESERVATION BUTTON -> TRIGGERS MODAL POPUP */}
            <button
              type="button"
              id="hero-landing-book-btn"
              onClick={onOpenModal}
              className="px-8 py-4 bg-gold-400 hover:bg-gold-500 text-neutral-950 font-mono tracking-widest text-xs uppercase font-bold rounded cursor-pointer transition-all hover:scale-103 shadow-xl shadow-gold-400/10 hover:shadow-gold-400/20"
            >
              Secure Chamber Table
            </button>
            
            <a
              href="#philosophy-sec"
              className="px-6 py-4 border border-white/10 hover:border-white/30 text-xs font-mono tracking-widest uppercase text-neutral-200 rounded cursor-pointer transition-colors backdrop-blur-sm"
            >
              Explore Environments
            </a>
          </motion.div>
        </div>

        {/* Scroll helper */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center animate-bounce opacity-50">
          <span className="block text-[8px] font-mono uppercase tracking-[0.3em] text-neutral-400">explore lower</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold-400 rotate-90 mx-auto mt-1" />
        </div>
      </section>

      {/* 2. PHILOSOPHY INTRO SECTION (REFINED SCRIPTURE CARD) */}
      <section id="philosophy-sec" className="py-20 md:py-32 max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#0e0e0e]/40 border border-white/5 rounded-2xl p-8 md:p-16 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 left-10 w-40 h-[1px] bg-gradient-to-r from-gold-400/30 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-[10px] font-mono tracking-[0.3em] text-gold-400 uppercase block">The Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-100 tracking-tight leading-snug">
                Where Raw Embers Met <br />
                The Forgotten Back Vintages
              </h2>
              <div className="w-12 h-[1px] bg-gold-400 mt-4 mb-2" />
            </div>

            <div className="lg:col-span-7 text-left">
              <p className="text-neutral-400 font-sans text-sm md:text-base font-light leading-relaxed">
                At Cutler, reservations are not mere schedules—they are a custom invitation into a sacred culinary theatre. We restrict our nightly seating window to ensure absolute control over temperature, aroma, and choreography. Over 80% of our products are harvested or aged within the district. We maintain a zero-waste wood cabinet that feeds our double hearth with organic fruitwoods, infusing every dish with the spirits of the elements.
              </p>
              <p className="text-neutral-500 font-sans text-xs pt-4 font-light italic leading-normal">
                "The table holds memory. Every coal lit carries oak sugar; every vintage cork pulled releases twenty seasons of sun." ✨ &mdash; Chef Paul Cutler
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MULTI-CHAMBER VISUAL GALLERY (CINEMATIC SCENES WITH SCROLL REVEAL & GLASSMORPHISM) */}
      <div className="space-y-0 relative">
        
        {/* ROOM 1: SALON (Left FLOATING Card, Dark Left Cinema Gradient) */}
        <section className="relative h-screen flex items-center overflow-hidden border-b border-white/5">
          {/* Parallax Panoramic Background */}
          <motion.div 
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1.03 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80" 
              alt="The Great Hearth Salon" 
              className="w-full h-full object-cover filter brightness-45 contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Cinema Gradient Mask for supreme text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/45 to-transparent z-1" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-1" />

          {/* Floating Glassmorphic Container Card with scroll reveal */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex justify-start">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a0a0a]/50 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-2xl max-w-xl shadow-2xl space-y-6 text-left"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.35em] text-gold-400 uppercase block font-bold">ENVIRON 01</span>
                <h3 className="text-3xl md:text-4xl font-serif text-neutral-50 tracking-tight">
                  The Great Hearth Salon
                </h3>
              </div>
              
              <div className="w-12 h-[1px] bg-gold-400/50" />
              
              <p className="text-neutral-300 leading-relaxed font-sans text-sm font-light">
                Sit in the central nerve of our dining theater, surrounded by towering brick hearth arches and the reassuring crackle of burning white oak. The rich, wood-spiced aroma of singed elderberry honey and curing duck thighs drifts lazily overhead. Designed for those who value warmth, active acoustic energy, and epic volumetric proportions.
              </p>
              
              <div className="border-t border-white/10 pt-6 flex flex-wrap gap-y-4 items-center justify-between text-[10px] icon-row font-mono text-neutral-400 uppercase tracking-widest">
                <span className="flex items-center gap-2"><Flame className="w-4 h-4 text-gold-400" /> Active Firepit</span>
                <span className="bg-gold-400/5 px-2.5 py-1 rounded border border-gold-400/20 text-gold-300">No Booking Surcharge</span>
              </div>
            </motion.div>
          </div>

          {/* Subtle Corner Status Line */}
          <span className="absolute bottom-6 right-6 text-[9px] font-mono text-neutral-500 uppercase tracking-widest z-10">
            Cutler Ground Floor • Primary Salon
          </span>
        </section>

        {/* ROOM 2: CELLAR (Right FLOATING Card, Dark Right Cinema Gradient) */}
        <section className="relative h-screen flex items-center overflow-hidden border-b border-white/5">
          {/* Parallax Panoramic Background */}
          <motion.div 
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1.03 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=80" 
              alt="The Stone Cellar Vaults" 
              className="w-full h-full object-cover filter brightness-45 contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Cinema Gradient Mask for supreme text contrast */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/95 via-black/45 to-transparent z-1" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-1" />

          {/* Floating Glassmorphic Container Card with scroll reveal */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a0a0a]/50 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-2xl max-w-xl shadow-2xl space-y-6 text-left"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.35em] text-gold-400 uppercase block font-bold">ENVIRON 02</span>
                <h3 className="text-3xl md:text-4xl font-serif text-neutral-50 tracking-tight">
                  The Stone Cellar Vaults
                </h3>
              </div>
              
              <div className="w-12 h-[1px] bg-gold-400/50" />
              
              <p className="text-neutral-300 leading-relaxed font-sans text-sm font-light">
                Nestled deep beneath our brick foundations lies our primary wine repository. Dine inside secluded, candlelit limestone niches surrounded by legendary red wine bins dating back to the mid-20th century. This chamber maintains absolute acoustics, dim amber hues, and steady climate conditions—designed for deep conversations, celebratory vintage flights, and private dinners.
              </p>
              
              <div className="border-t border-white/10 pt-6 flex flex-wrap gap-y-4 items-center justify-between text-[10px] icon-row font-mono text-neutral-400 uppercase tracking-widest">
                <span className="flex items-center gap-2"><Wine className="w-4 h-4 text-gold-400" /> Private Sommelier Curation</span>
                <span className="bg-gold-400/5 px-2.5 py-1 rounded border border-gold-400/20 text-gold-300">Min spend $150 pp</span>
              </div>
            </motion.div>
          </div>

          {/* Subtle Corner Status Line */}
          <span className="absolute bottom-6 left-6 text-[9px] font-mono text-neutral-500 uppercase tracking-widest z-10">
            Subterranean Vault • Wine Sanctuary
          </span>
        </section>

        {/* ROOM 3: CHEF'S COUNTER (Left FLOATING Card, Dark Left Cinema Gradient) */}
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Parallax Panoramic Background */}
          <motion.div 
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1.03 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1600&q=80" 
              alt="The Chef’s Fire Counter" 
              className="w-full h-full object-cover filter brightness-45 contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Cinema Gradient Mask for supreme text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/45 to-transparent z-1" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-1" />

          {/* Floating Glassmorphic Container Card with scroll reveal */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex justify-start">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a0a0a]/50 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-2xl max-w-xl shadow-2xl space-y-6 text-left"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.35em] text-gold-400 uppercase block font-bold">ENVIRON 03</span>
                <h3 className="text-3xl md:text-4xl font-serif text-neutral-50 tracking-tight">
                  The Chef’s Fire Counter
                </h3>
              </div>
              
              <div className="w-12 h-[1px] bg-gold-400/50" />
              
              <p className="text-neutral-300 leading-relaxed font-sans text-sm font-light">
                An exclusive, interactive stone counter with only eight high leather back-seats positioned right inside the preparation line. Experience custom dishes served directly by Chef Paul Cutler with personal storytelling, detailed sourcing notes, and live hearth adjustment.
              </p>
              
              <div className="border-t border-white/10 pt-6 flex flex-wrap gap-y-4 items-center justify-between text-[10px] icon-row font-mono text-neutral-400 uppercase tracking-widest">
                <span className="flex items-center gap-2"><Compass className="w-4 h-4 text-gold-400" /> Interactive Theatre</span>
                <span className="bg-gold-400/5 px-2.5 py-1 rounded border border-gold-400/20 text-gold-300">Surcharge $50 seat</span>
              </div>
            </motion.div>
          </div>

          {/* Subtle Corner Status Line */}
          <span className="absolute bottom-6 right-6 text-[9px] font-mono text-neutral-500 uppercase tracking-widest z-10">
            Kitchen Frontier • Counter Seating For Eight
          </span>
        </section>

      </div>

      {/* 4. FINAL GORGEOUS RESERVATION CARD FOOT PANEL */}
      <section className="py-20 md:py-32 bg-neutral-950/90 border-t border-white/5 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-gold-400/5 filter blur-3xl rounded-full" />
        
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <span className="text-[10px] font-mono tracking-[0.3em] text-gold-400 uppercase">EXPERIENCE IN METROPOLIS</span>
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-100">Make Your Seating Record</h2>
          <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light max-w-lg mx-auto">
            Our booking grid is accessible up to ninety days in advance. All cancellations within twenty-four hours will resolve on a fifty dollar per person deposit constraint.
          </p>
          <div className="pt-4">
            {/* CTA BUTTON -> TRIGGERS MODAL POPUP */}
            <button
              type="button"
              id="landing-bottom-cta-book-btn"
              onClick={onOpenModal}
              className="px-10 py-4 bg-gold-400 hover:bg-gold-500 text-neutral-950 font-mono tracking-widest text-xs uppercase font-bold rounded shadow-lg shadow-gold-500/10 cursor-pointer transition-all hover:scale-102"
            >
              Open Booking Chamber
            </button>
          </div>
          <p className="text-[10px] text-neutral-500 font-mono">
            For large private events, kindly visit our Private Dining Page.
          </p>
        </div>
      </section>

    </div>
  );
}
