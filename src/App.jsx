 import './App.css'
 import './index.css'

 import Navbar from './Component/Navbar'
import { Hero } from './Component/Hero'
import OurPromise from './Component/OurPromise'
import About from './Component/About'
import Service from './Component/Service'
import ClientResult from './Component/ClientResult'
import Testimonial from './Component/Testimonial'
import Contact from './Component/Contact'
import FinalCTA from './Component/FinalCTA'
import Footer from './Component/Footer'
import OurValues from './Component/OurValues'
 


function App() {
 

  return (
    <>
      <div>
        <Navbar />
          <Hero />
          <OurPromise />
          <About />
          <Service />
          <ClientResult />
          <OurValues />
          <Testimonial />
          <Contact />
          <FinalCTA />
          <Footer />
      </div>
    </>
  )
}

export default App
