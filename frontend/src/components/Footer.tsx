'use client';

import React from 'react';

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white border-t-4 border-blue-600 pt-16 pb-8 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div className="space-y-6">
            <span className="text-2xl md:text-3xl font-black text-blue-500 tracking-tighter uppercase block leading-[0.85]">
              Agencia<br/>Studio.sys
            </span>
            <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-[0.1em] max-w-xs leading-relaxed">
              Performance Engineering // Precision Marketing <br/>
              [BUILD: 2026.02_STABLE]
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">_ROOT</h4>
            <ul className="flex flex-col gap-3 font-black uppercase text-xs">
              <li><a href="#about" className="hover:text-blue-500 transition-colors">/ CAPACIDADES</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition-colors">/ TRABALHOS</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">/ CONTATO</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">_CONTATO</h4>
            <ul className="flex flex-col gap-3 font-black uppercase text-xs text-zinc-400">
              <li>EMAIL: HELLO@STUDIO.SYS</li>
              <li>TEL: +55 90000-0000</li>
              <li>LOC: REMOTE_OPS</li>
            </ul>
          </div>
        </div>
  
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] text-center sm:text-left">
            <span>© {currentYear} STUDIO_SYSTEM</span>
            <span className="text-blue-900 font-black">PROTOCOLO_ATIVO</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-[#0077B5] transition-all duration-300">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-5-5-5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;