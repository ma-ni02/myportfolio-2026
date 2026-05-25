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
    bg: "#061628",
  },
  {
    eyebrow: "Skill — 02",
    title: ["UI / UX", "Design"],
    subtitle: "Figma · User Research · Prototyping",
    bg: "#081e38",
  },
  {
    eyebrow: "Selected",
    title: ["Works &", "Projects"],
    subtitle: "Websites · Applications · Branding",
    bg: "#0a2448",
  },
  {
    eyebrow: "Contact",
    title: ["Let's Build", "Together"],
    subtitle: "Available for freelance & collaboration",
    bg: "#0d2c5c",
  },
];

/* ---------- SVG visual layers ---------- */

function Visual0() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1100" cy="450" r="420" stroke="rgba(59,130,246,0.1)" strokeWidth="1" />
      <circle cx="1100" cy="450" r="300" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
      <circle cx="1100" cy="450" r="180" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
      <circle cx="1100" cy="450" r="80" fill="rgba(59,130,246,0.05)" />
      <circle cx="200" cy="150" r="3" fill="rgba(96,165,250,0.5)" />
      <circle cx="320" cy="80" r="2" fill="rgba(96,165,250,0.35)" />
      <circle cx="140" cy="380" r="2.5" fill="rgba(96,165,250,0.4)" />
      <circle cx="420" cy="700" r="2" fill="rgba(96,165,250,0.3)" />
      <circle cx="600" cy="820" r="1.5" fill="rgba(96,165,250,0.25)" />
      <circle cx="750" cy="60" r="2" fill="rgba(96,165,250,0.3)" />
      <circle cx="900" cy="820" r="2.5" fill="rgba(96,165,250,0.25)" />
    </svg>
  );
}

function Visual1() {
  const lines = Array.from({ length: 18 }, (_, i) => ({
    x1: 580 + i * 50,
    y1: 0,
    x2: 580 + i * 50 - 900,
    y2: 900,
  }));
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {lines.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="rgba(96,165,250,0.08)" strokeWidth="1" />
      ))}
      <line x1="700" y1="200" x2="1380" y2="200" stroke="rgba(96,165,250,0.18)" strokeWidth="1" />
      <line x1="780" y1="450" x2="1380" y2="450" stroke="rgba(96,165,250,0.18)" strokeWidth="1" />
      <line x1="720" y1="680" x2="1380" y2="680" stroke="rgba(96,165,250,0.18)" strokeWidth="1" />
      <circle cx="700" cy="200" r="4" fill="rgba(96,165,250,0.5)" />
      <circle cx="1380" cy="200" r="4" fill="rgba(96,165,250,0.5)" />
      <circle cx="780" cy="450" r="4" fill="rgba(96,165,250,0.5)" />
      <circle cx="1380" cy="450" r="4" fill="rgba(96,165,250,0.5)" />
      <circle cx="720" cy="680" r="4" fill="rgba(96,165,250,0.5)" />
      <circle cx="1380" cy="680" r="4" fill="rgba(96,165,250,0.5)" />
      <line x1="700" y1="200" x2="700" y2="680" stroke="rgba(96,165,250,0.12)" strokeWidth="1" />
      <line x1="1040" y1="200" x2="1040" y2="680" stroke="rgba(96,165,250,0.12)" strokeWidth="1" />
      <line x1="1380" y1="200" x2="1380" y2="680" stroke="rgba(96,165,250,0.12)" strokeWidth="1" />
    </svg>
  );
}

function Visual2() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-100 250 C 300 100, 700 500, 1100 300 S 1600 500 1800 350"
        stroke="rgba(147,197,253,0.15)"
        strokeWidth="1.5"
      />
      <path
        d="M-100 450 C 300 300, 700 700, 1100 500 S 1600 700 1800 550"
        stroke="rgba(147,197,253,0.2)"
        strokeWidth="1.5"
      />
      <path
        d="M-100 650 C 300 500, 700 900, 1100 700 S 1600 900 1800 750"
        stroke="rgba(147,197,253,0.12)"
        strokeWidth="1.5"
      />
      <circle cx="1200" cy="200" r="160" fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.1)" strokeWidth="1" />
      <circle cx="1200" cy="200" r="80" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.12)" strokeWidth="1" />
      <circle cx="320" cy="700" r="100" fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.08)" strokeWidth="1" />
    </svg>
  );
}

function Visual3() {
  const cols = 4;
  const rows = 3;
  const w = 180;
  const h = 120;
  const gap = 24;
  const startX = 660;
  const startY = 130;
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => {
          const x = startX + c * (w + gap);
          const y = startY + r * (h + gap);
          const filled = (r * cols + c) % 3 === 0;
          return (
            <rect
              key={`${r}-${c}`}
              x={x} y={y} width={w} height={h} rx="4"
              fill={filled ? "rgba(59,130,246,0.08)" : "none"}
              stroke="rgba(96,165,250,0.2)"
              strokeWidth="1"
            />
          );
        })
      )}
      <line x1="500" y1="250" x2="660" y2="250" stroke="rgba(96,165,250,0.2)" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="500" y1="450" x2="660" y2="450" stroke="rgba(96,165,250,0.2)" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  );
}

