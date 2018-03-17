import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { routerMiddleware } from 'react-router-redux';
import React from "react";
import thunk from 'redux-thunk';
import VisibleComponent from "./component";
import { ConnectedRouter } from 'react-router-redux';
import DataStorage from "./reducers/reducers";
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const store = createStore(DataStorage, initialState, composedEnhancers);

export default class RootFile extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <VisibleComponent/>
                </ConnectedRouter>
            </Provider>
        );
    }
}

RootFile.propTypes = {
};
