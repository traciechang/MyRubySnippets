import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./home/home";

const Root = () => (
    <HashRouter>
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    </HashRouter>
);

export default Root;