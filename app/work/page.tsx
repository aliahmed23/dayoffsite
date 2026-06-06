"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

const projects = [
  { name: "Bobby Bot",          category: "Agent",                slug: "flare",   bg: "#FFC400", img: "/BobbyBot1.png" },
  { name: "How'd it go?",       category: "decision workflow",    slug: "ephra",   bg: "#FFD8C2", img: "/hitgo.png" },
  { name: "IM Dashboard",       category: "Dashboard",            slug: "rift",    bg: "#FF6BAA", img: "/IM-Dashboard.png" },
  { name: "Super Power Slides", category: "AI Tool",              slug: "mosaic",  bg: "#0057FF", img: "/Slides-UI.png" },
  { name: "Monday Roundup",     category: "AI Powered Reporting", slug: "canopy",  bg: "#00A82D", img: "/MR0.png" },
  { name: "The New Times",      category: "Automation",           slug: "dusk",    bg: "#FF3B1F", img: "/VZine.png" },
  { name: "Orion",              category: "Branding, Web Design", slug: "orion",   bg: "#111111" },
  { name: "Solace",             category: "Brand Identity",       slug: "solace",  bg: "#FFD8C2" },
  { name: "Veil",               category: "Web Design",           slug: "veil",    bg: "#FFC400" },
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

export default function WorkPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-[#FBFBFB] text-do-black">

      <header className="w-full px-6 md:px-12 py-5 relative z-50">
        <div className="max-w-container mx-auto grid grid-cols-3 items-center">
          <a href="/" className="inline-flex flex-col items-center justify-self-start" aria-label="DayOff Studio home">
            <img src="/do-logo-clean.svg" alt="DayOff Studio" className="h-[100px] w-auto" />
            <span className="font-jakarta text-xs font-bold text-do-black tracking-[0.1em] mt-1">
              DayOff Studio
            </span>
          </a>
          <nav className="hidden md:flex items-center justify-center gap-8" aria-label="Main">
            {(["Studio", "Work", "About"] as const).map((l) => {
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
            <a href="/contact" className="hidden md:inline-flex items-center gap-[5px] font-sans text-sm tracking-wide text-do-blue font-medium hover:text-do-black transition-colors duration-150">
              Contact us <span>↗</span>
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

      <main className="w-full px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-container mx-auto">

          <div className="flex items-center gap-2.5 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-do-red shrink-0" />
            <span className="font-jakarta text-xs tracking-[0.1em] font-bold text-do-black">All work</span>
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

    </div>
  );
}
