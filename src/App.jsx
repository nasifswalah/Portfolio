import { BrowserRouter } from "react-router-dom";
import { Navbar, About, Contact, Experience, Hero, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <Navbar/>
          <Hero/>
        </div> 
        <About/> 
        <Experience/> 
        <Works/>
        <Tech/>  
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div> 
      </div>
    </BrowserRouter>
  )
}

export default App
