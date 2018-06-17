import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Protected = ({component: Component, path, loggedIn}) => (
    <Route path={path} render={(props) => (
        !loggedIn ? (
            <Redirect to="/" />
        ) : <Component {...props}/>
    )}/>
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.currentUser)};
};

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));