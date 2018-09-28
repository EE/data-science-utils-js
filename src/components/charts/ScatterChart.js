import React, { Component } from "react";
import PropTypes from "prop-types";
import ChartWithDescription from "./ChartWithDescription";
import defaultToolboxProperties from "../../configuration/defaultToolboxProperties";
import {getSeriesName, dataToSeries} from "../../tools/dataAssignmentUtils";

class ScatterChart extends Component {
    constructor(props) {
        super(props);
        this.config = this.props.config;
        this.state = {
            option: {
                animation: {},
                tooltip: {},
                color: this.config.color,
                toolbox: {
                    ...defaultToolboxProperties,
                    ...{
                        feature: {
                            restore: {
                                title: "odśwież"
                            },
                            saveAsImage: {
                                title: "zapisz jako\nobraz"
                            }
                        }
                    }
                },
                legend: {
                    show: true,
                    orient: "horizontal",
                    left: "center",
                    data: getSeriesName(this.config.data),
                    lineHeight: 30
                },
                xAxis: {
                    name: this.config.xAxisName,
                    nameRotate: this.config.xAxisNameRotate || 0,
                    nameLocation: "middle",
                    nameTextStyle: {
                        padding: 15
                    }
                },
                yAxis: {
                    name: this.config.yAxisName,
                    nameRotate: this.config.yAxisNameRotate || 90,
                    nameLocation: "middle",
                    nameTextStyle: {
                        padding: 45
                    }
                },
                series: [],
                grid: {
                    width: "60%",
                    left: "center"
                }
            }
        };
    }

    componentDidMount() {
        this.setState({
            option: dataToSeries(this.state.option, this.config.data)
        });
    }

    render() {
        return (
            <ChartWithDescription title={this.config.title.text}
                option={this.state.option}
                source={this.config.source}
                height={"500px"} />
        );
    }
}

ScatterChart.propTypes = {
    config: PropTypes.object.isRequired
};

export default ScatterChart;
