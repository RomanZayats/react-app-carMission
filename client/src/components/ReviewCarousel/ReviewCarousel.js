import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewItem from "./ReviewItem/ReviewItem";
import SectionHeading from "../generalComponents/SectionHeading/SectionHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewCarousel.scss";
import SampleNextArrow from "./CarouselArrows/SampleNextArrow";
import SamplePrevArrow from "./CarouselArrows/SamplePrevArrow";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";
import { pushHashToHistory } from "../../utils/functions/pushHashToHistory";

const ReviewCarousel = ({ heading, anchorName }) => {
  const [reviews, setReviews] = useState([]);
  const { ref, inView } = useInView({ threshold: 0.75 });
  const history = useHistory();

  useEffect(() => {
    if (inView) {
      pushHashToHistory(history, anchorName);
    }

    getReviews();
  }, [inView, anchorName, history]);

  const getReviews = async () => {
    const reviewsDb = await axios("/api/reviews/").then((r) => r.data);
    setReviews(reviewsDb);
  };

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
    <section className="carousel__section" id={anchorName} ref={ref}>
      <SectionHeading text={heading} />
      <div className="carousel__wrapper">
        <Slider {...settings}>
          {allReviews}
          {allReviews}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewCarousel;
