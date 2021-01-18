import React, { useEffect } from "react";
import { PossibleIncomeExit } from "../../assets/possible-income-exit.jsx";
import { TelegramLogo } from "../../assets/TelegramLogo";
import { InstLogo } from "../../assets/InstLogo";
import { PhoneLogo } from "../../assets/PhoneLogo";
import { useState } from "react";
import { CompanyTitleForm } from "./CompanyTitleForm";
import { useTranslation } from "react-i18next";
import { ExitIcon } from "../../assets/exit-icon";
import RuLanguageDesktop from "../../assets/RuLanguage-desktop.png";
import EnLanguageDesktop from "../../assets/EnLanguage-desktop.png";
import { DibixLogo } from "../../assets/DibixLogo";
import { HamburgerLogo } from "../../assets/Hamburger";
import macBookMobile from "../../assets/macbook-pro-mobile.png";
import { RightArrow } from "../../assets/Right-arrow-icon";
import { Capital } from "../../assets/capital";
import { SupportMobile } from "../../assets/support-mobile";
import { CommisionMobile } from "../../assets/commision-mobile";
import { PossibleIncomeForm } from "./PossibleIncomeForm";
import { AnonimMobile } from "../../assets/anonim-mobile";
import { SafetyMobile } from "../../assets/safety-mobile";
import { SecretMobile } from "../../assets/secret-mobile";
import { ExpMobile } from "../../assets/experience-mobile";
import { EmailLogoMobile } from "../../assets/email-logo-mobile";
import { Calculator } from "./Calculator";
// import { RegisterLogo } from "../../assets/RegisterLogo";
// import { SignInLogo } from "../../assets/SignInLogo";
// import { Link } from "react-router-dom";
import currencies from "../../assets/currencies-img.jpg";
import actives from "../../assets/actives-img.jpg";
import crypto from "../../assets/crypto-img.jpg";
import ipo from "../../assets/ipo-img.jpg";
const axios = require("axios");

