import React from "react"; // eslint-disable-line no-unused-vars
import { connect } from "react-redux";
import * as Actions from "../actions/actions";
class Header extends React.Component {
    
    render() {
        const { header, router } = this.props
        const { pages, open_hours, contact_number } = header;
        const { location } = router;

        const nav_pages = pages.map((page, i) =>{
            const {link, name, id} = page
            return (
                <li key={id} className={location.pathname === link ? "active": ""}><a href={id} id={id}>{name}</a></li>
            );
        });;
        return (
            <div>
                <div className="header">
                    <nav className="navbar navbar-inverse sticky">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="col-sm-6 col-xs-6">
                                            <a className="logo-padding" href={"/"}>
                                                <img className="" alt="property_logo" width="181px" src={"company_logo.png"} />
                                            </a>
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                            <div className="navbar-header">
                                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>                        
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-7 col-sm-12 col-xs-12">
                                            <div className="collapse navbar-collapse" id="myNavbar">
                                                <ul className="nav navbar-nav">
                                                    {nav_pages}                                
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-5 openHours">
                                            <ul className="nav navbar-nav navbar-right nav-padding">
                                                <li className="text-right">
                                                    <p><i className="fa fa-clock-o primary_blue_color" aria-hidden="true"></i><span className="header-color"> {open_hours.day} <span className="primary_blue_color"> {open_hours.time} </span></span></p>
                                                    <p><i className="fa fa-phone primary_blue_color" aria-hidden="true"></i><span className="header-color"> {contact_number} </span></p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}


Header.propTypes = {
};

function mapStateToProps(state) {
    return state;
}

const VisibleHeader = connect(
    mapStateToProps,
    Actions
)(Header);

export default VisibleHeader;
