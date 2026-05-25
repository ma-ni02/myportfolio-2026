"use client";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    eyebrow: "Portfolio 2026",
    title: ["Designer &", "Developer"],
    subtitle: "デジタルの可能性を、デザインで拓く。",
    bg: "#040e20",
  },
  {
    eyebrow: "Skill — 01",
    title: ["Web", "Development"],
    subtitle: "React · Next.js · TypeScript · Node.js",
    bg: "#071c38",
  },
  {
    eyebrow: "Skill — 02",
    title: ["UI / UX", "Design"],
    subtitle: "Figma · User Research · Prototyping",
    bg: "#092850",
  },
  {
    eyebrow: "Selected",
    title: ["Works &", "Projects"],
    subtitle: "Websites · Applications · Branding",
    bg: "#0d3468",
  },
  {
    eyebrow: "Contact",
    title: ["Let's Build", "Together"],
    subtitle: "Available for freelance & collaboration",
    bg: "#1e3a8a",
  },
];

/* ---------- SVG visuals (one per slide) ---------- */

function Visual0() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice" fill="none">
      <circle cx="1100" cy="450" r="420" stroke="rgba(59,130,246,0.1)" strokeWidth="1" />
      <circle cx="1100" cy="450" r="300" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
      <circle cx="1100" cy="450" r="180" stroke="rgba(59,130,246,0.22)" strokeWidth="1" />
      <circle cx="1100" cy="450" r="80"  fill="rgba(59,130,246,0.05)" />
      <circle cx="180" cy="160" r="3" fill="rgba(96,165,250,0.5)" />
      <circle cx="300" cy="80"  r="2" fill="rgba(96,165,250,0.35)" />
      <circle cx="120" cy="360" r="2.5" fill="rgba(96,165,250,0.4)" />
      <circle cx="400" cy="720" r="2" fill="rgba(96,165,250,0.3)" />
      <circle cx="700" cy="820" r="1.5" fill="rgba(96,165,250,0.25)" />
    </svg>
  );
}

function Visual1() {
  const lines = Array.from({ length: 18 }, (_, i) => i);
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice" fill="none">
      {lines.map((i) => (
        <line key={i}
          x1={620 + i * 50} y1={0}
          x2={620 + i * 50 - 900} y2={900}
          stroke="rgba(96,165,250,0.07)" strokeWidth="1" />
      ))}
      <line x1="700" y1="220" x2="1400" y2="220" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
      <line x1="780" y1="450" x2="1400" y2="450" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
      <line x1="720" y1="680" x2="1400" y2="680" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
      <circle cx="700" cy="220" r="4" fill="rgba(96,165,250,0.5)" />
      <circle cx="780" cy="450" r="4" fill="rgba(96,165,250,0.5)" />
      <circle cx="720" cy="680" r="4" fill="rgba(96,165,250,0.5)" />
      <line x1="700" y1="220" x2="700" y2="680" stroke="rgba(96,165,250,0.12)" strokeWidth="1" />
    </svg>
  );
}

function Visual2() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice" fill="none">
      <path d="M-100 260 C 300 80, 700 560, 1100 320 S 1600 500 1800 360"
        stroke="rgba(147,197,253,0.18)" strokeWidth="1.5" />
      <path d="M-100 460 C 300 280, 700 760, 1100 520 S 1600 700 1800 560"
        stroke="rgba(147,197,253,0.22)" strokeWidth="1.5" />
      <path d="M-100 660 C 300 480, 700 960, 1100 720 S 1600 900 1800 760"
        stroke="rgba(147,197,253,0.14)" strokeWidth="1.5" />
      <circle cx="1200" cy="200" r="160" stroke="rgba(59,130,246,0.1)" strokeWidth="1" fill="rgba(59,130,246,0.03)" />
      <circle cx="1200" cy="200" r="80"  stroke="rgba(59,130,246,0.12)" strokeWidth="1" fill="rgba(59,130,246,0.05)" />
    </svg>
  );
}

function Visual3() {
  const cols = 4, rows = 3, w = 180, h = 120, gap = 24, sx = 640, sy = 140;
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice" fill="none">
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => (
          <rect key={`${r}-${c}`}
            x={sx + c * (w + gap)} y={sy + r * (h + gap)}
            width={w} height={h} rx="4"
            fill={(r * cols + c) % 3 === 0 ? "rgba(59,130,246,0.08)" : "none"}
            stroke="rgba(96,165,250,0.22)" strokeWidth="1" />
        ))
      )}
    </svg>
  );
}

