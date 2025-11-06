import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold sm:text-3xl">About the Designer</h2>
            <p className="mt-4 text-neutral-300">
              I’m a first‑year design student exploring how cozy storytelling meets bold visual energy. I enjoy moving between mediums — brand identity, UI, motion, and photography — and I’m especially curious about tactile textures and warm color palettes.
            </p>
            <p className="mt-4 text-neutral-300">
              My process is playful and iterative: sketch → prototype → refine. I love mixing minimal structure with maximal personality, so each project feels clear yet full of character.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Branding','UI/UX','Illustration','Motion','3D','Photography','Print'].map((skill) => (
                <span key={skill} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">{skill}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-4">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1514517182621-7f46d21d9aa7?q=80&w=1200&auto=format&fit=crop"
                  alt="Portrait"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center text-sm text-neutral-300">Warm lighting, soft textures, and little details that feel like home.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
