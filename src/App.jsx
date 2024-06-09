import { Footer } from "./Components/Footer"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar"
import { Projects } from "./Components/Projects"
import { Skills } from "./Components/Skills"
import { Helmet } from "react-helmet"

function App() {

  return (
    <>
      <Helmet>
        <title>Portafolio</title>
        <meta name="description" content="Portafolio profesional de Angel Arteaga" />
        <meta name="keywords" content="portafolio, portfolio, Angel Arteaga, desarrollador web" />
      </Helmet>
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
