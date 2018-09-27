import React from "react";
import PropTypes from "prop-types";

const Comment = props => (
    <div className="comment-box">
        <h3 className="comment-title">{props.comment.title}</h3>
        <h4 className="comment-subtitle">{props.comment.subtitle}</h4>
        <p className="comment-text" dangerouslySetInnerHTML={{__html: props.comment.text}}></p>
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
