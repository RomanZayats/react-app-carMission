import React from "react";
import PropTypes from "prop-types";
import "./VehicleCard.scss";
import fuel from "../../../theme/images/VehicleCard-icons/fuel.png";
import transmission from "../../../theme/images/VehicleCard-icons/Gearbox.png";
import year from "../../../theme/images/VehicleCard-icons/year.png";
import speed from "../../../theme/images/VehicleCard-icons/speed.png";
import auction from "../../../theme/images/VehicleCard-icons/auction.png";

const VehicleCard = ({title, src, fuelText, transmissionText, yearNumber, speedText, priceValue, auctionDate, page}) => {
    return (
        <div className="card__wrapper">
            <h3 className="card__title">{title}</h3>
            <div className="card__img-wrapper">
                <img className="card__img" src={car} alt=" "/>
            </div>
            <div className="card__info-wrapper">
                <div className="card__fuel">
                    <img className="card__fuel-img" src={fuel} alt=" "/>
                    <p className="card__info-text">{fuelText}</p>
                </div>
                <div className="card__transmission">
                    <img className="card__transmission-img" src={transmission} alt=" "/>
                    <p className="card__info-text">{transmissionText}</p>
                </div>
                {page === "/catalog-in-stock" && <div className="card__year">
                    <img className="card__year-img" src={year} alt=" "/>
                    <p className="card__info-text">{yearNumber}</p>
                </div>}
                {page !== "/catalog-in-stock" && <div className="card__auction">
                    <img className="card__auction-img" src={auction} alt=" "/>
                    <p className="card__info-text">{auctionDate}</p>
                </div>}

                <div className="card__speed">
                    <img className="card__speed-img" src={speed} alt=" "/>
                    <p className="card__info-text">{speedText}</p>
                </div>
            </div>
                <span className="card__line"></span>
            {page === "/catalog-in-stock" &&  <div className="card__price">
                    <p className="card__price-text">Цена :</p>
                    <p className="card__price-value">{priceValue}</p>
                </div>}

                <div className="card__details">
                    <p className= "card__details-title">Title/Sale Doc:</p>
                    <p className= "card__details-name">SALVAGE-VA</p>
                </div>
            <span className="card__line"></span>
            <div className="card__additionally-primary">
                <p className= "card__additionally-title">Primary Damage:</p>
                <p className= "card__additionally-name">Normal Wear</p>
            </div>
            <div className="card__additionally-highlits">
                <p className= "card__additionally-title">Highlits:</p>
                <p className= "card__additionally-name">Offsite Sales, Run and Drive</p>
            </div>
            <div className="card__additionally-seller">
                <p className= "card__additionally-title">Seller:</p>
                <p className= "card__additionally-name">Progressive</p>
            </div>


        </div>
    );
};

VehicleCard.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    fuelText: PropTypes.string.isRequired,
    yearNumber: PropTypes.number,
    transmissionText: PropTypes.string.isRequired,
    speedText: PropTypes.string.isRequired
};

export default VehicleCard;