import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginContainer from "./login/login_container";
import HomeContainer from "./home/home_container";
import { ProtectedRoute } from "../util/route_util";

const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <ProtectedRoute path="/home" component={HomeContainer}/>
                <Route path="/" component={LoginContainer}/>
            </Switch>
        </HashRouter>
    </Provider>
);

export default Root;