import React, { Component } from "react";
import PropTypes from "prop-types";
import ChartWithDescription from "./ChartWithDescription";
import defaultToolboxProperties from "../../configuration/defaultToolboxProperties";
import {getSeriesName, dataToSeries} from "../../tools/dataAssignmentUtils";

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.config = this.props.config;
        this.state = {
            option: {
                animation: {},
                tooltip: {},
                calculable: true,
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
                            },
                            magicType: this.config.magicType || {
                                show: true,
                                type: ["line", "bar", "stack", "tiled"],
                                title: {
                                    line: "liniowy",
                                    bar: "słupkowy",
                                    stack: "skumulowany",
                                    tiled: "nieskumulowany"
                                }
                            }
                        }
                    }
                },
                label: {
                    show: true,
                    rotate: this.config.labelRotation
                },
                legend: {
                    show: true,
                    orient: "horizontal",
                    left: "center",
                    data: getSeriesName(this.config.data),
                    lineHeight: 30
                },
                yAxis: [{
                    type: this.config.yAxisType,
                    scale: true,
                    data: this.config.yAxisData,
                    name: this.config.yAxisName,
                    nameRotate: this.config.yAxisNameRotate || 90,
                    nameLocation: "middle",
                    min: this.config.yAxisMin,
                    nameTextStyle: {
                        padding: this.config.yAxisPadding
                    },
                    axisLabel: {
                        rotate: this.config.yAxisCategoryRotation
                    }
                } ],
                xAxis: {
                    type: this.config.xAxisType,
                    scale: true,
                    axisTick: {
                        show: false
                    },
                    data: this.config.xAxisData,
                    name: this.config.xAxisName,
                    nameLocation: "middle",
                    nameTextStyle: {
                        padding: 15
                    },
                    axisLabel: this.config.xAxisLabel
                },
                grid: {
                    left: this.config.gridLeft || "center",
                    width: this.config.gridWidth || "60%"
                },
                series: []
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

BarChart.propTypes = {
    config: PropTypes.object.isRequired
};

export default BarChart;
