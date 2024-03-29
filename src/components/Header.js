import React from "react";
import PropTypes from "prop-types";
import eeLogo from "../images/ee_logo.png";
import "../styles/index.scss";

const Header = props => (
    <header className="app-header">
        <div className="content-wrapper header-wrapper">
            <div className="header-info">
                <h1 className="app-title">{props.title}</h1>
                <p className="app-intro">{props.intro}</p>
                <div className="lab-logo-wrapper">
                    <a href="https://laboratorium.ee/en/" target="_blank" rel="noopener noreferrer"><img src={eeLogo} className="lab-logo" alt="Laboratorium EE"/></a>
                </div>
            </div>
            <div>
                <img src={props.image} className="app-image" alt={props.imageAlt}/>
            </div>
        </div>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    intro: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string
};

export default Header;
