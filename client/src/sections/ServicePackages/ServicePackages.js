import React, { useState, useEffect } from "react";
import SectionHeading from "../../components/generalComponents/SectionHeading/SectionHeading";
import "./servicePackages.scss";
import Button from "../../components/generalComponents/Button/Button";
import axios from "axios";
import ServicePackage from "./components/ServicePackage";
import { showFeedbackFormAction } from "../../store/FeedbackForm/actions";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";
import { pushHashToHistory } from "../../utils/functions/pushHashToHistory";

const ServicePackages = ({ heading, anchorName, description }) => {
  const [servicePackages, setServicePackages] = useState([]);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({ threshold: 0.75 });
  const history = useHistory();

  useEffect(() => {
    if (inView) {
      pushHashToHistory(history, anchorName);
    }

    getServicePackages();
  }, [inView, anchorName, history]);

  const showFeedbackModal = () => {
    dispatch(showFeedbackFormAction);
  };

  const getServicePackages = async () => {
    const servicePackagesFromServer = await axios(
      "/api/service-packages/"
    ).then((res) => res.data);
    setServicePackages(servicePackagesFromServer);
  };

  const servicePackagesToRender = servicePackages.map((servicePackage) => {
    const { price, currency, serviceList, name, _id: id } = servicePackage;
    return (
      <ServicePackage
        className="service-packages__item"
        name={name}
        price={price}
        currency={currency}
        serviceList={serviceList}
        key={id}
      />
    );
  });

  return (
    <section className="service-packages" id={anchorName} ref={ref}>
      <SectionHeading text={heading} />
      <div className="service-packages__wrapper">{servicePackagesToRender}</div>
      <p className="service-packages__description">{description}</p>
      <Button
        className="button2-send-request"
        text="Отправить заявку"
        onClick={showFeedbackModal}
      />
    </section>
  );
};

export default ServicePackages;
