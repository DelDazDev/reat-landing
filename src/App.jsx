import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
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
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  )
}

export default App
