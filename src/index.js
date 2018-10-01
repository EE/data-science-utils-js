import { histogramForBarChart } from "./histogram";
import * as colors from "./colors";
import { createNumberFormatter } from "./tools/formatters";
import Article from "./components/Article";
import BarChart from "./components/charts/BarChart";
import Header from "./components/Header";
import MapChart from "./components/charts/MapChart";
import NumberWidget from "./components/NumberWidget";
import Paragraph from "./components/Paragraph";
import ScatterChart from "./components/charts/ScatterChart";

export default {
    colors,
    createNumberFormatter, histogramForBarChart,
    Article, BarChart, Header, MapChart, NumberWidget, Paragraph, ScatterChart
};
