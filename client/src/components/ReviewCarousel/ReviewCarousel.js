import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ReviewCarousel.scss";
import ReviewItem from "../ReviewItem/ReviewItem";
import SectionHeading from "../generalComponents/SectionHeading/SectionHeading";


const ReviewCarousel = () => {

    return (
        <div className="carouse-wrapper">
            <SectionHeading text="Отзывы" />
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} thumbWidth="70px" tabindex={3}>

            </Carousel>
        </div>
    );
};

export default ReviewCarousel;
