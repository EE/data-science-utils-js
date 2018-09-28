import React from "react";
import PropTypes from "prop-types";

const NumberWidget = props => (
    <div className="chart">
        <div className="chart__number">{props.config.number}</div>
        <div className="chart__big-text">{props.config.bigText}</div>
        <h4 className="chart__name">{props.config.title}</h4>
        { props.config.source !== null &&
            <h6 className="chart__source">{props.config.source}</h6>
        }
    </div>
);


NumberWidget.propTypes = {
    config: PropTypes.shape({
        title: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired,
        source: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired
    }).isRequired
};

export default NumberWidget;
