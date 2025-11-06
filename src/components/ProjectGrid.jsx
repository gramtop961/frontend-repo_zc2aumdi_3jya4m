import React from 'react';

const projects = [
  {
    title: 'Brand Tiles',
    tag: 'Branding · Print',
    cover: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop',
    accent: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Playful UI',
    tag: 'UI/UX · Web',
    cover: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1400&auto=format&fit=crop',
    accent: 'from-red-500/20 to-pink-500/20',
  },
  {
    title: 'Motion Loops',
    tag: 'Motion · 3D',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1400&auto=format&fit=crop',
    accent: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Lens Diary',
    tag: 'Photography',
    cover: 'https://images.unsplash.com/photo-1526178610353-3e06f9fcb0b9?q=80&w=1400&auto=format&fit=crop',
    accent: 'from-orange-400/20 to-rose-500/20',
  },
];

const ProjectCard = ({ item }) => {
  return (
    <a
      href="#"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 shadow-lg transition hover:shadow-orange-500/10"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent}`}></div>
      <img
        src={item.cover}
        alt={item.title}
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-xs uppercase tracking-wider text-orange-300/90">{item.tag}</p>
        <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
      </div>
    </a>
  );
};

const ProjectGrid = () => {
  return (
    <section id="work" className="bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Selected Work</h2>
            <p className="mt-2 max-w-2xl text-neutral-300">A cross‑disciplinary mix to show range: identity systems, playful interfaces, motion experiments, and thoughtful photography.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-white/40 hover:text-white sm:block">Available for collabs</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={i} item={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
