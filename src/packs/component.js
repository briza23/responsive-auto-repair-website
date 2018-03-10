import { connect } from "react-redux";
import * as Actions from "./actions/actions";
import React from "react";
import Header from "./content/header";
import Body from "./content/body";
import Footer from "./content/footer";


class Components extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

Components.propTypes = {
};

function mapStateToProps(state) {
    return state;
}

const VisibleConfigs = connect(
    mapStateToProps,
    Actions
)(Components);

export default VisibleConfigs;
