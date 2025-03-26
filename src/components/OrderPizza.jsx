import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LogoSVG from "../../images/iteration-1-images/logo.svg";
import Footer from "./Footer";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  FormFeedback,
} from "reactstrap";


// kullanıcıdan alınan ilk veriler
const initialUserData = {
  isimSoyisim: "",
  hamuru: "",
  boyut: "",
  malzemeler: [],
  siparisNotu: "",
  miktar: "",
};

// malzemeler ayarlandı
const malzemeler = [
  "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
  "Soğan", "Ananas", "Domates", "Kabak", "Mısır",
  "Sucuk", "Jalepeno", "Sarımsak", "Biber"
].map(malzeme => ({ name: malzeme, label: malzeme }));

// hata mesajları ayarlandı
const errorMessages = {
  boyut: "* Lütfen bir boyut seçin.",
  hamur: "* Lütfen hamur kalınlığı seçin.",
  malzemeler: "* En fazla 10 malzeme seçebilirsiniz!",
  isimSoyisim: "* İsim en az 3 karakter içermelidir.",
};
// satateler  tanımlandı
export default function OrderPizza() {
  const history = useHistory();
  const [userData, setUserData] = useState(initialUserData);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [count, setCount] = useState(1);

  // form doğrulama işlemi yapıldı
  useEffect(() => {
    validateForm();
  }, [userData]);

  const validateForm = () => {
    let newErrors = {};

    newErrors.boyut = !userData.boyut ? errorMessages.boyut : "";

    newErrors.hamur = !userData.hamur ? errorMessages.hamur : "";

    newErrors.malzemeler =
      userData.malzemeler.length > 10 ? errorMessages.malzemeler : "";

    newErrors.isimSoyisim =
      !userData.isimSoyisim || userData.isimSoyisim.length < 3
        ? errorMessages.isimSoyisim
        : "";

    setErrors(newErrors);
    const isValidForm = Object.values(newErrors).every((e) => e === "");
    setIsValid(isValidForm);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const updatedMalzemeler = checked
        ? [...userData.malzemeler, name]
        : userData.malzemeler.filter((item) => item !== name);
      setUserData({ ...userData, malzemeler: updatedMalzemeler });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedForm = { ...userData, miktar: count };

    axios
      .post("https://reqres.in/api/pizza", updatedForm)
      .then((response) => {
        if (isValid) {
          history.push("/siparis-alindi");
        } else {
          throw new Error("Sipariş verileri eksik veya hatalı!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <header className="form-header">
        <img src={LogoSVG} alt="Logo" />
      </header>

      <section className="bej">
        <div className="bej-icerik">
          <img src="./images/iteration-2-images/pictures/form-banner.png" alt="Pizza" />
          <nav className="nav-menu">
            <a href="/">Anasayfa</a>
            <p> </p>
            <a href="/siparis-olustur">Sipariş Oluştur</a>
          </nav>
          <h2>Position Absolute Acı Pizza</h2>
          <div className="pizza-info">
            <h1>85.5 ₺</h1>
            <p>4.9</p>
            <p>(200)</p>
          </div>
          <p style={{ color: "#5F5F5F" }}>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </section>

      <Form className="order-pizza-form" onSubmit={handleSubmit}>
        <section className="boyut">
          <FormGroup>
            <Label>Boyut Seç *</Label>
            <FormGroup check>
              <Input
                name="boyut"
                type="radio"
                value="S"
                onChange={handleChange}
              />
              <Label check>S</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="boyut"
                type="radio"
                value="M"
                onChange={handleChange}
              />
              <Label check>M</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="boyut"
                type="radio"
                value="L"
                onChange={handleChange}
              />
              <Label check>L</Label>
            </FormGroup>
            {errors.boyut && <FormFeedback>{errorMessages.boyut}</FormFeedback>}
          </FormGroup>

          <FormGroup>
            <Label for="hamurKalinligi">Hamur Seç *</Label>
            <Input
              id="hamurKalinligi"
              name="hamur"
              type="select"
              onChange={handleChange}
            >
              <option value="">Hamur Kalınlığı Seç</option>
              <option value="İnce">İnce</option>
              <option value="Orta">Orta</option>
              <option value="Kalın">Kalın</option>
            </Input>
            {errors.hamur && <FormFeedback>{errorMessages.hamur}</FormFeedback>}
          </FormGroup>
        </section>

        <section className="ekMalzemeler">
          <FormGroup check>
            <Label for="ekMalzemeler">Ek Malzemeler</Label>
            <FormText htmlFor="ekMalzemeler">
              En fazla 10 malzeme seçebilirsiniz. ₺5
            </FormText>
            <div className="material-columns">
              {malzemeler.map((malzeme) => (
                <div className="material-item" key={malzeme.name}>
                  <Input
                    type="checkbox"
                    onChange={handleChange}
                    name={malzeme.name}
                  />
                  <Label check>{malzeme.label}</Label>
                </div>
              ))}
            </div>
            <FormFeedback>{errors.malzemeler}</FormFeedback>
          </FormGroup>
        </section>

        <section>
          <FormGroup className="form-text-area">
            <Label for="isimSoyisim">İsim-Soyisim *</Label>
            <Input
              id="isimSoyisim"
              name="isimSoyisim"
              placeholder="Lütfen isminizi girin."
              type="text"
              value={userData.isimSoyisim}
              onChange={handleChange}
              invalid={errors.isimSoyisim !== ""}
            />
            <FormFeedback>{errors.isimSoyisim}</FormFeedback>
          </FormGroup>
        </section>

        <section>
          <FormGroup className="form-text-area">
            <Label for="siparisNotu">Sipariş Notu</Label>
            <Input
              id="siparisNotu"
              name="siparisNotu"
              placeholder="Siparişinize özel bir not ekleyin."
              type="text"
              value={userData.siparisNotu}
              onChange={handleChange}
            />
          </FormGroup>
        </section>

        <section>
          <Button onClick={handleDecrement}>-</Button>
          <span style={{ textAlign: "center" }}>{count}</span>
          <Button onClick={handleIncrement}>+</Button>
        </section>

        <Button color="primary" type="submit" disabled={!isValid}>
          Sipariş Ver
        </Button>
      </Form>
      <Footer />
    </>
  );
}

