import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Calculator = () => {
  const { t, i18n } = useTranslation();

  let [days, setDays] = useState(2);
  let [rubles, setRubles] = useState(200);
  let [dollar, setDollar] = useState(3000);
  let [result, setResult] = useState(0);
  let [resultDollar, setDollarResult] = useState(0);

  const onDaysChange = (evt) => {
    setDays(evt.currentTarget.value);
  };

  const onRublesChange = (evt) => {
    setRubles(evt.currentTarget.value);
  };

  const onDollarsChange = (evt) => {
    setDollar(evt.currentTarget.value);
  };

  const getResult = () => {
    setResult(Math.round(rubles * 1000 * (days * 0.03 + 1) - rubles * 1000));
  };

  const getDollarResult = () => {
    setDollarResult(Math.round(dollar * (days * 0.03 + 1) - dollar));
  };
  return (
    <>
      {i18n.language === "ru" && (
        <div className="calculator">
          <h2 className="calculator__heading">
            {t("about-calculator-heading")}
          </h2>
          <div className="calculator__rubles-container">
            <p className="calculator__rubles">
              {`${rubles} 000`}
              <span className="calculator__rubles--text">
                {t("about-calculator-rubles")}
              </span>
            </p>
            <input
              className="calculator__rubles-range"
              onChange={onRublesChange}
              type="range"
              min="200"
              max="400"
              step="10"
              defaultValue="200"
            />
            <div className="calculator__lines"></div>
            <div className="calculator__numbers">
              <p>200</p>
              <p>250</p>
              <p>300</p>
              <p>350</p>
              <p>400</p>
            </div>
          </div>
          <div className="calculator__days-container">
            <p className="calculator__days">
              {`${days * 30}`}
              <span className="calculator__days--text">
                {t("about-calculator-days")}
              </span>
            </p>
            <input
              className="calculator__days-range"
              onChange={onDaysChange}
              type="range"
              min="2"
              max="12"
              step="1"
              defaultValue="2"
            />
            <div className="calculator__lines"></div>
            <div className="calculator__numbers">
              <p>60</p>
              <p>120</p>
              <p>210</p>
              <p>290</p>
              <p>360</p>
            </div>
            <p className="calculator__percent">
              {t("about-calculator-percent")}{" "}
              <span className="calculator__percent--bold">3%</span>
            </p>
            <button className="calculator__result" onClick={getResult}>
              {t("about-calculator-btn")}
            </button>
            <p className="calculator__result-number">
              {t("about-calculator-result")}
              <span className="calculator__result-number--bold">{result}</span>
              {t("about-calculator-rubles")}
            </p>
          </div>
        </div>
      )}
      {i18n.language === "en" && (
        <div className="calculator">
          <h2 className="calculator__heading">
            {t("about-calculator-heading")}
          </h2>
          <div className="calculator__rubles-container">
            <p className="calculator__rubles">
              {`${dollar}`}
              <span className="calculator__rubles--text">
                {t("about-calculator-rubles")}
              </span>
            </p>
            <input
              className="calculator__rubles-range"
              onChange={onDollarsChange}
              type="range"
              min="3000"
              max="7000"
              step="100"
              defaultValue="3000"
            />
            <div className="calculator__lines"></div>
            <div className="calculator__numbers">
              <p>3000</p>
              <p>4000</p>
              <p>5000</p>
              <p>6000</p>
              <p>7000</p>
            </div>
          </div>
          <div className="calculator__days-container">
            <p className="calculator__days">
              {`${days * 30}`}
              <span className="calculator__days--text">
                {t("about-calculator-days")}
              </span>
            </p>
            <input
              className="calculator__days-range"
              onChange={onDaysChange}
              type="range"
              min="2"
              max="12"
              step="1"
              defaultValue="2"
            />
            <div className="calculator__lines"></div>
            <div className="calculator__numbers">
              <p>60</p>
              <p>120</p>
              <p>210</p>
              <p>290</p>
              <p>360</p>
            </div>
            <p className="calculator__percent">
              {t("about-calculator-percent")}{" "}
              <span className="calculator__percent--bold">3%</span>
            </p>
            <button className="calculator__result" onClick={getDollarResult}>
              {t("about-calculator-btn")}
            </button>
            <p className="calculator__result-number">
              {t("about-calculator-result")}
              <span className="calculator__result-number--bold">{resultDollar}</span>
              {t("about-calculator-rubles")}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
