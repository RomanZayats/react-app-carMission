import React from "react";
import PropTypes from "prop-types";
import SectionHeading from "../../components/generalComponents/SectionHeading/SectionHeading";
import "./servicePackages.scss";
import Button from "../../components/generalComponents/Button/Button";

const ServicePackages = ({name, price, currency, serviceList}) => {


  return (
    <div className="service-packages__wrapper">
      <SectionHeading text="Пакеты услуг"/>
      <div className="servicePackages__item">
        <h3 className="servicePackages__name">{name}</h3>
        <p className="servicePackages__currency">{currency}</p>
        <p className="servicePackages__price">{price}</p>
        <ul className="servicePackages__serviceList">
          <li>Подбор авто на аукционе</li>
          <li>Участие в аукционе</li>
          <li>Доставка авто в Одессу</li>
          <li>Таможенное оформление</li>
          <li>Доставка авто в Киев</li>
          <li>Сертификация</li>
        </ul>
      </div>
      <div className="servicePackages__item">
        <h3 className="servicePackages__name">{name}</h3>
        <p className="servicePackages__currency">{currency}</p>
        <p className="servicePackages__price">{price}</p>
        <ul className="servicePackages__serviceList">
          <li>Подбор авто на аукционе</li>
          <li>Участие в аукционе</li>
          <li>Доставка авто в Одессу</li>
          <li>Таможенное оформление</li>
          <li>Доставка авто в Киев</li>
          <li>Сертификация</li>
          <li>Полировка и химчистка авто</li>
        </ul>
      </div>
      <div className="servicePackages__item">
        <h3 className="servicePackages__name">{name}</h3>
        <p className="servicePackages__currency">{currency}</p>
        <p className="servicePackages__price">{price}</p>
        <ul className="servicePackages__serviceList">
          <li>Подбор авто на аукционе</li>
          <li>Участие в аукционе</li>
          <li>Доставка авто в Одессу</li>
          <li>Таможенное оформление</li>
          <li>Доставка авто в Киев</li>
          <li>Сертификация</li>
          <li>Полировка и химчистка авто</li>
        </ul>
      </div>
      <p className="service-packages__description">
        Оставьте заявку и мы поможем вам выбрать подходящий для вас пакет услуг
      </p>
      <Button text="Отправить заявку" onClick={}/>
    </div>
  );
};

ServicePackages.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.number,
  serviceList: PropTypes.array.isRequired
};
export default ServicePackages;