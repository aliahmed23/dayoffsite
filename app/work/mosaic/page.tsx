"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = ["Studio", "Work", "About"] as const;

export default function MosaicProjectPage() {
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
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-gray uppercase mb-2 block">AI Tool</span>
                <h1 className="font-serif font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.06] text-do-black">Super Power Slides</h1>
                <p className="font-sans text-sm text-do-gray mt-2">AI-Powered Onboarding Deck Generator</p>
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
                  Built an AI-powered system that transforms customer call transcripts into nearly complete onboarding presentations, reducing deck creation time from hours to minutes.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">Why</span>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  Critical customer knowledge was trapped inside sales conversations, forcing implementation managers to manually review transcripts and recreate onboarding materials for every new customer engagement.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">Tools</span>
                <div className="flex flex-wrap gap-2">
                  {["OpenAI API", "Google Slides", "Vercel"].map((tool) => (
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
                  At Tabs, every new customer onboarding began with a kickoff call. Before that call could happen, implementation managers needed to build a presentation that demonstrated an understanding of the customer&apos;s business, workflows, requirements, and implementation goals.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The problem was that most of this information already existed. During the sales process, account executives had extensive conversations with prospective customers, and those conversations were recorded and transcribed. However, the valuable context captured during sales rarely transferred cleanly to the implementation team.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  As a result, implementation managers spent several hours reviewing call transcripts, extracting key information, and manually rebuilding the same onboarding presentation over and over again using a standardized slide template.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  I saw an opportunity to eliminate that work entirely.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  I built a web application that accepts two inputs: a PDF containing customer call transcripts and a Google Slides template. Once submitted, the system uses AI to analyze the transcripts, identify relevant customer information, extract implementation requirements, summarize workflows, and map that information to the appropriate sections of the presentation.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The platform then automatically populates the Google Slides deck with customer-specific content, generating a presentation that is approximately 90% complete before a human ever touches it. Implementation managers simply review the generated slides, make any final adjustments, and proceed directly to the kickoff meeting.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The automation transformed a task that previously required several hours of manual effort into a process that takes roughly twenty minutes from start to finish.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  Beyond the immediate time savings, the system improved the quality of knowledge transfer between sales and implementation teams. Important details that were previously buried inside call transcripts became structured, accessible, and consistently communicated during customer onboarding.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  For a team onboarding dozens of customers each month, the impact was substantial. By reducing approximately three hours of preparation time per customer, the system saved hundreds of hours of operational effort while allowing implementation managers to focus on customer success rather than administrative work.
                </p>
              </div>
            </div>

            {/* Right — project image */}
            <div className="w-full rounded-xl overflow-hidden shadow-md">
              <img src="/Slides-UI.png" alt="Super Power Slides — AI-Powered Onboarding Deck Generator" className="w-full h-auto" />
            </div>

          </div>
        </section>

        {/* ── Next project ── */}
        <section className="w-full px-6 md:px-12 py-12 border-t border-[#e4e3df]">
          <div className="max-w-container mx-auto flex items-center justify-between">
            <span className="font-jakarta text-xs tracking-[0.1em] font-bold text-do-gray uppercase">Next project</span>
            <a href="/work/canopy" className="group inline-flex items-center gap-3 font-serif font-light text-2xl text-do-black hover:text-do-blue transition-colors duration-150">
              Monday Roundup <span className="font-sans text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
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
