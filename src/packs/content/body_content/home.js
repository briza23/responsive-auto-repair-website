import React from "react"; // eslint-disable-line no-unused-vars
import { connect } from "react-redux";
import * as Actions from "../../actions/actions";
import TopPage from "./home_content/top_page";

class Home extends React.Component {
    
    render() {
        return (
            <div>
                <TopPage />
            </div>
        );
    }
}


Home.propTypes = {
};

function mapStateToProps(state) {
    return state;
}

const VisibleHome = connect(
    mapStateToProps,
    Actions
)(Home);

export default VisibleHome;
