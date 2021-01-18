import React from "react";
import { Field, reduxForm } from "redux-form";
import { PossibleIncomeExit } from "../../assets/possible-income-exit.jsx";
import { useState } from "react";
import { RightArrowForm } from "../../assets/right-arrow-form.jsx";
import { LeftArrowForm } from "../../assets/left-arrow-form.jsx";
import { ManIcon } from "../../assets/man-icon";
import { EmailLogoMobile } from "../../assets/email-logo-mobile.jsx";
import { PhoneLogo } from "../../assets/PhoneLogo.jsx";
import { useTranslation } from "react-i18next";
const axios = require("axios");

const PossibleIncomeFormComponent = (props) => {
  const { t } = useTranslation();

  let [value, setValue] = useState({
    min: 0,
    max: 50000,
  });

  const onClickNext = () => {
    props.setPage(props.page + 1);
  };

  const onClickBack = () => {
    props.setPage(props.page - 1);
  };

  const onMinChange = (evt) => {
    setValue({
      min: evt.value,
      max: value.max,
    });
  };

  const onMaxChange = (evt) => {
    setValue({
      min: value.min,
      max: evt.value,
    });
  };

  // const onClickSubmit = () => {
  //   props.handleSubmit
  // }

  return (
    <form className={"possible-income-form"} onSubmit={props.handleSubmit}>
      <button
        type="button"
        onClick={props.onShowForm}
        className="possible-income-form__cross"
      >
        <PossibleIncomeExit className="possible-income-form__cross--icon" />
        <span className="possible-income-form__cross--text">
          {t("possible-income-form-close")}
        </span>
      </button>

      {props.page === 1 && (
        <div className="possible-income-form__types-container">
          <h2 className="possible-income-form__heading">
            {t("possible-income-form-1-heading")}
          </h2>
          <div className="possible-income-form__line"></div>
          <p className="possible-income-form__text">
            {t("possible-income-form-1-text")}
          </p>
          <div className="possible-income__form-checkbox--container">
            <label
              className="possible-income__form-checkbox--field possible-income__form-checkbox-label possible-income__form-checkbox--first"
              htmlFor="currency"
            >
              <Field
                className="possible-income__form-checkbox"
                name="currency"
                id="currency"
                value="currency"
                component="input"
                type="checkbox"
              />
              <span className="possible-income__form-checkbox--text">
                {t("possible-income-form-1-values")}
              </span>
            </label>
            <label
              className="possible-income__form-checkbox-label possible-income__form-checkbox--field possible-income__form-checkbox--second"
              htmlFor="crypto"
            >
              <Field
                className="possible-income__form-checkbox"
                name="crypto"
                id="crypto"
                component="input"
                type="checkbox"
              />
              <span className="possible-income__form-checkbox--text">
                {t("possible-income-form-1-crypto")}
              </span>
            </label>

            <label
              className="possible-income__form-checkbox--field possible-income__form-checkbox--third possible-income__form-checkbox-label"
              htmlFor="stocks"
            >
              <Field
                className="possible-income__form-checkbox"
                name="stocks"
                id="stocks"
                component="input"
                type="checkbox"
              />
              <span className="possible-income__form-checkbox--text">
                {t("possible-income-form-1-stocks")}
              </span>
            </label>
            <label
              className="possible-income__form-checkbox-label possible-income__form-checkbox--field possible-income__form-checkbox--fourth"
              htmlFor="not-yet"
            >
              <Field
                className="possible-income__form-checkbox"
                name="not_yet"
                id="not-yet"
                component="input"
                type="checkbox"
              />
              <span className="possible-income__form-checkbox--text">
                {t("possible-income-form-1-nothing")}
              </span>
            </label>
          </div>
          <div className="possible-income__form-step">
            <p>
              {t("possible-income-form-step")}:{" "}
              <span className="possible-income__form-step--page">
                {props.page}
              </span>
              /5
            </p>
            <div className="possible-income__form-progress">
              <div className="possible-income__form-progress-bar"></div>
            </div>
          </div>
          <button
            className="possible-income__form-next"
            type={"button"}
            onClick={onClickNext}
          >
            {t("possible-income-form-next")}
            <RightArrowForm className="possible-income__form-arrow" />
          </button>
        </div>
      )}

      {props.page === 2 && (
        <div className="possible-income-form__experience-container">
          <h2 className="possible-income-form__heading">
            {t("possible-income-form-2-heading")}
          </h2>
          <div className="possible-income-form__line"></div>
          <p className="possible-income-form__text">
            {t("possible-income-form-2-text")}
          </p>
          <div className="possible-income-form__radio-container">
            <div className="possible-income-form__points-form">
              <div className="possible-income-form__point">
                <label>
                  <Field
                    className="possible-income-form__radio"
                    name="experience"
                    component="input"
                    type="radio"
                    value="newby"
                  />{" "}
                  <p className="possible-income-form__radio-label">
                    {t("possible-income-form-2-newby")}
                  </p>
                </label>
              </div>
              <div className="possible-income-form__point">
                <label>
                  <Field
                    className="possible-income-form__radio"
                    name="experience"
                    component="input"
                    type="radio"
                    value="begginer"
                  />{" "}
                  <p className="possible-income-form__radio-label">
                    {t("possible-income-form-2-middle")}
                  </p>
                </label>
              </div>
              <div className="possible-income-form__point">
                <label>
                  <Field
                    className="possible-income-form__radio"
                    name="experience"
                    component="input"
                    type="radio"
                    value="middle"
                  />{" "}
                  <p className="possible-income-form__radio-label">
                    {t("possible-income-form-2-advanced")}
                  </p>
                </label>
              </div>
              <div className="possible-income-form__point">
                <label>
                  <Field
                    className="possible-income-form__radio"
                    name="experience"
                    component="input"
                    type="radio"
                    value="dontknow"
                  />{" "}
                  <p className="possible-income-form__radio-label">
                    {t("possible-income-form-2-nothing")}
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className="possible-income__form-step">
            <p>
              {t("possible-income-form-step")}:{" "}
              <span className="possible-income__form-step--page">
                {props.page}
              </span>
              /5
            </p>
            <div className="possible-income__form-progress">
              <div className="possible-income__form-progress-bar-2"></div>
            </div>
          </div>
          <button
            className="possible-income__form-back"
            type={"button"}
            onClick={onClickBack}
          >
            <LeftArrowForm className="possible-income__form-arrow-left" />
            {t("possible-income-form-back")}
          </button>
          <button
            className="possible-income__form-next"
            type={"button"}
            onClick={onClickNext}
          >
            {t("possible-income-form-next")}
            <RightArrowForm className="possible-income__form-arrow" />
          </button>
        </div>
      )}

      {props.page === 3 && (
        <div className="possible-income-form__budget-container">
          <h2 className="possible-income-form__heading">
            {t("possible-income-form-3-heading")}
          </h2>
          <div className="possible-income-form__line"></div>
          <p className="possible-income-form__text">
            {t("possible-income-form-3-text")}
          </p>
          <div className={"possible-income-form__invest-value"}>
            <div>
              <label>{t("possible-income-form-3-from")}</label>
              <Field
                className={"possible-income-form__from-input"}
                spellCheck={"false"}
                name={"lower_price"}
                component={"input"}
                value={value.min}
                onChange={onMinChange}
                required
              />
            </div>
            <div>
              <label>{t("possible-income-form-3-to")}</label>
              <Field
                className={"possible-income-form__to-input"}
                spellCheck={"false"}
                name={"higher_price"}
                component={"input"}
                value={value.max}
                onChange={onMaxChange}
                required
              />
            </div>
          </div>
          <div className={"possible-income-form__range-container"}>
            <div className={"possible-income-form__range-input--container"}>
              <Field
                className={
                  "possible-income-form__range-input possible-income-form__range-input--first"
                }
                spellCheck={"false"}
                name={"lower_price"}
                component={"input"}
                value={value.min}
                onChange={onMinChange}
                type={"range"}
                min={"0"}
                max={"50000"}
                step={"500"}
                required
              />
            </div>
            <div className={"possible-income-form__range-input--container"}>
              <Field
                className={
                  "possible-income-form__range-input possible-income-form__range-input--second"
                }
                spellCheck={"false"}
                name={"higher_price"}
                component={"input"}
                value={value.max}
                onChange={onMaxChange}
                type={"range"}
                min={"50000"}
                max={"100000"}
                step={"500"}
                required
              />
            </div>
          </div>
          <div className={"possible-income-form__budget-lines"} />
          <div className={"possible-income-form__budget-numbers"}>
            <p>0</p>
            <p>50</p>
            <p>100</p>
          </div>
          <div className="possible-income__form-step">
            <p>
              {t("possible-income-form-step")}:{" "}
              <span className="possible-income__form-step--page">
                {props.page}
              </span>
              /5
            </p>
            <div className="possible-income__form-progress">
              <div className="possible-income__form-progress-bar-3"></div>
            </div>
          </div>
          <button
            className="possible-income__form-back"
            type={"button"}
            onClick={onClickBack}
          >
            <LeftArrowForm className="possible-income__form-arrow-left" />
            {t("possible-income-form-back")}
          </button>
          <button
            className="possible-income__form-next"
            type={"button"}
            onClick={onClickNext}
          >
            {t("possible-income-form-next")}
            <RightArrowForm className="possible-income__form-arrow" />
          </button>
        </div>
      )}

      {props.page === 4 && (
        <div className={"possible-income-form__age-form"}>
          <h2 className="possible-income-form__heading">
            {t("possible-income-form-4-heading")}
          </h2>
          <div className="possible-income-form__line"></div>
          <p className="possible-income-form__text possible-income-form__text--age">
            {t("possible-income-form-4-text")}{" "}
          </p>
          <div className={"possible-income-form__age-field"}>
            <Field
              className={"possible-income-form__age-input"}
              spellCheck={"false"}
              name={"user_age"}
              placeholder={t("possible-income-form-4-age")}
              component={"input"}
              required
            />
          </div>
          <div className="possible-income__form-step">
            <p>
              {t("possible-income-form-step")}:{" "}
              <span className="possible-income__form-step--page">
                {props.page}
              </span>
              /5
            </p>
            <div className="possible-income__form-progress">
              <div className="possible-income__form-progress-bar-4"></div>
            </div>
          </div>
          <button
            className="possible-income__form-back"
            type={"button"}
            onClick={onClickBack}
          >
            <LeftArrowForm className="possible-income__form-arrow-left" />
            {t("possible-income-form-back")}
          </button>
          <button
            className="possible-income__form-next"
            type={"button"}
            onClick={onClickNext}
          >
            {t("possible-income-form-next")}
            <RightArrowForm className="possible-income__form-arrow" />
          </button>
        </div>
      )}

      {props.page === 5 && (
        <div className={"possible-income-form__result-form"}>
          <h2 className="possible-income-form__heading possible-income-form__heading--5">
            {t("possible-income-form-5-heading")}
          </h2>
          <div className="possible-income-form__line"></div>
          <p className="possible-income-form__text possible-income-form__text--age">
            {t("possible-income-form-5-text")}
          </p>
          <div className="possible-income-form__contacts-container">
            <div className={"possible-income-form__result-field"}>
              <ManIcon className="possible-income-form__man-icon" />
              <Field
                className={"possible-income-form__name-input"}
                spellCheck={"false"}
                name={"user_name"}
                placeholder={t("possible-income-form-5-name")}
                component={"input"}
                required
              />
            </div>
            <div className={"possible-income-form__result-field"}>
              <EmailLogoMobile className={"possible-income-form__mail-logo"} />
              <Field
                className={"possible-income-form__mail-input"}
                spellCheck={"false"}
                name={"user_mail"}
                placeholder={t("possible-income-form-5-mail")}
                component={"input"}
                required
              />
            </div>
            <div className={"possible-income-form__result-field"}>
              <PhoneLogo className={"possible-income-form__phone-logo"} />
              <Field
                className={"possible-income-form__phone-input"}
                spellCheck={"false"}
                name={"user_phone"}
                placeholder={"+7(999) 999-99-99"}
                component={"input"}
                type={"phone"}
                required
              />
            </div>
            <div
              className={
                "possible-income-form__result-field possible-income-form__result-field--socials"
              }
            >
              <Field
                className={"possible-income-form__socials-input"}
                spellCheck={"false"}
                name={"user_socials"}
                placeholder={t("possible-income-form-5-messanger")}
                component={"input"}
                required
              />
            </div>
          </div>
          <div className="possible-income__form-step">
            <p>
              {t("possible-income-form-step")}:{" "}
              <span className="possible-income__form-step--page">
                {props.page}
              </span>
              /5
            </p>
            <div className="possible-income__form-progress">
              <div className="possible-income__form-progress-bar-5"></div>
            </div>
          </div>
          <button
            className="possible-income__form-back"
            type={"button"}
            onClick={onClickBack}
          >
            <LeftArrowForm className="possible-income__form-arrow-left" />
            {t("possible-income-form-back")}
          </button>
          <button className="possible-income__form-next" type={"submit"}>
            {t("possible-income-form-submit")}
          </button>
        </div>
      )}

      {props.page === 6 && (
        <div className={"possible-income-form__final-form"}>
          <h2 className="possible-income-form__heading">
            {t("possible-income-form-6-heading")}
          </h2>
          <div className="possible-income-form__line"></div>
          <div className="possible-income-form__six-form-container">
            <p className="possible-income-form__text">
              {t("possible-income-form-6-text")}
            </p>
          </div>
          <p className="possible-income-form__more-asks">
            {t("possible-income-form-6-asks")}
          </p>
          <div className="possible-income-form__line"></div>
          <p className="possible-income-form__hot-line">
            {t("possible-income-form-6-number")}{" "}
            <span className="possible-income-form__hot-line--bold">
              8(800)201-32-33
            </span>
          </p>
          <p className="possible-income-form__hot-line">
            {t("possible-income-form-6-mail")}{" "}
            <span className="possible-income-form__hot-line--bold">
              support@dibix.io
            </span>
          </p>
        </div>
      )}
    </form>
  );
};

