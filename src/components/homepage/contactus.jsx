import React, { useContext } from "react";
import Localization from "../../context/localization";
import { importAllImages } from "../../functions/common";
import styles from "./contactus.module.css";

export default function ContactUs() {
  const { strings } = useContext(Localization);
  const images = importAllImages();

  return (
    <div className={styles.contactusWrapper}>
      <div className={styles.contactus}>
        <img
          src={images["home/ambassador-bg_1.png"]}
          alt="#"
          className={[styles.image, "image"].join(" ")}
        />
        <div className={styles.textWrapper}>
          <div className={styles.blanks}></div>
          <div className={styles.textBox}>
            <p className={styles.contactDetails}>{strings.contactUsDesc}</p>
            <a
              href="mailto:social@swordsofblood.com"
              className={styles.contactButton}
            >
              {strings.contactUs}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
