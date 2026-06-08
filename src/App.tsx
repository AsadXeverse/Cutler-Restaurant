/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, Phone, MapPin, Clock, Flame, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

import { PageType } from './types';
import Home from './components/Home';
import Reservation from './components/Reservation';
import MenuAndDrinks from './components/MenuAndDrinks';
import PrivateDining from './components/PrivateDining';
import GiftVouchers from './components/GiftVouchers';
import Journal from './components/Journal';
import SundayAtCutler from './components/SundayAtCutler';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('reservation');
  const [isReservationModalOpen, setIsReservationModalOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Monitor screen scroll to add backdrop blur background to header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top when navigation occurs
  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Reservation', id: 'reservation' as PageType },
    { label: 'Menu', id: 'menu' as PageType },
    { label: 'Drinks', id: 'drinks' as PageType },
    { label: 'Private Dining', id: 'private-dining' as PageType },
    { label: 'Gift Voucher', id: 'vouchers' as PageType },
    { label: 'Journal', id: 'journal' as PageType },
    { label: 'Sundays At Cutler', id: 'sunday' as PageType },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f2ed] flex flex-col justify-between font-sans selection:bg-gold-400/30 selection:text-gold-100">
      
      {/* LUXURY STICKY HEADER BANNER */}
      <header 
        id="main-header"
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-350 ${
          scrolled 
            ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-3.5' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <button 
            onClick={() => handleNavigate('reservation')}
            className="text-left group cursor-pointer"
          >
            <span className="text-xl md:text-2xl font-serif text-neutral-50 tracking-[0.2em] font-bold group-hover:text-gold-300 transition-colors">
              CUTLER
            </span>
            <span className="block text-[7px] font-mono tracking-[0.4em] text-gold-400 uppercase mt-0.5 group-hover:text-neutral-200 transition-colors leading-none">
              Fine Dining
            </span>
          </button>
          
          {/* Desktop Navigation Link items */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-mono tracking-widest uppercase text-neutral-400">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavigate(item.id)}
                className={`relative py-1 hover:text-gold-300 transition-colors cursor-pointer ${
                  currentPage === item.id || (item.id === 'menu' && currentPage === 'menu') || (item.id === 'drinks' && currentPage === 'drinks')
                    ? 'text-gold-300' 
                    : 'text-neutral-400'
                }`}
              >
                <span>{item.label}</span>
                {/* Active Underline Transition Accent */}
                {(currentPage === item.id || (item.id === 'menu' && currentPage === 'menu') || (item.id === 'drinks' && currentPage === 'drinks')) && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-400"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop right action reservation key - Opens Reservation Modal directly */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              id="header-book-table-btn"
              onClick={() => setIsReservationModalOpen(true)}
              className="px-5 py-2.5 rounded text-[10px] font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer bg-gold-400 text-neutral-950 font-bold hover:bg-gold-500 scale-102"
            >
              Book Table
            </button>
          </div>

          {/* Mobile hamburger menu button control */}
          <div className="flex lg:hidden">
            <button
              id="mobile-hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-neutral-300 hover:text-gold-300 cursor-pointer transition-colors"
              aria-label="Toggle menu Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE FULL-SCREEN MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-lg flex flex-col justify-between pt-24 pb-12 px-6"
          >
            <div className="space-y-8 text-center pt-8">
              <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase">SELECT DESTINATION</span>
              
              <nav className="flex flex-col space-y-6 text-sm font-mono tracking-widest uppercase">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    id={`mob-nav-${item.id}`}
                    onClick={() => handleNavigate(item.id)}
                    className={`py-1 hover:text-gold-350 transition-colors ${
                      currentPage === item.id ? 'text-gold-300 font-bold scale-105' : 'text-neutral-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/10 text-center">
              <button
                id="mob-drawer-book-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsReservationModalOpen(true);
                }}
                className="w-full py-3.5 bg-gold-400 hover:bg-gold-500 text-neutral-950 font-bold font-mono text-xs uppercase tracking-widest rounded"
              >
                Book Table
              </button>
              <p className="text-[10px] text-neutral-500 font-mono uppercase">Call Concierge: +1 (555) 0122</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PRIMARY IMMERSIVE PAGE CONTENT ROUTER PLATFORM */}
      <main id="primary-main" className="flex-1 pt-24 md:pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {currentPage === 'home' && (
              <Home onNavigate={handleNavigate} />
            )}
            
            {currentPage === 'reservation' && (
              <Reservation onOpenModal={() => setIsReservationModalOpen(true)} />
            )}
            
            {currentPage === 'menu' && (
              <MenuAndDrinks mode="menu" onNavigate={handleNavigate} />
            )}
            
            {currentPage === 'drinks' && (
              <MenuAndDrinks mode="drinks" onNavigate={handleNavigate} />
            )}
            
            {currentPage === 'private-dining' && (
              <PrivateDining />
            )}
            
            {currentPage === 'vouchers' && (
              <GiftVouchers />
            )}
            
            {currentPage === 'journal' && (
              <Journal />
            )}

            {currentPage === 'sunday' && (
              <SundayAtCutler onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* SECURE RESERVATION MODAL OVERLAY PORTAL */}
      <AnimatePresence>
        {isReservationModalOpen && (
          <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/90 backdrop-blur-md p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl max-h-[95vh] relative"
            >
              <Reservation isModal onClose={() => setIsReservationModalOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LUXURY BRAND FOOTER */}
      <footer id="main-footer" className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-12">
            
            {/* Column 1: Brand statement */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl tracking-[0.25em] text-[#f5f2ed] font-bold">CUTLER</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light font-sans max-w-sm">
                A modern fine-dining sensory chamber centered on micro-foraging, charcoal-fire grilling, aged proteins, and forgotten European back-vintages.
              </p>
              <div className="flex space-x-3 text-neutral-405 pt-1">
                <a href="#instagram" className="hover:text-gold-300 transition-colors" aria-label="Follow us on Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#facebook" className="hover:text-gold-300 transition-colors" aria-label="Follow us on Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-3.5">
              <span className="block text-[10px] font-mono tracking-widest text-gold-400 uppercase font-bold">DIRECTORY</span>
              <ul className="text-xs font-mono text-neutral-400 space-y-2 uppercase">
                <li><button onClick={() => handleNavigate('menu')} className="hover:text-gold-200 transition-all text-left">The Food Menu</button></li>
                <li><button onClick={() => handleNavigate('drinks')} className="hover:text-gold-200 transition-all text-left">The Drinks List</button></li>
                <li><button onClick={() => handleNavigate('private-dining')} className="hover:text-gold-200 transition-all text-left">Private Events</button></li>
                <li><button onClick={() => handleNavigate('sunday')} className="hover:text-gold-200 transition-all text-left">Sunday Ritual</button></li>
              </ul>
            </div>

            {/* Column 3: Contacts */}
            <div className="space-y-3.5">
              <span className="block text-[10px] font-mono tracking-widest text-gold-400 uppercase font-bold">RESERVATIONS & CONTACTS</span>
              <ul className="text-xs font-mono text-neutral-400 space-y-2.5">
                <li className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>+1 (555) 0122</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span className="uppercase">42 Stone Archway, Old District</span>
                </li>
                <li className="flex items-center space-x-2 text-gold-400 font-bold">
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                  <a href="mailto:office@cutlerrestaurant.com">office@cutlerrestaurant.com</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Opening Hours */}
            <div className="space-y-3.5">
              <span className="block text-[10px] font-mono tracking-widest text-gold-400 uppercase font-bold">HOURS OF CHAMBERS</span>
              <div className="flex items-start space-x-2 text-xs font-mono text-neutral-400">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p>TUESDAY — SATURDAY</p>
                  <p className="font-bold text-neutral-300">17:30 — 23:00</p>
                  <p className="pt-2">SUNDAY RITUALS</p>
                  <p className="font-bold text-neutral-300">12:00 — 17:00</p>
                  <p className="pt-1 text-[10px] text-neutral-600">MONDAYS: SECLUDED REPOSE</p>
                </div>
              </div>
            </div>

          </div>

          <div className="w-full h-[1px] bg-white/10 my-8" />

          {/* Copyright bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-neutral-500 uppercase">
            <span>© {new Date().getFullYear()} CUTLER RESTAURANT GROUP INC. ALL PRIVATE RIGHTS RECOGNIZED.</span>
            <span className="flex items-center space-x-1.5">
              <Clock className="w-3 h-3 text-gold-400" />
              <span>CRAFTED IN METROPOLITAN ACCORDANCE</span>
            </span>
          </div>

        </div>
      </footer>

    </div>
  );
}
