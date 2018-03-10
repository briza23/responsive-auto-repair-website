import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import React from "react";
import thunkMiddleware from "redux-thunk";
import VisibleComponent from "./component";
import DataStorage from "./reducers/reducers";

const Storage = compose(
    applyMiddleware(thunkMiddleware)
)(createStore);

export default class RootFile extends React.Component {

    componentWillMount() {
        this.store = Storage(DataStorage, {});
    }

    render() {
        return (
            <Provider store={this.store}>
                <VisibleComponent/>
            </Provider>
        );
    }
}

RootFile.propTypes = {
};
