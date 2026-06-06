"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = ["Studio", "Work", "About"] as const;

export default function FlareProjectPage() {
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
            {["Studio", "Work", "About"].filter((l) => l !== "Work").map((l) => (
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
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-gray uppercase mb-2 block">Custom Agent</span>
                <h1 className="font-serif font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.06] text-do-black">Bobby Bot</h1>
                <p className="font-sans text-sm text-do-gray mt-2">Automated Interview Coordination Agent</p>
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
                  Built an autonomous Slack-based agent that manages weekly member interview scheduling, reminders, attendance tracking, and calendar coordination for a creative community.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">Why</span>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The interview signup process required constant manual oversight, follow-ups, and coordination, consuming roughly 10 hours of administrative work every week.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">Tools</span>
                <div className="flex flex-wrap gap-2">
                  {["Render", "Slack API", "Zapier", "Supabase"].map((tool) => (
                    <span key={tool} className="font-sans text-xs text-do-gray border border-[#e4e3df] rounded-full px-3 py-1">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Story — directly below tools */}
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">Story</span>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  A creative community in New York conducts regular interviews with prospective members as part of its application process. Every week, someone on the team was responsible for coordinating interview slots, reminding applicants to sign up, tracking availability, and making sure nobody slipped through the cracks.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The process was highly repetitive but required constant attention. Each Monday, the team needed to announce available interview slots, monitor signups throughout the week, follow up with applicants who had not scheduled, and manually update calendars as slots filled.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  To solve this, I built "Bobby Bot" — an autonomous Slack agent named after the team member who previously handled the process manually. The bot wakes up every Monday and publishes available interview slots directly into Slack. Throughout the week, it monitors signup activity, follows up with members who have not scheduled, and intelligently tracks how many interview slots remain available.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  As members book interviews, Bobby Bot automatically updates the database, adjusts availability counts, and adds participants to the appropriate calendar events. The system maintains awareness of the current state of the interview pipeline and can make decisions based on real-time availability without requiring human intervention.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The result is a fully self-sustaining scheduling coordinator that operates behind the scenes. What was previously a recurring administrative responsibility became an automated workflow that saves approximately 10 hours of manual effort every week while ensuring a more consistent and reliable experience for applicants and staff alike.
                </p>
              </div>
            </div>

            {/* Right — project image */}
            <div className="w-full rounded-xl overflow-hidden">
              <img src="/BobbyBot1.png" alt="Bobby Bot" className="w-full h-auto" />
            </div>

          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="w-full px-6 md:px-12 py-10">
          <div className="max-w-container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-xl overflow-hidden">
              <img src="/BobbyBot.png" alt="Bobby Bot" className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/BobbyBot3.png" alt="Bobby Bot" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* ── Next project ── */}
        <section className="w-full px-6 md:px-12 py-12 border-t border-[#e4e3df]">
          <div className="max-w-container mx-auto flex items-center justify-between">
            <span className="font-jakarta text-xs tracking-[0.1em] font-bold text-do-gray uppercase">Next project</span>
            <a href="/work/ephra" className="group inline-flex items-center gap-3 font-serif font-light text-2xl text-do-black hover:text-do-blue transition-colors duration-150">
              Ephra <span className="font-sans text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
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