function Visual4() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="720" cy="450" r="300" stroke="rgba(96,165,250,0.1)" strokeWidth="1" />
      <circle cx="720" cy="450" r="200" stroke="rgba(96,165,250,0.12)" strokeWidth="1" />
      <line x1="720" y1="100" x2="720" y2="800" stroke="rgba(96,165,250,0.15)" strokeWidth="1" />
      <line x1="370" y1="450" x2="1070" y2="450" stroke="rgba(96,165,250,0.15)" strokeWidth="1" />
      <line x1="1000" y1="250" x2="1280" y2="250" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
      <line x1="1000" y1="350" x2="1380" y2="350" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
      <line x1="1000" y1="550" x2="1380" y2="550" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
      <line x1="1000" y1="650" x2="1280" y2="650" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
      <circle cx="720" cy="450" r="12" fill="rgba(96,165,250,0.3)" />
      <circle cx="720" cy="450" r="4" fill="rgba(147,197,253,0.8)" />
    </svg>
  );
}

const VISUALS = [Visual0, Visual1, Visual2, Visual3, Visual4];

/* ---------- Main component ---------- */

export default function ScrollGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const p = Math.max(
        0,
        Math.min(SLIDES.length - 1, -rect.top / window.innerHeight)
      );
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentIdx = Math.min(SLIDES.length - 1, Math.round(progress));

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative"
      style={{ height: `${SLIDES.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {SLIDES.map((slide, i) => {
          const slideProgress =
            i === 0 ? 1 : Math.max(0, Math.min(1, progress - (i - 1)));
          const translateY = i === 0 ? 0 : (1 - slideProgress) * 100;

          /* text fades in after slide is 65% visible */
          const textOpacity =
            i === 0
              ? Math.max(0, 1 - progress * 2.5)
              : Math.max(0, (slideProgress - 0.65) / 0.35);

          const VisualComponent = VISUALS[i];

          return (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                backgroundColor: slide.bg,
                transform: `translateY(${translateY}%)`,
                zIndex: i,
                willChange: "transform",
              }}
            >
              {/* Visual layer */}
              <VisualComponent />

              {/* Left gradient for text legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(4,14,32,0.7) 0%, rgba(4,14,32,0.3) 50%, transparent 100%)",
                }}
              />

              {/* Text content */}
              <div
                className="absolute inset-0 flex items-center px-10 md:px-20 lg:px-28"
                style={{
                  opacity: textOpacity,
                  transition: "opacity 0.4s ease",
                }}
              >
                <div>
                  <p
                    className="text-xs tracking-[0.45em] uppercase mb-5 font-light"
                    style={{ color: "rgba(147,197,253,0.9)" }}
                  >
                    {slide.eyebrow}
                  </p>
                  <h1
                    className="leading-none tracking-tight mb-7"
                    style={{
                      fontSize: "clamp(3.5rem, 9vw, 8rem)",
                      fontWeight: 200,
                      color: "#fff",
                    }}
                  >
                    {slide.title.map((line, li) => (
                      <span key={li} className="block">
                        {line}
                      </span>
                    ))}
                  </h1>
                  <p
                    className="text-base md:text-lg font-light tracking-wide"
                    style={{ color: "rgba(191,219,254,0.85)" }}
                  >
                    {slide.subtitle}
                  </p>
                </div>
              </div>

              {/* Slide number */}
              <div
                className="absolute bottom-10 right-10 font-mono text-xs tracking-[0.35em]"
                style={{
                  color: "rgba(147,197,253,0.5)",
                  opacity: textOpacity,
                  transition: "opacity 0.4s ease",
                }}
              >
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(SLIDES.length).padStart(2, "0")}
              </div>
            </div>
          );
        })}

        {/* Bottom progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px z-50 bg-white/10">
          <div
            className="h-full bg-blue-400"
            style={{
              width: `${(progress / (SLIDES.length - 1)) * 100}%`,
              transition: "width 0.05s linear",
            }}
          />
        </div>

        {/* Scroll hint — only first slide */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
          style={{ opacity: Math.max(0, 1 - progress * 3.5) }}
        >
          <span
            className="text-xs tracking-[0.35em] uppercase"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-10 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            <div
              className="w-full h-4"
              style={{
                background: "rgba(255,255,255,0.6)",
                animation: "scrollDown 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* Side nav dots */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
          {SLIDES.map((_, i) => (
            <div
              key={i}
              className="rounded-full bg-white transition-all duration-300"
              style={{
                width: i === currentIdx ? "8px" : "5px",
                height: i === currentIdx ? "8px" : "5px",
                opacity: i === currentIdx ? 1 : 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