function Visual4() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice" fill="none">
      <circle cx="720" cy="450" r="320" stroke="rgba(96,165,250,0.1)" strokeWidth="1" />
      <circle cx="720" cy="450" r="200" stroke="rgba(96,165,250,0.14)" strokeWidth="1" />
      <line x1="720" y1="80"  x2="720" y2="820" stroke="rgba(96,165,250,0.14)" strokeWidth="1" />
      <line x1="360" y1="450" x2="1080" y2="450" stroke="rgba(96,165,250,0.14)" strokeWidth="1" />
      <circle cx="720" cy="450" r="14" fill="rgba(96,165,250,0.25)" />
      <circle cx="720" cy="450" r="5"  fill="rgba(147,197,253,0.9)" />
      <line x1="1020" y1="260" x2="1360" y2="260" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
      <line x1="1020" y1="360" x2="1380" y2="360" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
      <line x1="1020" y1="540" x2="1380" y2="540" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
      <line x1="1020" y1="640" x2="1360" y2="640" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
    </svg>
  );
}

const VISUALS = [Visual0, Visual1, Visual2, Visual3, Visual4];

/* ---------- Main component ---------- */

export default function ScrollGallery() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(0);
  const [mounted, setMounted] = useState(false);
  const animating = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  const navigate = (next: number) => {
    if (animating.current) return;
    if (next < 0 || next >= SLIDES.length) return;
    animating.current = true;
    setPrev(current);
    setCurrent(next);
    setTimeout(() => { animating.current = false; }, 950);
  };

  /* Wheel → page-flip */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      // Only intercept while the section is snapped to the top of the viewport
      if (rect.top < -2 || rect.top > 2) return;

      if (e.deltaY > 0 && current < SLIDES.length - 1) {
        e.preventDefault();
        navigate(current + 1);
      } else if (e.deltaY < 0 && current > 0) {
        e.preventDefault();
        navigate(current - 1);
      }
      // On last slide scrolling down: let natural page scroll take over
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  /* Keyboard */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") navigate(current + 1);
      if (e.key === "ArrowUp"   || e.key === "PageUp")   navigate(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  /* Touch swipe */
  useEffect(() => {
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
    const onTouchEnd   = (e: TouchEvent) => {
      const delta = startY - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 40) return;
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < -2 || rect.top > 2) return;
      delta > 0 ? navigate(current + 1) : navigate(current - 1);
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend",   onTouchEnd,   { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend",   onTouchEnd);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const getTransform = (i: number) => {
    if (i === current) return "translateY(0%)";
    return i < current ? "translateY(-100%)" : "translateY(100%)";
  };

  /* Entering slide always renders on top */
  const getZIndex = (i: number) => {
    if (i === current) return 10;
    if (i === prev)    return 9;
    return 1;
  };

  const transition = mounted
    ? "transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)"
    : "none";

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-screen overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      {SLIDES.map((slide, i) => {
        const VisualComponent = VISUALS[i];
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backgroundColor: slide.bg,
              transform:  getTransform(i),
              zIndex:     getZIndex(i),
              transition,
              willChange: "transform",
            }}
          >
            {/* SVG visual */}
            <VisualComponent />

            {/* Left gradient for legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(4,14,32,0.65) 0%, rgba(4,14,32,0.25) 55%, transparent 100%)",
              }}
            />

            {/* Text */}
            <div className="absolute inset-0 flex items-center px-10 md:px-20 lg:px-32">
              <div>
                <p
                  className="text-xs tracking-[0.5em] uppercase mb-5 font-light"
                  style={{ color: "rgba(147,197,253,0.9)" }}
                >
                  {slide.eyebrow}
                </p>
                <h1
                  className="leading-none tracking-tight mb-7 text-white font-extralight"
                  style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)" }}
                >
                  {slide.title.map((line, li) => (
                    <span key={li} className="block">{line}</span>
                  ))}
                </h1>
                <p
                  className="text-base md:text-lg font-light tracking-wide"
                  style={{ color: "rgba(191,219,254,0.8)" }}
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>

            {/* Slide counter */}
            <p
              className="absolute bottom-10 right-10 font-mono text-xs tracking-[0.35em]"
              style={{ color: "rgba(147,197,253,0.5)", zIndex: 2 }}
            >
              {String(i + 1).padStart(2, "0")} /{" "}
              {String(SLIDES.length).padStart(2, "0")}
            </p>
          </div>
        );
      })}

      {/* Side dot navigation */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => navigate(i)}
            className="rounded-full bg-white transition-all duration-300 cursor-pointer"
            style={{
              width:   i === current ? "8px" : "5px",
              height:  i === current ? "8px" : "5px",
              opacity: i === current ? 1 : 0.3,
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint on first slide */}
      {current === 0 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.35em] uppercase"
            style={{ color: "rgba(255,255,255,0.35)" }}>
            Scroll
          </span>
          <div className="w-px h-10 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.12)" }}>
            <div className="w-full h-4"
              style={{
                background: "rgba(255,255,255,0.55)",
                animation: "scrollDown 2s ease-in-out infinite",
              }} />
          </div>
        </div>
      )}

      {/* Bottom progress line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-50">
        <div
          className="h-full bg-blue-400"
          style={{
            width: `${(current / (SLIDES.length - 1)) * 100}%`,
            transition: "width 0.9s cubic-bezier(0.76,0,0.24,1)",
          }}
        />
      </div>
    </section>
  );
}
