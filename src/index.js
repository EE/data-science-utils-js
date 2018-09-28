import { histogramForBarChart } from "./histogram";
import * as colors from "./echarts_utils/colors";
import createNumberFormatter from "./echarts_utils/tools/formatters";
import Article from "./echarts_utils/components/Article";
import BarChart from "./echarts_utils/components/charts/BarChart";
import Header from "./echarts_utils/components/Header";
import MapChart from "./echarts_utils/components/charts/MapChart";
import NumberWidget from "./echarts_utils/components/NumberWidget";
import Paragraph from "./echarts_utils/components/Paragraph";
import ScatterChart from "./echarts_utils/components/charts/ScatterChart";

export default {
    colors,
    createNumberFormatter, histogramForBarChart,
    Article, BarChart, Header, MapChart, NumberWidget, Paragraph, ScatterChart
};
