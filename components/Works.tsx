const works = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    category: "UI/UX Design",
    year: "2025",
    desc: "大手ECサイトのUX改善と全ページリデザイン。コンバージョン率28%向上。",
    gradient: "from-blue-600 to-indigo-700",
    tag: "Design",
  },
  {
    id: 2,
    title: "Booking App",
    category: "Web Development",
    year: "2025",
    desc: "予約管理システムのフルスタック開発。React + Node.js + PostgreSQL。",
    gradient: "from-sky-500 to-blue-700",
    tag: "Dev",
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Design & Dev",
    year: "2024",
    desc: "スタートアップのブランドサイト制作。Figmaデザインから実装まで一貫対応。",
    gradient: "from-blue-700 to-blue-900",
    tag: "Full",
  },
  {
    id: 4,
    title: "Dashboard UI",
    category: "UI Design",
    year: "2024",
    desc: "データ分析ダッシュボードのインターフェース設計。複雑な情報の可視化。",
    gradient: "from-indigo-600 to-blue-800",
    tag: "Design",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-32 px-8 md:px-16 bg-white">
      {/* Section header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-blue-500 mb-3">
              Selected Works
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 leading-tight">
              Recent
              <br />
              Projects
            </h2>
          </div>
          <span className="text-sm text-slate-400 tracking-widest hidden md:block">
            2024 — 2025
          </span>
        </div>

        {/* Works grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work) => (
            <article
              key={work.id}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100"
            >
              {/* Image placeholder */}
              <div
                className={`relative h-60 bg-gradient-to-br ${work.gradient} overflow-hidden`}
              >
                {/* Decorative lines inside card */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  viewBox="0 0 600 240"
                  preserveAspectRatio="xMidYMid slice"
                  fill="none"
                >
                  <circle cx="480" cy="120" r="120" stroke="white" strokeWidth="0.8" />
                  <circle cx="480" cy="120" r="70" stroke="white" strokeWidth="0.8" />
                  <line x1="0" y1="60" x2="400" y2="60" stroke="white" strokeWidth="0.5" />
                  <line x1="0" y1="120" x2="350" y2="120" stroke="white" strokeWidth="0.5" />
                  <line x1="0" y1="180" x2="400" y2="180" stroke="white" strokeWidth="0.5" />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/30 text-xs tracking-[0.4em] uppercase">
                    Image Placeholder
                  </span>
                </div>

                {/* Tag */}
                <span className="absolute top-4 left-4 text-xs bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm tracking-wide">
                  {work.tag}
                </span>
              </div>

              {/* Card info */}
              <div className="p-6 bg-white">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium text-slate-900 group-hover:text-blue-700 transition-colors">
                    {work.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono shrink-0 ml-4 mt-1">
                    {work.year}
                  </span>
                </div>
                <p className="text-xs text-blue-500 tracking-widest uppercase mb-3">
                  {work.category}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">{work.desc}</p>

                <div className="mt-4 flex items-center gap-1 text-blue-600 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View project</span>
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
