import React from "react";
import PropTypes from "prop-types";

const Paragraph = props => (
    <div className="comment-box">
        <h2 className="comment-title paragraph-title">{props.paragraph.title}</h2>
        <p className="comment-subtitle">{props.paragraph.text}</p>
    </div>
);


Paragraph.propTypes = {
    paragraph: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
};

export default Paragraph;
