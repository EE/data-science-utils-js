import React from "react";
import PropTypes from "prop-types";

const Paragraph = props => (
    <div className="text-box">
        <h2 className="text-box__title text-box__title--paragraph">{props.paragraph.title}</h2>
        <p className="text-box__subtitle">{props.paragraph.text}</p>
    </div>
);


Paragraph.propTypes = {
    paragraph: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
};

export default Paragraph;
