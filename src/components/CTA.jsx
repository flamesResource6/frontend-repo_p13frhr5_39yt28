export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-pink-200 via-rose-200 to-indigo-200">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Ready to travel lighter?</h3>
              <p className="mt-2 text-slate-700">Tell us your dates and destination. We’ll show what’s available and handle delivery.</p>
              <form className="mt-6 grid sm:grid-cols-3 gap-3">
                <input type="text" placeholder="City or airport" className="px-4 py-3 rounded-xl bg-white/90 placeholder-slate-400 text-slate-700 ring-1 ring-slate-200 focus:ring-2 focus:ring-rose-300 outline-none" />
                <input type="date" className="px-4 py-3 rounded-xl bg-white/90 placeholder-slate-400 text-slate-700 ring-1 ring-slate-200 focus:ring-2 focus:ring-rose-300 outline-none" />
                <button type="button" className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Check availability</button>
              </form>
            </div>
            <div className="bg-white/70 rounded-2xl p-6 ring-1 ring-white/60">
              <p className="text-sm text-slate-600">Popular this week</p>
              <ul className="mt-3 space-y-2 text-slate-700 text-sm">
                <li>• Compact strollers</li>
                <li>• Full-size cribs</li>
                <li>• Baby monitors</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">Free cancellations up to 24 hours before delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
