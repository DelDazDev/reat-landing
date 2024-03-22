import "../styles/Cards.css";
import imgCard from "../../public/images/desktop/image-deep-earth.jpg"
import imgCard2 from "../../public/images/desktop/image-night-arcade.jpg"
import imgCard3 from "../../public/images/desktop/image-soccer-team.jpg"
import imgCard4 from "../../public/images/desktop/image-grid.jpg"
import imgCard5 from "../../public/images/desktop/image-from-above.jpg"
import imgCard6 from "../../public/images/desktop/image-pocket-borealis.jpg"
import imgCard7 from "../../public/images/desktop/image-curiosity.jpg"
import imgCard8 from "../../public/images/desktop/image-fisheye.jpg"
//import {card} from "../components/data/data";


const Cards = () => {
  return(
    <section className="container__cards">
    {/*{card.map((item, index) => (
    <div className="cards" key={index}>
      <img src={item.imgCard}/>
      <h2>{item.titulo}</h2>
      <h2>{item.titulo2}</h2>
    </div>

    ))}*/}
    <div className="cards">
      <img src={imgCard}/>
      <h2>Deep</h2>
      <h2>Earth</h2>
    </div>
    <div className="cards">
      <img src={imgCard2}/>
      <h2>Night</h2>
      <h2>Arcade</h2>
    </div>
    <div className="cards">
      <img src={imgCard3}/>
      <h2>Soccer</h2>
      <h2>Team vr</h2>
    </div>
    <div className="cards">
      <img src={imgCard4}/>
      <h2>The</h2>
      <h2>Grid</h2>
    </div>
    <div className="cards">
      <img src={imgCard5}/>
      <h2>From</h2>
      <h2>Above</h2>
    </div>
    <div className="cards">
      <img src={imgCard6}/>
      <h2>Pocket</h2>
      <h2>Borealis</h2>
    </div>
    <div className="cards">
      <img src={imgCard7}/>
      <h2>The</h2>
      <h2>Curiosity</h2>
    </div>
    <div className="cards">
      <img src={imgCard8}/>
      <h2>The</h2>
      <h2>Fisheye</h2>
    </div>
    </section>
  )
} 

export default Cards;