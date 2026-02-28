'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import DottedGrid from './DottedGrid';


export default function Header(): React.JSX.Element {
  return (
    <header className="relative min-h-screen flex items-center pt-32 pb-16 md:pt-48 md:pb-24 px-4 sm:px-8 bg-zinc-950 overflow-hidden border-b-8 border-blue-600">


      <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
        <DottedGrid color="#3b82f6" size={12} />
      </div>

      <div className="max-w-[1440px] mx-auto w-full z-10">
        <div className="grid lg:grid-cols-12 gap-y-6 lg:gap-x-16 items-start">


          <div className="lg:col-span-8">
            <h1 className="
              text-[13vw] sm:text-[10vw] lg:text-[7vw] xl:text-[110px] 
              leading-[0.8] font-black tracking-[-0.05em] text-zinc-50 uppercase break-words
            ">
              DOMÍNIO<br />
              <span className="text-blue-600">DIGITAL_</span><br />
              ESTRATÉGICO
            </h1>
          </div>


          <div className="lg:col-span-4 mt-4 lg:mt-0 flex flex-col justify-end">
            <div className="space-y-6 lg:space-y-8 lg:border-l-4 lg:border-blue-600 lg:pl-10">

              <div className="space-y-4">
                <p className="text-lg sm:text-2xl font-black text-white uppercase leading-tight tracking-tighter">
                  [ENGINEERING_MARKETING_V2]
                </p>
                <p className="text-zinc-400 font-bold text-xs sm:text-base leading-relaxed max-w-sm uppercase">
                  Fundimos arquitetura de software com performance de aquisição bruta.
                  Sua escala global começa no código.
                </p>
              </div>


              <div className="pt-2">
                <Link
                  to="/servicos"
                  className="
                    inline-block text-center group relative w-full sm:w-max bg-blue-600 text-white 
                    px-8 py-5 md:px-10 md:py-6 font-black uppercase text-sm md:text-base 
                    transition-all duration-300
                    hover:bg-white hover:text-zinc-950
                    shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]
                    hover:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)]
                    active:translate-y-1 active:shadow-none
                  "
                >
                  Nossos Serviços _
                </Link>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-16 md:mt-20 pt-8 border-t border-zinc-900 flex flex-wrap gap-4 md:gap-8 text-[9px] md:text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">
          <span>Status: Online</span>
          <span className="hidden sm:block">Region: Global_Ops</span>
          <span>Latency: 24ms</span>
        </div>
      </div>
    </header>
  );
}