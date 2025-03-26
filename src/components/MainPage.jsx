import React from "react";
import { useHistory } from "react-router-dom";
import LogoSVG from "../../images/iteration-1-images/logo.svg";
import LogoFooterSVG from "../../images/iteration-2-images/footer/logo-footer.svg";
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";
import Home from "./Home";
import Footer from "./Footer";

export default function MainPage() {
  const history = useHistory();

  const handleButton = () => {
    history.push("/siparis-olustur");
  };

  return (
    <>
      <Home />
      <nav className="main-nav">
        <ul>
          <li>
            <a href="/">
              <img src="/images/iteration-2-images/icons/1.svg" alt="Kore" />
              YENİ! Kore
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" />
              Pizza
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" />
              Burger
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="/images/iteration-2-images/icons/4.svg"
                alt="Kızartmalar"
              />
              Kızartmalar
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="/images/iteration-2-images/icons/5.svg"
                alt="Fast Food"
              />
              Fast Food
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="/images/iteration-2-images/icons/6.svg"
                alt="Gazlı İçecek"
              />
              Gazlı İçecek
            </a>
          </li>
        </ul>
      </nav>
      <main className="main-page">
        <section className="cards">
          <div className="card-1">
            <img
              src="/images/iteration-2-images/cta/kart-1.png"
              alt="İlk Kart"
            />
            <div className="overlay-content">
              <h1 className="card-title">
                Özel <br /> Lezzetus
              </h1>
              <p className="card-text">Position: Absolute Acı Pizza</p>
              <button onClick={handleButton} className="card-button">
                SİPARİŞ VER
              </button>
            </div>
          </div>
          <div className="card-2">
            <img
              src="/images/iteration-2-images/cta/kart-2.png"
              alt="İkinci Kart"
            />
            <div className="overlay-content">
              <h1 className="card-title">
                Hackhathlon <br />
                Burger Menu
              </h1>
              <button onClick={handleButton} className="card-button">
                SİPARİŞ VER
              </button>
            </div>
          </div>
          <div className="card-2">
            <img
              src="/images/iteration-2-images/cta/kart-3.png"
              alt="İkinci Kart"
            />
            <div className="overlay-content">
              <h1 className="card-title">
                <span>Çoooook hızlı </span>
                <br /> npm gibi kurye
              </h1>
              <button onClick={handleButton} className="card-button">
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </section>
        <section className="vitrin">
          <h3 className="secondary-title">en çok paketlenen menüler</h3>
          <h1 className="main-title">Acıktıran Kodlara Doyuran Lezzetler</h1>
          <div className="secondary-nav">
            <ul>
              <li>
                <a href="/">
                  <img
                    src="/images/iteration-2-images/icons/1.svg"
                    alt="Kore"
                  />
                  YENİ! Kore
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="/images/iteration-2-images/icons/2.svg"
                    alt="Pizza"
                  />
                  Pizza
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="/images/iteration-2-images/icons/3.svg"
                    alt="Burger"
                  />
                  Burger
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="/images/iteration-2-images/icons/4.svg"
                    alt="Kızartmalar"
                  />
                  Kızartmalar
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="/images/iteration-2-images/icons/5.svg"
                    alt="Fast Food"
                  />
                  Fast Food
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="/images/iteration-2-images/icons/6.svg"
                    alt="Gazlı İçecek"
                  />
                  Gazlı İçecek
                </a>
              </li>
            </ul>
          </div>
          <div className="vitrin-cards">
            <div className="vitrin-card-container">
              <img
                src="/images/iteration-2-images/pictures/food-1.png"
                alt="food-1"
              />
              <h4>Terminal Pizza</h4>
              <p>4.9 </p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
            <div className="vitrin-card-container">
              <img
                src="/images/iteration-2-images/pictures/food-2.png"
                alt="food-1"
              />
              <h4>Position Absolute Acı Pizza</h4>
              <p>4.9 </p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
            <div className="vitrin-card-container">
              <img
                src="/images/iteration-2-images/pictures/food-3.png"
                alt="food-1"
              />
              <h4>useEffect Tavuklu Burger</h4>
              <p>4.9 </p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
