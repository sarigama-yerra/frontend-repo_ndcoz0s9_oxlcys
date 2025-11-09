import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Award, Code, Piano, Crown, Mail, Github, Linkedin } from 'lucide-react';

function Section({ id, title, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section id={id} ref={ref} className="relative py-24 sm:py-28 bg-[#0a0f1c] text-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          {title}
        </motion.h2>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <div className="relative w-40 h-40 rounded-full overflow-hidden ring-2 ring-slate-700/60 shadow-xl">
            <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=240&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-2 text-slate-300/90 leading-relaxed">
          <p>
            I'm a creative engineer passionate about AI, 3D, and interaction design. I build premium experiences with a focus on performance, clarity, and delightful details.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { label: 'Projects', value: '24+' },
              { label: 'Years Coding', value: '5' },
              { label: 'Awards', value: '7' },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-lg bg-[#0d1323] border border-slate-800/60">
                <div className="text-2xl font-extrabold">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Three.js', level: 80 },
    { name: 'FastAPI', level: 85 },
    { name: 'MongoDB', level: 75 },
  ];
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((s) => (
          <div key={s.name} className="p-5 rounded-xl bg-[#0d1323] border border-slate-800/60">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">{s.name}</div>
              <div className="text-slate-400 text-sm">{s.level}%</div>
            </div>
            <div className="h-2 w-full bg-slate-800/60 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Showcase() {
  const cards = [
    { title: 'Cinematic 3D Hero', desc: 'GPU-optimized WebGL with Spline integration', icon: Star },
    { title: 'AI Chat Tool', desc: 'Conversational UI with FastAPI + MongoDB', icon: Code },
    { title: 'Piano Playground', desc: 'Interactive keys with audio + physics', icon: Piano },
    { title: 'Chess Tactics', desc: 'Gold-themed board with hover glow', icon: Crown },
  ];
  return (
    <Section id="showcase" title="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="group relative rounded-xl p-6 bg-gradient-to-b from-[#0f162b] to-[#0b1020] border border-slate-800/60 hover:border-cyan-500/40 transition shadow-lg shadow-black/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-gradient-to-br from-indigo-600 to-cyan-500 text-white">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <p className="mt-3 text-slate-400 text-sm">{desc}</p>
            <button className="mt-5 inline-flex text-sm text-cyan-300 hover:text-white">View details →</button>
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:ring-cyan-400/30" />
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="mailto:hello@example.com" className="p-6 rounded-xl bg-[#0d1323] border border-slate-800/60 hover:border-cyan-500/50 transition flex items-center gap-3">
          <div className="p-2 rounded-md bg-gradient-to-br from-indigo-600 to-cyan-500 text-white"><Mail size={18} /></div>
          <div>
            <div className="font-semibold">Email</div>
            <div className="text-slate-400 text-sm">hello@example.com</div>
          </div>
        </a>
        <a href="https://github.com" target="_blank" className="p-6 rounded-xl bg-[#0d1323] border border-slate-800/60 hover:border-cyan-500/50 transition flex items-center gap-3" rel="noreferrer">
          <div className="p-2 rounded-md bg-gradient-to-br from-indigo-600 to-cyan-500 text-white"><Github size={18} /></div>
          <div>
            <div className="font-semibold">GitHub</div>
            <div className="text-slate-400 text-sm">/yourhandle</div>
          </div>
        </a>
        <a href="https://linkedin.com" target="_blank" className="p-6 rounded-xl bg-[#0d1323] border border-slate-800/60 hover:border-cyan-500/50 transition flex items-center gap-3" rel="noreferrer">
          <div className="p-2 rounded-md bg-gradient-to-br from-indigo-600 to-cyan-500 text-white"><Linkedin size={18} /></div>
          <div>
            <div className="font-semibold">LinkedIn</div>
            <div className="text-slate-400 text-sm">/in/yourhandle</div>
          </div>
        </a>
      </div>
    </Section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800/60 bg-[#070b14] text-slate-400 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {year} Your Name. All rights reserved.</div>
        <div className="text-sm">Built with care — cinematic dark aesthetic.</div>
      </div>
    </footer>
  );
}
