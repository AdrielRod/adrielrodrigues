

import About from "./components/About/About"
import Header from "./components/Header/Header"
import Description from "./components/Description/About"
import Tech from "./components/Tech/Tech"
import Projets from "./components/Projets/Projets"
import Footer from "./components/Footer/Footer"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {

  useEffect(() => {
    AOS.init(); // Inicialize o AOS
  }, []);

  return (
    <div className="portifolio">
      <Header />
      <About />
      <Description />
      <Tech />
      <Projets />
      <Footer />
    </div>
  )
}

export default App
