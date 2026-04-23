# DESIGN.md: Neuro-Portfolio Master Architecture

## 1. Visual Theme & Atmosphere
A premium, highly interactive Webflow-style portfolio that straddles two worlds: a bright, warm "Light Mode" for personal/professional introductions, and a deep, immersive "Dark Mode" for academic research. 
- **NO FLAT DESIGN.** The site must feel tactile, layered, and dynamic.
- **NO GENERIC GRAYS.** We strictly use warm cream and deep midnight blue.

## 2. Color Palette & Backgrounds
We use a high-contrast alternating section architecture to create cinematic pacing.
- **Primary Light Surface:** Warm Cream (`#f4e9db`). Used for About, Skills, and Experience sections.
- **Primary Dark Surface:** Midnight Blue (`#010120`). Used for the Hero section, Publications, and Footer. 
- **Text on Light:** Pure Black (`#000000`) or Near Black (`#1d1d1f`).
- **Text on Dark:** Pure White (`#ffffff`).
- **Accent/Interactive:** Webflow Blue (`#146ef5`) or subtle Lavender (`#bdbbff`) for hover states and primary buttons. 

## 3. Typography
- **Headings:** Modern sans-serif (e.g., Inter, SF Pro, or custom). Apply strict negative letter-spacing (-0.02em to -0.04em) and tight line-heights (1.1) to create dense, authoritative headline blocks.
- **Body:** Clean, readable sans-serif with comfortable line-height (1.5).
- **Labels (Crucial):** Use an uppercase Monospace font for small section labels, tags, and badges to give it a "technical/bioinformatics" feel.

## 4. Geometry, Depth, & Elevation
We are overriding sharp neo-brutalism with premium, modern Apple-style softness.
- **Border Radius:** Use `rounded-2xl` or `rounded-3xl` for all cards and image containers. Use full pill-shapes (`rounded-full`) for buttons and badges. 
- **Shadows:** No flat offset shadows. Use soft, wide, diffused drop shadows (e.g., `shadow-xl` or `rgba(0, 0, 0, 0.1) 0px 10px 30px`) to lift cards off the background. 
- **Borders:** Subtle glass-like borders (`border-white/10` on dark, `border-black/5` on light) instead of harsh solid lines.

## 5. Motion & Framer Motion (Strict Requirement)
The site must feel alive. Claude must wrap components in `framer-motion` tags.
- **Scroll Reveals:** Every section, card, and text block must fade up and in (`initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`) as the user scrolls down the page.
- **Hover States:** Interactive cards and buttons should have a smooth, spring-based scale effect (`whileHover={{ scale: 1.02 }}`).
- **The Hero Avatar:** The Hero section MUST include a central circular avatar/graphic with floating UI elements (like "Wet Lab" and "Dry Lab" badges) that use a continuous, slow, vertical floating animation (`animate={{ y: [0, -10, 0] }}`).