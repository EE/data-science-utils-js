import React from "react";
import ReactEcharts from "echarts-for-react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import "../styles/index.scss";

const Chart = props => (
    <article className="article-wrapper">
        <div className="chart-wrapper">
            <h2 className="chart-name">{props.title}</h2>
            <ReactEcharts option={props.option}
                lazyUpdate={true}
                style={{height: props.height, width: "100%"}}/>
        </div>
        { props.comment !== null &&
            <Comment comment={props.comment}/>
        }
    </article>
);

Chart.propTypes = {
    title: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    option: PropTypes.object.isRequired,
    comment: PropTypes.string.isRequired
};

export default Chart;
