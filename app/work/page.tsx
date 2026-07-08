"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

const projects = [
  { name: "Bobby Bot",              category: "AGENT",            slug: "flare",   bg: "#FFC400", img: "/BobbyBot1.png" },
  { name: "How'd it go?",           category: "DECISION WORKFLOW", slug: "ephra",   bg: "#FFD8C2", img: "/hitgo.png" },
  { name: "Implementation Tracker",  category: "DASHBOARD",         slug: "rift",    bg: "#FF6BAA", img: "/IM-Dashboard.png" },
  { name: "Super Power Slides",     category: "AI TOOL",           slug: "mosaic",  bg: "#0057FF", img: "/Slides-UI.png" },
  { name: "Monday Roundup",         category: "AI REPORTING",      slug: "canopy",  bg: "#00A82D", img: "/MR0.png" },
  { name: "The New Times",          category: "PUBLISHING",        slug: "dusk",    bg: "#FF3B1F", img: "/VZine.png" },
  { name: "imessage - Did you pay?", category: "FUNNEL",           slug: "orion",   bg: "#111111", img: "/pay%20message.png" },
  { name: "Mission Control Center", category: "COMMAND CENTER",    slug: "solace",  bg: "#FFD8C2", img: "/miscont1.png" },
  { name: "Instant Shopify",        category: "COMMERCE",          slug: "veil",    bg: "#FFC400", img: "/shopd1.png" },
] as const;

function ProjectCard({ name, category, slug, bg, img }: { name: string; category: string; slug: string; bg: string; img?: string }) {
  return (
    <a
      href={`/work/${slug}`}
      className="group flex flex-col bg-do-off-white rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      <div
        className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: bg }}
      >
        {img ? (
          <img src={img} alt={name} className="w-[80%] h-[80%] object-contain rounded-lg shadow-sm" />
        ) : (
          <span
            className="font-sans text-[10px] tracking-[0.2em] uppercase select-none"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            [image]
          </span>
        )}
      </div>
      <div className="px-5 py-4 border-t border-[#e4e3df]">
        <p className="font-serif text-lg text-do-black">{name}</p>
        <p className="font-sans text-[11px] text-do-gray mt-0.5 tracking-[0.12em] uppercase">{category}</p>
      </div>
    </a>
  );
}

const navLinks = ["Studio", "Work", "About"] as const;

export default function WorkPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileLinks = navLinks.filter((l) => (l === "Studio" ? "/" : `/${l.toLowerCase()}`) !== pathname);

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-do-black flex flex-col">

      <header className="w-full px-6 md:px-12 py-5 relative z-50">
        <div className="max-w-container mx-auto flex items-center justify-between md:grid md:grid-cols-3 md:items-center">
          <a href="/" className="inline-flex items-center gap-2 md:flex-col md:gap-0 md:justify-self-start" aria-label="DayOff Studio home">
            <img src="/DOLOGOFINAL.png" alt="DayOff Studio" className="h-10 md:h-[100px] w-auto drop-shadow-sm" />
            <span className="font-jakarta text-xs font-bold text-do-black tracking-[0.1em] md:mt-1">
              DayOff Studio
            </span>
          </a>
          <nav className="hidden md:flex items-center justify-center gap-8" aria-label="Main">
            {navLinks.map((l) => {
              const href = l === "Studio" ? "/" : `/${l.toLowerCase()}`;
              const isActive = pathname === href;
              return (
                <a key={l} href={href}
                  className={`relative font-sans text-sm tracking-wide lowercase after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-do-black after:transition-[width] after:duration-200 hover:after:w-full ${isActive ? "font-semibold" : "font-normal"}`}>
                  {l}
                </a>
              );
            })}
          </nav>
          <div className="justify-self-end flex items-center">
            <a href="https://tally.so/r/9q4jg4"
              target="_blank"
              rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-[5px] font-sans text-sm tracking-wide text-do-blue font-medium hover:text-do-black transition-colors duration-150">
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
            {mobileLinks.map((l) => (
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

      <main className="flex-1 w-full px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-container mx-auto">

          <div className="flex items-center gap-2.5 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-do-red shrink-0" />
            <span className="font-jakarta text-xs tracking-[0.1em] font-bold text-do-black">all work</span>
          </div>

          <h1 className="font-serif font-light text-[clamp(2.4rem,4.5vw,3.6rem)] leading-[1.08] text-do-black mb-14">
            Our notable projects.
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.slug} name={p.name} category={p.category} slug={p.slug} bg={p.bg} img={"img" in p ? p.img : undefined} />
            ))}
          </div>

        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full px-6 md:px-12 py-10 border-t border-[#e4e3df]">
        <div className="max-w-container mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">

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

          <div className="hidden md:flex flex-col gap-2 items-center sm:items-start">
            <span className="font-jakarta text-[10px] tracking-[0.15em] font-bold text-do-black uppercase">Get in touch</span>
            <p className="font-sans text-xs text-do-gray leading-relaxed max-w-[180px]">Let&apos;s build something great together.</p>
            <a href="https://tally.so/r/9q4jg4"
              target="_blank"
              rel="noopener noreferrer" className="font-sans text-xs text-do-blue hover:text-do-black transition-colors duration-150">work with us</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
