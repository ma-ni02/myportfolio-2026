const socials = [
  { label: "GitHub", href: "#", icon: "GH" },
  { label: "X / Twitter", href: "#", icon: "X" },
  { label: "LinkedIn", href: "#", icon: "in" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-40 px-8 md:px-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #040e20 0%, #0d2c5c 100%)" }}
    >
      {/* Background visual */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="350" r="300" stroke="rgba(96,165,250,0.5)" strokeWidth="0.8" />
        <circle cx="200" cy="350" r="180" stroke="rgba(96,165,250,0.5)" strokeWidth="0.8" />
        <circle cx="1240" cy="350" r="300" stroke="rgba(96,165,250,0.5)" strokeWidth="0.8" />
        <circle cx="1240" cy="350" r="180" stroke="rgba(96,165,250,0.5)" strokeWidth="0.8" />
        <line x1="500" y1="350" x2="940" y2="350" stroke="rgba(96,165,250,0.3)" strokeWidth="0.8" />
      </svg>

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-xs tracking-[0.45em] uppercase text-blue-400 mb-6">
          Contact
        </p>

        <h2
          className="leading-none tracking-tight mb-8 text-white"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 200 }}
        >
          Let&apos;s Work
          <br />
          Together
        </h2>

        <p className="text-base md:text-lg text-blue-200 font-light mb-14 leading-relaxed">
          新しいプロジェクト・コラボレーション、お気軽にご連絡ください。
          <br />
          Open for new projects & opportunities.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:your@email.com"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-blue-900 hover:border-white mb-16"
        >
          your@email.com
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16" fill="none"
          >
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors tracking-wide"
            >
              <span
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-xs font-mono"
              >
                {s.icon}
              </span>
              <span className="hidden md:inline">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
