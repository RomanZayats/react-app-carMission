import React, { memo } from "react";
import "./RegularFeature.scss";
import PropTypes from "prop-types";
import Image from "../../../../components/Image/Image";

const RegularFeature = (props) => {
  const { className, title, imgPath } = props;

  return (
    <div className={className}>
      <Image
        data-testid="regularFeature-img"
        src={imgPath}
        alt="feature-icon"
      />
      <p data-testid="regularFeature-title">{title}</p>
    </div>
  );
};

RegularFeature.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

RegularFeature.defaultProps = {
  altText: "featureImage",
};

export default memo(RegularFeature);
