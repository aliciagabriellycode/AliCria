import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import Solution from './components/sections/Solution'
import Projects from './components/sections/Projects'
import Process from './components/sections/Process'
import Differential from './components/sections/Differential'
import Benefits from './components/sections/Benefits'
import Plans from './components/sections/Plans'
import FinalCta from './components/sections/FinalCta'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Projects />
        <Process />
        <Differential />
        <Benefits />
        <Plans />
        <FinalCta />
      </main>

      <Footer />
    </div>
  )
}
