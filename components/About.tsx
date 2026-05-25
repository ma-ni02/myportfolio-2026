const skills = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Figma", "Tailwind CSS", "PostgreSQL", "GraphQL",
  "Adobe XD", "Framer", "Vercel", "AWS",
];

export default function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-16 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs tracking-[0.4em] uppercase text-blue-500 mb-16">
          About
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: photo + name */}
          <div>
            {/* Photo placeholder */}
            <div className="relative w-full aspect-[4/5] max-w-sm rounded-2xl overflow-hidden bg-gradient-to-br from-blue-800 to-blue-600 mb-8">
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                viewBox="0 0 400 500"
                fill="none"
              >
                <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="0.8" />
                <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="0.8" />
                <circle cx="200" cy="200" r="40" fill="white" opacity="0.1" />
                <line x1="0" y1="400" x2="400" y2="400" stroke="white" strokeWidth="0.5" />
                <line x1="0" y1="440" x2="400" y2="440" stroke="white" strokeWidth="0.5" />
                <line x1="0" y1="470" x2="300" y2="470" stroke="white" strokeWidth="0.5" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="w-24 h-24 rounded-full mb-4"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                />
                <span className="text-white/40 text-xs tracking-[0.3em] uppercase">
                  Photo
                </span>
              </div>
            </div>

            <h2 className="text-3xl font-extralight text-slate-900 mb-1">
              Your Name
            </h2>
            <p className="text-sm text-blue-500 tracking-widest uppercase mb-4">
              Web Designer & Developer
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              📍 Tokyo, Japan
            </p>
          </div>

          {/* Right: bio + skills */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-xl font-light text-slate-900 mb-4">
                はじめまして。
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  Webデザイナー・開発者として活動しています。
                  UIデザインからフロントエンド実装まで、一貫してプロダクト開発に携わります。
                </p>
                <p>
                  ユーザー体験を最優先に考えながら、技術的にも美的にも高いクオリティを追求。
                  スタートアップから大企業まで、様々なクライアントと協働してきました。
                </p>
                <p>
                  新しいプロジェクトのご依頼、コラボレーションのご提案、お気軽にご連絡ください。
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="text-xs tracking-[0.35em] uppercase text-slate-400 mb-4">
                Skills & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full border border-blue-200 text-blue-700 bg-blue-50 tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience numbers */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200">
              {[
                { num: "3+", label: "Years\nExperience" },
                { num: "20+", label: "Projects\nDelivered" },
                { num: "15+", label: "Happy\nClients" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-3xl font-extralight text-blue-700 mb-1">
                    {item.num}
                  </div>
                  <div className="text-xs text-slate-400 leading-snug whitespace-pre-line">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
