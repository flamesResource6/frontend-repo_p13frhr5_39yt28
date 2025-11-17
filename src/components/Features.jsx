import { ShieldCheck, Sparkles, Timer, Plane, Baby, Check } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Safety first',
    desc: 'Hospital-grade cleaning, sanitization, and routine safety checks on every item.'
  },
  {
    icon: Timer,
    title: 'Same-day delivery',
    desc: 'Doorstep or hotel delivery within hours in supported cities.'
  },
  {
    icon: Sparkles,
    title: 'Like-new quality',
    desc: 'Top brands and gently used gear so it feels like you just unboxed it.'
  },
  {
    icon: Plane,
    title: 'Travel-friendly',
    desc: 'Pick up at airport lockers or have it ready at your stay when you arrive.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-pink-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800">Everything you need for baby</h2>
          <p className="mt-3 text-slate-600">Curated essentials for stress-free travel. Clean, safe, and seriously cute.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/80 backdrop-blur border border-pink-100 p-6 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-pink-100 grid place-items-center text-rose-500">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-800">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-600">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-rose-400"/> Flexible rentals</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-rose-400"/> Premium brands</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-rose-400"/> Free returns</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
