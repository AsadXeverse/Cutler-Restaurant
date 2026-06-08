import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Mail, Calendar, User, Phone, Edit3, ShoppingCart, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function GiftVouchers() {
  // Form states of purchase Cutler Voucher layout
  const [selectedValuation, setSelectedValuation] = useState<string>('Cutler Experience $750.00');
  
  // Voucher Details
  const [deliveryEmail, setDeliveryEmail] = useState<string>('');
  const [sendDate, setSendDate] = useState<string>('2026-06-09');
  const [recipientFirstName, setRecipientFirstName] = useState<string>('');
  const [recipientSurname, setRecipientSurname] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Your Details
  const [yourFirstName, setYourFirstName] = useState<string>('');
  const [yourSurname, setYourSurname] = useState<string>('');
  const [yourMobile, setYourMobile] = useState<string>('');
  const [yourEmail, setYourEmail] = useState<string>('');

  // UI state managers
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [cartItem, setCartItem] = useState<any | null>(null);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showPaymentDetails, setShowPaymentDetails] = useState<boolean>(false);
  const [paymentComplete, setPaymentComplete] = useState<boolean>(false);

  // Credit Card mock inputs
  const [cardHolder, setCardHolder] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvv, setCardCvv] = useState<string>('');

  const calculateCost = () => {
    let base = 750;
    if (selectedValuation.includes('380')) base = 380;
    if (selectedValuation.includes('150')) base = 150;
    if (selectedValuation.includes('200')) base = 200;
    
    const count = 1;
    const processingFee = base * 0.02;
    const total = base + processingFee;
    return { base, processingFee, total };
  };

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Validate fields according to user requirements
    if (!deliveryEmail.trim()) {
      newErrors.deliveryEmail = 'This field is required.';
    }
    if (!yourFirstName.trim()) {
      newErrors.yourFirstName = 'This field is required.';
    }
    if (!yourSurname.trim()) {
      newErrors.yourSurname = 'This field is required.';
    }
    if (!yourEmail.trim()) {
      newErrors.yourEmail = 'This field is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Auto-scroll to the first error
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(`err-label-${firstErrorKey}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setErrors({});
    const cost = calculateCost();

    // Store voucher in cart
    setCartItem({
      valueLabel: selectedValuation,
      basePrice: cost.base,
      processingFee: cost.processingFee,
      totalPrice: cost.total,
      deliveryEmail,
      sendDate,
      recipientName: `${recipientFirstName} ${recipientSurname}`.trim() || 'Recipient',
      recipientFirstName,
      recipientSurname,
      message,
      yourName: `${yourFirstName} ${yourSurname}`.trim(),
      yourEmail,
      yourMobile
    });
    
    setShowCart(true);
    setShowPaymentDetails(false);
    
    // Smooth scroll to cart section
    setTimeout(() => {
      const cartSection = document.getElementById('cart-section-target');
      if (cartSection) {
        cartSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handlePurchaseClick = () => {
    // Reveal payment fields input below cart
    setCardHolder(`${yourFirstName} ${yourSurname}`.trim());
    setShowPaymentDetails(true);
    setTimeout(() => {
      const paySection = document.getElementById('payment-section-target');
      if (paySection) {
        paySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleConfirmPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentComplete(true);
  };

  const handleReset = () => {
    setCartItem(null);
    setShowCart(false);
    setShowPaymentDetails(false);
    setPaymentComplete(false);
    setDeliveryEmail('');
    setRecipientFirstName('');
    setRecipientSurname('');
    setMessage('');
    setYourFirstName('');
    setYourSurname('');
    setYourMobile('');
    setYourEmail('');
    setCardHolder('');
    setCardNumber('');
    setCardExpiry('');
    setCardCvv('');
    setErrors({});
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 md:py-16">
      
      {/* 1. TOP SECTION: About Gift Voucher */}
      <div id="voucher-top" className="text-center mb-10 space-y-4">
        <span className="text-xs font-mono tracking-[0.3em] text-gold-400 block uppercase font-bold">The Gift of Gastronomy</span>
        <h2 className="text-3xl md:text-5xl font-serif text-neutral-50 tracking-tight font-bold">Cutler Gift Vouchers</h2>
        <p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed font-sans font-light">
          Share an unforgettable dining experience at Cutler. Our vouchers can be customized with personalized messages and are either sent instantly via high-resolution digital email or post-dispatched in a heavy gold-embossed textured sleeve.
        </p>
        <div className="w-16 h-[1px] bg-gold-400/45 mx-auto pt-1" />
      </div>

      {/* Elegant Short Intro Section with High-End Image */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16 bg-[#0e0e0e]/40 border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400/10 to-transparent" />
        <div className="md:col-span-7 space-y-4 text-left">
          <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-bold">A Sentimental Tribute</span>
          <h3 className="text-xl md:text-2xl font-serif text-neutral-100 tracking-tight">The ultimate gift of culinary fire & fine-wine devotion.</h3>
          <p className="text-xs text-neutral-450 leading-relaxed font-sans font-light">
            When you purchase a Cutler Gift token, you are gifting more than dinner—you are enabling access to subterranean wine cellars, dry wood-grill mastery, and absolute culinary privacy. Our vouchers are prepared to order in hand-pressed heavy card stock bound with natural charcoal mulberry ribbons, or delivered as instantaneous secure digital credentials. Valid up to 36 months from purchase date.
          </p>
        </div>
        <div className="md:col-span-5 relative aspect-[14/10] overflow-hidden rounded-lg border border-white/10 shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=800&q=80" 
            alt="Cutler Gift Card Sleeve Packaging" 
            className="w-full h-full object-cover filter brightness-80 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className="absolute bottom-3 left-3 bg-neutral-900/90 border border-white/10 px-2 py-0.5 rounded text-[8px] font-mono text-gold-300 uppercase tracking-widest">
            Voucher Sleeve #2026
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        
        {/* 2. BELOW SECTION: Purchase Cutler Voucher form */}
        <div className="bg-[#0e0e0e]/30 border border-white/10 rounded-lg p-6 md:p-10 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
          
          <h3 className="text-xl font-serif text-gold-300 tracking-wide mb-8 text-center uppercase border-b border-white/5 pb-4">
            Purchase Cutler Voucher
          </h3>

          <form onSubmit={handleAddToCart} className="space-y-8">
            
            {/* Value Select Block */}
            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-widest text-[#f5f2ed] font-mono font-bold">
                Value
              </label>
              <div className="relative flex items-center bg-[#0a0a0a] border border-white/10 rounded px-3 py-2.5 focus-within:border-gold-400">
                <Gift className="w-4 h-4 text-gold-400 mr-2.5 shrink-0" />
                <select
                  id="voucher-valuation-select"
                  value={selectedValuation}
                  onChange={(e) => setSelectedValuation(e.target.value)}
                  className="w-full bg-transparent text-[#f5f2ed] focus:outline-none font-medium py-1.5 cursor-pointer text-sm"
                >
                  <option value="Cutler Experience $750.00" className="bg-[#0a0a0a] text-neutral-200">Cutler Experience $750.00</option>
                  <option value="Gastronomic Tasting Journey $380.00" className="bg-[#0a0a0a] text-neutral-200">Gastronomic Tasting Journey $380.00</option>
                  <option value="Classic Cutler Monetary $150.00" className="bg-[#0a0a0a] text-neutral-200">Classic Cutler Monetary $150.00</option>
                  <option value="Signature Cutler Celebration $200.00" className="bg-[#0a0a0a] text-neutral-200">Signature Cutler Celebration $200.00</option>
                </select>
              </div>
            </div>

            {/* VOUCHER DETAILS GROUP */}
            <div className="space-y-6 pt-4 border-t border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gold-300 font-bold">
                Voucher Details
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Delivery Email input field */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                    Delivery Email <span className="text-red-400">*</span>
                  </label>
                  <div className={`flex items-center bg-[#0a0a0a] border rounded px-3 py-2 transition-all ${errors.deliveryEmail ? 'border-red-500/80' : 'border-white/10 focus-within:border-gold-400'}`}>
                    <Mail className="w-4 h-4 text-neutral-500 mr-2.5 shrink-0" />
                    <input
                      id="input-delivery-email"
                      type="email"
                      placeholder="abc@your.name - Delivery Email - compulsory"
                      value={deliveryEmail}
                      onChange={(e) => {
                        setDeliveryEmail(e.target.value);
                        if (e.target.value.trim()) {
                          setErrors(prev => ({ ...prev, deliveryEmail: '' }));
                        }
                      }}
                      className="w-full bg-transparent text-sm focus:outline-none text-neutral-250 py-1"
                    />
                  </div>
                  {errors.deliveryEmail && (
                    <p id="err-label-deliveryEmail" className="text-xs text-red-400 font-mono mt-1">
                      {errors.deliveryEmail}
                    </p>
                  )}
                </div>

                {/* Send Email date picker */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                    Send Email <span className="text-neutral-500">(Send Date)</span>
                  </label>
                  <div className="flex items-center bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 focus-within:border-gold-400">
                    <Calendar className="w-4 h-4 text-neutral-500 mr-2.5 shrink-0" />
                    <input
                      id="input-send-date"
                      type="date"
                      required
                      value={sendDate}
                      onChange={(e) => setSendDate(e.target.value)}
                      className="w-full bg-transparent text-sm focus:outline-none text-neutral-250 py-1"
                    />
                  </div>
                </div>

                {/* Recipient First Name */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                    Recipient First Name
                  </label>
                  <div className="flex items-center bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 focus-within:border-gold-400">
                    <User className="w-4 h-4 text-neutral-500 mr-2.5 shrink-0" />
                    <input
                      id="input-recipient-first"
                      type="text"
                      placeholder="First Name"
                      value={recipientFirstName}
                      onChange={(e) => setRecipientFirstName(e.target.value)}
                      className="w-full bg-transparent text-sm focus:outline-none text-neutral-250 py-1"
                    />
                  </div>
                </div>

                {/* Recipient Surname */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                    Recipient Surname
                  </label>
                  <div className="flex items-center bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 focus-within:border-gold-400">
                    <User className="w-4 h-4 text-neutral-500 mr-2.5 shrink-0" />
                    <input
                      id="input-recipient-surname"
                      type="text"
                      placeholder="Surname"
                      value={recipientSurname}
                      onChange={(e) => setRecipientSurname(e.target.value)}
                      className="w-full bg-transparent text-sm focus:outline-none text-neutral-250 py-1"
                    />
                  </div>
                </div>

              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                  Message
                </label>
                <div className="flex items-start bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 focus-within:border-gold-400">
                  <Edit3 className="w-4 h-4 text-neutral-500 mr-2.5 shrink-0 mt-1.5" />
                  <textarea
                    id="input-message"
                    rows={3}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-transparent text-sm focus:outline-none text-neutral-250 py-1.5 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* YOUR DETAILS GROUP */}
            <div className="space-y-6 pt-6 border-t border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gold-300 font-bold">
                Your Details
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Your First Name */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <div className={`flex items-center bg-[#0a0a0a] border rounded px-3 py-2 transition-all ${errors.yourFirstName ? 'border-red-500/80' : 'border-white/10 focus-within:border-gold-400'}`}>
                    <User className="w-4 h-4 text-neutral-500 mr-2.5 shrink-0" />
                    <input
                      id="input-your-first"
                      type="text"
                      placeholder="First Name - Required"
                      value={yourFirstName}
                      onChange={(e) => {
                        setYourFirstName(e.target.value);
                        if (e.target.value.trim()) {
                          setErrors(prev => ({ ...prev, yourFirstName: '' }));
                        }
                      }}
                      className="w-full bg-transparent text-sm focus:outline-none text-neutral-250 py-1"
                    />
                  </div>
                  {errors.yourFirstName && (
                    <p id="err-label-yourFirstName" className="text-xs text-red-400 font-mono mt-1">
                      {errors.yourFirstName}
                    </p>
                  )}
                </div>

                {/* Your Surname */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                    Surname <span className="text-red-400">*</span>
                  </label>
                  <div className={`flex items-center bg-[#0a0a0a] border rounded px-3 py-2 transition-all ${errors.yourSurname ? 'border-red-500/80' : 'border-white/10 focus-within:border-gold-400'}`}>
                    <User className="w-4 h-4 text-neutral-500 mr-2.5 shrink-0" />
                    <input
                      id="input-your-surname"
                      type="text"
                      placeholder="Surname - Required"
                      value={yourSurname}
                      onChange={(e) => {
                        setYourSurname(e.target.value);
                        if (e.target.value.trim()) {
                          setErrors(prev => ({ ...prev, yourSurname: '' }));
                        }
                      }}
                      className="w-full bg-transparent text-sm focus:outline-none text-neutral-250 py-1"
                    />
                  </div>
                  {errors.yourSurname && (
                    <p id="err-label-yourSurname" className="text-xs text-red-400 font-mono mt-1">
                      {errors.yourSurname}
                    </p>
                  )}
                </div>

                {/* Your Mobile */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                    Mobile Number
                  </label>
                  <div className="flex items-center bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 focus-within:border-gold-400">
                    <Phone className="w-4 h-4 text-neutral-500 mr-2.5 shrink-0" />
                    <input
                      id="input-your-mobile"
                      type="text"
                      placeholder="Mobile"
                      value={yourMobile}
                      onChange={(e) => setYourMobile(e.target.value)}
                      className="w-full bg-transparent text-sm focus:outline-none text-neutral-250 py-1"
                    />
                  </div>
                </div>

                {/* Your Email */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <div className={`flex items-center bg-[#0a0a0a] border rounded px-3 py-2 transition-all ${errors.yourEmail ? 'border-red-500/80' : 'border-white/10 focus-within:border-gold-400'}`}>
                    <Mail className="w-4 h-4 text-neutral-500 mr-2.5 shrink-0" />
                    <input
                      id="input-your-email"
                      type="email"
                      placeholder="abc@my.name - Your Email - compulsory"
                      value={yourEmail}
                      onChange={(e) => {
                        setYourEmail(e.target.value);
                        if (e.target.value.trim()) {
                          setErrors(prev => ({ ...prev, yourEmail: '' }));
                        }
                      }}
                      className="w-full bg-transparent text-sm focus:outline-none text-neutral-250 py-1"
                    />
                  </div>
                  {errors.yourEmail && (
                    <p id="err-label-yourEmail" className="text-xs text-red-400 font-mono mt-1">
                      {errors.yourEmail}
                    </p>
                  )}
                </div>

              </div>
            </div>

            {/* Note & CTA Segment */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="text-center">
                <p className="text-xs text-gold-400/90 font-mono">
                  * A 2% processing fee will be applied
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  id="checkout-add-to-cart-btn"
                  className="px-8 py-3.5 bg-gold-400 hover:bg-gold-500 text-neutral-950 font-bold font-mono text-xs uppercase tracking-widest rounded cursor-pointer transition-all hover:scale-102 duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add To Cart</span>
                </button>
              </div>
            </div>

          </form>
        </div>

        {/* 3. SHOW THE CARDS UI AFTER ADD TO CART */}
        <AnimatePresence>
          {showCart && cartItem && (
            <motion.div
              id="cart-section-target"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="scroll-mt-28 space-y-6 pt-4"
            >
              <div className="bg-[#0e0e0e]/50 border border-gold-300/20 rounded-lg p-6 md:p-8">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-gold-300" />
                    <h4 className="text-lg font-serif font-bold text-neutral-50 uppercase tracking-widest">
                      Your Shopping Cart
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-gold-400 bg-gold-400/5 px-2 py-1 rounded border border-gold-400/20 uppercase tracking-widest">
                    1 Item Registered
                  </span>
                </div>

                <div className="divide-y divide-white/10">
                  {/* Cart Item Detail */}
                  <div className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-serif font-bold text-neutral-100 uppercase tracking-wide">
                        {cartItem.valueLabel} Voucher
                      </p>
                      <p className="text-xs text-neutral-400">
                        Recipient: <span className="text-neutral-200">{cartItem.recipientName || 'Unspecified'}</span>
                      </p>
                      <p className="text-xs text-neutral-400">
                        Delivery Email: <span className="text-neutral-200">{cartItem.deliveryEmail}</span>
                      </p>
                      {cartItem.message && (
                        <p className="text-xs font-light text-neutral-400 italic max-w-md pt-1 block">
                          "{cartItem.message}"
                        </p>
                      )}
                    </div>

                    <div className="text-right sm:self-center font-mono space-y-0.5">
                      <span className="block text-xs text-neutral-400 uppercase">SUBTOTAL</span>
                      <span className="block text-lg font-bold text-gold-300">
                        ${cartItem.basePrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Summary Costs Breakdown */}
                  <div className="py-4 space-y-2 font-mono text-xs">
                    <div className="flex justify-between text-neutral-400">
                      <span>VOUCHER VALUE</span>
                      <span>${cartItem.basePrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>ADMIN & PROCESSING FEE (2%)</span>
                      <span>+${cartItem.processingFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-neutral-50 pt-2 border-t border-white/5">
                      <span>TOTAL OUTSTANDING</span>
                      <span className="text-gold-300">${cartItem.totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Purchase Button - when clicked, shows the payment details section */}
                {!showPaymentDetails && !paymentComplete && (
                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      id="cart-purchase-trigger-btn"
                      onClick={handlePurchaseClick}
                      className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-neutral-950 font-bold font-mono text-xs uppercase tracking-widest rounded cursor-pointer transition-all flex items-center justify-center gap-2"
                    >
                      <span>Purchase Cutler Voucher</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4. PAYMENT DETAILS INPUTS SECTION */}
        <AnimatePresence>
          {showPaymentDetails && cartItem && !paymentComplete && (
            <motion.div
              id="payment-section-target"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="scroll-mt-28"
            >
              <div className="bg-[#0e0e0e]/40 border border-white/10 rounded-lg p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                  <ShieldCheck className="w-5 h-5 text-gold-450" />
                  <h4 className="text-base font-serif font-bold text-neutral-100 uppercase tracking-widest">
                    Enter Secure Payment Details
                  </h4>
                </div>

                <form onSubmit={handleConfirmPayment} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase text-neutral-400">
                      Cardholder Name
                    </label>
                    <input
                      id="payment-cardholder-input"
                      type="text"
                      required
                      placeholder="Name on Card"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 text-sm text-neutral-200 placeholder-neutral-700 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase text-neutral-400">
                      Card Number
                    </label>
                    <input
                      id="payment-cardnumber-input"
                      type="text"
                      required
                      maxLength={19}
                      placeholder="4000 1234 5678 9010"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 text-sm text-neutral-200 placeholder-neutral-700 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase text-neutral-400">
                      Expiry Date
                    </label>
                    <input
                      id="payment-expiry-input"
                      type="text"
                      required
                      maxLength={5}
                      placeholder="MM/YY"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 text-sm text-neutral-200 placeholder-neutral-700 focus:outline-none focus:border-gold-400 text-center"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase text-neutral-400">
                      Security Code (CVV)
                    </label>
                    <input
                      id="payment-cvv-input"
                      type="password"
                      required
                      maxLength={3}
                      placeholder="123"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 text-sm text-neutral-200 placeholder-neutral-700 focus:outline-none focus:border-gold-400 text-center"
                    />
                  </div>

                  <div className="md:col-span-2 pt-4 flex gap-4">
                    <button
                      type="submit"
                      id="payment-confirm-btn"
                      className="flex-1 py-3 bg-gold-400 hover:bg-gold-500 text-neutral-950 font-bold font-mono text-xs uppercase tracking-widest rounded transition-all cursor-pointer shadow-lg shadow-gold-500/10 text-center"
                    >
                      Confirm Payment - ${cartItem.totalPrice.toFixed(2)}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowPaymentDetails(false)}
                      className="px-6 py-3 border border-white/10 hover:border-white/20 hover:text-neutral-100 text-neutral-400 text-xs font-mono uppercase tracking-widest rounded transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 5. RECEIPT SHOWCASE UPON SUCCESSFUL PAYMENT */}
        <AnimatePresence>
          {paymentComplete && cartItem && (
            <motion.div
              id="payment-success-showcase"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 bg-[#0e0e0e] border border-gold-300/30 rounded-lg p-6 md:p-10 space-y-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
              
              <div className="inline-flex items-center justify-center p-3 bg-gold-400/5 border border-gold-400/30 rounded-full">
                <CheckCircle2 className="w-12 h-12 text-gold-300" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.25em] text-gold-400 uppercase font-bold">TRANSACTION SUCCESSFULLY COMPLETED</span>
                <h4 className="text-2xl md:text-3xl font-serif text-neutral-50 font-bold">Thank You For Your Purchase</h4>
                <p className="text-sm text-neutral-350 max-w-xl mx-auto leading-relaxed">
                  We have verified your payment. A beautiful gold-embossed digital voucher copy has been securely dispatched to <span className="text-neutral-200 underline font-medium font-sans">{cartItem.deliveryEmail}</span>.
                </p>
              </div>

              {/* Printable receipt card */}
              <div className="border border-white/10 bg-[#0a0a0a] max-w-md mx-auto rounded-lg p-6 divide-y divide-white/10 text-left space-y-4 shadow-xl">
                <div className="pb-3 flex justify-between items-baseline">
                  <h5 className="font-serif text-gold-300 text-lg font-bold">CUTLER VOUCHER</h5>
                  <span className="font-mono text-[9px] text-neutral-500 uppercase font-medium">#CV-{Math.floor(1000 + Math.random() * 9000)}-{Math.floor(10000 + Math.random() * 90000)}</span>
                </div>
                
                <div className="py-3 font-mono text-xs text-neutral-350 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">EXPERIENCE:</span>
                    <span className="text-neutral-200">{cartItem.valueLabel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">SEND DATE:</span>
                    <span className="text-neutral-250">{cartItem.sendDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">RECIPIENT:</span>
                    <span className="text-neutral-200">{cartItem.recipientName || 'Any Valued Guest'}</span>
                  </div>
                  {cartItem.message && (
                    <div className="pt-2 flex flex-col gap-1">
                      <span className="text-neutral-500">DEDICATION:</span>
                      <span className="italic text-[11px] text-neutral-400 bg-white/[0.01] p-2 rounded border border-white/10 leading-normal">
                        "{cartItem.message}"
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-3 font-mono text-xs text-neutral-350 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">YOUR EMAIL:</span>
                    <span className="text-neutral-205">{cartItem.yourEmail}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-[#f5f2ed] pt-2">
                    <span>TOTAL CHARGED:</span>
                    <span className="text-gold-300">${cartItem.totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  id="reset-voucher-btn"
                  onClick={handleReset}
                  className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-neutral-950 font-bold font-mono text-xs uppercase tracking-widest rounded transition-all cursor-pointer"
                >
                  Buy Another Voucher
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
