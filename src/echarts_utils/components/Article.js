import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

class Article extends Component {
    constructor(props) {
        super(props);
        this.config = this.props.config;
    }

    render() {
        return (
            <article className="article-wrapper">
                <div className="chart-wrapper">
                    { typeof this.config !== "undefined" && this.config.comment !== null &&
                        <Comment comment={this.config.comment}/>
                    }
                    {this.props.children}
                </div>
            </article>
        );
    }
}

Article.propTypes = {
    config: PropTypes.object.isRequired,
    children: PropTypes.object
};

export default Article;
