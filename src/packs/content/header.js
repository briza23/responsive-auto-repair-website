import React from "react"; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as Actions from "../actions/actions";

class Header extends React.Component {
    
    render() {
        const { header, router } = this.props
        const { company_name, pages } = header;
        const { location } = router;

        const nav_pages = pages.map((page, i) =>{
            const {link, name, id} = page
            return (
                <li key={id} className={location.pathname === link ? "active": ""}><a href={link}>{name}</a></li>
            );
        });;
        return (
            <div>
                <div className="header">
                    <nav className="navbar navbar-inverse sticky">
                        <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                            </button>
                            <a href={"/"}>
                                <span className="navbar-brand">{company_name}</span>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                {nav_pages}                                
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                            <li><a><span className="fa fa-user"></span> Sign Up</a></li>
                            <li><a><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
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
