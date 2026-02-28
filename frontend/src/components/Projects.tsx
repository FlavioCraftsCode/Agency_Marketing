interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  { 
    id: '01', 
    title: 'VORTEX_SYSTEM', 
    category: 'BRANDING', 
    description: 'Rebranding completo para scale-up do setor financeiro.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600'
  },
  { 
    id: '02', 
    title: 'QUANTUM_FLOW', 
    category: 'PERFORMANCE', 
    description: 'Otimização de conversão com foco em UX/UI e SEO técnico.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
  },
  { 
    id: '03', 
    title: 'ALPHA_CAMPAIGN', 
    category: 'MARKETING', 
    description: 'Estratégia de aquisição multi-canal com foco em ROI.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600'
  },
  { 
    id: '04', 
    title: 'NEURAL_DESIGN', 
    category: 'UI/UX', 
    description: 'Interface escalável baseada em design systems modernos.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-8 bg-zinc-50 border-t-2 border-zinc-950 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <h2 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-zinc-950 leading-[0.85] break-words">
            TRABALHOS<br />
            <span className="text-blue-600">RECENTES</span>
          </h2>
          <p className="max-w-md font-bold text-zinc-600 border-l-4 border-blue-600 pl-4 uppercase text-xs sm:text-sm leading-tight">
            Selecionamos cases onde a técnica encontra o resultado bruto. Performance sem supérfluos.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white border-[3px] md:border-4 border-zinc-950 flex flex-col overflow-hidden 
                         active:scale-[0.98] md:hover:-translate-y-2 md:hover:shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] 
                         transition-all duration-300 touch-manipulation"
            >
              
              <div className="h-48 sm:h-56 md:h-48 overflow-hidden border-b-[3px] md:border-b-4 border-zinc-950 relative">
                
                <div className="absolute inset-0 bg-blue-600/10 group-active:bg-transparent md:group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-active:grayscale-0 md:group-hover:grayscale-0 md:group-hover:scale-110 transition-all duration-500"
                />
                <span className="absolute top-4 left-4 z-20 bg-zinc-950 text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              
              <div className="p-5 md:p-6 flex flex-col justify-between flex-grow bg-white group-active:bg-zinc-950 md:group-hover:bg-zinc-950 transition-colors duration-300">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-3xl md:text-4xl font-black text-zinc-100 group-active:text-zinc-800 md:group-hover:text-zinc-800 transition-colors">
                      {project.id}
                    </span>
                    <span className="text-xl md:text-2xl text-blue-600 md:opacity-0 md:group-hover:opacity-100 transition-all">↗</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase text-zinc-950 group-active:text-white md:group-hover:text-white mt-1 tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-zinc-600 group-active:text-zinc-400 md:group-hover:text-zinc-400 font-bold mt-4 md:mt-6 text-[10px] md:text-xs leading-relaxed uppercase">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}