import React from "react";
import "./MainHeader.scss";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import { useLocation } from "react-router-dom";
import { getLogoData } from "../../store/selectors/logoSelectors";
import { getNavbarData } from "../../store/selectors/navbarSelectors";


const MainHeader = () => {
  // const dispatch = useDispatch();
  const logoInfo = useSelector(getLogoData);
  const navbarData = useSelector(getNavbarData);

  const location = useLocation();
  const sectionsLinks = navbarData.filter((e) => e.sectionId !== undefined).map((e) => {return "/" + e.sectionId}).concat("/");
  const quantOfNavbaItems = navbarData.filter((e) => !e.disabled);
  const mainPage = sectionsLinks.includes(location.pathname);
  const navbarBgClassName = mainPage ? "navbar__bg-main" : "navbar__bg-minor";
  const leftSideItems = quantOfNavbaItems.length > 6 ? quantOfNavbaItems.slice(0, 5) : quantOfNavbaItems.slice(0, 3);
  const rightSideItems = quantOfNavbaItems.length > 6 ? quantOfNavbaItems.slice(5) : quantOfNavbaItems.slice(3);

  return (
    <div className={navbarBgClassName}>
      <div className="navbar__container">
        <div className="navbar__block" id="navbar">
          <Navbar className="navbar" items={leftSideItems}/>
          <Logo className="logo" src={logoInfo.path} id={logoInfo.id} alt={logoInfo.alt}/>
          <Navbar className="navbar" items={rightSideItems} />
        </div>
      </div>
    </div>
)
};

export default MainHeader;
