import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root"
import { fetchCurrentUser } from "../frontend/util/user_api_util";

document.addEventListener('DOMContentLoaded', () => {
    let store;

    fetchCurrentUser().then((currentUser) => {
        if (currentUser) {
            store = configureStore({ session: { currentUser } });
        } else {
            store = configureStore();
        }

        ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
    });
});