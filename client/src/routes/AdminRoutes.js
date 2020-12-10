import React from "react";
import { Switch, Route } from "react-router-dom";
import FormContainerMainPageSections from "../components/admin/MainPageSections/FormContainer/FormContainer";
import FormContainerAboutUs from "../components/admin/AboutUs/FormContainer/FormContainerAboutUs";
import FormContainerWorkStages from "../components/admin/WorkStages/FormContainer/FormContainerWorkStages";

const AdminRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        to="/admin/main-page-sections"
        component={FormContainerMainPageSections}
      />
      <Route exact to="/admin/about-us" component={FormContainerAboutUs} />
      <Route
        exact
        to="/admin/work-stages"
        component={FormContainerWorkStages}
      />
    </Switch>
  );
};

export default AdminRoutes;
