import React from "react"; // eslint-disable-line no-unused-vars

const Header = (props) => {
    const { company_name, pages } = props.header;

    const nav_pages = pages.map((page, i) =>{
        return (
            <li className={i === 0 ? "active": ""}><a href="#">{page.name}</a></li>
        );
    });
    
    const content = (
        <div className="header">
            <nav className="navbar navbar-inverse sticky">
                <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                    </button>
                    <a className="navbar-brand" href="#">{company_name}</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        {nav_pages}
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="fa fa-user"></span> Sign Up</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
   return content;
};

export default Header;