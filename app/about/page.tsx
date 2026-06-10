"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = ["Studio", "Work", "About"] as const;

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileLinks = navLinks.filter((l) => (l === "Studio" ? "/" : `/${l.toLowerCase()}`) !== pathname);

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-do-black flex flex-col">

      {/* ── Header ── */}
      <header className="w-full px-6 md:px-12 py-5 relative z-50">
        <div className="max-w-container mx-auto flex items-center justify-between md:grid md:grid-cols-3 md:items-center">

          <a href="/" className="inline-flex items-center gap-2 md:flex-col md:gap-0 md:justify-self-start" aria-label="DayOff Studio home">
            <img src="/DOLogoNew.svg" alt="DayOff Studio" className="h-10 md:h-[100px] w-auto" />
            <span className="font-jakarta text-xs font-bold text-do-black tracking-[0.1em] md:mt-1">DayOff Studio</span>
          </a>

          <nav className="hidden md:flex items-center justify-center gap-8" aria-label="Main">
            {navLinks.map((l) => (
              <a
                key={l}
                href={l === "Studio" ? "/" : `/${l.toLowerCase()}`}
                className={`relative font-sans text-sm tracking-wide lowercase after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-do-black after:transition-[width] after:duration-200 hover:after:w-full ${pathname === (l === "Studio" ? "/" : `/${l.toLowerCase()}`) ? "font-semibold" : "font-normal"}`}
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="justify-self-end flex items-center">
            <a
              href="https://tally.so/r/9q4jg4"
              className="hidden md:inline-flex items-center gap-[5px] font-sans text-sm tracking-wide text-do-blue font-medium hover:text-do-black lowercase transition-colors duration-150"
            >
              contact us <span>↗</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-6 h-6"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <span className="font-sans text-lg text-do-black leading-none">✕</span>
              ) : (
                <>
                  <span className="block w-5 h-[1.5px] bg-do-black rounded-full" />
                  <span className="block w-5 h-[1.5px] bg-do-black rounded-full" />
                  <span className="block w-5 h-[1.5px] bg-do-black rounded-full" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full right-6 bg-[#FBFBFB] border border-[#e4e3df] rounded-lg px-5 py-4 flex flex-col gap-4 z-50 shadow-sm">
            {mobileLinks.map((l) => (
              <a
                key={l}
                href={l === "Studio" ? "/" : `/${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-base lowercase text-do-black hover:text-do-blue transition-colors duration-150"
              >
                {l}
              </a>
            ))}
            <a href="https://tally.so/r/9q4jg4" onClick={() => setMenuOpen(false)}
              className="font-sans text-base lowercase text-do-black hover:text-do-blue transition-colors duration-150">
              contact us
            </a>
          </div>
        )}
      </header>

      {/* ── Main ── */}
      <main className="flex-1 w-full px-6 md:px-12 pt-10 pb-2 md:pt-14 md:pb-4">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — all text */}
          <div className="flex flex-col gap-6">
            <h1 className="font-serif font-light text-[clamp(2.6rem,5vw,4rem)] leading-[1.06] text-do-black">
              We create systems that work while you <em className="italic">sleep</em>
            </h1>

            <p className="font-sans text-sm leading-relaxed text-do-gray">
              In today&apos;s rapidly evolving AI age, the job of the founder seems to be evolving as well. There is no time to be wasted and vision has never mattered more. As such, founders simply can&apos;t waste time doing tasks twice. Their goal is to create and then quickly automate so they can move to the next unexplored area.
            </p>

            <p className="font-sans text-sm leading-relaxed text-do-gray">
              At DayOff, we want to empower you on this journey as a business owner. There&apos;s no area we shy away from and are simply excited by solving the puzzle of successfully automating a workflow.
            </p>

            <p className="font-sans text-sm leading-relaxed text-do-gray">
              Our team consists of 2 individuals for now. We&apos;re a father-son studio who obsess over making boring tasks run on their own.
            </p>

            <div className="flex flex-col gap-2">
              <p className="font-sans text-sm leading-relaxed text-do-gray">When you work with us, you work with us:</p>
              <p className="font-sans text-sm leading-relaxed text-do-gray">
                <span className="font-medium text-do-black">Ali Ahmed</span> — Ex-Consulting, former founder, maker of many automations
              </p>
              <p className="font-sans text-sm leading-relaxed text-do-gray">
                <span className="font-medium text-do-black">Saleem Ahmed</span> — Operations executive with 40+ years of experience at startups and public companies
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-sans text-sm leading-relaxed text-do-gray">We&apos;d love to hear from you</p>
              <a
                href="https://tally.so/r/9q4jg4"
                className="inline-flex items-center gap-[5px] font-sans text-sm font-medium text-do-blue hover:text-do-black transition-colors duration-150 group"
              >
                contact us
                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Right — about image */}
          <div className="w-[60%] mx-auto md:-mt-10">
            <img src="/aboutimg.svg" alt="About DayOff Studio" className="w-full h-auto rounded-xl" />
          </div>

        </div>
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
            <a href="https://tally.so/r/9q4jg4" className="font-sans text-xs text-do-blue hover:text-do-black transition-colors duration-150">contact us</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
