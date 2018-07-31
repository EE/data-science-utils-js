import * as d3 from 'd3';

export function histogramForBarChart(data, numTicks) {
    /* returns an array of pairs: [bar middle X coordinate, bar height] */

    const ticks = d3.ticks(d3.min(data), d3.max(data), numTicks);
    const tickSize = ticks[1] - ticks[0];

    return d3.histogram()
        .thresholds(ticks)(data)
        .map(function(element, index, array) {
            /* From d3-array documentation (https://github.com/d3/d3-array):
               "The first bin.x0 is always equal to the minimum domain value, and the
               last bin.x1 is always equal to the maximum domain value."

               Therefore, we need to fix the first bucket x0 and the last bucket x1
               so that the bars don't overlap.
            */

            let x0, x1;
            if (index === 0) {
                x0 = element.x1 - tickSize;
                x1 = element.x1;
            } else if (index === array.length - 1) {
                x0 = element.x0;
                x1 = element.x0 + tickSize;
            } else {
                x0 = element.x0;
                x1 = element.x1;
            }
            const result = [(x0 + x1) / 2, element.length];
            return result;
        });
}
