"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = ["Studio", "Work", "About"] as const;

export default function VeilProjectPage() {
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
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-gray uppercase mb-2 block">E-Commerce Automation</span>
                <h1 className="font-serif font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.06] text-do-black">Instant Shopify</h1>
                <p className="font-sans text-sm text-do-gray mt-2">Automated Product Onboarding System — The Shelf NYC</p>
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
                  Built an automated product onboarding system that transforms a single submission form into a fully configured Shopify draft product, complete with variants, media assets, compliance documents, and operational tracking.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">Why</span>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The Shelf NYC was spending significant time manually collecting product information, organizing assets, configuring variants, and creating Shopify products before new brands could be launched.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">Tools</span>
                <div className="flex flex-wrap gap-2">
                  {["Shopify", "Zapier", "Google Drive", "Slack", "JavaScript"].map((tool) => (
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
                  The Shelf NYC helps emerging food and beverage brands get discovered through its retail platform. Every new brand onboarding required a substantial amount of manual operational work before products could appear in Shopify.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  Teams needed to collect product information, download images, organize files, configure variants, upload media, create Shopify products, attach barcodes and SKUs, and communicate progress internally. While none of these tasks were particularly difficult, they were repetitive, time-consuming, and prone to human error.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  To streamline the onboarding process, I built Instant Shopify: an automated product onboarding system that converts a single brand submission into a nearly complete Shopify product listing.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  Brands submit a single onboarding form containing product details, pricing information, SKUs, barcodes, product imagery, logos, compliance documents, and inventory information. From there, the workflow takes over automatically.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The system organizes brand assets in Google Drive, processes uploaded files, generates Shopify-ready product records, and creates products in Draft status. Depending on the product configuration, the workflow intelligently determines whether the submission requires variants and routes the product through the appropriate creation path.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  One of the more complex aspects of the project involved supporting products with multiple variants while maintaining a simple submission experience for vendors. The workflow automatically creates and configures Shopify variants, associates SKU and barcode information, applies pricing data, and ensures that products are structured correctly inside Shopify.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  To support these requirements, I built custom JavaScript processing steps that parse complex file-upload payloads and transform form submissions into data structures Shopify can consume reliably. The system was also designed to gracefully handle optional uploads, missing files, and varying product configurations without breaking the workflow.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The workflow supports products with up to three option groups and automatically creates the appropriate variant structure inside Shopify. It also handles media uploads, inventory metadata, compliance documents, and product-specific assets while maintaining a streamlined experience for both vendors and internal operators.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  Once a product has been created, operational notifications are sent into Slack, giving the team immediate visibility into onboarding activity. Additional workflows monitor product status changes and can trigger downstream processes as products move from Draft to Active.
                </p>
                <p className="font-sans text-sm leading-relaxed text-do-gray">
                  The result is a self-service onboarding pipeline that reduces nearly an hour of manual work per product submission. Vendors can submit a single form, and within minutes a fully configured Shopify product exists in Draft mode, ready for final review and publication.
                </p>
              </div>

              {/* Key Outcomes */}
              <div className="flex flex-col gap-3">
                <span className="font-jakarta text-[10px] tracking-[0.2em] font-bold text-do-black uppercase">Key Outcomes</span>
                <ul className="flex flex-col gap-2">
                  {[
                    "Reduced product onboarding time from nearly 1 hour to a matter of minutes",
                    "Automated product creation, asset management, and variant configuration",
                    "Eliminated repetitive manual data entry",
                    "Standardized product onboarding across all vendors",
                    "Created a scalable intake process for growing product catalogs",
                    "Improved operational visibility through Slack-based notifications",
                  ].map((outcome) => (
                    <li key={outcome} className="font-sans text-sm leading-relaxed text-do-gray flex items-start gap-2">
                      <span className="mt-[6px] shrink-0 w-1 h-1 rounded-full bg-do-gray" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — project image */}
            <div className="w-full rounded-xl overflow-hidden shadow-md cursor-zoom-in" onClick={() => setLightbox("/shopd1.png")}>
              <img src="/shopd1.png" alt="Instant Shopify — Automated Product Onboarding System" className="w-full h-auto" />
            </div>

          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="w-full px-6 md:px-12 py-10">
          <div className="max-w-container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-xl overflow-hidden shadow-md cursor-zoom-in" onClick={() => setLightbox("/shopd2.png")}>
              <img src="/shopd2.png" alt="Instant Shopify" className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md cursor-zoom-in" onClick={() => setLightbox("/shopd3.png")}>
              <img src="/shopd3.png" alt="Instant Shopify" className="w-full h-auto" />
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
            <a href="/work/flare" className="group inline-flex items-center gap-3 font-serif font-light text-2xl text-do-black hover:text-do-blue transition-colors duration-150">
              Bobby Bot <span className="font-sans text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>
        </section>

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
