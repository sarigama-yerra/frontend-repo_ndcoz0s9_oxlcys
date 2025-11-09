import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  useEffect(() => {
    // Prevent body from showing white behind canvas on mobile bounce
    document.body.style.backgroundColor = '#0a0f1c';
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-[90vh] lg:min-h-screen overflow-hidden flex items-center">
      {/* 3D Background */}
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Subtle gradient vignettes for cinematic look */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(13,19,35,0)_0%,rgba(10,15,28,0.6)_70%,#000_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0f1c] to-transparent" />
      </div>

      {/* Foreground Content */}
      <motion.div style={{ y: parallaxY }} className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <p className="text-slate-300/90 text-sm tracking-widest uppercase">Hello, I am</p>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">First</span>{' '}
          <span className="bg-gradient-to-r from-[#1a6aff] via-indigo-400 to-cyan-300 bg-clip-text text-transparent">Last</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-300/90">Aspiring AI Developer & Tech Innovator.</p>
        <p className="mt-4 max-w-2xl text-slate-300/80">
          I craft intelligent, visually rich experiences that merge advanced interaction design with robust engineering — focusing on performance, clarity, and a cinematic aesthetic.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#showcase" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-900/30 hover:brightness-110 transition">
            View My Work
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-slate-600/60 text-slate-200 hover:border-cyan-400/60 hover:text-white transition">
            Get In Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
