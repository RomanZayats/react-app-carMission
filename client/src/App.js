import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/Loader/Loader";
import { loadLogoData } from "./store/logo/operations";
import { useDispatch, useSelector } from "react-redux";
import { getIsLogoLoading } from "./store/logo/selectors";
import { getIsNavbarLoading } from "./store/navbar/selectors";
import { loadNavbarData } from "./store/navbar/operations";
import { loadMainSection } from "./store/appMainSections/operations";
import "./theme/styles/App.scss";
import FeedbackForm from "./components/FeedbackForm/Main/FeedbackForm";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import { loadFeatures } from "./store/aboutUs/operations";
import { loadPackages } from "./store/servicePackages/operations";
import { loadWorkStages } from "./store/workStages/operations";
import { loadReviews } from "./store/ReviewCarousel/operations";
import { useLocation } from "react-router-dom";



const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(loadNavbarData());
    dispatch(loadMainSection());
    dispatch(loadLogoData());
    dispatch(loadFeatures());
    dispatch(loadPackages());
    dispatch(loadWorkStages());
    dispatch(loadReviews());
  }, [dispatch]);

  const isLogoLoading = useSelector(getIsLogoLoading);
  const isNavbarLoading = useSelector(getIsNavbarLoading);
  const isMainPage = location.pathname === "/";

  if (isNavbarLoading || isLogoLoading) {
    return (
      <div className="App">
        <Loader />
      </div>
    );
  }

  return (
    <div className="App">
        <div className={isMainPage ? "App__main-page" : "App__bg"}>
          <FeedbackForm />
          <ErrorModal />
          <AppRoutes />
        </div>
    </div>
  );
};

export default App;
