import React, { Component } from "react";
import PropTypes from "prop-types";
import echarts from "echarts";
import ChartWithDescription from "./ChartWithDescription";
import defaultToolboxProperties from "../../configuration/defaultToolboxProperties";
import * as colors from "../../colors";

class MapChart extends Component {
    constructor(props) {
        super(props);
        this.map = this.props.map;
        this.config = this.props.config;
        this.state = {
            option: {
                visualMap: [{
                    type: "continuous",
                    hoverLink: true,
                    min: this.config.visualMap.min,
                    max: this.config.visualMap.max,
                    text: [this.config.visualMap.text.max, this.config.visualMap.text.min],
                    orient: "horizontal",
                    calculable: false,
                    padding: 30,
                    inRange: {
                        color: this.config.visualMap.colors
                    }
                }],
                animation: {},
                tooltip: {},
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
                series: []
            }
        };
    }

    componentDidMount() {
        echarts.registerMap("communities", this.map);
        const option = {
            ...this.state.option,
            series : [{
                name: this.config.series.name,
                type: "map",
                map: this.config.series.level,
                showLegendSymbol: false,
                roam: "scale",
                tooltip: {},
                aspectScale: this.config.series.aspectScale || .925,
                silent: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                markArea: {
                    label: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: colors.WHITE,
                        borderColor: colors.GRAY,
                        borderWidth: 0.5,
                        color: colors.BLACK
                    },
                    emphasis: {
                        areaColor: colors.GRAY
                    }
                },
                data: this.formatData(
                    this.config.series.data,
                    this.config.series.valueName,
                    this.config.series.tooltipFormatter,
                    this.config.series.valueEmptinessChecker)
            }]
        };
        this.setState({
            option: option
        });
    }

    formatData (data, valueName, formatter, emptinessChecker) {
        let dataFormat = data.map((element) => {

            let formatterText = formatter;
            element.value = element[valueName];

            if (emptinessChecker(element.value)) {
                formatterText = ": brak danych";
            }

            element.tooltip = {
                formatter: element.displayName + formatterText
            };

            return element;
        });

        return dataFormat;
    }

    render() {
        return (
            <ChartWithDescription title={this.config.title.text}
                option={this.state.option}
                source={this.config.source}
                height={"700px"} />
        );
    }
}

MapChart.propTypes = {
    map: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired
};

export default MapChart;
