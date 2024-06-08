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
        <Skills />
        <Projects />
      </section>
      <Footer />
    </>
  )
}

export default App
