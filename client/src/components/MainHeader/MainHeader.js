import React, { useEffect, useState } from "react";
import "./MainHeader.scss";
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../Logo/Logo";
import { useLocation } from "react-router-dom";
import { getLogoData } from "../../store/selectors/logoSelectors";
import { getNavbarData } from "../../store/selectors/navbarSelectors";
// import { loadLogoData } from "../../store/logo/operations";
// import { loadNavbarData } from "../../store/navbar/operations";
import UseWinSize from "../../utils/hooks/UseWinSize";


const MainHeader = () => {
  // const dispatch = useDispatch();
  const logoInfo = useSelector(getLogoData);
  const navbarData = useSelector(getNavbarData);
  const { width: winWidth } = UseWinSize();
  const firstMobileSize = 640;
  const [isMobileNavbar, setIsMobileNavbar] = useState(false);

  // useEffect(() => {
  //   dispatch(loadNavbarData)
  //   dispatch(loadLogoData)

  // })

  const checkClick = (e) => {
    setIsMobileNavbar(!isMobileNavbar)
  }

  const location = useLocation();
  const sectionsLinks = navbarData.filter((e) => e.sectionId !== undefined).map((e) => {return "/" + e.sectionId}).concat("/");
  const quantOfNavbaItems = navbarData.filter((e) => !e.disabled);
  const mainPage = sectionsLinks.includes(location.pathname);
  const headerBgClassName = mainPage ? "header__bg-main" : "header__bg-minor";
  const leftSideItems = quantOfNavbaItems.length > 6 ? quantOfNavbaItems.slice(0, 5) : quantOfNavbaItems.slice(0, 3);
  const rightSideItems = quantOfNavbaItems.length > 6 ? quantOfNavbaItems.slice(5) : quantOfNavbaItems.slice(3);

  return (
    <div className={headerBgClassName}>
      <div className="header__container">
        <div className="navbar__block">
          {winWidth > firstMobileSize && <Navbar className="navbar" items={leftSideItems}/>}
          {winWidth > firstMobileSize && <Logo className="logo" src={logoInfo.path} id={logoInfo.id} alt={logoInfo.alt}/>}
          {winWidth > firstMobileSize && <Navbar className="navbar" items={rightSideItems} />}

          {winWidth <= firstMobileSize && isMobileNavbar ? <Navbar className="navbar" items={navbarData} id="navbar" mobileNavbar={true} onClick={(e) => checkClick(e)}/> : null}
          {winWidth <= firstMobileSize && !isMobileNavbar ? <button className="open-navbar" onClick={setIsMobileNavbar}></button> : null}
          {winWidth <= firstMobileSize && <Logo className="logo" src={logoInfo.path} id={logoInfo.id} alt={logoInfo.alt}/>}
        </div>
      </div>
    </div>
)
};

export default MainHeader;
