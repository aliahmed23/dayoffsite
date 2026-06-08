"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const projects = [
  { name: "Bobby Bot",    category: "Agent",           slug: "flare",  bg: "#FFC400", img: "/BobbyBot1.png" },
  { name: "How'd it go?", category: "decision workflow", slug: "ephra", bg: "#FFD8C2", img: "/hitgo.png" },
  { name: "IM Dashboard", category: "Dashboard",        slug: "rift",   bg: "#FF6BAA", img: "/IM-Dashboard.png" },
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
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase select-none" style={{ color: "rgba(17,17,17,0.3)" }}>
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

function NavLink({ href, label, isActive = false }: { href: string; label: string; isActive?: boolean }) {
  return (
    <a
      href={href}
      className={[
        "relative font-sans text-sm tracking-wide lowercase",
        isActive ? "font-semibold text-do-black" : "font-normal",
        "after:absolute after:bottom-[-2px] after:left-0",
        "after:h-px after:w-0 after:bg-do-black",
        "after:transition-[width] after:duration-200",
        "hover:after:w-full",
      ].join(" ")}
    >
      {label}
    </a>
  );
}

function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-[5px] font-sans tracking-wide transition-colors duration-150 ${className}`}
    >
      {children}
      <span
        className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
        aria-hidden="true"
      >
        ↗
      </span>
    </a>
  );
}

const navLinks = ["Studio", "Work", "About"] as const;

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileLinks = navLinks.filter((l) => (l === "Studio" ? "/" : `/${l.toLowerCase()}`) !== pathname);

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
            {navLinks.map((l) => {
              const href = l === "Studio" ? "/" : `/${l.toLowerCase()}`;
              return <NavLink key={l} href={href} label={l} isActive={pathname === href} />;
            })}
          </nav>

          <div className="justify-self-end flex items-center">
            <ArrowLink
              href="/contact"
              className="hidden md:inline-flex text-sm text-do-blue font-medium hover:text-do-black lowercase"
            >
              contact us
            </ArrowLink>
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
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm text-do-blue font-medium lowercase hover:text-do-black transition-colors duration-150"
              >
                contact us ↗
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="w-full px-6 md:px-12 pt-16 pb-8">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            <h1 className="font-serif font-light text-[clamp(3rem,5.5vw,4.5rem)] leading-[1.06] text-do-black">
              We automate the <em className="italic">boring</em> stuff
            </h1>

            <p className="font-sans text-sm leading-relaxed text-do-gray max-w-[360px]">
              Leveraging today's tools to create systems that work for you so you can keep building your business.
            </p>
          </div>

          {/* Right — hero image */}
          <div className="w-[65%] mx-auto flex justify-center">
            <img src="/octopus-removebg.png" alt="DayOff Studio illustration" className="w-full h-auto" />
          </div>

        </div>
      </section>

      {/* ── Selected Work ── */}
      <section className="w-full px-6 md:px-12 pt-20 pb-10">
        <div className="max-w-container mx-auto">

          {/* Label + heading */}
          <div className="flex flex-col items-start md:relative md:block mb-12">
            <div className="flex items-center gap-2.5 mb-4 md:mb-0 md:absolute md:left-0 md:top-[6px]">
              <span className="inline-block w-2 h-2 rounded-full bg-do-red shrink-0" />
              <span className="font-jakarta text-xs tracking-[0.1em] font-bold text-do-black lowercase">Selected work</span>
            </div>
            <h2 className="font-serif font-light text-2xl md:text-[1.9rem] leading-snug text-do-black md:text-center max-w-[480px] md:mx-auto">
              A small selection of projects we&apos;re proud of and had fun making.
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.slug} name={p.name} category={p.category} slug={p.slug} bg={p.bg} img={"img" in p ? p.img : undefined} />
            ))}
          </div>

          {/* View all */}
          <div className="mt-10">
            <ArrowLink href="/work" className="text-sm text-do-black hover:text-do-blue">
              view all projects
            </ArrowLink>
          </div>

        </div>
      </section>

      {/* ── Tool Kit ── */}
      <section className="w-full px-6 md:px-12 pt-5 pb-20 md:pt-7 md:pb-28">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* Left — label + image */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="inline-block w-2 h-2 rounded-full bg-do-blue shrink-0" />
              <span className="font-jakarta text-xs tracking-[0.1em] font-bold text-do-black lowercase">Our tool kit</span>
            </div>
            <img src="/toolsimg3.svg" alt="Our tool kit" className="w-full h-auto" />
          </div>

          {/* Right — copy */}
          <div className="flex flex-col gap-6">

            <h2 className="font-serif font-light text-[clamp(2.4rem,4.2vw,3.4rem)] leading-[1.08] text-do-black">
              We use today&apos;s tools to build <em className="italic">smarter.</em>
            </h2>

            <p className="font-sans text-sm leading-relaxed text-do-gray max-w-[320px]">
              We work with best-in-class platforms to move fast, stay flexible, and deliver exceptional results.
            </p>
          </div>

        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="w-full px-6 md:px-12 pt-5 pb-20 md:pt-7 md:pb-28">
        <div className="max-w-container mx-auto flex flex-col gap-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 md:items-stretch">

            {/* Left */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="inline-block w-2 h-2 rounded-full bg-do-yellow shrink-0" />
                <span className="font-jakarta text-xs tracking-[0.1em] font-bold text-do-black lowercase">What we do</span>
              </div>

              <h2 className="font-serif font-light text-[clamp(2.4rem,4.2vw,3.4rem)] leading-[1.08] text-do-black">
                We partner with ambitious teams of <em className="italic">all sizes.</em>
              </h2>

              <p className="font-sans text-sm leading-relaxed text-do-gray max-w-[320px]">
                From early-stage startups to growing companies and established brands, we build smart systems that scale with you.
              </p>

              {/* Illustration — grows to fill remaining column height */}
              <div className="flex-1 min-h-[240px] rounded-xl overflow-hidden">
                <img src="/wwd2.svg" alt="What we do illustration" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right — service rows top, We work with at bottom */}
            <div className="flex flex-col justify-between">

              <div className="flex flex-col gap-1">
                {[
                  { title: "Custom Agents", desc: "We build custom AI agents tailored to your business — automating decisions, handling tasks, and working autonomously so your team can focus on what matters.", img: "/agent.svg" },
                  { title: "Automate customer funnel workflows", desc: "Streamline your customer journey with intelligent automations that convert and retain.", img: "/funnel.svg" },
                  { title: "Build out custom workflows", desc: "We create or connect workflows tailored to your unique processes and team needs.", img: "/workflows.svg" },
                  { title: "Internal UI & tools", desc: "Beautiful, functional interfaces your team will love to use — built for clarity and impact.", img: "/dash.svg" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 py-6 border-b border-[#e4e3df] first:border-t first:border-[#e4e3df]">
                    <div className="w-24 h-24 shrink-0 bg-do-off-white rounded-lg flex items-center justify-center overflow-hidden">
                      {item.img
                        ? <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
                        : <span className="font-sans text-[9px] tracking-[0.1em] text-do-gray">[img]</span>
                      }
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-sans text-sm font-medium text-do-black">{item.title}</p>
                      <p className="font-sans text-xs leading-relaxed text-do-gray">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Client tiers — pinned to bottom, aligns with image bottom */}
              <div className="flex flex-col gap-3 pt-8">
                <span className="font-jakarta text-xs tracking-[0.1em] font-bold text-do-black">We work with</span>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { tier: "Startups", sub: "Early & Small" },
                    { tier: "Growth", sub: "Scaling Brands" },
                    { tier: "Enterprise", sub: "Established Brands" },
                  ].map((t) => (
                    <div key={t.tier} className="flex flex-col gap-0.5">
                      <p className="font-sans text-sm font-medium text-do-black">{t.tier}</p>
                      <p className="font-sans text-[11px] text-do-gray">{t.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Arrow link below both columns */}
          <ArrowLink href="/work" className="text-sm text-do-black hover:text-do-blue">
            view our work
          </ArrowLink>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full px-6 md:px-12 py-12 border-t border-[#e4e3df]">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">

          {/* Col 1 — brand */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <a href="/" aria-label="DayOff Studio home">
              <img src="/do-logo-clean.svg" alt="DayOff Studio" className="h-12 w-auto" />
            </a>
            <p className="font-sans text-xs leading-relaxed text-do-gray max-w-[200px]">
              We automate the boring stuff so you can keep building your business.
            </p>
            <a href="mailto:hello@dayoff.studio" className="font-sans text-xs text-do-gray hover:text-do-blue transition-colors duration-150">
              hello@dayoff.studio
            </a>
          </div>

          {/* Col 2 — nav */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <span className="font-jakarta text-[10px] tracking-[0.15em] font-bold text-do-black uppercase mb-1">Navigate</span>
            {navLinks.map((l) => (
              <a
                key={l}
                href={l === "Studio" ? "/" : `/${l.toLowerCase()}`}
                className="font-sans text-sm text-do-gray hover:text-do-black transition-colors duration-150 lowercase w-fit"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Col 3 — services */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <span className="font-jakarta text-[10px] tracking-[0.15em] font-bold text-do-black uppercase mb-1">Services</span>
            {["Custom Agents", "Automations", "Internal Tools", "AI Products"].map((s) => (
              <span key={s} className="font-sans text-sm text-do-gray">{s}</span>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="max-w-container mx-auto mt-10 pt-6 border-t border-[#e4e3df] flex flex-col sm:flex-row items-center sm:items-center justify-between gap-2 text-center sm:text-left">
          <span className="font-helvetica text-[11px] text-do-gray">
            © {new Date().getFullYear()} DayOff Studio. All rights reserved.
          </span>
          <span className="font-sans text-[11px] text-do-gray">
            Built by DayOff Studio
          </span>
        </div>
      </footer>
    </div>
  );
}
