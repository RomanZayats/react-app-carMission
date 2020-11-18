import React from "react";
import {Switch, Route} from "react-router-dom"

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/"/>
            <Route exact path=""/>
            <Route path="*"/>

        </Switch>
    );
};

export default AppRoutes;