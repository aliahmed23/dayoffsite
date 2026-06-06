"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = ["Studio", "Work", "About"] as const;

export default function DuskProjectPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-do-black flex flex-col">

      {/* ── Header ── */}
      <header className="w-full px-6 md:px-12 py-5 relative z-50">
        <div className="max-w-container mx-auto grid grid-cols-3 items-center">
          <a href="/" className="inline-flex flex-col items-center justify-self-start" aria-label="DayOff Studio home">
            <img src="/do-logo-clean.svg" alt="DayOff Studio" className="h-[100px] w-auto" />
            <span className="font-jakarta text-xs font-bold text-do-black tracking-[0.1em] mt-1">DayOff Studio</span>
          </a>
          <nav className="hidden md:flex items-center justify-center gap-8" aria-label="Main">
            {navLinks.map((l) => (
              <a key={l} href={l === "Studio" ? "/" : `/${l.toLowerCase()}`}
                className={`relative font-sans text-sm tracking-wide lowercase after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-do-black after:transition-[width] after:duration-200 hover:after:w-full ${pathname === (l === "Studio" ? "/" : `/${l.toLowerCase()}`) ? "font-semibold" : "font-normal"}`}>
                {l}
              </a>
            ))}
          </nav>
          <div className="justify-self-end flex items-center">
            <a href="/contact" className="hidden md:inline-flex items-center gap-[5px] font-sans text-sm text-do-blue font-medium hover:text-do-black lowercase transition-colors duration-150">
              contact us <span>↗</span>
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col justify-center items-center gap-[5px] w-6 h-6" aria-label="Toggle menu">
              {menuOpen ? <span className="text-lg leading-none">✕</span> : (
                <>
                  <span className="block w-5 h-[1.5px] bg-do-black rounded-full" />
                  <span className="block w-5 h-[1.5px] bg-do-black rounded-full" />
                  <span className="block w-5 h-[1.5px] bg-do-black rounded-full" />
                </>
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FBFBFB] border-t border-[#e4e3df] px-6 py-8 flex flex-col gap-6 z-50 shadow-sm">
            {["Studio", "About"].map((l) => (
              <a key={l} href={l === "Studio" ? "/" : `/${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="font-sans text-2xl lowercase text-do-black hover:text-do-blue transition-colors duration-150">{l}</a>
            ))}
            <div className="border-t border-[#e4e3df] pt-6">
              <a href="/contact" className="font-sans text-sm text-do-blue font-medium lowercase">contact us ↗</a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 w-full">

        {/* ── Back + Title ── */}
        <section className="w-full px-6 md:px-12 pt-8 pb-10">
          <div className="max-w-container mx-auto">
            <a href="/work" className="inline-flex items-center gap-2 font-sans text-xs text-do-gray hover:text-do-black transition-colors duration-150 mb-8 group">
              <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span> All projects
            </a>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
              <div>
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-gray uppercase mb-2 block">Automation</span>
                <h1 className="font-serif font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.06] text-do-black">The New Times</h1>
                <p className="font-sans text-sm text-do-gray mt-2">Automated Publication Pipeline</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What / Why + Image ── */}
        <section className="w-full px-6 md:px-12 pb-14">
          <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-[1fr_minmax(0,0.7fr)] gap-10 md:gap-16 items-start">

            {/* Left — What, Why & Tools */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">What</span>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  Built an automated publishing system that transforms community-submitted articles into a production-ready magazine draft with minimal manual effort.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">Why</span>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The team wanted to regularly publish community writing in a magazine format, but manually collecting articles, organizing content, and assembling layouts created too much operational overhead.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">Tools</span>
                <div className="flex flex-wrap gap-2">
                  {["Tally", "Airtable", "Python", "Render", "Webhooks"].map((tool) => (
                    <span key={tool} className="font-sans text-xs text-do-gray border border-[#e4e3df] rounded-full px-3 py-1">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Story */}
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">Story</span>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  A creative community regularly publishes writing from its members. Many contributors maintain personal publications on platforms like Substack, and the team wanted to showcase that work through a recurring magazine-style publication that could be shared with the broader community.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The challenge was that producing a publication required significant manual coordination. Someone needed to collect submissions, extract article content, gather author information, organize media assets, create a table of contents, and assemble everything into a printable format. For a recurring publication, this quickly became unsustainable.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  To solve this, I built an automated publication pipeline that converted article submissions into a structured editorial workflow.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  Contributors simply submit a link to their article through a Tally form. Behind the scenes, the submission triggers a webhook that processes the article automatically. A Python service retrieves the article content, extracts metadata such as author information and publication date, captures relevant media assets, and stores the structured content inside Airtable.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  Once submissions have been collected, a second workflow assembles the publication automatically. The system retrieves all approved submissions, generates a table of contents, formats articles into a consistent layout, and produces a complete PDF draft of the magazine.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  Rather than starting from a blank page each month, the editorial team receives a production-ready draft that already contains the publication structure, article content, contributor information, and supporting assets. The team can then focus on higher-value creative work such as cover design, layout refinement, and final editorial review.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The result is a scalable content production system that dramatically reduces the effort required to publish community writing while making recurring publications feasible with a small team.
                </p>
              </div>
            </div>

            {/* Right — project image */}
            <div className="w-full rounded-xl overflow-hidden shadow-md">
              <img src="/VZine.png" alt="The New Times — Automated Publication Pipeline" className="w-full h-auto" />
            </div>

          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="w-full px-6 md:px-12 py-10">
          <div className="max-w-container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/VZine1.png" alt="The New Times" className="w-full h-auto" />
            </div>
            <div className="w-3/4 mx-auto rounded-xl overflow-hidden shadow-md">
              <img src="/VZine2.png" alt="The New Times" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* ── Next project ── */}
        <section className="w-full px-6 md:px-12 py-12 border-t border-[#e4e3df]">
          <div className="max-w-container mx-auto flex items-center justify-between">
            <span className="font-jakarta text-xs tracking-[0.1em] font-bold text-do-gray uppercase">Next project</span>
            <a href="/work/orion" className="group inline-flex items-center gap-3 font-serif font-light text-2xl text-do-black hover:text-do-blue transition-colors duration-150">
              Orion <span className="font-sans text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="w-full px-6 md:px-12 py-10 border-t border-[#e4e3df]">
        <div className="max-w-container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-[11px] text-center sm:text-left">
          <div className="flex flex-col gap-1.5 items-center sm:items-start">
            <span className="font-sans text-do-black">© {new Date().getFullYear()} DayOff Studio</span>
            <span className="font-sans text-do-gray">All rights reserved</span>
          </div>
          <div className="flex flex-col gap-1.5 items-center sm:items-start">
            {["Instagram", "Twitter", "LinkedIn"].map((s) => (
              <a key={s} href="#" className="font-sans text-do-gray hover:text-do-black transition-colors duration-150 w-fit">{s}</a>
            ))}
          </div>
          <div className="flex flex-col gap-1.5 items-center sm:items-start">
            <span className="font-sans text-do-black">Let&apos;s create something great together</span>
            <a href="mailto:hello@dayoff.studio" className="font-sans text-do-gray hover:text-do-blue transition-colors duration-150">hello@dayoff.studio</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
