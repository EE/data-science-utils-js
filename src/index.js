import { histogramForBarChart } from "./histogram";
import * as colors from "./echarts_utils/colors";
import createNumberFormatter from "./echarts_utils/tools/formatters";
import BarChart from "./echarts_utils/components/BarChart";
import MapChart from "./echarts_utils/components/MapChart";
import ScatterChart from "./echarts_utils/components/ScatterChart";
import Header from "./echarts_utils/components/Header";
import Paragraph from "./echarts_utils/components/Paragraph";

export default { histogramForBarChart, BarChart, ScatterChart, MapChart, Paragraph, Header, createNumberFormatter, colors };
