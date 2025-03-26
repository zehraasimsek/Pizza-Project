import React from "react";
import { useHistory } from "react-router-dom";
import LogoSVG from "../../images/iteration-1-images/logo.svg";
import { Button } from "reactstrap";

export default function MainPage() {
  const history = useHistory();

  const handleButton = () => {
    history.push("/siparis-olustur");
  };
  return (
    <div
      style={{
        backgroundImage: `url("/images/iteration-1-images/home-banner.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        textAlign: "center",
        color: "white",
        paddingTop: "20px",
      }}
    >
      <img src={LogoSVG} alt="Logo" />
      <h3 className="firsat">fırsatı kaçırma</h3>
      <h1 className="main-title">
        KOD ACIKTIRIR <br /> PİZZA, DOYURUR
      </h1>
      <button
        className="anasayfa-buton"
        data-cy="mainpage-button"
        onClick={handleButton}
      >
        ACIKTIM
      </button>
    </div>
  );
}
