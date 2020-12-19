import React from "react";
import { Switch, Route } from "react-router-dom";
import FormContainerMainPageSections from "../components/admin/MainPageSections/FormContainer/FormContainer";
import FormContainerAboutUs from "../components/admin/AboutUs/FormContainer/FormContainerAboutUs";
import FormContainerWorkStages from "../components/admin/WorkStages/FormContainer/FormContainerWorkStages";
import Page404 from "../pages/Page404/Page404";
import AdminNavbar from "../components/admin/AdminNavbar/AdminNavbar";

const AdminRoutes = () => {
  return (
    <Switch>
      <Route exact path="/admin/" />
      <Route
        exact
        path="/admin/navbars"
        component={AdminNavbar}
      />
      <Route
        exact
        path="/admin/main-page-sections"
        component={FormContainerMainPageSections}
      />
      <Route exact path="/admin/about-us" component={FormContainerAboutUs} />
      <Route
        exact
        path="/admin/work-stages"
        component={FormContainerWorkStages}
      />
      <Route
        exact
        path="/admin/service-packages"
        component={FormContainerWorkStages}
      />
      <Route exact path="/admin/reviews" component={FormContainerWorkStages} />
      <Route exact path="/admin/blog" component={FormContainerWorkStages} />
      <Route
        exact
        path="/admin/car-catalog"
        component={FormContainerWorkStages}
      />
      <Route
        exact
        path="/admin/calculator"
        component={FormContainerWorkStages}
      />
      <Route path="*" component={Page404} />
    </Switch>
  );
};

export default AdminRoutes;
