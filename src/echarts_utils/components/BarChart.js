import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import defaultToolboxProperties from "../configuration/defaultToolboxProperties";
import "../styles/index.scss";

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
                            magicType: {
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
                    data: this.getSeriesName(this.config.data),
                    lineHeight: 30
                },
                yAxis: [{
                    type: this.config.yAxisType,
                    scale: true,
                    data: this.config.yAxisData,
                    name: this.config.yAxisName,
                    nameRotate: this.config.yAxisNameRotate || 90,
                    nameLocation: "middle",
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
                    }
                },
                grid: {
                    left: this.config.gridLeft || "center",
                    width: this.config.gridWidth || "60%"
                },
                series: []
            }
        };
    }

    getSeriesName(series) {
        return series.map((series) => {
            return series.name;
        });
    }

    componentDidMount() {
        const option = {
            ...this.state.option,
            series: this.config.data
        };

        this.setState({
            option: option
        });
    }

    render() {
        return (
            <article className="article-wrapper">
                <div className="chart-wrapper">
                    <h2 className="chart-name">{this.config.title.text}</h2>
                    <ReactEcharts option={this.state.option}
                        lazyUpdate={true}
                        style={{height: "500px", width: "100%"}}/>
                </div>
                <Comment comment={this.config.comment}/>
            </article>
        );
    }
}

BarChart.propTypes = {
    config: PropTypes.object.isRequired
};

export default BarChart;
