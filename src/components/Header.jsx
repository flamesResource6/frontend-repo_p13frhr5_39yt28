import { Menu, Baby, Phone, MapPin } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-200 via-rose-200 to-indigo-200 grid place-items-center shadow-sm">
              <Baby className="h-5 w-5 text-rose-500" />
            </div>
            <span className="text-xl font-semibold text-slate-700 tracking-tight">Nest & Go</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Gear</a>
            <a href="#how" className="hover:text-slate-900 transition-colors">How it works</a>
            <a href="#cta" className="hover:text-slate-900 transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors">
              <Phone className="h-4 w-4" /> Support
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-pink-400 to-indigo-400 text-white shadow-sm hover:opacity-90 transition">
              <MapPin className="h-4 w-4" /> Get started
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-slate-50 text-slate-600">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