const PossibleIncomeRedux = reduxForm({
  form: "contact",
})(PossibleIncomeFormComponent);

export const PossibleIncomeForm = (props) => {
  let [page, setPage] = useState(1);

  // const setNewPage = (newPage) = {
  //   setPage(newPage)
  // };

  const onSubmit = (values) => {
    let budgetFrom = Number(values.lower_price);
    let budgetTo = Number(values.higher_price);
    let age = Number(values.user_age);
    let name = values.user_name;
    let email = values.user_mail;
    let phone = values.user_phone;
    let socials = values.user_socials;
    let preference = [];

    if (values.stocks === true) preference.push("Акции");
    if (values.currency === true) preference.push("Мировые валюты");
    if (values.crypto === true) preference.push("Криптовалюты");
    if (values.not_yet === true) preference.push("Еще не определился");

    axios({
      method: "POST",
      baseURL: "https://lit-temple-07490.herokuapp.com/api/quiz",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        budgetFrom,
        budgetTo,
        age,
        name,
        email,
        phone,
        socials,
        preference,
      },
    }).then(function (response) {
      if (response.status === 201) {
        setPage(page + 1);
      } else alert("Something went wrong");
    });
  };
  return (
    <PossibleIncomeRedux
      {...props}
      page={page}
      setPage={setPage}
      onSubmit={onSubmit}
    />
  );
};
