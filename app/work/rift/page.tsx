"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = ["Studio", "Work", "About"] as const;

export default function RiftProjectPage() {
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
            <a href="https://tally.so/r/9q4jg4" className="hidden md:inline-flex items-center gap-[5px] font-sans text-sm text-do-blue font-medium hover:text-do-black lowercase transition-colors duration-150">
              contact us <span>↗</span>
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
            <a href="https://tally.so/r/9q4jg4" onClick={() => setMenuOpen(false)}
              className="font-sans text-base lowercase text-do-black hover:text-do-blue transition-colors duration-150">
              contact us
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
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-gray uppercase mb-2 block">Dashboard</span>
                <h1 className="font-serif font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.06] text-do-black">IM Dashboard</h1>
                <p className="font-sans text-sm text-do-gray mt-2">Operational Command Center</p>
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
                  Built a centralized operations dashboard that consolidates customer information, project status, documentation, and implementation workflows into a single system of record.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">Why</span>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The implementation team was managing customer onboarding across numerous disconnected tools, creating excessive context switching and making it difficult to maintain visibility across active projects.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">Tools</span>
                <div className="flex flex-wrap gap-2">
                  {["Supabase", "Vercel"].map((tool) => (
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
                  At Tabs, implementation managers were responsible for onboarding new customers and guiding them through the process of adopting the company&apos;s software. Each implementation required understanding a customer&apos;s billing systems, business model, technical requirements, integrations, project timeline, meeting history, and supporting documentation.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The challenge was that this information lived across multiple tools and systems. Implementation managers constantly switched between documents, project plans, notes, meeting records, and customer data to understand where a project stood and what actions needed to happen next. As the number of active implementations grew, maintaining visibility became increasingly difficult.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  To address this, I designed and built a centralized operational dashboard tailored specifically to the team&apos;s workflow. The platform provided a single place to store customer context, track implementation progress, manage project milestones, and organize the various artifacts generated throughout the onboarding process.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  Built on Supabase and deployed through Vercel, the system became a shared operational workspace for the implementation team. Rather than searching through multiple applications to reconstruct project history, team members could quickly access the information they needed and understand the current status of any customer engagement.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The dashboard also provided leadership with greater visibility into implementation activity across the organization. Managers could quickly assess project health, identify bottlenecks, and gain a clearer understanding of team workload without relying on manual status updates.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  Beyond improving day-to-day operations, the platform became a valuable onboarding tool for new employees. By centralizing institutional knowledge and standardizing workflows, it reduced the learning curve for new team members and created a more scalable implementation process.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The result was a purpose-built operational system that reduced context switching, improved organizational visibility, and provided a shared source of truth for customer implementations.
                </p>
              </div>
            </div>

            {/* Right — project image */}
            <div className="w-full rounded-xl overflow-hidden shadow-md cursor-zoom-in" onClick={() => setLightbox("/IM-Dashboard.png")}>
              <img src="/IM-Dashboard.png" alt="IM Dashboard — Operational Command Center" className="w-full h-auto" />
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
            <a href="/work/mosaic" className="group inline-flex items-center gap-3 font-serif font-light text-2xl text-do-black hover:text-do-blue transition-colors duration-150">
              Super Power Slides <span className="font-sans text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
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
