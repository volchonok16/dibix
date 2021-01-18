import React from "react";
import { Field, reduxForm } from "redux-form";
import { ExitIcon } from "../../assets/exit-icon";
import { useTranslation } from "react-i18next";
import { ManIcon } from "../../assets/man-icon";
import { PhoneLogo } from "../../assets/PhoneLogo.jsx";
const axios = require("axios");

const CompanyTitleFormComponent = (props) => {
  const { t } = useTranslation();

  return (
    <form className="company-title-form" onSubmit={props.handleSubmit}>
      <div onClick={props.showForm} className="company-title-form__cross">
        <ExitIcon />
      </div>
      <h1 className={"company-title-form__heading"}>
        {t("company-title-consultation.label")}
      </h1>
      <div className={"company-title-form__field"}>
        <label className={"company-title-form__label"}>
          {t("company-title-your-name.label")}:{" "}
          <ManIcon className="company-title-form__man-icon" />
        </label>
        <Field
          className={"company-title-form__input"}
          spellCheck={"false"}
          name={"user_name"}
          placeholder={"Ivan"}
          component={"input"}
          required
        />
      </div>
      <div className={"company-title-form__field"}>
        <label className={"company-title-form__label"}>
          {t("company-title-your-tel.label")}:{" "}
          <PhoneLogo className={"company-title-form__phone-logo"} />
        </label>
        <Field
          className={"company-title-form__input"}
          spellCheck={"false"}
          name={"user_phone"}
          placeholder={"+7(999)999-99-99"}
          component={"input"}
          required
        />
      </div>
      <button className={"company-title-form__button"}>
        {t("company-title-send.label")}
      </button>
    </form>
  );
};

const CompanyTitleRedux = reduxForm({
  form: "contact",
})(CompanyTitleFormComponent);

export const CompanyTitleForm = (props) => {
  const submit = (values) => {
    axios({
      method: "POST",
      baseURL: "https://lit-temple-07490.herokuapp.com/api/feedback",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        phone: values.user_phone,
        name: values.user_name,
      },
    }).then(function (response) {
      if (response.status === 201) {
        alert(
          "Ваша заявка принята \n В ближайшее время с вами свяжется специалист"
        );
        props.showForm();
      } else alert("Something went wrong");
    });
  };

  return <CompanyTitleRedux {...props} onSubmit={submit} />;
};
