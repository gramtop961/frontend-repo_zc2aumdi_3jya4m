import React from 'react';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="text-sm font-semibold tracking-wide text-orange-300">my cosy studio</a>
        <nav className="hidden gap-6 text-sm sm:flex">
          <a href="#work" className="text-white/80 hover:text-white">Work</a>
          <a href="#about" className="text-white/80 hover:text-white">About</a>
          <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/90 hover:bg-white/20 sm:text-sm">Say hi</a>
      </div>
    </header>
  );
};

export default NavBar;
