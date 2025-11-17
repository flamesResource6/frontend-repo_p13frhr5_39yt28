import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-indigo-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <footer className="py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Nest & Go. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
