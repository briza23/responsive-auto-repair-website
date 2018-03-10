import { connect } from "react-redux";
import * as Actions from "./actions/actions";
import React from "react";

class Components extends React.Component {
    render() {
        return (
            <div>
                <p>testtt</p>
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
