import Photo from "../componentes/photo"
import Name from "../componentes/Name"
import Interest from "../componentes/Interest"
import Footer from "../componentes/Footer"
import Buttons from "../componentes/Buttons"
import About from "../componentes/About"




function App() {
  return(
    <div className="container">
      <Photo />
      <Name />
      <Buttons />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}

export default App