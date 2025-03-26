import LogoSVG from "../../images/iteration-1-images/logo.svg";
import { useHistory } from "react-router-dom"; 
import React from "react";

export default function Success({orderData}) {
  const history = useHistory();

  const handleButton = () => {
    history.push("/"); // Yönlendirme işlemi
  };

  // orderData'nın eksik olup olmadığını kontrol et
  if (!orderData) {
    return <p>Sipariş verileri eksik veya hatalı.</p>;
  }

  const { isimSoyisim, boyut, hamur, malzemeler, siparisNotu, miktar } = orderData;

  // malzemeler dizisinin varlığını kontrol et
  const extra = (malzemeler && malzemeler.length) ? malzemeler.length * 5 : 0; // Eğer malzemeler varsa, uzunluğunu al, yoksa 0

  // Toplam maliyetin hesaplanması
  const total = 85.5 * miktar + extra * miktar;

  return (
    <>
      <header className="success-page">
        <img src={LogoSVG} alt="Logo" />
        <section className="siparis-alindi">
          <h3 className="success-title">Lezzetin Yolda</h3>
          <h1 className="main-title">
            TEBRİKLER! <br />
            SİPARİŞİNİZ ALINDI!
          </h1>
        </section>
      </header>
      <main className="success-page">
        <section className="siparis-alindi-info">
          <h2>Position Absolute Acı Pizza</h2>
          <section className="siparis-form-info">
            <div>
              <p>İsim Soyisim:</p> <p>{isimSoyisim}</p>
            </div>
            <div>
              <p>Boyut:</p> <p>{boyut}</p>
            </div>
            <div>
              <p>Hamur:</p> <p>{hamur}</p>
            </div>
            <div>
              <p>Ek Malzemeler:</p> <p>{malzemeler ? malzemeler.join(", ") : "Yok"}</p>
            </div>
            <div>
              <p>Sipariş Notu:</p> <p>{siparisNotu}</p>
            </div>
          </section>
        </section>
        <section className="siparis-odeme-info">
          <h2>Sipariş Toplamı</h2>
          <div>
            <p>Seçimler:</p> <p>{extra} ₺</p>
          </div>
          <div>
            <p>Toplam:</p> <p>{total} ₺</p>
          </div>
        </section>
        <button id="success-buton" onClick={handleButton}>
          Anasayfa
        </button>
      </main>
    </>
  );
}
