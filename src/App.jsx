import { About } from "./Components/About"
import { Contacto } from "./Components/Contacto"
import { Footer } from "./Components/Footer"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar"
import { Skills } from "./Components/Skills"

function App() {

  return (
    <section className="section">
      <Navbar />
      <Hero />
      <Contacto />
      <About />
      <Skills />
      <Footer />
    </section>
  )
}

export default App
