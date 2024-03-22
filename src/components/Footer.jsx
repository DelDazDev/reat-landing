import "../styles/Footer.css"
import iconFacebook from "../../public/images/icon-facebook.svg"
import iconInstagram from "../../public/images/icon-instagram.svg"
import iconPinteres from "../../public/images/icon-pinterest.svg"
import iconTwitter from "../../public/images/icon-twitter.svg"

const Footer = () => {
  return(
    <section className="container__footer">
      <article>
        <div>
        <h4>Loopstudio</h4>
        </div>
        <div className="footer__enlaces">
         <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </article>
      <article>
      <div className="footer__iconos">
        <img src={iconFacebook}/>
        <img src={iconInstagram}/>
        <img src={iconPinteres}/>
        <img src={iconTwitter}/>
      </div>
      <div className="footer__autor">
        Gualtrapillas enterprises 2024
      </div>

      </article>
    </section>
  )
}

export default Footer;
