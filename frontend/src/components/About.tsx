'use client';

import { useState, useEffect } from 'react';
import DottedGrid from "./DottedGrid";

export default function About() {

  const handleImageError = (e: any) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800";
  };

  return (
    <section id="about" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-white border-y-2 border-dashed border-zinc-200 overflow-hidden text-zinc-950 selection:bg-blue-500 selection:text-white">

      <div className="absolute -top-10 -left-20 opacity-10 rotate-12 pointer-events-none hidden xl:block">
        <DottedGrid color="#d4d4d8" size={8} />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            <header>
              <h2 className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                Impacto<br />
                <span className="text-blue-600">Digital_</span><br />
                Sem Limites
              </h2>
              <div className="h-2 w-24 bg-blue-600 mb-8"></div>
            </header>

            <div className="space-y-6 max-w-2xl">
              <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight text-zinc-900">
                Transformamos dados brutos em dominância de mercado através de estratégias independentes e escala global.
              </p>

              <p className="text-lg md:text-xl font-medium text-zinc-600 leading-relaxed">
                Nossa abordagem combina engenharia de software com marketing de alta performance.
                Cobrimos todos os aspectos da aquisição de clientes online, garantindo que sua
                presença digital seja tão robusta quanto sua infraestrutura técnica.
              </p>
            </div>

            <div className="pt-4">
              <button className="group relative overflow-hidden bg-zinc-950 text-white px-10 py-5 font-black uppercase text-sm transition-all hover:bg-blue-600 w-full sm:w-max border-2 border-zinc-950 shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
                Conheça Nosso Método _
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative p-4">
            <div
              className="absolute inset-4 bg-blue-500 shadow-[15px_15px_0px_0px_rgba(9,9,11,1)]"
              style={{
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)',
              }}
            />

            <div
              className="relative w-full aspect-square max-w-md overflow-hidden border-4 border-zinc-950 bg-zinc-900"
              style={{
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)',
              }}
            >
              <img
                src="http://googleusercontent.com/image_collection/image_retrieval/17678810096964977069_0"
                alt="Modern Marketing Agency"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                onError={handleImageError}
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-20 h-20 border-r-4 border-b-4 border-blue-600 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
}