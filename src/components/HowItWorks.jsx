import { CalendarCheck2, Truck, HandHeart } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: CalendarCheck2, title: 'Reserve in minutes', desc: 'Pick your dates, choose gear, and book—done.' },
    { icon: Truck, title: 'Delivered where you are', desc: 'We drop off at your hotel, rental, or airport.' },
    { icon: HandHeart, title: 'Return, we handle the rest', desc: 'We pick up, clean, and safety-check for the next family.' },
  ]

  return (
    <section id="how" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800">Simple, flexible, stress-free</h2>
          <p className="mt-3 text-slate-600">Booking takes two minutes and delivery happens on your schedule.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/80 backdrop-blur border border-indigo-100 p-6 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-indigo-100 grid place-items-center text-indigo-500">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-800">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
