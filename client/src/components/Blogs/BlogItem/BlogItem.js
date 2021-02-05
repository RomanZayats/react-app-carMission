import React from "react";
import PropTypes from "prop-types";
import "./BlogItem.scss";
import Image from "../../Image/Image";

const BlogItem = ({ src, title, text, fullText, buttonText, date, onClick }) => {
  const correctDate = new Date(+date);

  const correctNums = (day) => {
    let num = day ? correctDate.getDate() : correctDate.getMonth() + 1;
    if(num < 10) {
      num = "0" + num;
    }
    return num
  }
  const dateDDMMYYY = correctNums(true) + "." + correctNums() + "." + correctDate.getFullYear();

  return (
    <div className="blog-item__wrapper">
      <div className="blog-item__img-block">
        <Image src={src} alt="photo" className="blog-item__img"/>
      </div>
      <div className="blog-item__info">
        <h5 className="blog-item__title">{title}</h5>
        <p data-testid="blog-item__text" className="blog-item__text">{text}</p>
        <div className="blog-item__additionally">
          <button data-testid="btn" className="blog-item__btn" onClick={onClick}>{buttonText}</button>
          <p className="blog-item__date">{dateDDMMYYY}</p>
        </div>
      </div>

    </div>
  );
};

export default BlogItem;
BlogItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};