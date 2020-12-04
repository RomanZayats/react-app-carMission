import React from "react";
import ReviewItem from "./ReviewItem/ReviewItem";
import SectionHeading from "../generalComponents/SectionHeading/SectionHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewCarousel.scss";
import SampleNextArrow from "./CarouselArrows/SampleNextArrow";
import SamplePrevArrow from "./CarouselArrows/SamplePrevArrow";
import { useSelector } from "react-redux";
import {
  getReviews,
  getReviewsIsLoading,
} from "../../store/ReviewCarousel/selectors";
import Loader from "../Loader/Loader";


const ReviewCarousel = ({ heading, anchorName }) => {
  const reviews = useSelector(getReviews);
  const isLoading = useSelector(getReviewsIsLoading);

    const allReviews = reviews.map((el) => (
        <ReviewItem
            reviewCard={el}
            key={el._id}
            src={el.customerPhoto}
            nameReviewer={el.customerName}
            nameCar={el.carInfo}
            review={el.reviewText}
        />
    ));

  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 898,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="carousel__section" id={anchorName}>
      <SectionHeading text={heading} />
      {isLoading ? <Loader /> : (<div className="carousel__wrapper">
        <Slider {...settings}>
          {allReviews}
          {allReviews}
        </Slider>
      </div>)}
    </div>
  );
};

export default ReviewCarousel;
