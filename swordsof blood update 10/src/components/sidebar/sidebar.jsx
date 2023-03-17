import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Localization from "../../context/localization";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { config } from "../../functions/config";
import { importAllImages } from "../../functions/common";
import { socialLinks } from "../social-links";
import styles from "./sidebar.module.css";

export default function Sidebar({ showSidebar }) {
  const { strings } = useContext(Localization);
  const images = importAllImages();
  const [projectDropDown, setProjectDropDown] = useState(false);
  const [aboutDropDown, setAboutDropDown] = useState(false);
  return (
    <div
      className={[styles.sidebar, showSidebar ? styles.showSidebar : ""].join(
        " "
      )}
    >
      <div>
        <NavLink to="/" className={styles.logoContainer}>
          <img
            src={images["logo.png"]}
            alt={strings.logoTitle}
            className={styles.logo}
          />
        </NavLink>
        <div className={styles.navItems}>
          <Link
            to="/"
            className={[styles.navItem, styles.navBtn].join(" ")}
            onClick={() => {
              setProjectDropDown(false);
              setAboutDropDown(false);
            }}
          >
            {config.appName}
          </Link>
          <div
            className={`${styles.dropDownContainer} ${styles.aboutDropDownContainer}`}
            onClick={() => setProjectDropDown(false)}
          >
            <p
              className={[styles.dropdownHeader, styles.navBtn].join(" ")}
              onClick={() => setAboutDropDown((prev) => !prev)}
            >
              <span className={styles.navItem}>{strings.aboutTtl}</span>
              <FontAwesomeIcon
                className={`${styles.arrow} ${
                  aboutDropDown && styles.rotateArrow
                }`}
                icon={faCircleChevronDown}
              />
            </p>

            <div
              className={`${styles.dropdownItems} ${
                aboutDropDown && styles.aboutDropDowns
              }`}
            >
              <a
                href="https://swords-of-blood-1.gitbook.io/swords-of-blood-whitepaper/"
                target="_blank"
                rel="noreferrer"
                className={[styles.navItem, styles.dropdownItem].join(" ")}
              >
                {strings.wpTtl}
              </a>
              <NavLink
                to="/allocation/"
                className={({ isActive }) =>
                  [
                    styles.navItem,
                    styles.dropdownItem,
                    isActive ? styles.active : "",
                  ].join(" ")
                }
              >
                {strings.allocTtl}
              </NavLink>
              <a
                href="/assets/Swords of Blood Pitchdeck Lite.pdf"
                target="_blank"
                rel="noreferrer"
                className={[styles.navItem, styles.dropdownItems].join(" ")}
              >
                {strings.deckTtl}
              </a>
            </div>
          </div>
          <NavLink
            onClick={() => {
              setProjectDropDown(false);
              setAboutDropDown(false);
            }}
            to="/presale/"
            className={({ isActive }) =>
              [
                styles.navItem,
                styles.presale,
                styles.navBtn,
                styles.dropdownItem,
                isActive ? styles.active : "",
              ].join(" ")
            }
          >
            {strings.presaleTtl}
          </NavLink>
          <div
            className={`${styles.dropDownContainer} ${styles.projectDropDownContainer}`}
            onClick={() => setAboutDropDown(false)}
          >
            <p
              className={[styles.dropdownHeader, styles.navBtn].join(" ")}
              onClick={() => setProjectDropDown((prev) => !prev)}
            >
              <span className={styles.navItem}>{strings.projectTtl}</span>
              <FontAwesomeIcon
                className={`${styles.arrow} ${
                  projectDropDown && styles.rotateArrow
                }`}
                icon={faCircleChevronDown}
              />
            </p>

            <div
              className={[
                styles.dropdownItems,
                `${projectDropDown && styles.projectDropDowns}`,
              ].join(" ")}
            >
              <NavLink
                onClick={() => setProjectDropDown(true)}
                to="/roadmap/"
                className={({ isActive }) =>
                  [
                    styles.navItem,
                    styles.dropdownItem,
                    isActive ? styles.active : "",
                  ].join(" ")
                }
              >
                {strings.rmTtl}
              </NavLink>
              <a
                href="https://github.com/solidproof/projects/blob/main/Swords%20of%20Blood/SmartContract_Audit_Solidproof_SwordsOfBlood.pdf"
                rel="noreferrer"
                target="_blank"
                className={[styles.navItem, styles.dropdownItem].join(" ")}
              >
                {strings.auditTtl}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setProjectDropDown(false);
          setAboutDropDown(false);
        }}
      >
        <div className={styles.quicklinksContainer}>
          <h6 className={styles.quichLinksHeader}>{strings.quickLinksTtl}</h6>
          <NavLink to="/privacy/" className={styles.link}>
            {strings.privPolicy}
          </NavLink>
          <NavLink to="/termsandconditions/" className={styles.link}>
            {strings.termsAndConds}
          </NavLink>
          <a
            href="/assets/aml-hitbox.pdf"
            target="_blank"
            className={styles.link}
          >
            {strings.amlPolicy}
          </a>
          <a
            href="/assets/SWDTKN-SALE-Terms-and-Conditions.pdf"
            className={styles.link}
            target="_blank"
          >
            {strings.salePolicy}
          </a>
        </div>
        <div>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{strings.descText1}</p>
            <p className={styles.description}>
              {strings.descText2.replace("{YEAR}", new Date().getFullYear())}
            </p>
            <p className={styles.description}>{strings.descText3}</p>
          </div>
        </div>
        <div className={styles.socialMediaContainer}>
          <div className={styles.allSocialMedia}>
            {socialLinks.map((p, i) => {
              return (
                <a
                  key={i}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialIcon}
                >
                  <img src={p.img} alt="" className={styles.socials} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
