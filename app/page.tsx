// app/page.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingBag, Calendar, ArrowRight, Instagram, Mail } from "lucide-react";
import { useRef } from "react";

// Updated Mock Data for Art & Beyond context
const EVENTS = [
  { date: "JAN 15", title: "Resin Art Masterclass", location: "Main Studio" },
  { date: "FEB 02", title: "Texture & Form Workshop", location: "Online Live" },
  { date: "FEB 20", title: "Beyond the Canvas", location: "Gallery Hall" },
];

const ARTWORKS = [
  { id: 1, title: "Ethereal Blue", price: "$450", color: "bg-blue-950" },
  { id: 2, title: "Golden Silence", price: "$320", color: "bg-yellow-950" },
  { id: 3, title: "Nature's Echo", price: "$500", color: "bg-emerald-950" },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax effect for background elements
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <main ref={containerRef} className="relative w-full overflow-hidden">
      
      {/* --- NAVIGATION (Simple) --- */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white">
        <span className="text-xl font-bold tracking-tighter">A&B</span>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:opacity-70">Events</a>
          <a href="#" className="hover:opacity-70">Gallery</a>
          <a href="#" className="hover:opacity-70">Shop</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="h-screen flex flex-col items-center justify-center relative z-10 overflow-hidden">
        <motion.div 
          style={{ y: textY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center px-4 relative z-20"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-stone-400 mb-6">
            Est. 2024 • Creative Studio
          </p>
          {/* Main Title Update */}
          <h1 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-stone-100 to-stone-600 leading-[0.9]">
            ART & <br /> BEYOND
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-lg md:text-xl max-w-lg mx-auto text-stone-400 font-light"
          >
            A space where creativity has no boundaries. <br/> Workshops. Gallery. Community.
          </motion.p>
        </motion.div>
        
        {/* Animated Background Gradient (Organimo Vibe) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-purple-900 via-stone-900 to-blue-900 rounded-full blur-[100px] -z-10 opacity-30"
        />
      </section>

      {/* --- BRAND STORY --- */}
      <section className="min-h-[60vh] flex items-center justify-center bg-stone-950 py-24 px-6 relative z-20 border-t border-stone-900">
        <div className="max-w-3xl text-center">
          <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif italic leading-tight mb-8"
          >
            "Beyond the canvas lies the story."
          </motion.h2>
          <p className="text-stone-400 text-lg leading-relaxed font-light">
            <span className="text-white font-medium">Art & Beyond</span> is more than a gallery—it's a movement. We bridge the gap between traditional craftsmanship and modern immersive experiences. Join us to explore curated artworks and hands-on workshops designed to ignite your creative spirit.
          </p>
        </div>
      </section>

      {/* --- GALLERY / SHOP SECTION --- */}
      <section className="py-24 px-6 md:px-12 bg-stone-900">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-purple-400 tracking-widest text-xs uppercase font-bold mb-2 block">Curated Collection</span>
            <h3 className="text-3xl md:text-4xl font-serif">Featured Artworks</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm hover:text-purple-400 transition-colors border-b border-transparent hover:border-purple-400 pb-1">
            Visit Shop <ShoppingBag size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTWORKS.map((art, i) => (
            <motion.div 
              key={art.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer"
            >
              <div className={`h-[450px] w-full ${art.color} mb-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                {/* Placeholder Image using Unsplash */}
                <img 
                   src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=800&q=80`} 
                   alt={art.title}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-medium font-serif">{art.title}</h4>
                  <p className="text-sm text-stone-500 mt-1">Acrylic on Canvas</p>
                </div>
                <span className="text-stone-300 font-mono">{art.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <button className="inline-flex items-center gap-2 text-sm border border-stone-700 px-6 py-3 rounded-full hover:bg-stone-800">
              View All Shop <ShoppingBag size={16} />
            </button>
        </div>
      </section>

      {/* --- EVENTS & WORKSHOPS --- */}
      <section className="py-24 bg-stone-950 text-stone-100 relative">
        <div className="max-w-5xl mx-auto px-6">
            <div className="mb-16 text-center">
                <span className="text-purple-500 tracking-widest text-xs uppercase font-bold mb-2 block">Community</span>
                <h3 className="text-4xl font-serif">Upcoming Workshops</h3>
            </div>
          
          <div className="border-t border-stone-800">
            {EVENTS.map((evt, i) => (
              <div key={i} className="group flex flex-col md:flex-row justify-between items-center py-10 border-b border-stone-800 hover:bg-stone-900/50 transition-colors px-6 cursor-pointer">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                  <span className="block text-xs text-purple-400 font-bold tracking-widest mb-1">{evt.date}</span>
                  <span className="text-2xl md:text-3xl font-serif group-hover:text-purple-300 transition-colors">{evt.title}</span>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-stone-500 text-sm font-light uppercase tracking-wide">{evt.location}</span>
                  <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-500 group-hover:text-white transition-all transform group-hover:rotate-[-45deg]">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT / FOOTER --- */}
      <footer className="py-20 text-center bg-stone-950 border-t border-stone-900">
        <h2 className="text-4xl md:text-6xl font-serif mb-8 opacity-90">Let's Create Together</h2>
        <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="flex items-center gap-2 hover:text-purple-400 transition-colors"><Instagram size={20} /> Instagram</a>
            <a href="#" className="flex items-center gap-2 hover:text-purple-400 transition-colors"><Mail size={20} /> Contact</a>
        </div>
        <div className="text-stone-600 text-sm flex flex-col gap-2">
            <p>&copy; {new Date().getFullYear()} Art & Beyond. All rights reserved.</p>
            <p className="text-xs opacity-50">Designed with Next.js & Tailwind</p>
        </div>
      </footer>
    </main>
  );
      }
