export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-pink-100 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-40 -right-12 h-72 w-72 bg-indigo-100 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-700 ring-1 ring-rose-200">
              Modern baby gear rentals
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-800">
              Travel light, keep baby comfy
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Premium strollers, cribs, and essentials delivered to your door or hotel in hours. Cleaned, safety-checked, and ready to roll.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-indigo-400 text-white shadow hover:opacity-90">
                Book your gear
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50">
                Explore equipment
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=12" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=32" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=5" />
              </div>
              <p>Trusted by thousands of traveling families</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-pink-200/60 via-rose-100/60 to-indigo-200/60 rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1548378329-8b6e3d8e4fcb?q=80&w=1600&auto=format&fit=crop"
              alt="Modern stroller"
              className="relative rounded-2xl shadow-2xl border border-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
