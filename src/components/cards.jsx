import "../styles/Cards.css";
import imgCard from "../../public/images/desktop/image-deep-earth.jpg"
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
    </section>
  )
} 

export default Cards;