import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md/50 bg-[#0a0f1c]/60' : 'bg-transparent'
    }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-slate-200 via-slate-100 to-white bg-clip-text text-transparent">AI</span>
          <span className="bg-gradient-to-r from-[#1a6aff] via-[#6b8bff] to-cyan-400 bg-clip-text text-transparent ml-1">PORTFOLIO</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {[
            { href: '#about', label: 'About' },
            { href: '#showcase', label: 'Work' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-300 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all bg-gradient-to-r from-indigo-400 to-cyan-400"></span>
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-medium shadow-lg shadow-indigo-900/30 hover:shadow-indigo-800/50 transition hidden sm:inline-flex"
        >
          Get In Touch
        </a>
      </nav>
    </header>
  );
}
