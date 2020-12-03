import React, { memo, useEffect } from "react";
import "./AboutUs.scss";
import RegularFeature from "./components/RegularFeature/RegularFeature";
import MainFeature from "./components/MainFeature/MainFeature";
import SectionHeading from "../../components/generalComponents/SectionHeading/SectionHeading";
import { useSelector } from "react-redux";
import {
  getFeatures,
  getFeaturesIsLoading,
} from "../../store/aboutUs/selectors";
import Loader from "../../components/Loader/Loader";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";
import { pushHashToHistory } from "../../utils/functions/pushHashToHistory";

const AboutUs = ({ heading, anchorName }) => {
  const featuresList = useSelector(getFeatures);
  const isLoading = useSelector(getFeaturesIsLoading);
  const { ref, inView } = useInView({ threshold: 0.75 });
  const history = useHistory();

  useEffect(() => {
    if (inView) {
      pushHashToHistory(history, anchorName);
    }
  }, [inView, anchorName, history]);

  const featuresRender = () => {
    const regularFeaturesArr = featuresList.filter((f) => !f.isMain);
    const mainFeatureArr = featuresList.filter((f) => f.isMain);

    const regularFeaturesToRender = regularFeaturesArr.map((regularFeature) => {
      const { imgPath, title, _id: id } = regularFeature;
      return (
        <RegularFeature
          className="about-us__feature-box"
          imgPath={imgPath}
          title={title}
          key={id}
        />
      );
    });

    const mainFeatureToRender = mainFeatureArr.map((mainFeature) => {
      const { imgPath, title, text, _id: id } = mainFeature;
      return (
        <MainFeature
          className="about-us__main-feature-box"
          imgPath={imgPath}
          title={title}
          text={text}
          key={id}
        />
      );
    });

    return (
      <>
        <div className="about-us__features-box">{regularFeaturesToRender}</div>
        {mainFeatureToRender}
      </>
    );
  };

  return (
    <section className="about-us__container" id={anchorName} ref={ref}>
      <SectionHeading className="about-us__heading" text={heading} />
      {isLoading ? <Loader /> : featuresRender(featuresList)}
    </section>
  );
};

export default memo(AboutUs);
