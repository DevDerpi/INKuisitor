import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Logo from "../images/logo2.png";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.container}>
        <div>
          <div>
            <div className={styles.AppName}>
              <Link to="/"> <img src={Logo} alt="logo" className={styles.Logo} /></Link>
            <p>Your Privacy Is Our Concern</p>
            </div>
            <ul className={styles.listFooter}>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
              </li>
              <li>
                <Link to="#">Press</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">Legal</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>

            <div className={styles.ContactStay}>
              <h3>Stay in touch</h3>
              <ul className={styles.ContactIcons}>
                <li>
                  <a href="https://www.facebook.com/EngDerpi/">
                    <img
                      width="34"
                      height="34"
                      src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469457641/facebook_khedl5.svg"
                      alt="facebook"
                    />
                  </a>
                </li>

                <li>
                  <a href="https://www.facebook.com/EngDerpi/">
                    <img
                      width="34"
                      height="34"
                      src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469457641/instagram_ugek0w.svg"
                      alt="instagram"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.copyright}>
              <p>
                <small>&copy; Inkuisitor. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
