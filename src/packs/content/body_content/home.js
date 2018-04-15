import React from "react"; // eslint-disable-line no-unused-vars
import { connect } from "react-redux";
import * as Actions from "../../actions/actions";
import TopPage from "./home_content/top_page";
import BottomPage from "./home_content/bottom_page";
import MiddlePage from "./home_content/middle_page";

class Home extends React.Component {
    render() {
        const { body } = this.props;
        return (
            <div>
                <TopPage />
                <MiddlePage body={body}/>
                <BottomPage body={body}/>
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
