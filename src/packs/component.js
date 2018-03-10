import { connect } from "react-redux";
import * as Actions from "./actions/actions";
import React from "react";
import Header from "./content/header";
import Body from "./content/body";
import Footer from "./content/footer";


const header_data = {
    "company_name": "Briza's Auto Deals",
    "pages": [{"name": "Home", "id": "home"},
              {"name": "Services", "id": "services"},
              {"name": "About Us", "id": "about_us"},
              {"name": "Contact Us", "id": "contact_us"}]
}

class Components extends React.Component {
    render() {
        return (
            <div>
                <Header header={header_data}/>
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
