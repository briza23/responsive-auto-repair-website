import React from "react"; // eslint-disable-line no-unused-vars
import { connect } from "react-redux";
import * as Actions from "../actions/actions";
import FooterDetails from "../content/footer_content/footer_details"

class Footer extends React.Component {
    
    render() {
        const { body } = this.props;
        return (
            <div>
                <FooterDetails body={body}/>
                <div className="footer">
                    <div className="footer-fixed">
                        <p>© 2018 Briza's Auto Deals. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        );
    }
}


Footer.propTypes = {
};

function mapStateToProps(state) {
    return state;
}

const VisibleFooter = connect(
    mapStateToProps,
    Actions
)(Footer);

export default VisibleFooter;
