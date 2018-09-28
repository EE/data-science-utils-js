export const getSeriesName = series => {
    return series.map(series => {
        return series.name;
    });
};

export const dataToSeries = (option, series) => {
    return {
        ...option,
        series
    };
};
