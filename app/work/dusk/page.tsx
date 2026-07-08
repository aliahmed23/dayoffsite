"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = ["Studio", "Work", "About"] as const;

export default function DuskProjectPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-do-black flex flex-col">

      {/* ── Header ── */}
      <header className="w-full px-6 md:px-12 py-5 relative z-50">
        <div className="max-w-container mx-auto flex items-center justify-between md:grid md:grid-cols-3 md:items-center">
          <a href="/" className="inline-flex items-center gap-2 md:flex-col md:gap-0 md:justify-self-start" aria-label="DayOff Studio home">
            <img src="/DOLOGOFINAL.png" alt="DayOff Studio" className="h-10 md:h-[100px] w-auto drop-shadow-sm" />
            <span className="font-jakarta text-xs font-bold text-do-black tracking-[0.1em] md:mt-1">DayOff Studio</span>
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
            <a href="https://tally.so/r/9q4jg4"
              target="_blank"
              rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-[5px] font-sans text-sm text-do-blue font-medium hover:text-do-black lowercase transition-colors duration-150">
              work with us <span>↗</span>
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col justify-center items-center gap-[5px] w-6 h-6" aria-label="Toggle menu">
              {menuOpen ? <span className="font-sans text-lg text-do-black leading-none">✕</span> : (
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
          <div className="md:hidden absolute top-full right-6 bg-[#FBFBFB] border border-[#e4e3df] rounded-lg px-5 py-4 flex flex-col gap-4 z-50 shadow-sm">
            {navLinks.map((l) => (
              <a key={l} href={l === "Studio" ? "/" : `/${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="font-sans text-base lowercase text-do-black hover:text-do-blue transition-colors duration-150">{l}</a>
            ))}
            <a href="https://tally.so/r/9q4jg4"
              target="_blank"
              rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
              className="font-sans text-base lowercase text-do-black hover:text-do-blue transition-colors duration-150">
              work with us
            </a>
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
            <div className="w-full rounded-xl overflow-hidden shadow-md cursor-zoom-in" onClick={() => setLightbox("/VZine.png")}>
              <img src="/VZine.png" alt="The New Times — Automated Publication Pipeline" className="w-full h-auto" />
            </div>

          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="w-full px-6 md:px-12 py-10">
          <div className="max-w-container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-xl overflow-hidden shadow-md cursor-zoom-in" onClick={() => setLightbox("/VZine1.png")}>
              <img src="/VZine1.png" alt="The New Times" className="w-full h-auto" />
            </div>
            <div className="w-3/4 mx-auto rounded-xl overflow-hidden shadow-md cursor-zoom-in" onClick={() => setLightbox("/VZine2.png")}>
              <img src="/VZine2.png" alt="The New Times" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {lightbox && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setLightbox(null)}>
            <button className="absolute top-5 right-6 text-white text-2xl leading-none hover:text-gray-300 transition-colors" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox} alt="Project image" className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain" onClick={(e) => e.stopPropagation()} />
          </div>
        )}

        {/* ── Next project ── */}
        <section className="w-full px-6 md:px-12 py-12 border-t border-[#e4e3df]">
          <div className="max-w-container mx-auto flex items-center justify-between">
            <span className="font-jakarta text-xs tracking-[0.1em] font-bold text-do-gray uppercase">Next project</span>
            <a href="/work/orion" className="group inline-flex items-center gap-3 font-serif font-light text-2xl text-do-black hover:text-do-blue transition-colors duration-150">
              imessage - Did you pay? <span className="font-sans text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="w-full px-6 md:px-12 py-10 border-t border-[#e4e3df]">
        <div className="max-w-container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="flex flex-col gap-2 items-center sm:items-start">
            <span className="font-jakarta text-[10px] tracking-[0.15em] font-bold text-do-black uppercase">DayOff Studio</span>
            <span className="font-sans text-xs text-do-gray leading-relaxed max-w-[180px]">We automate the boring stuff so you can keep building your business.</span>
            <span className="font-sans text-xs text-do-gray leading-relaxed max-w-[180px] mt-1">45 E 20th St, 11th Floor, New York, NY</span>
            <a href="tel:+12489714091" className="font-sans text-xs text-do-gray hover:text-do-black transition-colors duration-150">248-971-4091</a>
            <span className="font-sans text-[11px] text-do-gray mt-1">© {new Date().getFullYear()} All rights reserved</span>
          </div>
          <div className="flex flex-col gap-2 items-center sm:items-start">
            <span className="font-jakarta text-[10px] tracking-[0.15em] font-bold text-do-black uppercase">Navigate</span>
            {[["Studio", "/"], ["Work", "/work"], ["About", "/about"], ["Contact", "https://tally.so/r/9q4jg4"]].map(([label, href]) => (
              <a key={label} href={href} className="font-sans text-xs text-do-gray hover:text-do-black transition-colors duration-150 lowercase">{label}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-center sm:items-start">
            <span className="font-jakarta text-[10px] tracking-[0.15em] font-bold text-do-black uppercase">Get in touch</span>
            <p className="font-sans text-xs text-do-gray leading-relaxed max-w-[180px]">Let&apos;s build something great together.</p>
            <a href="mailto:hello@dayoff.studio" className="font-sans text-xs text-do-blue hover:text-do-black transition-colors duration-150">hello@dayoff.studio</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
