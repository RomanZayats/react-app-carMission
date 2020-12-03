import React, { useEffect } from "react";
import "./AutoFromUSA.scss";
import Button from "../../components/generalComponents/Button/Button";
import { useDispatch } from "react-redux";
import { showFeedbackFormAction } from "../../store/FeedbackForm/actions";
import SocialNetworks from "../../components/SocialNetworks/SocialNetworks";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";
import { pushHashToHistory } from "../../utils/functions/pushHashToHistory";

const AutoFromUsa = ({ heading, description, anchorName }) => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({ threshold: 0.75 });
  const history = useHistory();

  useEffect(() => {
    if (inView) {
      pushHashToHistory(history, anchorName);
    }
  }, [inView, anchorName, history]);

  return (
    <section className="auto-from-usa__container" id={anchorName} ref={ref}>
      <div className="auto-from-usa__wrapper">
        <h1 className="auto-from-usa__heading">{heading}</h1>
        <SocialNetworks className="header__networks" />
        <p className="auto-from-usa__description">{description}</p>
        <Button
          className="button-choose-car"
          text="Подобрать авто"
          onClick={() => {
            dispatch(showFeedbackFormAction);
          }}
        />
      </div>
    </section>
  );
};
export default AutoFromUsa;
