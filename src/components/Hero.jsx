import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[80vh] overflow-hidden bg-neutral-950 text-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette + gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/40 to-neutral-950"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-orange-200 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-orange-400"></span>
          First‑Year Design Portfolio
        </p>
        <h1 className="font-semibold leading-tight tracking-tight text-white/95" style={{fontFamily:'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
          <span className="text-4xl sm:text-5xl md:text-6xl">Cozy, curious, and boldly crafted.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-200 sm:text-lg">
          A versatile collection spanning brand, illustration, UI, motion, and photography — warm vibes between minimal and maximal energy.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#work" className="rounded-full bg-orange-500 px-5 py-3 text-sm font-medium text-neutral-950 shadow-lg shadow-orange-500/30 transition hover:bg-orange-400">
            View Work
          </a>
          <a href="#about" className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/40 hover:text-white">
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