export const LandingPage = () => {
  const { t, i18n } = useTranslation();

  let [activeLng, setActiveLng] = useState(2);
  let [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  let [showLearnMore, setShowLearnMore] = useState(false);
  let [showIncomeForm, setShowForm] = useState(false);
  let [showInfo, setShowInfo] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });
  const [selected, setSelected] = useState({
    one: false,
    two: false,
    three: false,
    fourt: false,
    fife: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
  });

  const [expert, setExpert] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const onClickFirstExpert = () => {
    if (window.innerWidth > 768) {
      setExpert({ one: !expert.one });
    }
  };
  const onClickSecondExpert = () => {
    if (window.innerWidth > 768) {
      setExpert({ two: !expert.two });
    }
  };
  const onClickThirdExpert = () => {
    if (window.innerWidth > 768) {
      setExpert({ three: !expert.three });
    }
  };
  const onClickFourthExpert = () => {
    if (window.innerWidth > 768) {
      setExpert({ four: !expert.four });
    }
  };
  const onClickFifthExpert = () => {
    if (window.innerWidth > 768) {
      setExpert({ five: !expert.five });
    }
  };

  const onOneClick = () => setSelected({ one: !selected.one });
  const onTwoClick = () => setSelected({ two: !selected.two });
  const onThreeClick = () => setSelected({ three: !selected.three });
  const onFourClick = () => setSelected({ four: !selected.four });
  const onFiveClick = () => setSelected({ five: !selected.five });
  const onSixClick = () => setSelected({ six: !selected.six });
  const onSevenClick = () => setSelected({ seven: !selected.seven });
  const onEightClick = () => setSelected({ eight: !selected.eight });
  const onNineClick = () => setSelected({ nine: !selected.nine });
  const onTenClick = () => setSelected({ ten: !selected.ten });

  const onClickFirst = () => {
    setShowInfo({ first: !showInfo.first });
  };
  const onClickSecond = () => {
    setShowInfo({ second: !showInfo.second });
  };
  const onClickThird = () => {
    setShowInfo({ third: !showInfo.third });
  };
  const onClickFourth = () => {
    setShowInfo({ fourth: !showInfo.fourth });
  };

  const onShowForm = () => {
    setShowForm(!showIncomeForm);
  };

  const showForm = () => {
    setShowLearnMore(!showLearnMore);
  };

  const showMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };

  const setLanguage = () => {
    if (activeLng === 1) {
      setActiveLng(2);
      i18n.changeLanguage("en");
    } else {
      setActiveLng(1);
      i18n.changeLanguage("ru");
    }
  };

  useEffect(() => {
    axios({
      method: "get",
      baseURL: "https://ipinfo.io",
      headers: {
        Authorization: "Bearer e827f577001832",
      },
    }).then(function (response) {
      if (response.data.country === "RU") {
        i18n.changeLanguage("ru");
        setActiveLng(1);
      }
    });

    if (window.innerWidth < 768) {
      setExpert({
        one: true,
        two: true,
        three: true,
        four: true,
        five: true,
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <section className="tool-bar-top">
        {showLearnMore && (
          <div className="company-title__form--container">
            <div class="blocker" onClick={showForm}></div>
            <CompanyTitleForm showForm={showForm} />
          </div>
        )}
        <p className="tool-bar-top__title">{t("investCompany.label")}</p>
        <a href="https://t.me/dibixfund">
          <TelegramLogo className="tool-bar-top__telegram-logo" />
        </a>
        <a href="https://instagram.com/dibixfund">
          <InstLogo className="tool-bar-top__inst-logo" />
        </a>
        <div className="tool-bar-top__phone-container">
          <PhoneLogo className="tool-bar-top__phone" />
          <a href="tel:+78002013233" className="tool-bar-top__phone-number">
            8(800)201-32-33
          </a>
        </div>
        <button onClick={showForm} className="tool-bar-top__call">
          {t("backcall.label")}
        </button>
      </section>

      <section className="app__header-container">
        <div id="main">
          {isOpenMobileMenu && (
            <div className="nav__popup">
              <button className="nav__popup-cross" onClick={showMenu}>
                <ExitIcon />
              </button>
              <div className="nav__popup-menu">
                <a
                  href="#main"
                  onClick={showMenu}
                  className="nav__popup-home nav__popup-points"
                >
                  {t("navigation-main.label")}
                </a>
                <a
                  href="#about"
                  onClick={showMenu}
                  className="nav__popup-about nav__popup-points"
                >
                  {t("navigation-about-app.label")}
                </a>
                <a
                  href="#types"
                  onClick={showMenu}
                  className="nav__popup-types nav__popup-points"
                >
                  {t("navigation-invest-types.label")}
                </a>
                <a
                  href="#table"
                  onClick={showMenu}
                  className="nav__popup-income nav__popup-points"
                >
                  {t("navigation-income-table.label")}
                </a>
                <a
                  href="#team"
                  onClick={showMenu}
                  className="nav__popup-team nav__popup-points"
                >
                  {t("navigation-our-team.label")}
                </a>
                <a
                  href="#faq"
                  onClick={showMenu}
                  className="nav__popup-faq nav__popup-points"
                >
                  {t("navigation-faq.label")}
                </a>
              </div>
              <div className="nav__popup-socials-container">
                <a href="https://t.me/dibixfund">
                  <TelegramLogo className="nav__popup-socials--telegram" />
                </a>
                <a href="https://instagram.com/dibixfund">
                  <InstLogo className="nav__popup-socials--inst" />
                </a>
              </div>
              <div className="nav__popup-phone-container">
                <PhoneLogo className="nav__popup-phone-logo" />
                <a href="tel:+78002013233" className="nav__popup-phone-number">
                  8(800)201-32-33
                </a>
              </div>
              <button onClick={showForm} className="nav__popup-call">
                {t("backcall.label")}
              </button>
            </div>
          )}
          <section className="nav">
            <div onClick={showMenu} className="nav__hamburger-container">
              <HamburgerLogo className="nav__hamburger" />
              <p className="nav__menu"> {t("navigation-menu.label")}</p>
            </div>
            <a className="nav__dibix-logo" href="#main">
              <DibixLogo />
            </a>
            {/* <div className="nav__mobile-logo">
              <Link to="/registration">
                <RegisterLogo />
              </Link>
              <Link to="/lk">
                <SignInLogo />
              </Link>
            </div> */}

            <div
              onClick={setLanguage}
              className="nav__mobile-language-container"
            >
              <img
                src={RuLanguageDesktop}
                className={
                  "nav__mobile-language " +
                  (activeLng === 1
                    ? "nav__mobile-language--active"
                    : "nav__mobile-language--disabled")
                }
                width="44"
                height="44"
                alt="en"
              />
              <img
                src={EnLanguageDesktop}
                className={
                  "nav__mobile-language " +
                  (activeLng === 2
                    ? "nav__mobile-language--active"
                    : "nav__mobile-language--disabled")
                }
                width="44"
                height="44"
                alt="en"
              />
            </div>

            <div className="nav__menu-container">
              <a href="#main" className="nav__home nav__points">
                {t("navigation-main.label")}
              </a>
              <a href="#about" className="nav__about nav__points">
                {t("navigation-about-app.label")}
              </a>
              <a href="#types" className="nav__types nav__points">
                {t("navigation-invest-types.label")}
              </a>
              <a href="#table" className="nav__income nav__points">
                {t("navigation-income-table.label")}
              </a>
              <a href="#team" className="nav__team nav__points">
                {t("navigation-our-team.label")}
              </a>
              <a href="#faq" className="nav__faq nav__points">
                {t("navigation-faq.label")}
              </a>
              <div onClick={setLanguage} className="nav__language-container">
                <img
                  src={RuLanguageDesktop}
                  className={
                    "nav__language " +
                    (activeLng === 1
                      ? "nav__language--active"
                      : "nav__language--disabled")
                  }
                  width="44"
                  height="44"
                  alt="en"
                />
                <img
                  src={EnLanguageDesktop}
                  className={
                    "nav__language " +
                    (activeLng === 2
                      ? "nav__language--active"
                      : "nav__language--disabled")
                  }
                  width="44"
                  height="44"
                  alt="en"
                />
              </div>
              {/* <Link
                to="/registration"
                className="nav__registration nav__points"
              >
                {t("navigation-registation.label")}
              </Link>
              <Link to="/login" className="nav__enter nav__points">
                {t("navigation-enter.label")}
              </Link> */}
            </div>
          </section>
        </div>
        <div id="about" className="company-title--wrapper">
          <title>About us</title>
          <section className="company-title">
            <div className="company-title__text-container">
              <h1 className="company-title__heading">
                {t("company-title-invest-and-income")}{" "}
                <span className="company-title__parcent">
                  {t("company-title-percent")}
                </span>{" "}
                {t("company-title-in-days")}
              </h1>
              <div className="company-title__line"></div>
              <p className="company-title__more-income">
                {t("company-title-higher-bank")}
              </p>
            </div>
            <div className="company-title__macbook-container">
              <img
                className="company-title__macbook"
                src={macBookMobile}
                alt=""
                width="300"
                height="180"
              />
            </div>
            <div className="company-title__button-container">
              <button onClick={showForm} className="company-title__info">
                {t("company-title-learn-more")}
              </button>
              <button className="company-title__whitepaper">Whitepaper</button>
            </div>
          </section>
        </div>
      </section>

      <section className="warranty">
        <title>Warranty</title>
        <div className="warranty__capital">
          <Capital className="warranty__capital-logo" />
          <p className="warranty__capital-title">
            {t("warranty-capital-title.label")}
          </p>
          <p className="warranty__capital-text">
            {t("warranty-capital-text.label")}
          </p>
        </div>
        <div className="warranty__support">
          <SupportMobile className="warranty__support-logo" />
          <p className="warranty__support-title">
            {t("warranty-support-title.label")}
          </p>
          <p className="warranty__support-text">
            {t("warranty-support-text.label")}
          </p>
        </div>
        <div className="warranty__commision">
          <CommisionMobile className="warranty__commision-logo" />
          <p className="warranty__commision-title">
            {t("warranty-comission-title.label")}
          </p>
          <p className="warranty__commision-text">
            {t("warranty-comission-text.label")}
          </p>
        </div>
      </section>

      <section className="possible-income">
        <title>Possible income</title>

        <h2 className="possible-income__heading">
          {t("possible-income-title")}
        </h2>
        <div className="possible-income__line"></div>
        <p className="possible-income__content">{t("possible-income-text")}</p>
        <button onClick={onShowForm} className="possible-income__button">
          {t("possible-income-btn")}
        </button>

        {showIncomeForm && (
          <div className="possible-income-form__main-container">
            <div class="blocker" onClick={onShowForm}></div>
            <PossibleIncomeForm onShowForm={onShowForm} />
          </div>
        )}
      </section>

      <section className="trusting">
        <div className="trusting__title-container">
          <h2 className="trusting__heading">{t("trusting-title")}</h2>
          <div className="trusting__line"></div>
          <p className="trusting__heading-context">
            {t("trusting-text-1")}{" "}
            <span className="trusting__heading-context--bold">
              DIBIX Digital fund
            </span>
            {t("trusting-text-2")}
          </p>
        </div>
        <div className="trusting__anonim">
          <AnonimMobile />
          <p className="trusting__anonim-heading">{t("trusting-anon-title")}</p>
          <p className="trusting__anonim-text">{t("trusting-anon-text")}</p>
        </div>
        <div className="trusting__safety">
          <SafetyMobile />
          <p className="trusting__safety-heading">
            {t("trusting-safety-title")}
          </p>
          <p className="trusting__safety-text">{t("trusting-safety-text")}</p>
        </div>
        <div className="trusting__secret">
          <SecretMobile />
          <p className="trusting__secret-heading">
            {t("trusting-secrets-title")}
          </p>
          <p className="trusting__secret-text">{t("trusting-secrets-text")}</p>
        </div>
        <div className="trusting__experience">
          <ExpMobile />
          <p className="trusting__experience-heading">
            {t("trusting-greeting-title")}
          </p>
          <p className="trusting__experience-text">
            {t("trusting-greeting-text")}
          </p>
        </div>
      </section>

      <section className="cash-flow">
        <div className="cash-flow__heading--wrapper">
          <h2 className="cash-flow__heading">
            {t("cashflow-heading-1")}
            <br /> {t("cashflow-heading-2")}
          </h2>
          <div className="cash-flow__line"></div>
        </div>
        <div className="cash-flow__points-container">
          <div className="cash-flow__contract">
            <p className="cash-flow__contract-days">
              {t("cashflow-contract-days")}
            </p>
            <p className="cash-flow__contract-theme">
              {t("cashflow-contract-text")}
            </p>
          </div>
          <div className="cash-flow__setting">
            <p className="cash-flow__setting-days">
              {t("cashflow-setting-days")}
            </p>
            <p className="cash-flow__setting-theme">
              {t("cashflow-setting-text")}
            </p>
          </div>
          <div className="cash-flow__dividend">
            <p className="cash-flow__dividend-days">
              {t("cashflow-dividend-days")}
            </p>
            <p className="cash-flow__dividend-theme">
              {t("cashflow-dividend-text")}
            </p>
          </div>
        </div>
        <button onClick={showForm} className="cash-flow__learn-more">
          {" "}
          {t("cashflow-btn")}
        </button>
      </section>

      <section className="about-app">
        <div>
          <title>Calculation of income</title>
          <h2 className="about-app__heading">{t("about-heading")}</h2>
          <div className="about-app__line"></div>
          <p className="about-app__calculator">{t("about-calculator-text")}</p>
          <div className="about-app__img">
            <Calculator />
          </div>
        </div>
        <div className="about-app__advantages">
          <div className="about-app__analize">
            <p className="about-app__analize-text">
              <span className="about-app__bold">
                {t("about-analize-text-1")}
              </span>
              {t("about-analize-text-2")}
            </p>
            <div className="about-app__dot">
              <div className="about-app__dot-center"></div>
              <div className="about-app__dot-center--little"></div>
            </div>
          </div>
          <div className="about-app__inside">
            <p className="about-app__inside-text">
              <span className="about-app__bold">
                {t("about-inside-text-1")}
              </span>
              {t("about-inside-text-2")}
            </p>
            <div className="about-app__dot">
              <div className="about-app__dot-center"></div>
              <div className="about-app__dot-center--little"></div>
            </div>
          </div>
          <div className="about-app__helper">
            <p className="about-app__helper-text">
              <span className="about-app__bold">
                {t("about-helper-text-1")}
              </span>
              {t("about-helper-text-2")}
            </p>
            <div className="about-app__dot">
              <div className="about-app__dot-center"></div>
              <div className="about-app__dot-center--little"></div>
            </div>
          </div>
        </div>
        <button onClick={showForm} className="about-app__button">
          {t("about-btn")}
        </button>
      </section>

      <section id="types" className="invest-types">
        <title>Types of investment</title>
        {showInfo.first && (
          <div className="invest-types__info-container">
            <div className="invest-types__info">
              <div onClick={onClickFirst}>
                <PossibleIncomeExit className="invest-types__info-cross" />
              </div>
              <h2 className="invest-types__info-heading">
                {t("invest-types-stocks-heading")}
              </h2>
              <img className="invest-types__img" src={ipo} alt="ipo" />
              <p className="invest-types__info-first-text">
                {t("invest-types-stocks-longread")}
              </p>
            </div>
          </div>
        )}
        {showInfo.second && (
          <div className="invest-types__info-container">
            <div className="invest-types__info">
              <div onClick={onClickSecond}>
                <PossibleIncomeExit className="invest-types__info-cross" />
              </div>
              <h2 className="invest-types__info-heading">
                {t("invest-types-actives-heading")}
              </h2>
              <img className="invest-types__img" src={crypto} alt="crypto" />
              <p className="invest-types__info-second-text">
                {t("invest-types-actives-longread-1")}
              </p>
              <p className="invest-types__info-second-text">
                {t("invest-types-actives-longread-2")}
              </p>
            </div>
          </div>
        )}
        {showInfo.third && (
          <div className="invest-types__info-container">
            <div className="invest-types__info">
              <div onClick={onClickThird}>
                <PossibleIncomeExit className="invest-types__info-cross" />
              </div>
              <h2 className="invest-types__info-heading">
                {t("invest-types-values-heading")}
              </h2>
              <img
                className="invest-types__img"
                src={currencies}
                alt="stocks"
              />
              <p className="invest-types__info-third-text">
                {t("invest-types-values-longread")}
              </p>
            </div>
          </div>
        )}
        {showInfo.fourth && (
          <div className="invest-types__info-container">
            <div className="invest-types__info">
              <div onClick={onClickFourth}>
                <PossibleIncomeExit className="invest-types__info-cross" />
              </div>
              <h2 className="invest-types__info-heading">IPO</h2>
              <img className="invest-types__img" src={actives} alt="actives" />
              <p className="invest-types__info-fourth-text">
                {t("invest-types-ipo-longread")}
              </p>
            </div>
          </div>
        )}
        <div className="invest-types__heading--container">
          <h2 className="invest-types__heading">{t("invest-types-heading")}</h2>
          <div className="invest-types__line"></div>
        </div>
        <div className="invest-types__container">
          <div className="invest-types__top-chart">
            <p className="invest-types__top-chart-number">01</p>
            <p className="invest-types__top-chart-title">
              {t("invest-types-stocks-heading")}
            </p>
            <p className="invest-types__top-chart-text">
              {t("invest-types-stocks-text")}
            </p>
            <button
              onClick={onClickFirst}
              className="invest-types__top-chart-btn"
            >
              {t("invest-types-more")}
              <RightArrow className="invest-types__arrow" />
            </button>
          </div>
          <div className="invest-types__actives">
            <p className="invest-types__actives-number">02</p>
            <p className="invest-types__actives-title">
              {t("invest-types-actives-heading")}
            </p>
            <p className="invest-types__actives-text">
              {t("invest-types-actives-text")}
            </p>
            <button
              onClick={onClickSecond}
              className="invest-types__actives-btn"
            >
              {t("invest-types-more")}
              <RightArrow className="invest-types__arrow" />
            </button>
          </div>
          <div className="invest-types__currency">
            <p className="invest-types__currency-number">03</p>
            <p className="invest-types__currency-title">
              {t("invest-types-values-heading")}
            </p>
            <p className="invest-types__currency-text">
              {t("invest-types-values-text")}
            </p>
            <button
              onClick={onClickThird}
              className="invest-types__currency-btn"
            >
              {t("invest-types-more")}
              <RightArrow className="invest-types__arrow" />
            </button>
          </div>
          <div className="invest-types__ipo">
            <p className="invest-types__ipo-number">04</p>
            <p className="invest-types__ipo-title">IPO</p>
            <p className="invest-types__ipo-text">
              {t("invest-types-ipo-text")}
            </p>
            <button onClick={onClickFourth} className="invest-types__ipo-btn">
              {t("invest-types-more")}
              <RightArrow className="invest-types__arrow" />
            </button>
          </div>
        </div>
        <button onClick={showForm} className="invest-types__button-more">
          {t("invest-types-btn")}
        </button>
      </section>

      <section id="table" className="risk">
        <title>Possible risks</title>
        <h2 className="risk__heading">{t("risk-heading")}</h2>
        <div className="risk__line"></div>
        <div className="risk__table-container">
          <table className="risk__table">
            <thead className="risk__table-header">
              <tr className="risk__table-header-main-cell">
                <th className="risk__table-header-cells">
                  {t("risk-direction")}
                </th>
                <th className="risk__table-header-cells">
                  {t("risk-deposit")}
                </th>
                <th className="risk__table-header-cells">
                  {t("risk-business")}
                </th>
                <th className="risk__table-header-cells">{t("risk-loan")}</th>
                <th className="risk__table-header-cells">DIBIX Digital Fund</th>
              </tr>
            </thead>
            <tbody className="risk__table-body">
              <tr className="risk__table-body--first">
                <td>{t("risk-optimal")}</td>
                <td>150 000$</td>
                <td>20 000$</td>
                <td>10 000$</td>
                <td>3 000$</td>
              </tr>
              <tr className="risk__table-body--second">
                <td>{t("risk-year-profit")}</td>
                <td>10%</td>
                <td>30%</td>
                <td>10-100%</td>
                <td>36%</td>
              </tr>
              <tr className="risk__table-body--third">
                <td>{t("risk-risks")}</td>
                <td>0,01%</td>
                <td>50%</td>
                <td>100%</td>
                <td>10%</td>
              </tr>
              <tr className="risk__table-body--fourth">
                <td>{t("risk-time")}</td>
                <td>0%</td>
                <td>100%</td>
                <td>50%</td>
                <td>0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="team" className="experts">
        <title>Our team</title>
        <h2 className="experts__heading">{t("experts-heading")}</h2>
        <div className="experts__line"></div>
        <p className="experts__text">{t("experts-text")}</p>
        <div className="experts__map">
          <div className="experts__img-container">
            <div className="experts__container experts__container--2">
              <div
                onMouseOver={onClickSecondExpert}
                onMouseLeave={onClickSecondExpert}
                onClick={onClickSecondExpert}
                className="experts__img experts__img--2"
              ></div>
              {expert.two && (
                <p className="experts__map-text">
                  <span className="experts__map-text--title">
                    Игорь Захаров
                  </span>
                  Управляющий партнер
                </p>
              )}
            </div>
            <div className="experts__container experts__container--1">
              <div
                onMouseOver={onClickFirstExpert}
                onMouseLeave={onClickFirstExpert}
                onClick={onClickFirstExpert}
                className="experts__img experts__img--1"
              ></div>
              {expert.one && (
                <p className="experts__map-text">
                  <span className="experts__map-text--title">
                    Иван Капусткин
                  </span>
                  Fullstack-разработчик
                </p>
              )}
            </div>
            <div className="experts__container experts__container--3">
              <div
                onMouseOver={onClickThirdExpert}
                onMouseLeave={onClickThirdExpert}
                onClick={onClickThirdExpert}
                className="experts__img experts__img--3"
              ></div>
              {expert.three && (
                <p className="experts__map-text">
                  <span className="experts__map-text--title">
                    Александр Тараскин
                  </span>
                  Frontend разработчик.
                </p>
              )}
            </div>
            <div className="experts__container experts__container--4">
              <div
                onMouseOver={onClickFourthExpert}
                onMouseLeave={onClickFourthExpert}
                onClick={onClickFourthExpert}
                className="experts__img experts__img--4"
              ></div>
              {expert.four && (
                <p className="experts__map-text">
                  <span className="experts__map-text--title">Игорь Илюхин</span>
                  Интернет маркетинг
                </p>
              )}
            </div>
            <div className="experts__container experts__container--5">
              <div
                onMouseOver={onClickFifthExpert}
                onMouseLeave={onClickFifthExpert}
                onClick={onClickFifthExpert}
                className="experts__img experts__img--5"
              ></div>
              {expert.five && (
                <p className="experts__map-text">
                  <span className="experts__map-text--title">
                    Даниил Дубовой
                  </span>
                  Маркетинг
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq">
        <title>FAQ</title>
        <h2 className="faq__heading">{t("faq-heading")}</h2>
        <div className="faq__line"></div>
        <div className="faq__content-container">
          <div className="faq__first-path-container">
            <p className="faq__request faq__request--1" onClick={onOneClick}>
              {selected.one ? (
                <span className="faq__request-text faq__request-text--1">
                  !
                </span>
              ) : (
                <span className="faq__request-text faq__request-text--disactive faq__request-text--1">
                  ?
                </span>
              )}
              {t("faq-1-heading")}
            </p>
            {selected.one && (
              <div className="faq__response-container">
                <p className="faq__response">{t("faq-1-text")}</p>{" "}
              </div>
            )}
            <p className="faq__request faq__request--2" onClick={onTwoClick}>
              {selected.two ? (
                <span className="faq__request-text faq__request-text--2">
                  !
                </span>
              ) : (
                <span className="faq__request-text faq__request-text--disactive faq__request-text--2">
                  ?
                </span>
              )}
              {t("faq-2-heading")}
            </p>
            {selected.two && (
              <div className="faq__response-container">
                <p className="faq__response">{t("faq-2-text")}</p>{" "}
              </div>
            )}
            <p
              className={
                selected.three
                  ? "faq__request faq__request--3 faq__request--active"
                  : "faq__request faq__request--3"
              }
              onClick={onThreeClick}
            >
              {selected.three ? (
                <span className="faq__request-text faq__request-text--3">
                  !
                </span>
              ) : (
                <span className="faq__request-text faq__request-text--disactive faq__request-text--3">
                  ?
                </span>
              )}
              {t("faq-3-heading")}
            </p>
            {selected.three && (
              <div className="faq__response-container">
                <p className="faq__response">{t("faq-3-text")}</p>{" "}
              </div>
            )}
            <p className="faq__request faq__request--4" onClick={onFourClick}>
              {selected.four ? (
                <span className="faq__request-text faq__request-text--4">
                  !
                </span>
              ) : (
                <span className="faq__request-text faq__request-text--disactive faq__request-text--4">
                  ?
                </span>
              )}
              {t("faq-4-heading")}
            </p>
            {selected.four && (
              <div className="faq__response-container">
                <p className="faq__response">{t("faq-4-text")}</p>{" "}
              </div>
            )}
            <p className="faq__request faq__request--5" onClick={onFiveClick}>
              {selected.five ? (
                <span className="faq__request-text faq__request-text--5">
                  !
                </span>
              ) : (
                <span className="faq__request-text faq__request-text--disactive faq__request-text--5">
                  ?
                </span>
              )}
              {t("faq-5-heading")}
            </p>
            {selected.five && (
              <div className="faq__response-container">
                <p>{t("faq-5-text")}</p>{" "}
              </div>
            )}
          </div>
          <div className="faq__second-path-container">
            <p className="faq__request faq__request--6" onClick={onSixClick}>
              {selected.six ? (
                <span className="faq__request-text faq__request-text--6">
                  !
                </span>
              ) : (
                <span className="faq__request-text faq__request-text--disactive faq__request-text--6">
                  ?
                </span>
              )}
              {t("faq-6-heading")}
            </p>
            {selected.six && (
              <div className="faq__response-container">
                <p className="faq__response">{t("faq-6-text")}</p>{" "}
              </div>
            )}
            <p
              className={
                selected.seven
                  ? "faq__request faq__request--7 faq__request--active"
                  : "faq__request faq__request--7"
              }
              onClick={onSevenClick}
            >
              {selected.seven ? (
                <span className="faq__request-text faq__request-text--7">
                  !
                </span>
              ) : (
                <span className="faq__request-text faq__request-text--disactive faq__request-text--7">
                  ?
                </span>
              )}
              {t("faq-7-heading")}
            </p>
            {selected.seven && (
              <div className="faq__response-container">
                <p className="faq__response">{t("faq-7-text")}</p>{" "}
              </div>
            )}
            <p
              className={
                selected.eight
                  ? "faq__request faq__request--8 faq__request--active"
                  : "faq__request faq__request--8"
              }
              onClick={onEightClick}
            >
              {selected.eight ? (
                <span className="faq__request-text faq__request-text--8">
                  !
                </span>
              ) : (
                <span className="faq__request-text faq__request-text--disactive faq__request-text--8">
                  ?
                </span>
              )}
              {t("faq-8-heading")}
            </p>
            {selected.eight && (
              <div className="faq__response-container">
                <p className="faq__response">{t("faq-8-text")}</p>{" "}
              </div>
            )}
            <p className="faq__request faq__request--9" onClick={onNineClick}>
              {selected.nine ? (
                <span className="faq__request-text faq__request-text--9">
                  !
                </span>
              ) : (
                <span className="faq__request-text faq__request-text--disactive faq__request-text--9">
                  ?
                </span>
              )}
              {t("faq-9-heading")}
            </p>
            {selected.nine && (
              <div className="faq__response-container">
                <p className="faq__response">{t("faq-9-text")}</p>{" "}
              </div>
            )}
            <p className="faq__request faq__request--10" onClick={onTenClick}>
              {selected.ten ? (
                <span className="faq__request-text faq__request-text--10">
                  !
                </span>
              ) : (
                <span className="faq__request-text faq__request-text--disactive faq__request-text--10">
                  ?
                </span>
              )}
              {t("faq-10-heading")}
            </p>
            {selected.ten && (
              <div className="faq__response-container">
                <p className="faq__response">{t("faq-10-text")}</p>{" "}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="possible-income">
        <h2 className="possible-income__heading">
          {t("possible-income-title")}
        </h2>
        <div className="possible-income__line"></div>
        <p className="possible-income__content">{t("possible-income-text")}</p>
        <button onClick={onShowForm} className="possible-income__button">
          {t("possible-income-btn")}
        </button>
      </section>

      <section className="footer">
        <div className="footer__contacts">
          <a href="#main" className="footer__dibix-logo">
            <DibixLogo />
          </a>
          <div className="footer__contact-container">
            <div className="footer__phone-container">
              <PhoneLogo className="footer__phone-logo" />
              <a href="tel:+78002013233" className="footer__phone-number">
                8(800)201-32-33
              </a>
            </div>
            <div className="footer__mail-container">
              <EmailLogoMobile className="footer__mail-logo" />
              <a href="mailto:support@dibix.io" className="footer__mail-text">
                support@dibix.io
              </a>
            </div>
            <div className="footer__socials">
              <a href="https://t.me/dibixfund">
                <TelegramLogo className="footer__socials--telegram" />
              </a>
              <a href="https://instagram.com/dibixfund">
                <InstLogo className="footer__socials--inst" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__menu-container">
          <a href="#main" className="footer__main">
            {t("navigation-main.label")}
          </a>
          <a href="#about" className="footer__types">
            {t("navigation-about-app.label")}
          </a>
          <a href="#types" className="footer__types">
            {t("navigation-invest-types.label")}
          </a>
          <a href="#table" className="footer__income">
            {t("navigation-income-table.label")}
          </a>
          <a href="#team" className="footer__team">
            {t("navigation-our-team.label")}
          </a>
          <a href="#faq" className="footer__faq">
            {t("navigation-faq.label")}
          </a>
        </div>
        <div className="footer__initials-container">
          <p className="footer__initials">{t("toolbar-bottom-text")}</p>
        </div>
      </section>
    </div>
  );
};
