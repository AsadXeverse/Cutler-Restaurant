import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, ArrowLeft, ArrowUpRight, Award, Compass, Heart } from 'lucide-react';
import { JOURNAL_POSTS } from '../data';
import { JournalPost } from '../types';

export default function Journal() {
  const [selectedPost, setSelectedPost] = useState<JournalPost | null>(null);
  const [activeTab, setActiveTab] = useState<string>('ALL');
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  // Smooth scroll to top of viewport whenever the active tab or reading post shifts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedPost]);

  const categories = ['ALL', ...Array.from(new Set(JOURNAL_POSTS.map(post => post.category.toUpperCase())))];

  const filteredPosts = activeTab === 'ALL' 
    ? JOURNAL_POSTS 
    : JOURNAL_POSTS.filter(post => post.category.toUpperCase() === activeTab.toUpperCase());

  const handleToggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20">
      
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          
          /* LIST VIEW */
          <motion.div
            key="journal-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-12"
          >
            {/* Header section */}
            <div className="text-center">
              <span className="text-xs font-mono tracking-[0.35em] text-gold-400 block mb-2 uppercase">Culinary Editorial</span>
              <h2 className="text-3xl md:text-5xl font-serif text-neutral-50 tracking-tight">The Cutler Journal</h2>
              <p className="text-xs md:text-sm text-neutral-400 font-sans font-light max-w-lg mx-auto leading-relaxed pt-2">
                Insights, secrets, and visual chronicles direct from our woodfire hearths, ageing caves, and global sommelier explorations.
              </p>
              <div className="w-12 h-[1px] bg-gold-400 mx-auto mt-5" />
            </div>

            {/* Filter buttons */}
            <div className="flex justify-center flex-wrap gap-2.5 max-w-xl mx-auto py-2 border-y border-white/10">
              {categories.map(cat => (
                <button
                  key={cat}
                  id={`cat-btn-${cat}`}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-all rounded cursor-pointer ${
                    activeTab === cat 
                      ? 'bg-gold-400/10 text-gold-300 border border-gold-400/20' 
                      : 'text-neutral-500 hover:text-neutral-200 border border-transparent'
                  }`}
                >
                  {cat === 'ALL' ? 'All Stories' : cat}
                </button>
              ))}
            </div>

            {/* Journal Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  id={`article-card-${post.id}`}
                  onClick={() => setSelectedPost(post)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#0e0e0e]/30 border border-white/10 rounded-lg overflow-hidden group hover:border-gold-400/30 transition-all flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Visual box */}
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover filter brightness-90 group-hover:scale-104 transition-transform duration-[4000ms]"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 left-3 bg-[#0a0a0a]/80 border border-white/10 font-mono text-[9px] tracking-widest text-gold-300 px-2.5 py-1.5 rounded uppercase">
                        {post.category}
                      </span>
                    </div>

                    {/* Meta and titles */}
                    <div className="px-5 space-y-2.5">
                      <div className="flex items-center space-x-4 text-[10px] font-mono text-neutral-500 uppercase">
                        <div className="flex items-center space-x-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-lg md:text-xl font-serif text-neutral-100 group-hover:text-gold-300 transition-colors tracking-wide leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Post Footer */}
                  <div className="mt-6 pt-4 pb-5 px-5 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[10px] text-gold-400 font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">{post.author}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      {/* Like element */}
                      <button
                        id={`like-${post.id}`}
                        onClick={(e) => handleToggleLike(post.id, e)}
                        className={`hover:scale-110 transition-transform ${likedPosts[post.id] ? 'text-rose-500' : 'text-neutral-600 hover:text-neutral-400'}`}
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>

                      <span className="font-mono text-[10px] tracking-widest text-gold-400 uppercase flex items-center gap-0.5 group-hover:text-gold-200 transition-colors">
                        <span>Read</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        ) : (
          
          /* DETAILED ARTICLE EXPAND VIEW */
          <motion.div
            key="journal-detail"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            {/* Back Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0a0a0a]/60 border border-white/10 rounded hover:border-gold-400/40 text-xs font-mono tracking-widest text-neutral-300 hover:text-neutral-100 uppercase transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-gold-400" />
              <span>Back To Stories</span>
            </button>

            {/* Title Header */}
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-gold-400 uppercase bg-gold-400/5 px-3 py-1.5 rounded border border-gold-400/15 w-fit block">
                {selectedPost.category} EDITION
              </span>
              
              <h1 className="text-3xl md:text-5xl font-serif tracking-tight text-neutral-50 leading-tight">
                {selectedPost.title}
              </h1>

              {/* Author & Metrics Column */}
              <div className="flex flex-wrap items-center gap-6 py-4 border-y border-white/10 text-xs font-mono text-neutral-400 uppercase">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gold-400" />
                  <span>AUTHOR: <strong className="text-neutral-200">{selectedPost.author}</strong></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>PUBLISHED: <strong className="text-neutral-200">{selectedPost.date}</strong></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>READ: <strong className="text-neutral-200">{selectedPost.readTime}</strong></span>
                </div>
              </div>
            </div>

            {/* Immersive high resolution landscape hero of post */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 shadow-2xl">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40" />
            </div>

            {/* Complete Story Body Paragraphs */}
            <div className="space-y-6 text-sm md:text-base text-neutral-300 leading-relaxed font-sans font-light">
              {/* Giant drop-cap first letter */}
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-gold-400 first-letter:font-bold">
                {selectedPost.content[0]}
              </p>

              {selectedPost.content.slice(1).map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Elegant Signature footer */}
            <div className="mt-12 bg-white/[0.01] border border-white/10 p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-3.5 text-left">
                <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-sm text-gold-300 font-serif font-bold shrink-0">
                  {selectedPost.author.charAt(0)}
                </div>
                <div className="space-y-0.5">
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase">EDITOR PROFILE</span>
                  <p className="text-xs text-neutral-200 font-bold uppercase tracking-wider">{selectedPost.author}</p>
                  <p className="text-[11px] text-neutral-400 font-light">Lead culinary curator at Cutler Restaurant.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => handleToggleLike(selectedPost.id, e)}
                  className={`flex items-center space-x-2 px-4 py-2 border rounded text-xs font-mono uppercase tracking-widest cursor-pointer transition-all ${
                    likedPosts[selectedPost.id] 
                      ? 'bg-rose-500/10 border-rose-500/40 text-rose-400' 
                      : 'bg-[#0a0a0a] border-white/10 text-neutral-400 hover:border-white/20'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 fill-current`} />
                  <span>{likedPosts[selectedPost.id] ? 'Liked' : 'Approve'}</span>
                </button>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 bg-[#0a0a0a] hover:bg-[#0e0e0e] border border-white/10 rounded text-xs font-mono uppercase tracking-widest text-neutral-300 cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
