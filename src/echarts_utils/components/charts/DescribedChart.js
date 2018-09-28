import React from "react";
import ReactEcharts from "echarts-for-react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

const DescribedChart = props => (
    <div className="chart">
        <ReactEcharts option={props.option}
            lazyUpdate={true}
            style={{height: props.height, width: "100%"}}/>
        <h4 className="chart__name">{props.title}</h4>
        { props.source !== null &&
            <h6 className="chart__source">{props.source}</h6>
        }
    </div>
);

DescribedChart.propTypes = {
    title: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    option: PropTypes.object.isRequired,
    source: PropTypes.string.isRequired
};

export default DescribedChart;
