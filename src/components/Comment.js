import React from "react";
import PropTypes from "prop-types";

const Comment = props => (
    <div className="text-box">
        <h3 className="text-box__title text-box__title--comment">{props.comment.title}</h3>
        <h4 className="text-box__subtitle">{props.comment.subtitle}</h4>
        <p className="text-box__text" dangerouslySetInnerHTML={{__html: props.comment.text}}></p>
    </div>
);


Comment.propTypes = {
    comment: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        text: PropTypes.object.string
    }).isRequired
};

export default Comment;
