import React from "react";
import LogoFooterSVG from "../../images/iteration-2-images/footer/logo-footer.svg";

export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-sutun">
          <img src={LogoFooterSVG} alt="Logofooter" />
          <ul>
            <li>
              <img
                src="/images/iteration-2-images/footer/icons/icon-1.png"
                alt="icon1"
              />{" "}
              341 Londonderry Road, Istanbul Türkiye
            </li>
            <li>
              <img
                src="/images/iteration-2-images/footer/icons/icon-2.png"
                alt="icon2"
              />{" "}
              aciktim@teknolojikyemekler.com
            </li>
            <li>
              <img
                src="/images/iteration-2-images/footer/icons/icon-3.png"
                alt="icon3"
              />{" "}
              +90 216 123 45 67
            </li>
          </ul>
        </div>
        <div className="footer-sutun">
          <h3>Hot Menu</h3>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div className="footer-sutun">
          <h3>Instagram</h3>
          <ul className="insta-gallery">
            <li>
              <img
                src="/images/iteration-2-images/footer/insta/li-0.png"
                alt="Instagram 0"
              />
            </li>
            <li>
              <img
                src="/images/iteration-2-images/footer/insta/li-1.png"
                alt="Instagram 1"
              />
            </li>
            <li>
              <img
                src="/images/iteration-2-images/footer/insta/li-2.png"
                alt="Instagram 2"
              />
            </li>
            <li>
              <img
                src="/images/iteration-2-images/footer/insta/li-3.png"
                alt="Instagram 3"
              />
            </li>
            <li>
              <img
                src="/images/iteration-2-images/footer/insta/li-4.png"
                alt="Instagram 4"
              />
            </li>
            <li>
              <img
                src="/images/iteration-2-images/footer/insta/li-5.png"
                alt="Instagram 5"
              />
            </li>
          </ul>
        </div>
      </footer>

      <footer className="secondary-footer">
        <p>© 2025 Teknolojik Yemekler.</p>
      </footer>
    </>
  );
}
