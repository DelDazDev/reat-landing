import imgSectionHome from "../../public/images/desktop/image-interactive.jpg"
import Cards from "../components/cards";


const Home = () => {
    return(
      <main className="container__main">
        <section className="section__imgTexto">
          <div className="container__img">
            <img src={imgSectionHome}/>
          </div>
          <div className="container__texto">
            <h2>The leader in interactive VR</h2>
            <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
               projects for some of the best companies around the globe. Our award-winning 
               creations have transformed businesses through digital experiences that bind 
              to their brand.</p>
          </div>
        </section>
        <section className="section__cards">
          <h2>Our Creations</h2>
          <button>See All</button>
          <Cards />
        </section>
      </main>
    )
  }
  
  export default Home;