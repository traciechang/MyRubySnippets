import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root"
import { fetchCurrentUser } from "../frontend/util/user_api_util";

document.addEventListener('DOMContentLoaded', () => {
    let store;

    // if cookie.curentuser
        // preload
    // else
        // GET /current_user
        // confgurestore
    // end

    fetchCurrentUser().then((response) => {
        console.log('response', response);
    });

    if (window.currentUser) {
        const preloadedState = {
            session: { currentUser: window.currentUser }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
    // ReactDOM.render(<Root store={configureStore()}/>, document.getElementById('root'));
});