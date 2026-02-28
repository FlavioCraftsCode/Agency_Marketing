'use client';

import Navbar from '../components/Navbar';

interface ServiceDetail {
  id: string;
  name: string;
  tag: string;
  description: string;
  specs: string[];
  imageUrl: string;
}

const servicesList: ServiceDetail[] = [
  {
    id: '01',
    name: 'ENGENHARIA_SEO',
    tag: 'TECHNICAL_GROWTH',
    description: 'Não fazemos apenas palavras-chave. Reestruturamos o Core Web Vitals e a arquitetura de indexação para dominância orgânica.',
    specs: ['Vite/Next.js Optimization', 'Semantic HTML5', 'Schema Markup'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '02',
    name: 'PERFORMANCE_PAID',
    tag: 'ROI_MAXIMIZER',
    description: 'Gestão de tráfego baseada em modelos probabilísticos e atribuição de dados real, garantindo escala sem desperdício.',
    specs: ['Real-time Bidding', 'Conversion API', 'LTV Prediction'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '03',
    name: 'SISTEMAS_DESIGN',
    tag: 'UI_UX_SCALABILITY',
    description: 'Criação de ecossistemas visuais escaláveis. Design brutalista que converte através da clareza e autoridade técnica.',
    specs: ['Design Systems', 'Atomic Design', 'High-Fidelity Prototyping'],
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Services() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white selection:bg-blue-600 relative overflow-x-hidden w-full">
      <Navbar />

      <section className="pt-48 md:pt-60 pb-16 md:pb-24 px-4 sm:px-8 border-b-8 border-blue-600 w-full bg-zinc-950">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[2px] w-12 bg-blue-600"></span>
            <span className="text-blue-500 font-black tracking-[0.4em] text-xs md:text-sm uppercase">
              [ CATALOG_V.1.0 // SERVICES ]
            </span>
          </div>
          <h1 className="text-[clamp(2.5rem,12vw,9rem)] font-black uppercase tracking-tighter leading-[0.8] mb-10 text-white break-keep">
            NOSSOS<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>SERVIÇOS_</span>
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-40 px-4 sm:px-8 w-full bg-white text-zinc-950">
        <div className="max-w-[1440px] mx-auto space-y-32 md:space-y-64">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full lg:w-7/12 relative group">
                <div className="absolute top-4 left-4 w-full h-full border-2 border-blue-600 -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-500"></div>
                <div className="relative overflow-hidden border-4 border-zinc-950 aspect-video bg-zinc-200 shadow-[12px_12px_0px_0px_rgba(9,9,11,1)]">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 bg-zinc-950 text-white font-black px-4 py-2 text-xs uppercase tracking-tighter">
                    {service.tag}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-5/12 space-y-8">
                <div className="space-y-2">
                  <span className="text-6xl md:text-8xl font-black text-zinc-100 leading-none block">
                    {service.id}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight border-l-8 border-blue-600 pl-6 text-zinc-950">
                    {service.name.replace('_', ' ')}
                  </h2>
                </div>

                <p className="text-zinc-600 font-bold text-base md:text-xl uppercase leading-relaxed tracking-tight">
                  {service.description}
                </p>

                <div className="pt-6 border-t-2 border-zinc-200">
                  <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4">_TECH_STACK</h4>
                  <ul className="grid grid-cols-2 gap-4">
                    {service.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-3 text-xs font-black text-zinc-950 uppercase">
                        <span className="text-blue-600">■</span> {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}