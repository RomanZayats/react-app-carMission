import React, { useEffect } from "react";
import "./WorkStages.scss";
import WorkStagesList from "../WorkStagesList/WorkStagesList";
import Button from "../../../components/generalComponents/Button/Button";
import SectionHeading from "../../../components/generalComponents/SectionHeading/SectionHeading";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showFeedbackFormAction } from "../../../store/FeedbackForm/actions";
import { useInView } from "react-intersection-observer";
import { pushHashToHistory } from "../../../utils/functions/pushHashToHistory";

const WorkStages = ({ description, heading, anchorName }) => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({ threshold: 0.5 });
  const history = useHistory();

  useEffect(() => {
    if (inView) {
      pushHashToHistory(history, anchorName);
    }
  }, [inView, anchorName, history]);

  const showFeedbackModal = () => {
    dispatch(showFeedbackFormAction);
  };

  return (
    <section id={anchorName} className="work-stages" ref={ref}>
      <div className="work-stages__content">
        <SectionHeading text={heading} />
        <div className="work-stages__items-wrapper">
          <WorkStagesList />
        </div>
        <p className="work-stages__description">{description}</p>
        <Button
          text="Обратный звонок"
          className="button-callback-bigger"
          onClick={showFeedbackModal}
        />
      </div>
    </section>
  );
};

WorkStages.propTypes = {
  description: PropTypes.string,
  heading: PropTypes.string,
  anchorName: PropTypes.string,
};

export default WorkStages;
