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
        <div className="max-w-container mx-auto grid grid-cols-3 items-center">

          <a href="/" className="inline-flex flex-col items-center justify-self-start" aria-label="DayOff Studio home">
            <img src="/do-logo-clean.svg" alt="DayOff Studio" className="h-[100px] w-auto" />
            <span className="font-jakarta text-xs font-bold text-do-black tracking-[0.1em] mt-1">DayOff Studio</span>
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
              href="/contact"
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
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FBFBFB] border-t border-[#e4e3df] px-6 py-8 flex flex-col gap-6 z-50 shadow-sm">
            {mobileLinks.map((l) => (
              <a
                key={l}
                href={l === "Studio" ? "/" : `/${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-2xl lowercase text-do-black hover:text-do-blue transition-colors duration-150"
              >
                {l}
              </a>
            ))}
            <div className="border-t border-[#e4e3df] pt-6">
              <a href="/contact" onClick={() => setMenuOpen(false)} className="font-sans text-sm text-do-blue font-medium lowercase">
                contact us ↗
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── Main ── */}
      <main className="flex-1 w-full px-6 md:px-12 pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — all text */}
          <div className="flex flex-col gap-6">
            <h1 className="font-serif font-light text-[clamp(2.6rem,5vw,4rem)] leading-[1.06] text-do-black">
              We believe great systems create space for what <em className="italic">matters.</em>
            </h1>

            <p className="font-sans text-sm leading-relaxed text-do-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="font-sans text-sm leading-relaxed text-do-gray">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.
            </p>

            <p className="font-sans text-sm leading-relaxed text-do-gray">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur.
            </p>
          </div>

          {/* Right — about image */}
          <div className="w-[60%] mx-auto">
            <img src="/aboutimg.svg" alt="About DayOff Studio" className="w-full h-auto rounded-xl" />
          </div>

        </div>
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
