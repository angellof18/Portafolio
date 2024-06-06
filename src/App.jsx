import { About } from "./Components/About"
import { Contacto } from "./Components/Contacto"
import { Footer } from "./Components/Footer"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar"
import { Projects } from "./Components/Projects"
import { Skills } from "./Components/Skills"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <section className="section">
        <Contacto />
        <About />
        <Skills />
        <Projects />
      </section>
      <Footer />
    </>
  )
}

export default App
