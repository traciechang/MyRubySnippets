import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginContainer from "./login/login_container";
import Home from "./home/home";

const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/" component={LoginContainer}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </HashRouter>
    </Provider>
);

export default Root;