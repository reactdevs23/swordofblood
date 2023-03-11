import React, { useContext } from "react";
import Localization from "../../context/localization";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { importAllImages } from "../../functions/common";
import styles from "./team.module.css";

export default function Team() {
  const { strings } = useContext(Localization);
  const images = importAllImages();

  const team = [
    {
      name: strings.teamName1,
      title: strings.teamTtl1,
      img: images["home/team/James-Seaman.png"],
      link: "https://www.linkedin.com/in/swordsofbloodceo/",
    },
    {
      name: strings.teamName2,
      title: strings.teamTtl2,
      img: images["home/team/Jeremy-Brown.png"],
      link: "https://www.linkedin.com/in/jeremy-brown-29177b3/",
    },
    {
      name: strings.teamName3,
      title: strings.teamTtl3,
      img: images["home/team/Mariusz-Szynalik.png"],
      link: "https://www.linkedin.com/in/mariusz-szynalik",
    },
    {
      name: strings.teamName4,
      title: strings.teamTtl4,
      img: images["home/team/Yupeng-Qin.png"],
      link: "https://www.linkedin.com/in/hitboxgames/",
    },
    {
      name: strings.teamName5,
      title: strings.teamTtl5,
      img: images["home/team/Jakub-Szamalek.png"],
      link: "https://www.linkedin.com/in/jakub-szamalek-039aba51/",
    },
    {
      name: strings.teamName6,
      title: strings.teamTtl6,
      img: images["home/team/John-Moyer.png"],
      link: "https://www.linkedin.com/",
    },
    {
      name: strings.teamName7,
      title: strings.teamTtl7,
      img: images["home/team/Vee-Lozano.png"],
      link: "https://www.linkedin.com/in/vcolozano/",
    },
    {
      name: strings.teamName8,
      title: strings.teamTtl8,
      img: images["home/team/Jason-Hung.png"],
      link: "https://www.linkedin.com/in/jasonhung-earth",
    },
    {
      name: strings.teamName9,
      title: strings.teamTtl9,
      img: images["home/team/Charlie-Hu.png"],
      link: "https://www.linkedin.com/in/charlieyechuanhu/",
    },
    {
      name: strings.teamName10,
      title: strings.teamTtl10,
      img: images["home/team/Adam Vine.jpg"],
      link: "https://www.linkedin.com/authwall/",
    },
    {
      name: strings.teamName11,
      title: strings.teamTtl11,
      img: images["home/team/Ben Abbot.jpg"],
      link: "https://www.instagram.com/abbott_ben/",
    },
  ];

  return (
    <div className={styles.teamSection}>
      <h4 className="heading">{strings.teamTtl}</h4>
      <div className={styles.teamMembers}>
        {team.map((p, i) => {
          return (
            <div key={i} className={styles.teamMember}>
              <img src={p.img} alt="#" className={styles.teamImage} />
              <div className={styles.infoAndSocial}>
                <div>
                  <p className={[styles.text, "text"].join(" ")}>{p.name}</p>
                  <p className={[styles.subtext, "subtext"].join(" ")}>
                    {p.title}
                  </p>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkedin}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
