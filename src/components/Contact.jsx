import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">Let’s create something cozy and bold</h2>
          <p className="mt-2 text-neutral-300">Open to collaborations, internships, and portfolio feedback. Reach out and I’ll get back soon.</p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm text-neutral-300">Name</label>
              <input type="text" placeholder="Your name" className="w-full rounded-md border border-white/10 bg-neutral-800/60 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm text-neutral-300">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full rounded-md border border-white/10 bg-neutral-800/60 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm text-neutral-300">Message</label>
              <textarea rows="5" placeholder="Tell me about your idea…" className="w-full rounded-md border border-white/10 bg-neutral-800/60 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-xs text-neutral-400">I read every message. No spam, ever.</p>
              <button type="button" className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-neutral-950 shadow-lg shadow-orange-500/30 transition hover:bg-orange-400">Send</button>
            </div>
          </form>
        </div>
        <p className="mt-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Cozy Studio — All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
