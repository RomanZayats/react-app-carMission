import React from "react";
import "./ServicePackage.scss";
import { v4 as uuidv4 } from "uuid";

const ServicePackage = ({ name, price, currency, serviceList }) => {
  const servicesLiArr = serviceList.map((i) => <li key={uuidv4()}>{i}</li>);

  return (
    <div className="service-package">
      <div className="service-package__item-title">
        <h3 className="service-package__name">{name}</h3>
        <span className="service-package__currency">{currency}</span>
        <span className="service-package__price">{price}</span>
      </div>
      <ul className="service-package__serviceList">{servicesLiArr}</ul>
    </div>
  );
};

export default ServicePackage;
