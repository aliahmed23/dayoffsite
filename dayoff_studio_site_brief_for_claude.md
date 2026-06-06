# DayOff Studio Website Design Brief for Claude

Create a polished homepage for **DayOff Studio**, a small creative studio with a refined, editorial, playful visual identity.

The goal is to make a site that feels like a tasteful independent design studio: spacious, quiet, intelligent, and a little weird in a good way. It should not feel like a generic SaaS landing page.

## Overall Direction

The visual style should combine:

- Strong white space
- Editorial serif typography
- Minimalist sans-serif UI text
- Subtle pops of primary color
- Playful geometric/isometric illustration moments
- Refined layout discipline
- A sense of creative intelligence without feeling too serious

Think: gallery website meets boutique design studio meets playful creative tools brand.

## Brand Personality

DayOff Studio should feel:

- tasteful
- clear
- inventive
- calm
- playful
- editorial
- creative but not chaotic
- premium but not pretentious
- human, not corporate

The site should communicate that the studio makes thoughtful brands, digital experiences, and creative systems.

## Art Direction

Use a clean white or very light warm-gray background.

The layout should rely heavily on negative space. Avoid dense sections. Let the typography and a few playful visual objects carry the energy.

The illustration style should be inspired by **playful isometric geometric vector illustration**:

- chunky 3D/extruded objects
- saturated but controlled color
- red, blue, yellow, green, black, soft peach/pink accents
- Bauhaus/Memphis-inspired geometry
- creative-tool motifs: pencil, palette, paper, cursor, blocks, abstract studio objects
- hard-edged vector forms with soft shadows
- flat color with subtle dimensionality
- no photorealism
- no generic corporate blob illustrations

The illustration should feel sculptural, almost like a colorful toy object photographed on a white background.

## Typography

Use a mixed typography system:

### Large Headlines

Use an elegant editorial serif with strong personality.

Good choices:

- Canela-style serif
- Editorial New-style serif
- Cormorant Garamond as a free/available alternative
- Noe Display-style serif
- Ivar-style serif

The headline should be large, graceful, and slightly fashion/editorial.

Use italics selectively for emphasis. Example:

> We design brands and *digital experiences* that feel considered.

### Small UI Text

Use a neutral neo-grotesk sans-serif.

Good choices:

- Suisse Int’l-style sans
- Neue Haas Grotesk-style sans
- Helvetica Now-style sans
- Inter as a free/available alternative

Small labels, nav, project metadata, and buttons should use the sans-serif. It should feel quiet and restrained.

## Color Palette

Base:

- White: #FFFFFF
- Soft off-white: #F7F6F2
- Black: #111111
- Muted gray: #777777

Accent colors:

- Primary blue: #0057FF
- Warm yellow: #FFC400
- Bright red-orange: #FF3B1F
- Green: #00A82D
- Soft peach: #FFD8C2
- Playful pink: #FF6BAA

Use color sparingly. The site should mostly be black type on white, with color appearing in the logo, illustrations, small dots, hover states, project cards, and selected details.

## Layout Requirements

Create a homepage with these sections:

### 1. Header

- Small colorful “DO” logo at top-left
- Centered or lightly spaced nav: Work, Studio, Services, Contact
- Right-side CTA: “Start a project ↗”
- Very minimal, no heavy nav bar background

### 2. Hero

Left side:

- Small label: “DayOff Studio”
- Large editorial serif headline:
  “We design brands and digital experiences that feel considered.”
- Italicize “digital experiences”
- Small CTA link: “view our work ↗”

Right side:

- A colorful isometric/geometric DO logo or abstract creative object
- Should float in whitespace
- Should not overwhelm the page

### 3. Selected Work

- Small red/orange dot label: “Selected work”
- Editorial intro line: “A small selection of projects we’re proud of and had fun making.”
- Three project cards in a row on desktop
- Each card should have a very light gray/off-white background
- Each card should feature a small playful geometric object or placeholder illustration
- Project names can be:
  - Flare — Branding
  - Ephra — Branding, Web Design
  - Rift — Web Design
- Include “view all projects ↗” below

### 4. Studio Statement

Large serif statement:

> We’re a design studio focused on *clarity*, craft, and *meaningful collaboration*.

Use italic emphasis for “clarity” and “meaningful collaboration.”

Add a small colorful pencil/object illustration to the right or underneath.

### 5. Services

Keep this section minimal.

Possible service list:

- Brand Identity
- Web Design
- Creative Direction
- Launch Systems
- Editorial & Content

Use thin lines or lots of spacing rather than heavy cards.

### 6. Footer

Footer should be quiet and spacious.

Include:

- © DayOff Studio
- Instagram / Twitter / LinkedIn
- “Let’s create something great together.”
- hello@dayoff.studio

## Design Details

- Use max-width container around 1200–1320px
- Large vertical spacing between sections
- Avoid gradients except inside playful illustrations/logo accents
- Avoid overly rounded SaaS cards
- Avoid drop shadows except subtle illustration shadows
- Buttons should feel like text links, not heavy filled buttons
- Use arrows ↗ for CTAs
- Keep the page mostly monochrome with small color interruptions

## Interaction Details

Add subtle interactions:

- Nav links underline or shift slightly on hover
- Project cards lift very slightly or reveal a small colored accent
- CTA arrows move 2–4px on hover
- Logo may rotate or shift subtly on hover

Keep animation gentle and sophisticated.

## Responsive Behavior

Desktop:

- Hero can be two-column
- Work cards can be three-column

Tablet/mobile:

- Hero stacks vertically
- Work cards stack or become two-column
- Nav can simplify
- Typography should remain large but not overflow

## Important Avoidances

Do not make it look like:

- a generic Webflow template
- a SaaS startup landing page
- a loud agency site with too many animations
- a luxury brand site that feels cold
- a childish art class portfolio
- a corporate design consultancy

The best version should feel like a creative studio with taste, restraint, and a playful visual brain.

## Suggested Tech Implementation

Build as a single React/Next.js page if possible.

Use:

- CSS modules, Tailwind, or clean global CSS
- Google Fonts if needed: Cormorant Garamond for serif, Inter for sans
- Simple SVG/CSS geometric illustrations if image assets are not available
- Semantic HTML
- Fully responsive layout

## Example Copy

Hero:

“ We design brands and *digital experiences* that feel considered.”

Subtext:

“DayOff Studio is a creative studio for founders, teams, and ideas that need a sharper shape.”

CTA:

“view our work ↗”

Studio statement:

“We’re a design studio focused on *clarity*, craft, and *meaningful collaboration*.”

Footer line:

“Let’s create something great together.”
