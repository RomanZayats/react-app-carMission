import React from "react";
import "./ServicePackage.scss";
import { v4 as uuidv4 } from "uuid";

const ServicePackage = ({ name, price, currency, serviceList }) => {
  const servicesLiArr = serviceList.map((i) => <li key={uuidv4()}>{i}</li>);

  return (
    <div className="servicePackage">
      <div className="servicePackage__item-title">
        <h3 className="servicePackage__name">{name}</h3>
        <span className="servicePackage__currency">{currency}</span>
        <span className="servicePackage__price">{price}</span>
      </div>
      <ul className="servicePackage__serviceList">{servicesLiArr}</ul>
    </div>
  );
};

export default ServicePackage;
