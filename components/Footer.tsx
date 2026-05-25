export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="flex items-center justify-between px-8 md:px-16 py-6 text-xs text-slate-400 border-t border-slate-100"
    >
      <span>© {year} Your Name. All rights reserved.</span>
      <span className="tracking-widest uppercase">Portfolio 2026</span>
    </footer>
  );
}
