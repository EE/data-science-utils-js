import React, { Component } from "react";

class Comment extends Component {
    render() {
        return (
            <div className="comment-box">
                <h3 className="comment-title">{this.props.comment.title}</h3>
                <h4 className="comment-subtitle">{this.props.comment.subtitle}</h4>
                <p className="comment-text" dangerouslySetInnerHTML={{__html: this.props.comment.text}}></p>
            </div>
        );
    }
}

export default Comment;
