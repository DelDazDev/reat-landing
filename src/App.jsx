import './App.css'
import {HashRouter, Routes, Route} from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Careers from "./pages/Careers"
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import Hero from './components/Hero';


function App() {

  return (
    <>
      <HashRouter>
      <Navbar />
      <Hero />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/careers' element={<Careers />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
