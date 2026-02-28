'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleHomeClick = (): void => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (): void => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 md:h-24 bg-zinc-950/98 backdrop-blur-xl z-[9999] border-b-2 border-blue-600 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between">
        <Link to="/" onClick={handleHomeClick} className="z-[10001]">
          <span className="text-xl md:text-2xl font-black text-blue-500 tracking-tighter uppercase leading-none">
            STUDIO.SYS
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-12 font-black text-zinc-200 uppercase tracking-widest text-xs">
          <Link to="/" onClick={handleHomeClick} className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/servicos" className="hover:text-blue-500 transition-colors">Serviços</Link>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Trabalhos</a>

          <Link
            to="/contact"
            onClick={handleContactClick}
            className="bg-blue-600 text-zinc-950 px-6 py-3 font-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            Contato_
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-[10001] w-10 h-10 flex flex-col justify-center items-center group gap-1.5"
          aria-label="Menu"
        >
          <span className={`h-1 w-8 bg-blue-600 transition-all duration-300 transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`h-1 w-8 bg-blue-600 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`h-1 w-8 bg-blue-600 transition-all duration-300 transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      <div className={`
        fixed inset-0 w-full h-screen bg-zinc-950 z-[10000] flex flex-col justify-center items-center transition-all duration-500 ease-in-out
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}>
        <div className="flex flex-col space-y-8 text-center z-10">
          <Link to="/" onClick={handleHomeClick} className="text-5xl font-black text-white hover:text-blue-600 transition-colors uppercase tracking-tighter">
            HOME_
          </Link>
          <Link to="/servicos" onClick={() => setIsOpen(false)} className="text-5xl font-black text-white hover:text-blue-600 transition-colors uppercase tracking-tighter">
            SERVIÇOS_
          </Link>
          <Link
            to="/contact"
            onClick={handleContactClick}
            className="bg-blue-600 text-zinc-950 px-10 py-5 text-xl font-black shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] uppercase inline-block"
          >
            CONTATO_
          </Link>
        </div>
      </div>
    </nav>
  );
}